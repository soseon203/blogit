/**
 * 학원 시즌 추천 엔진
 *
 * 학원 지식 DB의 seasonalTopics를 기반으로
 * 현재 월에 맞는 추천 주제·키워드·블로그 토픽을 제공합니다.
 *
 * 사용처:
 * - 콘텐츠 생성 페이지: "이달의 추천 주제" 섹션
 * - 콘텐츠 캘린더: 월별 추천 주제 오버레이
 * - 대시보드: 시즌 알림 카드
 */

import { ALL_ACADEMY_DATA, getAcademyKnowledge } from '@/lib/academy'
import type { AcademySubjectKnowledge, SeasonalTopic, BlogTopicIdea } from '@/lib/academy/types'

// ===== 타입 =====

export interface SeasonalRecommendation {
  academyType: string           // 'entrance:수학'
  academyName: string           // '수학학원'
  category: string              // 'entrance'
  topic: string                 // '새 학기 선행반 모집 / 겨울방학 특강'
  keywords: string[]            // ['겨울방학 수학', '새학기 선행', ...]
  urgency: 'high' | 'medium' | 'low'
  blogTopics: BlogTopicIdea[]   // 관련 블로그 주제 아이디어
  titlePatterns: string[]       // SEO 제목 패턴
  tags: string[]                // 추천 태그
}

export interface MonthlyCalendarData {
  month: number
  year: number
  recommendations: SeasonalRecommendation[]
  highUrgencyCount: number
  topKeywords: string[]         // 이번 달 상위 키워드
}

// ===== 핵심 함수 =====

/**
 * 특정 학원 과목의 현재 월 시즌 추천을 가져옵니다.
 */
export function getSeasonalRecommendation(
  academyType: string,
  month?: number
): SeasonalRecommendation | null {
  const currentMonth = month ?? new Date().getMonth() + 1 // 1-12

  const academy = getAcademyKnowledge(academyType)
  if (!academy) return null

  // 현재 월에 해당하는 시즌 토픽 찾기
  const matchingTopic = academy.seasonalTopics.find(t =>
    t.months.includes(currentMonth)
  )

  if (!matchingTopic) return null

  // 관련 블로그 주제 중 현재 시즌에 맞는 것 필터링
  const relevantTopics = academy.blogTopics.filter(bt =>
    matchingTopic.keywords.some(kw =>
      bt.title.includes(kw.split(' ')[0]) || bt.keywords.some(k => kw.includes(k))
    )
  ).slice(0, 3)

  // 매칭 안 되면 전체에서 상위 3개
  const blogTopics = relevantTopics.length > 0
    ? relevantTopics
    : academy.blogTopics.slice(0, 3)

  return {
    academyType: academy.id,
    academyName: academy.displayName,
    category: academy.category,
    topic: matchingTopic.topic,
    keywords: matchingTopic.keywords,
    urgency: matchingTopic.urgency,
    blogTopics,
    titlePatterns: academy.titlePatterns.slice(0, 3),
    tags: academy.tagRecommendations.slice(0, 5),
  }
}

/**
 * 특정 월의 전체 학원 시즌 캘린더 데이터를 가져옵니다.
 */
export function getMonthlyCalendar(
  month?: number,
  year?: number
): MonthlyCalendarData {
  const now = new Date()
  const targetMonth = month ?? now.getMonth() + 1
  const targetYear = year ?? now.getFullYear()

  const recommendations: SeasonalRecommendation[] = []

  for (const academy of ALL_ACADEMY_DATA) {
    const rec = getSeasonalRecommendation(academy.id, targetMonth)
    if (rec) {
      recommendations.push(rec)
    }
  }

  // 긴급도별 정렬 (high → medium → low)
  const urgencyOrder = { high: 0, medium: 1, low: 2 }
  recommendations.sort((a, b) => urgencyOrder[a.urgency] - urgencyOrder[b.urgency])

  // 상위 키워드 추출
  const allKeywords = recommendations.flatMap(r => r.keywords)
  const keywordCounts = new Map<string, number>()
  allKeywords.forEach(kw => keywordCounts.set(kw, (keywordCounts.get(kw) || 0) + 1))
  const topKeywords = [...keywordCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([kw]) => kw)

  return {
    month: targetMonth,
    year: targetYear,
    recommendations,
    highUrgencyCount: recommendations.filter(r => r.urgency === 'high').length,
    topKeywords,
  }
}

/**
 * 선택된 학원 과목에 대해 전체 12개월 시즌 요약을 반환합니다.
 * (캘린더 페이지에서 월별 시즌 표시에 사용)
 */
export function getYearlySeasonMap(
  academyType: string
): Map<number, SeasonalTopic> {
  const academy = getAcademyKnowledge(academyType)
  if (!academy) return new Map()

  const map = new Map<number, SeasonalTopic>()
  for (const topic of academy.seasonalTopics) {
    for (const month of topic.months) {
      // 같은 월에 여러 시즌이 있으면 urgency 높은 것 우선
      const existing = map.get(month)
      if (!existing || urgencyValue(topic.urgency) > urgencyValue(existing.urgency)) {
        map.set(month, topic)
      }
    }
  }
  return map
}

function urgencyValue(u: 'high' | 'medium' | 'low'): number {
  return u === 'high' ? 3 : u === 'medium' ? 2 : 1
}

/**
 * 카테고리별 이번 달 하이라이트 (대시보드 카드용)
 */
export function getSeasonalHighlights(month?: number): {
  category: string
  categoryName: string
  count: number
  topTopic: string
  urgency: 'high' | 'medium' | 'low'
}[] {
  const calendar = getMonthlyCalendar(month)

  const categoryMap = new Map<string, SeasonalRecommendation[]>()
  calendar.recommendations.forEach(r => {
    const list = categoryMap.get(r.category) || []
    list.push(r)
    categoryMap.set(r.category, list)
  })

  const CATEGORY_NAMES: Record<string, string> = {
    entrance: '입시·보습',
    arts: '예체능',
    language: '어학',
    special: '특수/기타',
  }

  return [...categoryMap.entries()].map(([cat, recs]) => {
    const highRec = recs.find(r => r.urgency === 'high') || recs[0]
    return {
      category: cat,
      categoryName: CATEGORY_NAMES[cat] || cat,
      count: recs.length,
      topTopic: highRec.topic,
      urgency: highRec.urgency,
    }
  })
}

// ===== 월 이름 유틸 =====

export const MONTH_NAMES_KO = [
  '1월', '2월', '3월', '4월', '5월', '6월',
  '7월', '8월', '9월', '10월', '11월', '12월',
]

export function getMonthName(month: number): string {
  return MONTH_NAMES_KO[month - 1] || `${month}월`
}

export function getUrgencyLabel(urgency: 'high' | 'medium' | 'low'): string {
  return urgency === 'high' ? '🔥 핵심 시즌' : urgency === 'medium' ? '📌 주목' : '💡 참고'
}

export function getUrgencyColor(urgency: 'high' | 'medium' | 'low'): string {
  return urgency === 'high'
    ? 'bg-red-100 text-red-700 border-red-200'
    : urgency === 'medium'
      ? 'bg-amber-100 text-amber-700 border-amber-200'
      : 'bg-blue-100 text-blue-700 border-blue-200'
}
