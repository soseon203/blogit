/**
 * 학원 시즌 추천 API
 *
 * GET /api/academy/seasonal?type=entrance:수학      → 특정 과목의 이번 달 시즌 추천
 * GET /api/academy/seasonal?month=3                 → 특정 월 전체 시즌 캘린더
 * GET /api/academy/seasonal?type=entrance:수학&year=true → 특정 과목 연간 시즌 맵
 */

import { NextResponse } from 'next/server'
import {
  getSeasonalRecommendation,
  getMonthlyCalendar,
  getYearlySeasonMap,
  getSeasonalHighlights,
} from '@/lib/academy/seasonal-engine'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const academyType = searchParams.get('type')
    const monthParam = searchParams.get('month')
    const yearView = searchParams.get('year')

    // 특정 과목의 연간 시즌 맵
    if (academyType && yearView) {
      const seasonMap = getYearlySeasonMap(academyType)
      const entries = [...seasonMap.entries()].map(([month, topic]) => ({
        month,
        topic: topic.topic,
        keywords: topic.keywords,
        urgency: topic.urgency,
      }))
      return NextResponse.json({ academyType, yearlySeasons: entries })
    }

    // 특정 과목의 이번 달 추천
    if (academyType) {
      const month = monthParam ? parseInt(monthParam) : undefined
      const rec = getSeasonalRecommendation(academyType, month)
      if (!rec) {
        return NextResponse.json({ academyType, recommendation: null, message: '해당 월에 시즌 데이터가 없습니다.' })
      }
      return NextResponse.json({ academyType, recommendation: rec })
    }

    // 전체 시즌 캘린더 (특정 월)
    const month = monthParam ? parseInt(monthParam) : undefined
    const calendar = getMonthlyCalendar(month)
    const highlights = getSeasonalHighlights(month)

    return NextResponse.json({
      calendar,
      highlights,
    })
  } catch (error) {
    return NextResponse.json(
      { error: '시즌 데이터 조회 실패', detail: error instanceof Error ? error.message : '' },
      { status: 500 }
    )
  }
}
