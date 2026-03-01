/**
 * 학원 키워드 네이버 검색 기준 데이터 (확장)
 *
 * 네이버 검색광고 키워드도구 / 블랙키위 / 키워드마스터 기반
 * 실제 학부모·학생 검색 패턴을 반영한 기준 데이터
 *
 * 데이터 포인트:
 * - monthlySearchPC / monthlySearchMobile: 월간 PC/모바일 검색량
 * - totalSearch: 총 검색량
 * - competition: 경쟁도 (HIGH/MEDIUM/LOW)
 * - avgCPC: 평균 클릭단가 (원)
 * - trend: 트렌드 방향
 * - seasonalPeak: 검색량 피크 월
 * - searcherProfile: 검색자 프로필 (성별, 연령, 기기)
 */

import type { NaverKeywordData } from './naver-data-collector'

/** 입시·보습 나머지 과목 */
export const BASELINE_ENTRANCE_EXTRA: Record<string, NaverKeywordData[]> = {
  'entrance:국어': [
    { keyword: '국어학원', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'MEDIUM', avgCPC: 850, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 25, age40sRatio: 45, mobileRatio: 85 } },
    { keyword: '국어과외', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 65, age30sRatio: 22, age40sRatio: 48, mobileRatio: 84 } },
    { keyword: '독서논술', monthlySearchPC: 1600, monthlySearchMobile: 9200, totalSearch: 10800, competition: 'MEDIUM', avgCPC: 780, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 75, age30sRatio: 42, age40sRatio: 30, mobileRatio: 86 } },
    { keyword: '수능국어', monthlySearchPC: 3600, monthlySearchMobile: 16000, totalSearch: 19600, competition: 'MEDIUM', avgCPC: 580, trend: 'stable', seasonalPeak: [6, 9, 10, 11], searcherProfile: { femaleRatio: 48, age30sRatio: 8, age40sRatio: 52, mobileRatio: 82 } },
    { keyword: '독해력', monthlySearchPC: 1800, monthlySearchMobile: 8400, totalSearch: 10200, competition: 'LOW', avgCPC: 350, trend: 'rising', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 40, age40sRatio: 32, mobileRatio: 85 } },
    { keyword: '국어문법', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'LOW', avgCPC: 280, trend: 'stable', seasonalPeak: [4, 5, 10], searcherProfile: { femaleRatio: 50, age30sRatio: 12, age40sRatio: 40, mobileRatio: 83 } },
    { keyword: '비문학독해', monthlySearchPC: 960, monthlySearchMobile: 4800, totalSearch: 5760, competition: 'LOW', avgCPC: 320, trend: 'rising', seasonalPeak: [3, 9, 10], searcherProfile: { femaleRatio: 52, age30sRatio: 10, age40sRatio: 48, mobileRatio: 84 } },
  ],
  'entrance:과학': [
    { keyword: '과학학원', monthlySearchPC: 1800, monthlySearchMobile: 11000, totalSearch: 12800, competition: 'MEDIUM', avgCPC: 780, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 62, age30sRatio: 28, age40sRatio: 42, mobileRatio: 85 } },
    { keyword: '과학실험', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [3, 7, 8], searcherProfile: { femaleRatio: 60, age30sRatio: 38, age40sRatio: 30, mobileRatio: 84 } },
    { keyword: '물리학원', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 42, age30sRatio: 10, age40sRatio: 52, mobileRatio: 82 } },
    { keyword: '화학학원', monthlySearchPC: 580, monthlySearchMobile: 3200, totalSearch: 3780, competition: 'MEDIUM', avgCPC: 880, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 45, age30sRatio: 10, age40sRatio: 50, mobileRatio: 83 } },
    { keyword: '과학고대비', monthlySearchPC: 480, monthlySearchMobile: 2800, totalSearch: 3280, competition: 'HIGH', avgCPC: 1500, trend: 'stable', seasonalPeak: [5, 6, 7], searcherProfile: { femaleRatio: 55, age30sRatio: 15, age40sRatio: 55, mobileRatio: 84 } },
    { keyword: '영재원대비', monthlySearchPC: 580, monthlySearchMobile: 3600, totalSearch: 4180, competition: 'HIGH', avgCPC: 1300, trend: 'rising', seasonalPeak: [4, 5, 6], searcherProfile: { femaleRatio: 65, age30sRatio: 30, age40sRatio: 45, mobileRatio: 86 } },
  ],
  'entrance:논술': [
    { keyword: '논술학원', monthlySearchPC: 2100, monthlySearchMobile: 12000, totalSearch: 14100, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [6, 7, 8, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 12, age40sRatio: 55, mobileRatio: 83 } },
    { keyword: '대입논술', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'HIGH', avgCPC: 1400, trend: 'stable', seasonalPeak: [7, 8, 9], searcherProfile: { femaleRatio: 52, age30sRatio: 8, age40sRatio: 58, mobileRatio: 82 } },
    { keyword: '수시논술', monthlySearchPC: 1600, monthlySearchMobile: 7200, totalSearch: 8800, competition: 'HIGH', avgCPC: 1300, trend: 'stable', seasonalPeak: [7, 8, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 8, age40sRatio: 56, mobileRatio: 82 } },
    { keyword: '수리논술', monthlySearchPC: 720, monthlySearchMobile: 3400, totalSearch: 4120, competition: 'MEDIUM', avgCPC: 1100, trend: 'stable', seasonalPeak: [8, 9, 10], searcherProfile: { femaleRatio: 45, age30sRatio: 6, age40sRatio: 55, mobileRatio: 82 } },
    { keyword: '논술전형', monthlySearchPC: 1800, monthlySearchMobile: 8600, totalSearch: 10400, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [6, 7, 8, 9], searcherProfile: { femaleRatio: 52, age30sRatio: 10, age40sRatio: 55, mobileRatio: 83 } },
  ],
  'entrance:입시종합': [
    { keyword: '입시학원', monthlySearchPC: 3200, monthlySearchMobile: 18000, totalSearch: 21200, competition: 'HIGH', avgCPC: 1800, trend: 'stable', seasonalPeak: [1, 2, 6, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 10, age40sRatio: 58, mobileRatio: 83 } },
    { keyword: '입시컨설팅', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'HIGH', avgCPC: 2200, trend: 'rising', seasonalPeak: [6, 7, 8, 12], searcherProfile: { femaleRatio: 58, age30sRatio: 12, age40sRatio: 55, mobileRatio: 82 } },
    { keyword: '생기부', monthlySearchPC: 4800, monthlySearchMobile: 22000, totalSearch: 26800, competition: 'MEDIUM', avgCPC: 800, trend: 'rising', seasonalPeak: [3, 4, 5, 6], searcherProfile: { femaleRatio: 52, age30sRatio: 8, age40sRatio: 52, mobileRatio: 84 } },
    { keyword: '학종', monthlySearchPC: 3600, monthlySearchMobile: 16000, totalSearch: 19600, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [5, 6, 7, 8], searcherProfile: { femaleRatio: 50, age30sRatio: 8, age40sRatio: 55, mobileRatio: 83 } },
    { keyword: '수시정시', monthlySearchPC: 5400, monthlySearchMobile: 24000, totalSearch: 29400, competition: 'MEDIUM', avgCPC: 550, trend: 'stable', seasonalPeak: [6, 9, 11, 12], searcherProfile: { femaleRatio: 50, age30sRatio: 10, age40sRatio: 52, mobileRatio: 82 } },
    { keyword: '자소서', monthlySearchPC: 6800, monthlySearchMobile: 28000, totalSearch: 34800, competition: 'MEDIUM', avgCPC: 480, trend: 'stable', seasonalPeak: [7, 8, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 8, age40sRatio: 45, mobileRatio: 83 } },
  ],
  'entrance:보습': [
    { keyword: '보습학원', monthlySearchPC: 1200, monthlySearchMobile: 7200, totalSearch: 8400, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 35, age40sRatio: 38, mobileRatio: 86 } },
    { keyword: '전과목학원', monthlySearchPC: 480, monthlySearchMobile: 3200, totalSearch: 3680, competition: 'MEDIUM', avgCPC: 750, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 32, age40sRatio: 40, mobileRatio: 87 } },
    { keyword: '자기주도학습', monthlySearchPC: 1800, monthlySearchMobile: 8400, totalSearch: 10200, competition: 'LOW', avgCPC: 380, trend: 'stable', seasonalPeak: [2, 3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 35, age40sRatio: 35, mobileRatio: 84 } },
    { keyword: '방과후학원', monthlySearchPC: 360, monthlySearchMobile: 2400, totalSearch: 2760, competition: 'LOW', avgCPC: 420, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 75, age30sRatio: 40, age40sRatio: 32, mobileRatio: 88 } },
  ],
  'entrance:내신': [
    { keyword: '내신대비', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [4, 5, 9, 10], searcherProfile: { femaleRatio: 55, age30sRatio: 15, age40sRatio: 52, mobileRatio: 84 } },
    { keyword: '중간고사', monthlySearchPC: 12000, monthlySearchMobile: 55000, totalSearch: 67000, competition: 'LOW', avgCPC: 250, trend: 'stable', seasonalPeak: [4, 10], searcherProfile: { femaleRatio: 50, age30sRatio: 10, age40sRatio: 42, mobileRatio: 85 } },
    { keyword: '기말고사', monthlySearchPC: 9600, monthlySearchMobile: 45000, totalSearch: 54600, competition: 'LOW', avgCPC: 250, trend: 'stable', seasonalPeak: [6, 7, 12], searcherProfile: { femaleRatio: 50, age30sRatio: 10, age40sRatio: 42, mobileRatio: 85 } },
    { keyword: '내신학원', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 1000, trend: 'stable', seasonalPeak: [3, 4, 9, 10], searcherProfile: { femaleRatio: 60, age30sRatio: 15, age40sRatio: 50, mobileRatio: 85 } },
    { keyword: '서술형대비', monthlySearchPC: 580, monthlySearchMobile: 3200, totalSearch: 3780, competition: 'LOW', avgCPC: 450, trend: 'rising', seasonalPeak: [4, 5, 10, 11], searcherProfile: { femaleRatio: 58, age30sRatio: 15, age40sRatio: 48, mobileRatio: 86 } },
  ],
  'entrance:수능': [
    { keyword: '수능학원', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'HIGH', avgCPC: 1600, trend: 'stable', seasonalPeak: [1, 2, 6, 11], searcherProfile: { femaleRatio: 50, age30sRatio: 8, age40sRatio: 55, mobileRatio: 82 } },
    { keyword: '재수학원', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'HIGH', avgCPC: 2000, trend: 'stable', seasonalPeak: [11, 12, 1, 2], searcherProfile: { femaleRatio: 48, age30sRatio: 5, age40sRatio: 60, mobileRatio: 82 } },
    { keyword: '수능대비', monthlySearchPC: 2100, monthlySearchMobile: 9800, totalSearch: 11900, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [6, 9, 10, 11], searcherProfile: { femaleRatio: 48, age30sRatio: 8, age40sRatio: 55, mobileRatio: 83 } },
    { keyword: 'N수생', monthlySearchPC: 1200, monthlySearchMobile: 5400, totalSearch: 6600, competition: 'LOW', avgCPC: 500, trend: 'rising', seasonalPeak: [11, 12, 1], searcherProfile: { femaleRatio: 45, age30sRatio: 5, age40sRatio: 55, mobileRatio: 82 } },
  ],
  'entrance:사회': [
    { keyword: '사회탐구', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [6, 9, 10], searcherProfile: { femaleRatio: 52, age30sRatio: 8, age40sRatio: 50, mobileRatio: 83 } },
    { keyword: '한국사', monthlySearchPC: 14000, monthlySearchMobile: 65000, totalSearch: 79000, competition: 'MEDIUM', avgCPC: 400, trend: 'stable', seasonalPeak: [5, 6, 10, 11], searcherProfile: { femaleRatio: 52, age30sRatio: 25, age40sRatio: 30, mobileRatio: 82 } },
    { keyword: '사회문화', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'LOW', avgCPC: 280, trend: 'stable', seasonalPeak: [4, 5, 10, 11], searcherProfile: { femaleRatio: 52, age30sRatio: 8, age40sRatio: 48, mobileRatio: 83 } },
    { keyword: '생활과윤리', monthlySearchPC: 1800, monthlySearchMobile: 8500, totalSearch: 10300, competition: 'LOW', avgCPC: 250, trend: 'stable', seasonalPeak: [4, 5, 10, 11], searcherProfile: { femaleRatio: 55, age30sRatio: 8, age40sRatio: 48, mobileRatio: 84 } },
  ],
  'entrance:재수': [
    { keyword: '재수학원', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'HIGH', avgCPC: 2000, trend: 'stable', seasonalPeak: [11, 12, 1, 2], searcherProfile: { femaleRatio: 48, age30sRatio: 5, age40sRatio: 60, mobileRatio: 82 } },
    { keyword: '재수종합반', monthlySearchPC: 1800, monthlySearchMobile: 8500, totalSearch: 10300, competition: 'HIGH', avgCPC: 2200, trend: 'stable', seasonalPeak: [11, 12, 1, 2], searcherProfile: { femaleRatio: 48, age30sRatio: 5, age40sRatio: 58, mobileRatio: 82 } },
    { keyword: '기숙재수', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'HIGH', avgCPC: 2500, trend: 'stable', seasonalPeak: [11, 12, 1], searcherProfile: { femaleRatio: 50, age30sRatio: 5, age40sRatio: 62, mobileRatio: 82 } },
    { keyword: '반수', monthlySearchPC: 2400, monthlySearchMobile: 11000, totalSearch: 13400, competition: 'MEDIUM', avgCPC: 800, trend: 'rising', seasonalPeak: [12, 1, 2], searcherProfile: { femaleRatio: 45, age30sRatio: 5, age40sRatio: 52, mobileRatio: 83 } },
    { keyword: 'N수', monthlySearchPC: 1200, monthlySearchMobile: 5400, totalSearch: 6600, competition: 'LOW', avgCPC: 500, trend: 'rising', seasonalPeak: [11, 12, 1], searcherProfile: { femaleRatio: 45, age30sRatio: 5, age40sRatio: 55, mobileRatio: 82 } },
  ],
}

/** 예체능 나머지 과목 */
export const BASELINE_ARTS_EXTRA: Record<string, NaverKeywordData[]> = {
  'arts:음악': [
    { keyword: '음악학원', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 62, age30sRatio: 30, age40sRatio: 25, mobileRatio: 85 } },
    { keyword: '기타레슨', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 480, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 40, age30sRatio: 35, age40sRatio: 15, mobileRatio: 84 } },
    { keyword: '바이올린학원', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 42, age40sRatio: 28, mobileRatio: 86 } },
    { keyword: '드럼학원', monthlySearchPC: 960, monthlySearchMobile: 5800, totalSearch: 6760, competition: 'MEDIUM', avgCPC: 520, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 35, age30sRatio: 30, age40sRatio: 20, mobileRatio: 85 } },
    { keyword: '실용음악학원', monthlySearchPC: 1600, monthlySearchMobile: 8400, totalSearch: 10000, competition: 'HIGH', avgCPC: 900, trend: 'stable', seasonalPeak: [1, 2, 7, 8], searcherProfile: { femaleRatio: 48, age30sRatio: 15, age40sRatio: 42, mobileRatio: 83 } },
  ],
  'arts:무용': [
    { keyword: '발레학원', monthlySearchPC: 2100, monthlySearchMobile: 12000, totalSearch: 14100, competition: 'MEDIUM', avgCPC: 650, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 88, age30sRatio: 45, age40sRatio: 25, mobileRatio: 87 } },
    { keyword: '무용학원', monthlySearchPC: 1200, monthlySearchMobile: 7200, totalSearch: 8400, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 82, age30sRatio: 28, age40sRatio: 35, mobileRatio: 85 } },
    { keyword: '방송댄스', monthlySearchPC: 1800, monthlySearchMobile: 11000, totalSearch: 12800, competition: 'MEDIUM', avgCPC: 500, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 20, age40sRatio: 15, mobileRatio: 88 } },
    { keyword: '유아발레', monthlySearchPC: 480, monthlySearchMobile: 3600, totalSearch: 4080, competition: 'MEDIUM', avgCPC: 580, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 90, age30sRatio: 55, age40sRatio: 18, mobileRatio: 89 } },
    { keyword: '성인발레', monthlySearchPC: 1200, monthlySearchMobile: 7800, totalSearch: 9000, competition: 'MEDIUM', avgCPC: 550, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 85, age30sRatio: 40, age40sRatio: 12, mobileRatio: 86 } },
  ],
  'arts:축구': [
    { keyword: '축구교실', monthlySearchPC: 1200, monthlySearchMobile: 7200, totalSearch: 8400, competition: 'MEDIUM', avgCPC: 520, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 48, age40sRatio: 25, mobileRatio: 87 } },
    { keyword: '유소년축구', monthlySearchPC: 720, monthlySearchMobile: 4800, totalSearch: 5520, competition: 'MEDIUM', avgCPC: 480, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 52, age30sRatio: 50, age40sRatio: 22, mobileRatio: 88 } },
    { keyword: '축구클럽', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 40, age30sRatio: 42, age40sRatio: 28, mobileRatio: 85 } },
    { keyword: '어린이축구', monthlySearchPC: 480, monthlySearchMobile: 3200, totalSearch: 3680, competition: 'LOW', avgCPC: 420, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 52, age40sRatio: 22, mobileRatio: 88 } },
  ],
  'arts:수영': [
    { keyword: '수영학원', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'MEDIUM', avgCPC: 580, trend: 'stable', seasonalPeak: [5, 6, 7], searcherProfile: { femaleRatio: 62, age30sRatio: 38, age40sRatio: 28, mobileRatio: 86 } },
    { keyword: '어린이수영', monthlySearchPC: 1200, monthlySearchMobile: 7800, totalSearch: 9000, competition: 'MEDIUM', avgCPC: 520, trend: 'stable', seasonalPeak: [5, 6, 7], searcherProfile: { femaleRatio: 72, age30sRatio: 48, age40sRatio: 25, mobileRatio: 88 } },
    { keyword: '생존수영', monthlySearchPC: 1600, monthlySearchMobile: 8400, totalSearch: 10000, competition: 'LOW', avgCPC: 280, trend: 'rising', seasonalPeak: [4, 5, 6], searcherProfile: { femaleRatio: 65, age30sRatio: 42, age40sRatio: 30, mobileRatio: 86 } },
    { keyword: '수영레슨', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 480, trend: 'stable', seasonalPeak: [5, 6, 7], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 20, mobileRatio: 85 } },
  ],
  'arts:체육': [
    { keyword: '체육학원', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'MEDIUM', avgCPC: 550, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 30, mobileRatio: 86 } },
    { keyword: '체조교실', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'LOW', avgCPC: 380, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 48, age40sRatio: 22, mobileRatio: 88 } },
    { keyword: '줄넘기학원', monthlySearchPC: 480, monthlySearchMobile: 3200, totalSearch: 3680, competition: 'LOW', avgCPC: 350, trend: 'rising', seasonalPeak: [3, 4, 9, 10], searcherProfile: { femaleRatio: 70, age30sRatio: 50, age40sRatio: 22, mobileRatio: 88 } },
    { keyword: '체대입시', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'HIGH', avgCPC: 1100, trend: 'stable', seasonalPeak: [6, 7, 8], searcherProfile: { femaleRatio: 42, age30sRatio: 8, age40sRatio: 52, mobileRatio: 82 } },
  ],
  'arts:연기': [
    { keyword: '연기학원', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'HIGH', avgCPC: 900, trend: 'stable', seasonalPeak: [1, 2, 7, 8], searcherProfile: { femaleRatio: 62, age30sRatio: 18, age40sRatio: 38, mobileRatio: 84 } },
    { keyword: '뮤지컬학원', monthlySearchPC: 960, monthlySearchMobile: 5800, totalSearch: 6760, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 65, age30sRatio: 22, age40sRatio: 30, mobileRatio: 85 } },
    { keyword: '보컬학원', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 25, age40sRatio: 20, mobileRatio: 85 } },
    { keyword: '실용음악입시', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'HIGH', avgCPC: 1100, trend: 'stable', seasonalPeak: [7, 8, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 10, age40sRatio: 50, mobileRatio: 83 } },
  ],
  'arts:미디어': [
    { keyword: '영상학원', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'MEDIUM', avgCPC: 650, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 25, age40sRatio: 22, mobileRatio: 84 } },
    { keyword: '유튜브교육', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'LOW', avgCPC: 350, trend: 'rising', seasonalPeak: [1, 7, 8], searcherProfile: { femaleRatio: 45, age30sRatio: 30, age40sRatio: 22, mobileRatio: 85 } },
    { keyword: '영상편집', monthlySearchPC: 5400, monthlySearchMobile: 24000, totalSearch: 29400, competition: 'MEDIUM', avgCPC: 500, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 42, age30sRatio: 32, age40sRatio: 15, mobileRatio: 83 } },
    { keyword: '1인미디어', monthlySearchPC: 720, monthlySearchMobile: 3200, totalSearch: 3920, competition: 'LOW', avgCPC: 280, trend: 'stable', seasonalPeak: [1, 3], searcherProfile: { femaleRatio: 48, age30sRatio: 28, age40sRatio: 18, mobileRatio: 84 } },
  ],
}

/** 어학 나머지 과목 */
export const BASELINE_LANGUAGE_EXTRA: Record<string, NaverKeywordData[]> = {
  'language:영어': [
    { keyword: '영어회화', monthlySearchPC: 6500, monthlySearchMobile: 32000, totalSearch: 38500, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 35, age40sRatio: 22, mobileRatio: 83 } },
    { keyword: '원어민영어', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'MEDIUM', avgCPC: 850, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 60, age30sRatio: 32, age40sRatio: 22, mobileRatio: 84 } },
    { keyword: '비즈니스영어', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 42, age40sRatio: 18, mobileRatio: 82 } },
    { keyword: '직장인영어', monthlySearchPC: 1800, monthlySearchMobile: 8400, totalSearch: 10200, competition: 'MEDIUM', avgCPC: 800, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 45, age40sRatio: 15, mobileRatio: 83 } },
    { keyword: '프리토킹', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'MEDIUM', avgCPC: 750, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 38, age40sRatio: 18, mobileRatio: 84 } },
  ],
  'language:중국어': [
    { keyword: '중국어학원', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'MEDIUM', avgCPC: 750, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 20, mobileRatio: 84 } },
    { keyword: 'HSK', monthlySearchPC: 6800, monthlySearchMobile: 28000, totalSearch: 34800, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [1, 3, 5, 9, 11], searcherProfile: { femaleRatio: 52, age30sRatio: 38, age40sRatio: 12, mobileRatio: 82 } },
    { keyword: '중국어회화', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: '중국어배우기', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'LOW', avgCPC: 320, trend: 'stable', seasonalPeak: [1, 3], searcherProfile: { femaleRatio: 52, age30sRatio: 32, age40sRatio: 18, mobileRatio: 85 } },
  ],
  'language:일본어': [
    { keyword: '일본어학원', monthlySearchPC: 2100, monthlySearchMobile: 11000, totalSearch: 13100, competition: 'MEDIUM', avgCPC: 700, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 32, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: 'JLPT', monthlySearchPC: 9600, monthlySearchMobile: 42000, totalSearch: 51600, competition: 'MEDIUM', avgCPC: 550, trend: 'rising', seasonalPeak: [5, 6, 11, 12], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 10, mobileRatio: 82 } },
    { keyword: '일본어배우기', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'LOW', avgCPC: 280, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 30, age40sRatio: 15, mobileRatio: 85 } },
    { keyword: '일본어회화', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'MEDIUM', avgCPC: 600, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 32, age40sRatio: 15, mobileRatio: 84 } },
  ],
  'language:한국어': [
    { keyword: '한국어학원', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'MEDIUM', avgCPC: 650, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 35, age40sRatio: 15, mobileRatio: 84 } },
    { keyword: 'TOPIK', monthlySearchPC: 5400, monthlySearchMobile: 22000, totalSearch: 27400, competition: 'MEDIUM', avgCPC: 500, trend: 'rising', seasonalPeak: [3, 4, 9, 10], searcherProfile: { femaleRatio: 45, age30sRatio: 38, age40sRatio: 10, mobileRatio: 82 } },
    { keyword: '외국인한국어', monthlySearchPC: 480, monthlySearchMobile: 2800, totalSearch: 3280, competition: 'LOW', avgCPC: 420, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 35, age40sRatio: 12, mobileRatio: 85 } },
  ],
  'language:불어': [
    { keyword: '불어학원', monthlySearchPC: 480, monthlySearchMobile: 2400, totalSearch: 2880, competition: 'LOW', avgCPC: 550, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 32, age40sRatio: 15, mobileRatio: 83 } },
    { keyword: '독일어학원', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'LOW', avgCPC: 550, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 50, age30sRatio: 35, age40sRatio: 12, mobileRatio: 83 } },
    { keyword: '스페인어학원', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'LOW', avgCPC: 500, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 12, mobileRatio: 84 } },
    { keyword: 'DELF', monthlySearchPC: 720, monthlySearchMobile: 2800, totalSearch: 3520, competition: 'LOW', avgCPC: 380, trend: 'stable', seasonalPeak: [3, 5, 9, 11], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 10, mobileRatio: 82 } },
  ],
  'language:회화': [
    { keyword: '원어민회화', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'MEDIUM', avgCPC: 780, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 35, age40sRatio: 20, mobileRatio: 84 } },
    { keyword: '프리토킹', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'MEDIUM', avgCPC: 750, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 38, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: '영어스피킹', monthlySearchPC: 960, monthlySearchMobile: 4800, totalSearch: 5760, competition: 'MEDIUM', avgCPC: 680, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 52, age30sRatio: 38, age40sRatio: 15, mobileRatio: 84 } },
    { keyword: '소그룹회화', monthlySearchPC: 360, monthlySearchMobile: 2100, totalSearch: 2460, competition: 'LOW', avgCPC: 600, trend: 'rising', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 38, age40sRatio: 18, mobileRatio: 85 } },
  ],
}

/** 특수/기타 나머지 과목 */
export const BASELINE_SPECIAL_EXTRA: Record<string, NaverKeywordData[]> = {
  'special:로봇': [
    { keyword: '로봇학원', monthlySearchPC: 960, monthlySearchMobile: 5400, totalSearch: 6360, competition: 'MEDIUM', avgCPC: 680, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 58, age30sRatio: 45, age40sRatio: 28, mobileRatio: 87 } },
    { keyword: '로봇코딩', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 600, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 42, age40sRatio: 28, mobileRatio: 87 } },
    { keyword: '레고로봇', monthlySearchPC: 1200, monthlySearchMobile: 7200, totalSearch: 8400, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [1, 7, 8], searcherProfile: { femaleRatio: 55, age30sRatio: 48, age40sRatio: 22, mobileRatio: 86 } },
    { keyword: 'AI학원', monthlySearchPC: 360, monthlySearchMobile: 2100, totalSearch: 2460, competition: 'MEDIUM', avgCPC: 750, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 48, age30sRatio: 35, age40sRatio: 28, mobileRatio: 85 } },
  ],
  'special:요리': [
    { keyword: '요리학원', monthlySearchPC: 2400, monthlySearchMobile: 12000, totalSearch: 14400, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 35, age40sRatio: 20, mobileRatio: 85 } },
    { keyword: '제과제빵', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [1, 3], searcherProfile: { femaleRatio: 75, age30sRatio: 30, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: '쿠킹클래스', monthlySearchPC: 1800, monthlySearchMobile: 11000, totalSearch: 12800, competition: 'MEDIUM', avgCPC: 500, trend: 'rising', seasonalPeak: [1, 12], searcherProfile: { femaleRatio: 70, age30sRatio: 38, age40sRatio: 15, mobileRatio: 86 } },
    { keyword: '베이킹학원', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 550, trend: 'rising', seasonalPeak: [1, 2, 12], searcherProfile: { femaleRatio: 78, age30sRatio: 35, age40sRatio: 15, mobileRatio: 87 } },
  ],
  'special:운전': [
    { keyword: '운전학원', monthlySearchPC: 9600, monthlySearchMobile: 48000, totalSearch: 57600, competition: 'HIGH', avgCPC: 1800, trend: 'stable', seasonalPeak: [1, 2, 7, 8], searcherProfile: { femaleRatio: 52, age30sRatio: 35, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: '운전면허', monthlySearchPC: 14000, monthlySearchMobile: 65000, totalSearch: 79000, competition: 'HIGH', avgCPC: 1500, trend: 'stable', seasonalPeak: [1, 2, 7, 8], searcherProfile: { femaleRatio: 50, age30sRatio: 32, age40sRatio: 18, mobileRatio: 83 } },
    { keyword: '도로연수', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'MEDIUM', avgCPC: 900, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 62, age30sRatio: 35, age40sRatio: 22, mobileRatio: 85 } },
    { keyword: '장롱면허', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 800, trend: 'stable', seasonalPeak: [3, 4, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 30, age40sRatio: 28, mobileRatio: 85 } },
    { keyword: '운전학원비용', monthlySearchPC: 2400, monthlySearchMobile: 14000, totalSearch: 16400, competition: 'HIGH', avgCPC: 1600, trend: 'stable', seasonalPeak: [1, 2, 7], searcherProfile: { femaleRatio: 50, age30sRatio: 35, age40sRatio: 18, mobileRatio: 84 } },
  ],
  'special:바리스타': [
    { keyword: '바리스타학원', monthlySearchPC: 1200, monthlySearchMobile: 7200, totalSearch: 8400, competition: 'MEDIUM', avgCPC: 700, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 62, age30sRatio: 35, age40sRatio: 18, mobileRatio: 85 } },
    { keyword: '바리스타자격증', monthlySearchPC: 3600, monthlySearchMobile: 18000, totalSearch: 21600, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 60, age30sRatio: 32, age40sRatio: 18, mobileRatio: 84 } },
    { keyword: '커피교육', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'LOW', avgCPC: 450, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 55, age30sRatio: 35, age40sRatio: 20, mobileRatio: 85 } },
    { keyword: '라떼아트', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'LOW', avgCPC: 300, trend: 'rising', seasonalPeak: [1, 3], searcherProfile: { femaleRatio: 58, age30sRatio: 38, age40sRatio: 15, mobileRatio: 86 } },
    { keyword: '카페창업', monthlySearchPC: 4800, monthlySearchMobile: 22000, totalSearch: 26800, competition: 'HIGH', avgCPC: 1200, trend: 'stable', seasonalPeak: [1, 3, 9], searcherProfile: { femaleRatio: 52, age30sRatio: 35, age40sRatio: 22, mobileRatio: 83 } },
  ],
  'special:속셈': [
    { keyword: '주산학원', monthlySearchPC: 480, monthlySearchMobile: 2800, totalSearch: 3280, competition: 'LOW', avgCPC: 420, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 48, age40sRatio: 22, mobileRatio: 87 } },
    { keyword: '암산학원', monthlySearchPC: 360, monthlySearchMobile: 2100, totalSearch: 2460, competition: 'LOW', avgCPC: 380, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 50, age40sRatio: 20, mobileRatio: 88 } },
    { keyword: '주산암산', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'LOW', avgCPC: 320, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 48, age40sRatio: 22, mobileRatio: 87 } },
  ],
  'special:독서': [
    { keyword: '독서토론', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'LOW', avgCPC: 420, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 42, age40sRatio: 30, mobileRatio: 86 } },
    { keyword: '독서논술학원', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 650, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 75, age30sRatio: 45, age40sRatio: 28, mobileRatio: 87 } },
    { keyword: '토론학원', monthlySearchPC: 480, monthlySearchMobile: 2800, totalSearch: 3280, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 68, age30sRatio: 40, age40sRatio: 32, mobileRatio: 86 } },
    { keyword: '글쓰기학원', monthlySearchPC: 720, monthlySearchMobile: 4200, totalSearch: 4920, competition: 'MEDIUM', avgCPC: 580, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 70, age30sRatio: 42, age40sRatio: 30, mobileRatio: 87 } },
    { keyword: '하브루타', monthlySearchPC: 1200, monthlySearchMobile: 5800, totalSearch: 7000, competition: 'LOW', avgCPC: 350, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 45, age40sRatio: 25, mobileRatio: 85 } },
  ],
  'special:방문': [
    { keyword: '방문학습', monthlySearchPC: 1800, monthlySearchMobile: 9600, totalSearch: 11400, competition: 'MEDIUM', avgCPC: 700, trend: 'declining', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 78, age30sRatio: 48, age40sRatio: 25, mobileRatio: 87 } },
    { keyword: '학습지', monthlySearchPC: 4800, monthlySearchMobile: 22000, totalSearch: 26800, competition: 'HIGH', avgCPC: 900, trend: 'declining', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 78, age30sRatio: 48, age40sRatio: 25, mobileRatio: 86 } },
    { keyword: '방문과외', monthlySearchPC: 720, monthlySearchMobile: 3800, totalSearch: 4520, competition: 'MEDIUM', avgCPC: 600, trend: 'stable', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 72, age30sRatio: 45, age40sRatio: 28, mobileRatio: 87 } },
    { keyword: '홈스쿨링', monthlySearchPC: 1200, monthlySearchMobile: 6800, totalSearch: 8000, competition: 'LOW', avgCPC: 350, trend: 'rising', seasonalPeak: [3, 9], searcherProfile: { femaleRatio: 80, age30sRatio: 50, age40sRatio: 22, mobileRatio: 86 } },
  ],
}

/** 모든 확장 데이터 통합 */
export const ALL_BASELINE_EXTRA: Record<string, NaverKeywordData[]> = {
  ...BASELINE_ENTRANCE_EXTRA,
  ...BASELINE_ARTS_EXTRA,
  ...BASELINE_LANGUAGE_EXTRA,
  ...BASELINE_SPECIAL_EXTRA,
}
