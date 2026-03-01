/**
 * 학원 키워드 실시간 데이터 수집 API
 *
 * GET /api/academy/keywords?type=entrance:수학
 *   → 캐시/라이브/기본 데이터 순으로 키워드 데이터 반환
 *
 * POST /api/academy/keywords  { academyType: 'entrance:수학' }
 *   → 강제 라이브 수집 후 캐시 갱신
 */

import { NextResponse } from 'next/server'
import {
  getNaverKeywordData,
  collectNaverLiveData,
  cacheKeywordData,
  BASELINE_KEYWORD_DATA,
  SEED_QUERIES,
  generateLocationKeywords,
} from '@/lib/academy/naver-data-collector'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const academyType = searchParams.get('type')

    if (!academyType) {
      // 전체 과목 목록 반환
      return NextResponse.json({
        academyTypes: Object.keys(SEED_QUERIES),
        totalTypes: Object.keys(SEED_QUERIES).length,
        baselineAvailable: Object.keys(BASELINE_KEYWORD_DATA).length,
      })
    }

    // 키워드 데이터 조회 (캐시 → 라이브 → 기본)
    const result = await getNaverKeywordData(academyType)

    // 지역 키워드 패턴도 함께 반환
    const locationKeywords = generateLocationKeywords(academyType)

    return NextResponse.json({
      academyType,
      source: result.source,
      keywordCount: result.data.length,
      keywords: result.data,
      locationKeywords: locationKeywords.slice(0, 10),
    })
  } catch (error) {
    return NextResponse.json(
      { error: '키워드 데이터 조회 실패', detail: error instanceof Error ? error.message : '' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const { academyType } = await request.json()

    if (!academyType || !SEED_QUERIES[academyType]) {
      return NextResponse.json(
        { error: '유효하지 않은 학원 유형입니다.', validTypes: Object.keys(SEED_QUERIES) },
        { status: 400 }
      )
    }

    // 강제 라이브 수집
    const liveData = await collectNaverLiveData(academyType)

    if (liveData.length > 0) {
      // 캐시 저장
      await cacheKeywordData(academyType, liveData)
      return NextResponse.json({
        success: true,
        academyType,
        source: 'live',
        keywordCount: liveData.length,
        keywords: liveData,
      })
    }

    // 라이브 수집 실패 → 기본 데이터 반환
    const baseline = BASELINE_KEYWORD_DATA[academyType] || []
    return NextResponse.json({
      success: false,
      message: '네이버 API 키가 설정되지 않아 기본 데이터를 반환합니다.',
      academyType,
      source: 'baseline',
      keywordCount: baseline.length,
      keywords: baseline,
    })
  } catch (error) {
    return NextResponse.json(
      { error: '키워드 수집 실패', detail: error instanceof Error ? error.message : '' },
      { status: 500 }
    )
  }
}
