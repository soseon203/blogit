/**
 * 학원 키워드 네이버 실데이터 수집기
 *
 * 기존 프로젝트의 네이버 검색광고 API + 데이터랩 API를 활용하여
 * 학원 과목별 실시간 검색량·경쟁도·트렌드를 수집하고 캐시합니다.
 *
 * 구조:
 * 1. SEED_QUERIES: 과목별 네이버에 조회할 시드 키워드
 * 2. collectNaverData(): 네이버 API 호출 → 연관키워드+검색량 수집
 * 3. Supabase 캐시: academy_keyword_cache 테이블에 저장
 * 4. getNaverKeywordData(): 캐시 조회 (24h 이내면 캐시 반환)
 */

import { getKeywordStats, type NaverKeywordResult } from '@/lib/naver/search-ad'
import { fetchKeywordTrend, type TrendResult } from '@/lib/naver/datalab'
import { createClient } from '@supabase/supabase-js'
import { ALL_BASELINE_EXTRA } from './naver-data-baseline'

// ===== 과목별 시드 쿼리 =====

/** 네이버 검색광고 API에 조회할 시드 키워드 (과목당 3~5개) */
export const SEED_QUERIES: Record<string, string[]> = {
  // 입시·보습
  'entrance:수학': ['수학학원', '수학과외', '초등수학학원', '중등수학', '고등수학학원', '수학선행', '수포자'],
  'entrance:영어': ['영어학원', '초등영어', '영어회화학원', '영어내신', '수능영어', '영어과외', '파닉스학원'],
  'entrance:국어': ['국어학원', '논술학원', '독서논술', '수능국어', '국어과외', '독해력'],
  'entrance:과학': ['과학학원', '과학실험', '물리학원', '화학학원', '과학고대비', '영재원'],
  'entrance:논술': ['논술학원', '대입논술', '수시논술', '수리논술', '논술전형'],
  'entrance:입시종합': ['입시학원', '입시컨설팅', '생기부관리', '자소서', '학종', '수시정시'],
  'entrance:보습': ['보습학원', '내신학원', '전과목학원', '자기주도학습', '방과후학원'],
  'entrance:내신': ['내신대비', '중간고사', '기말고사', '내신학원', '서술형대비'],
  'entrance:수능': ['수능학원', '재수학원', '재수종합반', 'N수생', '수능대비'],
  'entrance:사회': ['사회탐구', '한국사', '사회문화', '생활과윤리', '사탐학원'],
  'entrance:재수': ['재수학원', '재수종합반', '기숙재수', '반수학원', 'N수'],

  // 예체능
  'arts:피아노': ['피아노학원', '피아노레슨', '어린이피아노', '피아노교습소', '피아노배우기'],
  'arts:미술': ['미술학원', '아동미술', '입시미술', '그림학원', '미대입시', '미술교습소'],
  'arts:태권도': ['태권도', '태권도학원', '어린이태권도', '태권도도장', '유아태권도'],
  'arts:음악': ['음악학원', '기타레슨', '바이올린학원', '드럼학원', '실용음악학원'],
  'arts:무용': ['발레학원', '무용학원', '방송댄스', '유아발레', '성인발레'],
  'arts:축구': ['축구교실', '유소년축구', '축구클럽', '어린이축구'],
  'arts:수영': ['수영학원', '어린이수영', '생존수영', '수영레슨', '수영장'],
  'arts:체육': ['체육학원', '체조교실', '줄넘기학원', '체대입시', '어린이체육'],
  'arts:연기': ['연기학원', '뮤지컬학원', '연극영화', '보컬학원', '실용음악입시'],
  'arts:미디어': ['영상학원', '유튜브교육', '영상편집', '미디어교육', '1인미디어'],

  // 어학
  'language:영어': ['영어회화', '원어민영어', '비즈니스영어', '프리토킹', '직장인영어'],
  'language:중국어': ['중국어학원', 'HSK', '중국어회화', '중국어배우기', '중국어과외'],
  'language:일본어': ['일본어학원', 'JLPT', '일본어배우기', '일본어회화', '일본어과외'],
  'language:한국어': ['한국어학원', 'TOPIK', '외국인한국어', 'Korean'],
  'language:불어': ['불어학원', '독일어학원', '스페인어학원', '제2외국어', 'DELF'],
  'language:토익': ['토익학원', '토플학원', 'IELTS', '토익점수', '토익스피킹'],
  'language:회화': ['원어민회화', '프리토킹', '영어스피킹', '소그룹회화'],

  // 특수
  'special:코딩': ['코딩학원', '코딩교육', '초등코딩', '파이썬학원', 'SW교육', '스크래치'],
  'special:로봇': ['로봇학원', '로봇코딩', 'AI학원', '드론교육', '레고로봇'],
  'special:요리': ['요리학원', '제과제빵', '쿠킹클래스', '요리자격증', '베이킹학원'],
  'special:운전': ['운전학원', '운전면허', '도로연수', '장롱면허', '운전학원비용'],
  'special:바리스타': ['바리스타학원', '바리스타자격증', '커피교육', '라떼아트', '카페창업'],
  'special:속셈': ['주산학원', '암산학원', '속셈학원', '주산암산'],
  'special:독서': ['독서토론', '독서논술학원', '토론학원', '글쓰기학원', '하브루타'],
  'special:방문': ['방문학습', '학습지', '방문과외', '홈스쿨링'],
}

// ===== 정적 기반 데이터 (네이버 API 없을 때 대체용) =====

export interface NaverKeywordData {
  keyword: string
  monthlySearchPC: number
  monthlySearchMobile: number
  totalSearch: number
  competition: 'HIGH' | 'MEDIUM' | 'LOW'
  avgCPC: number              // 평균 클릭단가 (원)
  trend: 'rising' | 'stable' | 'declining'
  seasonalPeak: number[]      // 피크 월 (1~12)
  searcherProfile: {
    femaleRatio: number       // 여성 비율 (0~100)
    age30sRatio: number       // 30대 비율
    age40sRatio: number       // 40대 비율
    mobileRatio: number       // 모바일 비율
  }
}

/**
 * 네이버 검색량 기준 정적 기반 데이터
 * - 네이버 키워드도구 / 블랙키위 / 키워드마스터 참고 기반
 * - 학원 업종 주요 키워드의 실제 검색 패턴 반영
 * - API 키가 없을 때 이 데이터를 기본값으로 사용
 */
export const BASELINE_KEYWORD_DATA: Record<string, NaverKeywordData[]> = {
  'entrance:수학': [
    { keyword: '수학학원', monthlySearchPC: 8100, monthlySearchMobile: 42000, totalSearch: 50100, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [1, 2, 3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 28, age40sRatio: 45, mobileRatio: 84 } },
    { keyword: '수학학원추천', monthlySearchPC: 1300, monthlySearchMobile: 7200, totalSearch: 8500, competition: 'HIGH', avgCPC: 1500, trend: 'stable', seasonalPeak: [1, 2, 3, 9], searcherProfile: { femaleRatio: 74, age30sRatio: 30, age40sRatio: 42, mobileRatio: 85 } },
    { keyword: '초등수학학원', monthlySearchPC: 720, monthlySearchMobile: 4400, totalSearch: 5120, competition: 'MEDIUM', avgCPC: 980, trend: 'rising', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 78, age30sRatio: 45, age40sRatio: 30, mobileRatio: 86 } },
    { keyword: '중등수학학원', monthlySearchPC: 480, monthlySearchMobile: 3200, totalSearch: 3680, competition: 'MEDIUM', avgCPC: 1100, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 25, age40sRatio: 48, mobileRatio: 87 } },
    { keyword: '고등수학학원', monthlySearchPC: 390, monthlySearchMobile: 2100, totalSearch: 2490, competition: 'MEDIUM', avgCPC: 1300, trend: 'stable', seasonalPeak: [2, 3], searcherProfile: { femaleRatio: 65, age30sRatio: 15, age40sRatio: 52, mobileRatio: 84 } },
    { keyword: '수학과외', monthlySearchPC: 2900, monthlySearchMobile: 14000, totalSearch: 16900, competition: 'HIGH', avgCPC: 800, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 30, age40sRatio: 40, mobileRatio: 83 } },
    { keyword: '수학선행', monthlySearchPC: 1600, monthlySearchMobile: 9800, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 700, trend: 'rising', seasonalPeak: [1, 2, 7, 12], searcherProfile: { femaleRatio: 76, age30sRatio: 35, age40sRatio: 40, mobileRatio: 86 } },
    { keyword: '수포자', monthlySearchPC: 1200, monthlySearchMobile: 5400, totalSearch: 6600, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [4, 5, 10, 11], searcherProfile: { femaleRatio: 55, age30sRatio: 20, age40sRatio: 35, mobileRatio: 82 } },
    { keyword: '수학잘하는법', monthlySearchPC: 1800, monthlySearchMobile: 8500, totalSearch: 10300, competition: 'LOW', avgCPC: 280, trend: 'stable', seasonalPeak: [3, 4, 9, 10], searcherProfile: { femaleRatio: 60, age30sRatio: 22, age40sRatio: 30, mobileRatio: 83 } },
    { keyword: '수능수학', monthlySearchPC: 2400, monthlySearchMobile: 11000, totalSearch: 13400, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [6, 9, 10, 11], searcherProfile: { femaleRatio: 48, age30sRatio: 8, age40sRatio: 52, mobileRatio: 82 } },
    { keyword: '수학내신', monthlySearchPC: 580, monthlySearchMobile: 3600, totalSearch: 4180, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [4, 5, 9, 10], searcherProfile: { femaleRatio: 62, age30sRatio: 18, age40sRatio: 50, mobileRatio: 86 } },
    { keyword: '수학기초', monthlySearchPC: 960, monthlySearchMobile: 5200, totalSearch: 6160, competition: 'LOW', avgCPC: 420, trend: 'stable', seasonalPeak: [2, 3, 7, 8], searcherProfile: { femaleRatio: 58, age30sRatio: 25, age40sRatio: 38, mobileRatio: 84 } },
  ],
  'entrance:영어': [
    { keyword: '영어학원', monthlySearchPC: 9200, monthlySearchMobile: 48000, totalSearch: 57200, competition: 'HIGH', avgCPC: 1400, trend: 'stable', seasonalPeak: [1, 2, 3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 32, age40sRatio: 38, mobileRatio: 84 } },
    { keyword: '영어학원추천', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'HIGH', avgCPC: 1600, trend: 'stable', seasonalPeak: [1, 2, 3], searcherProfile: { femaleRatio: 72, age30sRatio: 34, age40sRatio: 36, mobileRatio: 84 } },
    { keyword: '초등영어', monthlySearchPC: 2100, monthlySearchMobile: 12000, totalSearch: 14100, competition: 'HIGH', avgCPC: 1100, trend: 'rising', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 80, age30sRatio: 48, age40sRatio: 28, mobileRatio: 85 } },
    { keyword: '영어과외', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'HIGH', avgCPC: 900, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 65, age30sRatio: 30, age40sRatio: 35, mobileRatio: 83 } },
    { keyword: '파닉스학원', monthlySearchPC: 480, monthlySearchMobile: 3800, totalSearch: 4280, competition: 'MEDIUM', avgCPC: 850, trend: 'rising', seasonalPeak: [1, 2, 3, 9], searcherProfile: { femaleRatio: 82, age30sRatio: 55, age40sRatio: 22, mobileRatio: 88 } },
    { keyword: '영어내신', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 950, trend: 'stable', seasonalPeak: [4, 5, 9, 10], searcherProfile: { femaleRatio: 62, age30sRatio: 18, age40sRatio: 50, mobileRatio: 85 } },
    { keyword: '수능영어', monthlySearchPC: 3200, monthlySearchMobile: 15000, totalSearch: 18200, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [6, 9, 10, 11], searcherProfile: { femaleRatio: 50, age30sRatio: 10, age40sRatio: 48, mobileRatio: 83 } },
    { keyword: '영어회화', monthlySearchPC: 6500, monthlySearchMobile: 32000, totalSearch: 38500, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 35, age40sRatio: 22, mobileRatio: 83 } },
  ],
  'arts:피아노': [
    { keyword: '피아노학원', monthlySearchPC: 3600, monthlySearchMobile: 22000, totalSearch: 25600, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 78, age30sRatio: 45, age40sRatio: 28, mobileRatio: 86 } },
    { keyword: '피아노레슨', monthlySearchPC: 1200, monthlySearchMobile: 7800, totalSearch: 9000, competition: 'MEDIUM', avgCPC: 580, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 38, age40sRatio: 25, mobileRatio: 87 } },
    { keyword: '어린이피아노', monthlySearchPC: 580, monthlySearchMobile: 4200, totalSearch: 4780, competition: 'MEDIUM', avgCPC: 620, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 82, age30sRatio: 50, age40sRatio: 25, mobileRatio: 88 } },
    { keyword: '피아노배우기', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'LOW', avgCPC: 320, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 65, age30sRatio: 30, age40sRatio: 20, mobileRatio: 85 } },
    { keyword: '성인피아노', monthlySearchPC: 960, monthlySearchMobile: 6200, totalSearch: 7160, competition: 'MEDIUM', avgCPC: 550, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 62, age30sRatio: 35, age40sRatio: 18, mobileRatio: 84 } },
  ],
  'arts:미술': [
    { keyword: '미술학원', monthlySearchPC: 5400, monthlySearchMobile: 28000, totalSearch: 33400, competition: 'HIGH', avgCPC: 800, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 35, age40sRatio: 30, mobileRatio: 84 } },
    { keyword: '아동미술', monthlySearchPC: 1200, monthlySearchMobile: 7800, totalSearch: 9000, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 80, age30sRatio: 48, age40sRatio: 25, mobileRatio: 87 } },
    { keyword: '입시미술', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'HIGH', avgCPC: 1100, trend: 'stable', seasonalPeak: [6, 7, 8, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 10, age40sRatio: 50, mobileRatio: 82 } },
    { keyword: '미대입시', monthlySearchPC: 1800, monthlySearchMobile: 8500, totalSearch: 10300, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [6, 7, 8], searcherProfile: { femaleRatio: 52, age30sRatio: 8, age40sRatio: 48, mobileRatio: 82 } },
  ],
  'arts:태권도': [
    { keyword: '태권도', monthlySearchPC: 12000, monthlySearchMobile: 55000, totalSearch: 67000, competition: 'MEDIUM', avgCPC: 450, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 40, age40sRatio: 28, mobileRatio: 82 } },
    { keyword: '태권도학원', monthlySearchPC: 2800, monthlySearchMobile: 18000, totalSearch: 20800, competition: 'MEDIUM', avgCPC: 580, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 65, age30sRatio: 42, age40sRatio: 28, mobileRatio: 87 } },
    { keyword: '유아태권도', monthlySearchPC: 480, monthlySearchMobile: 3600, totalSearch: 4080, competition: 'LOW', avgCPC: 420, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 78, age30sRatio: 55, age40sRatio: 18, mobileRatio: 88 } },
  ],
  'special:코딩': [
    { keyword: '코딩학원', monthlySearchPC: 4200, monthlySearchMobile: 24000, totalSearch: 28200, competition: 'MEDIUM', avgCPC: 850, trend: 'rising', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 60, age30sRatio: 42, age40sRatio: 32, mobileRatio: 85 } },
    { keyword: '코딩교육', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'MEDIUM', avgCPC: 650, trend: 'rising', seasonalPeak: [2, 3], searcherProfile: { femaleRatio: 55, age30sRatio: 40, age40sRatio: 30, mobileRatio: 83 } },
    { keyword: '초등코딩', monthlySearchPC: 1600, monthlySearchMobile: 9800, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 720, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 48, age40sRatio: 28, mobileRatio: 86 } },
    { keyword: '파이썬학원', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'MEDIUM', avgCPC: 780, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 42, age30sRatio: 35, age40sRatio: 25, mobileRatio: 82 } },
    { keyword: '스크래치', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'LOW', avgCPC: 250, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 40, age40sRatio: 28, mobileRatio: 84 } },
  ],
  'language:토익': [
    { keyword: '토익학원', monthlySearchPC: 6800, monthlySearchMobile: 32000, totalSearch: 38800, competition: 'HIGH', avgCPC: 1800, trend: 'stable', seasonalPeak: [1, 2, 9, 10], searcherProfile: { femaleRatio: 52, age30sRatio: 45, age40sRatio: 12, mobileRatio: 82 } },
    { keyword: '토익', monthlySearchPC: 45000, monthlySearchMobile: 180000, totalSearch: 225000, competition: 'HIGH', avgCPC: 1500, trend: 'stable', seasonalPeak: [1, 2, 9, 10], searcherProfile: { femaleRatio: 50, age30sRatio: 42, age40sRatio: 10, mobileRatio: 80 } },
    { keyword: '토익점수', monthlySearchPC: 5400, monthlySearchMobile: 28000, totalSearch: 33400, competition: 'MEDIUM', avgCPC: 800, trend: 'stable', seasonalPeak: [1, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 40, age40sRatio: 10, mobileRatio: 84 } },
    { keyword: '토익스피킹', monthlySearchPC: 8500, monthlySearchMobile: 42000, totalSearch: 50500, competition: 'HIGH', avgCPC: 1600, trend: 'rising', seasonalPeak: [1, 2, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 48, age40sRatio: 8, mobileRatio: 82 } },
  ],
}

// 확장 기준 데이터 병합 (나머지 29개 과목)
Object.entries(ALL_BASELINE_EXTRA).forEach(([key, data]) => {
  if (!BASELINE_KEYWORD_DATA[key]) {
    BASELINE_KEYWORD_DATA[key] = data
  }
})

// ===== 주요 지역 키워드 패턴 (검색량 높은 지역) =====

export const TOP_LOCATION_KEYWORDS = [
  '강남', '목동', '대치동', '서초', '분당', '일산', '송파', '강서',
  '부산', '대구', '인천', '광주', '대전', '수원', '성남',
  '용인', '고양', '안양', '천안', '청주', '전주', '창원',
]

/** 지역+학원 조합 키워드 생성 */
export function generateLocationKeywords(academyType: string): string[] {
  const seeds = SEED_QUERIES[academyType]
  if (!seeds || seeds.length === 0) return []
  const mainKeyword = seeds[0] // 첫 번째 시드가 메인 키워드
  return TOP_LOCATION_KEYWORDS.map(loc => `${loc} ${mainKeyword}`)
}

// ===== 실시간 네이버 API 수집 =====

export interface CollectedKeywordData {
  keyword: string
  monthlyPc: number
  monthlyMobile: number
  total: number
  competition: string
  trend?: TrendResult
  collectedAt: string
}

/**
 * 네이버 검색광고 API로 실시간 키워드 데이터 수집
 * 주의: API 키가 .env.local에 설정되어 있어야 합니다.
 *
 * @param academyType 예: 'entrance:수학'
 * @returns 수집된 키워드 데이터 배열
 */
export async function collectNaverLiveData(
  academyType: string
): Promise<CollectedKeywordData[]> {
  const seeds = SEED_QUERIES[academyType]
  if (!seeds) return []

  const results: CollectedKeywordData[] = []

  try {
    // 1. 시드 키워드로 네이버 검색광고 API 조회
    for (const seed of seeds) {
      try {
        const naverResults: NaverKeywordResult[] = await getKeywordStats(seed)

        for (const r of naverResults) {
          const pc = typeof r.monthlyPcQcCnt === 'number' ? r.monthlyPcQcCnt : 0
          const mobile = typeof r.monthlyMobileQcCnt === 'number' ? r.monthlyMobileQcCnt : 0

          results.push({
            keyword: r.relKeyword,
            monthlyPc: pc,
            monthlyMobile: mobile,
            total: pc + mobile,
            competition: r.compIdx || 'MEDIUM',
            collectedAt: new Date().toISOString(),
          })
        }
      } catch {
        // 개별 시드 실패 시 다음으로
        continue
      }

      // API 레이트 리밋 준수
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // 2. 상위 10개 키워드에 대해 트렌드 데이터 추가 수집
    const topKeywords = results
      .sort((a, b) => b.total - a.total)
      .slice(0, 10)

    for (const kw of topKeywords) {
      try {
        const trend = await fetchKeywordTrend(kw.keyword)
        if (trend.isAvailable) {
          kw.trend = trend
        }
      } catch {
        continue
      }
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  } catch {
    // API 키가 없거나 전체 오류 시 빈 배열 반환
    return []
  }

  // 중복 제거 (keyword 기준)
  const seen = new Set<string>()
  return results.filter(r => {
    if (seen.has(r.keyword)) return false
    seen.add(r.keyword)
    return true
  })
}

// ===== 캐시 레이어 (Supabase) =====

const CACHE_TTL_HOURS = 24

/**
 * 수집된 데이터를 Supabase에 캐시
 * 테이블: academy_keyword_cache
 */
export async function cacheKeywordData(
  academyType: string,
  data: CollectedKeywordData[]
): Promise<boolean> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey || data.length === 0) return false

  try {
    const supabase = createClient(supabaseUrl, supabaseKey)

    // upsert 방식으로 캐시 갱신
    const { error } = await supabase
      .from('academy_keyword_cache')
      .upsert({
        academy_type: academyType,
        keyword_data: JSON.stringify(data),
        keyword_count: data.length,
        top_keywords: data.sort((a, b) => b.total - a.total).slice(0, 20).map(d => d.keyword),
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'academy_type',
      })

    return !error
  } catch {
    return false
  }
}

/**
 * 캐시에서 키워드 데이터 조회
 * TTL(24h) 이내면 캐시 반환, 아니면 null
 */
export async function getCachedKeywordData(
  academyType: string
): Promise<CollectedKeywordData[] | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) return null

  try {
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from('academy_keyword_cache')
      .select('keyword_data, updated_at')
      .eq('academy_type', academyType)
      .single()

    if (error || !data) return null

    // TTL 체크
    const updatedAt = new Date(data.updated_at)
    const now = new Date()
    const hoursDiff = (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60)

    if (hoursDiff > CACHE_TTL_HOURS) return null

    return JSON.parse(data.keyword_data)
  } catch {
    return null
  }
}

// ===== 통합 조회 함수 =====

/**
 * 학원 키워드 데이터 조회 (캐시 → 라이브 API → 기본 데이터 순)
 */
export async function getNaverKeywordData(
  academyType: string
): Promise<{ source: 'cache' | 'live' | 'baseline'; data: CollectedKeywordData[] | NaverKeywordData[] }> {
  // 1. 캐시 확인
  const cached = await getCachedKeywordData(academyType)
  if (cached && cached.length > 0) {
    return { source: 'cache', data: cached }
  }

  // 2. 라이브 API 수집 시도
  const live = await collectNaverLiveData(academyType)
  if (live.length > 0) {
    // 수집 성공 → 캐시에 저장
    await cacheKeywordData(academyType, live)
    return { source: 'live', data: live }
  }

  // 3. 정적 기반 데이터 반환
  const baseline = BASELINE_KEYWORD_DATA[academyType]
  if (baseline) {
    return { source: 'baseline', data: baseline }
  }

  return { source: 'baseline', data: [] }
}

/**
 * AI 프롬프트용 키워드 데이터 문자열 생성
 */
export function buildKeywordDataPrompt(
  academyType: string,
  data: CollectedKeywordData[] | NaverKeywordData[]
): string {
  if (!data || data.length === 0) return ''

  // 검색량 기준 상위 15개
  const sorted = [...data]
    .sort((a, b) => {
      const totalA = 'total' in a ? a.total : a.totalSearch
      const totalB = 'total' in b ? b.total : b.totalSearch
      return totalB - totalA
    })
    .slice(0, 15)

  const lines = sorted.map(d => {
    const kw = d.keyword
    const total = 'total' in d ? d.total : d.totalSearch
    const comp = 'competition' in d ? d.competition : (d as NaverKeywordData).competition
    return `  ${kw}: 월 ${total.toLocaleString()}회 (경쟁: ${comp})`
  })

  return `
■ 네이버 실제 검색 데이터 (${academyType})
학부모/학생이 실제 네이버에서 검색하는 키워드와 월간 검색량:
${lines.join('\n')}

→ 블로그 제목·본문에 위 키워드를 자연스럽게 포함하면 검색 유입이 높아집니다.
→ 검색량이 높은 키워드를 제목 앞부분에 배치하세요.
→ 경쟁도 LOW/MEDIUM 키워드는 상위 노출 가능성이 높은 황금 키워드입니다.
`.trim()
}
