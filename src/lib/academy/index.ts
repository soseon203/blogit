/**
 * 학원 전문 지식 DB - 메인 인덱스
 *
 * 36개 학원 과목의 전문 정보를 체계적으로 관리합니다.
 * - 4개 대분류: 입시·보습(10), 예체능(10), 어학(7), 특수/기타(8)
 * - 각 과목별: 키워드, 커리큘럼, 블로그 주제, 시즌 캘린더, SEO 가이드 등
 */

export * from './types'

import type { AcademySubjectKnowledge, AcademyCategory, SeasonalTopic, BlogTopicIdea } from './types'
import { ENTRANCE_ACADEMY_DATA } from './data-entrance'
import { ARTS_ACADEMY_DATA } from './data-arts'
import { LANGUAGE_ACADEMY_DATA } from './data-language'
import { SPECIAL_ACADEMY_DATA } from './data-special'

/** 전체 학원 지식 DB */
export const ALL_ACADEMY_DATA: AcademySubjectKnowledge[] = [
  ...ENTRANCE_ACADEMY_DATA,
  ...ARTS_ACADEMY_DATA,
  ...LANGUAGE_ACADEMY_DATA,
  ...SPECIAL_ACADEMY_DATA,
]

/** ID로 학원 지식 조회 (예: 'entrance:수학') */
export function getAcademyKnowledge(id: string): AcademySubjectKnowledge | null {
  return ALL_ACADEMY_DATA.find(a => a.id === id) || null
}

/** 카테고리로 학원 목록 조회 */
export function getAcademyByCategory(category: AcademyCategory): AcademySubjectKnowledge[] {
  return ALL_ACADEMY_DATA.filter(a => a.category === category)
}

/** academyType 문자열('entrance:수학')에서 지식 조회 */
export function resolveAcademyType(academyType: string): AcademySubjectKnowledge | null {
  if (!academyType || !academyType.includes(':')) return null
  const [, subject] = academyType.split(':')
  if (!subject) return null
  return ALL_ACADEMY_DATA.find(a => a.id === academyType) || null
}

/** 현재 월에 해당하는 시즌 주제 조회 */
export function getCurrentSeasonalTopics(
  academyType: string,
  month?: number
): SeasonalTopic[] {
  const knowledge = resolveAcademyType(academyType)
  if (!knowledge) return []
  const currentMonth = month || new Date().getMonth() + 1
  return knowledge.seasonalTopics.filter(t => t.months.includes(currentMonth))
}

/** AI 콘텐츠 생성용 전문가 프롬프트 생성 */
export function buildAcademyPromptContext(academyType: string): string {
  const knowledge = resolveAcademyType(academyType)
  if (!knowledge) return ''

  const currentMonth = new Date().getMonth() + 1
  const seasonalTopics = knowledge.seasonalTopics
    .filter(t => t.months.includes(currentMonth))
    .map(t => `• ${t.topic} (키워드: ${t.keywords.join(', ')})`)

  return `
[학원 전문 지식 - ${knowledge.displayName}]

■ 학원 유형: ${knowledge.displayName}
${knowledge.description}

■ 핵심 키워드 (학부모 실제 검색어):
${knowledge.coreKeywords.join(', ')}

■ 롱테일 키워드:
${knowledge.longTailKeywords.slice(0, 8).join(', ')}

■ 주요 커리큘럼/프로그램:
${knowledge.curriculum.map(c => `• ${c}`).join('\n')}

■ 타겟 수강생:
${knowledge.targetAudience.map(t => `• ${t}`).join('\n')}

■ 학부모 주요 관심사/고민:
${knowledge.parentConcerns.map(c => `• ${c}`).join('\n')}

■ 학원 차별화 포인트 (강조 가능):
${knowledge.sellingPoints.map(s => `• ${s}`).join('\n')}

■ 업계 전문 용어 (자연스럽게 활용):
${knowledge.industryTerms.join(', ')}

■ 효과적 제목 패턴:
${knowledge.titlePatterns.join('\n')}

■ 추천 태그:
${knowledge.tagRecommendations.join(' ')}

■ 권장 콘텐츠 톤:
${knowledge.contentTone}

■ 성과 지표 (신뢰도 향상 수단):
${knowledge.successMetrics.join(', ')}

${seasonalTopics.length > 0 ? `■ 현재 시즌 추천 주제 (${currentMonth}월):\n${seasonalTopics.join('\n')}` : ''}

■ 경쟁 유형 (비교 콘텐츠 활용):
${knowledge.competitorTypes.join(', ')}
`.trim()
}

/** 블로그 주제 추천 (academyType + 옵션 type 필터) */
export function suggestBlogTopics(
  academyType: string,
  options?: { type?: BlogTopicIdea['type']; limit?: number }
): BlogTopicIdea[] {
  const knowledge = resolveAcademyType(academyType)
  if (!knowledge) return []

  let topics = knowledge.blogTopics
  if (options?.type) {
    topics = topics.filter(t => t.type === options.type)
  }
  return topics.slice(0, options?.limit || 10)
}

/** 키워드 추천 (학원 유형 기반) */
export function suggestKeywords(
  academyType: string,
  location?: string
): { core: string[]; longTail: string[]; location: string[] } {
  const knowledge = resolveAcademyType(academyType)
  if (!knowledge) return { core: [], longTail: [], location: [] }

  const locationKeywords = location
    ? knowledge.locationKeywordPatterns.map(p => p.replace('{지역}', location))
    : []

  return {
    core: knowledge.coreKeywords,
    longTail: knowledge.longTailKeywords,
    location: locationKeywords,
  }
}
