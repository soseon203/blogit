/**
 * 학원 전문 지식 DB 타입 정의
 */

/** 학원 업종 대분류 */
export type AcademyCategory = 'entrance' | 'arts' | 'language' | 'special'

export const ACADEMY_CATEGORY_NAMES: Record<AcademyCategory, string> = {
  entrance: '입시·보습',
  arts: '예체능',
  language: '어학',
  special: '특수/기타',
}

/** 블로그 주제 아이디어 */
export interface BlogTopicIdea {
  title: string        // 주제 제목
  description: string  // 간단 설명
  keywords: string[]   // 관련 키워드
  season?: string      // 적합 시기 (예: '3-4월', '연중')
  type: 'intro' | 'review' | 'tips' | 'info' | 'event' | 'comparison' | 'result'
}

/** 시즌별 마케팅 캘린더 */
export interface SeasonalTopic {
  months: number[]     // 해당 월 (1~12)
  topic: string        // 시즌 주제
  keywords: string[]   // 시즌 키워드
  urgency: 'high' | 'medium' | 'low'
}

/** 학원 과목별 전문 지식 */
export interface AcademySubjectKnowledge {
  // 기본 정보
  id: string                      // 예: 'entrance:수학'
  category: AcademyCategory
  subject: string                 // 예: '수학'
  displayName: string             // 예: '수학학원'
  description: string             // 학원 유형 설명

  // 키워드 데이터
  coreKeywords: string[]          // 핵심 검색 키워드 (학부모가 실제 검색)
  longTailKeywords: string[]      // 롱테일 키워드
  locationKeywordPatterns: string[] // 지역 키워드 패턴 (예: '{지역} 수학학원')
  negativeKeywords: string[]      // 회피 키워드

  // 콘텐츠 전문 정보
  curriculum: string[]            // 주요 커리큘럼/프로그램
  targetAudience: string[]        // 타겟 학생층
  parentConcerns: string[]        // 학부모 주요 관심사/고민
  sellingPoints: string[]         // 일반적 차별화 포인트
  industryTerms: string[]         // 업계 전문 용어
  competitorTypes: string[]       // 경쟁 유형 (대형 프랜차이즈, 개인, 과외 등)

  // 블로그 주제
  blogTopics: BlogTopicIdea[]
  seasonalTopics: SeasonalTopic[]

  // SEO 가이드
  titlePatterns: string[]         // 효과적 제목 패턴
  tagRecommendations: string[]    // 추천 태그
  contentTone: string             // 권장 톤앤매너

  // 성과 지표
  successMetrics: string[]        // 학원 성과 지표 (합격률, 성적향상 등)
}
