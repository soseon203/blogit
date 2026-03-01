/**
 * 예체능 학원 전문 지식 DB
 */
import type { AcademySubjectKnowledge } from './types'

export const ARTS_ACADEMY_DATA: AcademySubjectKnowledge[] = [
  // ──────────────── 피아노 ────────────────
  {
    id: 'arts:피아노',
    category: 'arts',
    subject: '피아노',
    displayName: '피아노학원',
    description: '유아~성인 피아노 교육. 클래식, 실용음악, 입시, 취미 피아노 포함.',

    coreKeywords: ['피아노학원', '피아노 레슨', '피아노 배우기', '어린이 피아노', '피아노 교습소'],
    longTailKeywords: [
      '5살 피아노 시작 시기', '초등학생 피아노학원', '피아노 콩쿠르 대비',
      '성인 피아노 취미', '예중 예고 피아노 입시', '피아노 독학 vs 학원',
      '바이엘 체르니 진도', '피아노 학원비', '그랜드피아노 연습실',
    ],
    locationKeywordPatterns: ['{지역} 피아노학원', '{지역} 피아노 레슨', '{지역} 피아노 교습소'],
    negativeKeywords: ['피아노 무료 악보', '피아노 독학'],

    curriculum: [
      '유아 피아노 (음악 놀이 + 기초 건반)',
      '초등 정통 클래식 (바이엘 → 체르니 → 소나티네)',
      '실용 피아노 (팝·OST·CCM·재즈)',
      '콩쿠르·급수 시험 대비',
      '예중·예고·음대 입시반',
      '성인 취미 피아노',
    ],
    targetAudience: [
      '피아노를 처음 시작하는 유아(5~7세) 학부모',
      '체계적 클래식 교육을 원하는 초등학생 학부모',
      '콩쿠르/급수시험 준비 학생',
      '예중·예고 입시 준비 학생',
      '취미로 피아노를 배우고 싶은 성인',
    ],
    parentConcerns: [
      '몇 살부터 피아노를 시작해야 할까',
      '아이가 연습을 안 하려고 한다',
      '바이엘만 계속 치는데 진도가 너무 느린 건 아닌지',
      '콩쿠르 나가면 도움이 되나',
      '피아노를 오래 치면 공부에 방해가 되진 않을까',
      '전공 vs 취미, 언제 결정해야 하나',
    ],
    sellingPoints: [
      '1:1 개인 레슨 (맞춤 진도)',
      '그랜드피아노 보유 (업라이트 vs 그랜드)',
      '콩쿠르 입상 실적',
      '음대 출신 전공 강사진',
      '연습실 자유 이용',
      '정기 발표회 운영',
    ],
    industryTerms: [
      '바이엘', '체르니', '소나티네', '소나타', '인벤션', '평균율',
      '콩쿠르', '급수시험', '청음', '시창', '초견', '페달링',
      '그랜드피아노', '업라이트', '디지털피아노', '건반 터치',
    ],
    competitorTypes: ['개인 피아노교습소', '음악학원(종합)', '방문 피아노 레슨', '온라인 피아노(심플피아노 등)'],

    blogTopics: [
      { title: '피아노 몇 살부터? 적정 시작 시기 가이드', description: '연령별 피아노 교육 시기', keywords: ['피아노 시작 시기', '유아 피아노'], type: 'info' },
      { title: '바이엘 끝나면 다음은? 피아노 진도 로드맵', description: '교재별 진도 안내', keywords: ['바이엘', '체르니', '피아노 진도'], type: 'tips' },
      { title: '아이가 피아노 연습을 싫어할 때 대처법', description: '연습 동기부여 노하우', keywords: ['피아노 연습', '동기부여'], type: 'tips' },
      { title: '우리 학원 정기 발표회 현장', description: '발표회 후기 + 사진', keywords: ['피아노 발표회', '학원 행사'], type: 'review' },
      { title: '피아노 콩쿠르 입상 후기', description: '학생 수상 사례', keywords: ['피아노 콩쿠르', '입상'], type: 'result' },
      { title: '성인 피아노, 3개월 만에 OST 한 곡 완성', description: '성인 취미 피아노 후기', keywords: ['성인 피아노', '취미 피아노'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '새 학기 신규 등록 / 겨울 콩쿠르', keywords: ['피아노 등록', '콩쿠르'], urgency: 'high' },
      { months: [6, 7], topic: '여름 발표회 / 방학 집중 레슨', keywords: ['발표회', '방학 피아노'], urgency: 'medium' },
      { months: [12], topic: '연말 발표회 / 크리스마스 연주', keywords: ['연말 발표회', '크리스마스'], urgency: 'medium' },
    ],

    titlePatterns: ['{지역} 피아노학원 - {특징}', '피아노 {교재} 끝나면 다음 단계는?', '{연령} 피아노 시작 가이드'],
    tagRecommendations: ['#피아노학원', '#피아노레슨', '#어린이피아노', '#피아노배우기', '#콩쿠르', '#{지역}피아노학원'],
    contentTone: '따뜻하고 격려하는 톤. 음악의 즐거움을 강조하면서 체계적 교육을 어필.',
    successMetrics: ['콩쿠르 입상 실적', '급수시험 합격률', '예중/예고 합격', '발표회 참여율'],
  },

  // ──────────────── 미술 ────────────────
  {
    id: 'arts:미술',
    category: 'arts',
    subject: '미술',
    displayName: '미술학원',
    description: '유아~고등 미술 교육. 아동미술, 입시미술(실기), 취미미술, 만화/웹툰, 디자인.',

    coreKeywords: ['미술학원', '아동미술', '입시미술', '미대 실기', '그림 학원', '미술 교습소'],
    longTailKeywords: [
      '유아 미술놀이', '초등 미술학원 추천', '미대 입시 실기 학원', '소묘 기초',
      '수채화 학원', '웹툰 학원', '성인 취미 미술', '미술 포트폴리오',
      '예중 예고 미술 입시', '미술 특기자 전형',
    ],
    locationKeywordPatterns: ['{지역} 미술학원', '{지역} 입시미술', '{지역} 아동미술'],
    negativeKeywords: [],

    curriculum: [
      '유아 창의미술 / 미술놀이',
      '초등 기초 드로잉 + 다양한 재료 탐구',
      '중등 소묘 기초 / 수채화 / 디자인',
      '고등 입시미술 (기초디자인/사고의전환/정밀묘사/만화애니메이션)',
      '예중·예고 포트폴리오 준비',
      '성인 취미반 (유화/수채화/디지털드로잉)',
    ],
    targetAudience: [
      '창의력 교육을 원하는 유아·초등 학부모',
      '미대 입시를 준비하는 중·고등학생',
      '웹툰/일러스트 작가를 꿈꾸는 학생',
      '취미로 그림을 배우고 싶은 성인',
    ],
    parentConcerns: [
      '아이의 창의력을 키워주고 싶다',
      '미대 입시 실기를 언제부터 준비해야 할까',
      '미술을 전공하면 취업이 어렵지 않을까',
      '기초 소묘부터 배워야 하나, 자유화부터 해야 하나',
    ],
    sellingPoints: [
      '소수정예 맞춤 지도', '입시 합격 포트폴리오 구축',
      '대학별 실기 유형 분석', '다양한 재료·기법 체험',
      '정기 전시회/공모전 참여', '쾌적한 아틀리에 환경',
    ],
    industryTerms: [
      '소묘', '크로키', '정밀묘사', '기초디자인', '사고의전환',
      '발상과표현', '포트폴리오', '석고상', '정물화', '풍경화',
      '수채화', '유화', '아크릴', '디지털드로잉', '타블렛',
    ],
    competitorTypes: ['입시미술 전문학원', '아동미술 프랜차이즈(미소국/아이뜰 등)', '성인 취미 아틀리에'],

    blogTopics: [
      { title: '아동미술, 색칠공부와 뭐가 다른가요?', description: '아동미술 교육 가치 설명', keywords: ['아동미술', '창의미술', '유아미술'], type: 'info' },
      { title: '미대 입시 실기, 고1부터 준비하면 늦을까?', description: '입시미술 준비 타임라인', keywords: ['미대 입시', '실기 준비', '입시미술'], type: 'info' },
      { title: '우리 학원 학생 공모전 수상작 모음', description: '학생 작품 소개', keywords: ['미술 공모전', '수상', '학생 작품'], type: 'result' },
      { title: '초등학생 미술 수업 현장 스케치', description: '수업 현장 소개', keywords: ['미술 수업', '초등미술'], type: 'intro' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '새 학기 미술반 모집 / 겨울 특강', keywords: ['미술 등록', '겨울 미술'], urgency: 'high' },
      { months: [5, 6], topic: '여름 공모전 준비 / 입시 포트폴리오', keywords: ['공모전', '포트폴리오'], urgency: 'medium' },
      { months: [9, 10], topic: '입시미술 수시 실기 시즌', keywords: ['수시 실기', '입시미술'], urgency: 'high' },
      { months: [12], topic: '연말 전시회 / 작품 발표', keywords: ['전시회', '작품'], urgency: 'medium' },
    ],

    titlePatterns: ['{지역} 미술학원 - {특징}', '{연령} 미술 교육이 중요한 이유', '미대 {학교} 합격 실기 분석'],
    tagRecommendations: ['#미술학원', '#아동미술', '#입시미술', '#미대입시', '#그림학원', '#{지역}미술학원', '#소묘'],
    contentTone: '감성적이면서도 전문적인 톤. 작품 사진을 적극 활용. 창의성과 체계적 교육 균형.',
    successMetrics: ['미대 합격 실적', '공모전 수상 내역', '예중/예고 합격', '포트폴리오 완성도'],
  },

  // ──────────────── 태권도 ────────────────
  {
    id: 'arts:태권도',
    category: 'arts',
    subject: '태권도',
    displayName: '태권도학원',
    description: '유아~성인 태권도 교육. 품새, 겨루기, 시범, 승급/승단, 체력 훈련.',

    coreKeywords: ['태권도학원', '태권도 도장', '어린이 태권도', '태권도 학원비', '태권도 띠'],
    longTailKeywords: [
      '5세 태권도 시작', '태권도 품새', '태권도 승급심사', '유아 태권도 추천',
      '태권도 겨루기 대회', '성인 태권도', '태권도 다이어트', '태권도 체육특기자',
    ],
    locationKeywordPatterns: ['{지역} 태권도', '{지역} 태권도학원', '{지역} 태권도 도장'],
    negativeKeywords: [],

    curriculum: [
      '유아 태권도 (예절 + 기본동작 + 신체발달)',
      '초등 태권도 (품새 + 겨루기 + 체력)',
      '승급/승단 심사 대비',
      '겨루기/품새 대회 선수반',
      '태권도 시범단',
      '성인 호신술/다이어트 태권도',
    ],
    targetAudience: [
      '아이 체력 발달과 예절교육을 원하는 유아 학부모',
      '활동적인 운동을 시키고 싶은 초등학생 학부모',
      '태권도 선수를 꿈꾸는 학생',
      '호신술/체력 관리를 원하는 성인',
    ],
    parentConcerns: [
      '아이가 소극적인데 태권도가 도움이 될까',
      '다치진 않을까 걱정된다',
      '태권도를 하면 키가 클까/작아질까',
      '승급심사 준비는 어떻게 하나',
      '대회에 나가면 좋은가',
    ],
    sellingPoints: [
      '예절 + 인성교육 병행',
      '체계적 승급 시스템',
      '안전한 보호장비 완비',
      '대회 입상 실적',
      '통학버스 운행',
      '소수정예 수련',
    ],
    industryTerms: [
      '품새', '겨루기', '격파', '시범', '도복', '띠(급/단)',
      '태극형', '승급심사', '승단심사', '국기원', '대한태권도협회',
      '세계태권도연맹(WT)', '올림픽 종목',
    ],
    competitorTypes: ['개인 태권도 도장', '체육관 프랜차이즈', '종합 체육학원', '합기도/유도 등 타 무도'],

    blogTopics: [
      { title: '유아 태권도, 몇 살부터 시작할까?', description: '적정 시작 시기 안내', keywords: ['유아 태권도', '시작 시기'], type: 'info' },
      { title: '태권도 띠 순서와 승급심사 준비법', description: '승급 시스템 설명', keywords: ['태권도 띠', '승급심사'], type: 'info' },
      { title: '우리 도장 전국대회 메달 획득 소식', description: '대회 수상 소식', keywords: ['태권도 대회', '메달'], type: 'result' },
      { title: '태권도 수련이 아이 성격에 미치는 영향', description: '교육적 효과', keywords: ['태권도 효과', '인성교육'], type: 'info' },
      { title: '승급심사 합격 축하 행사', description: '도장 행사 소개', keywords: ['승급심사', '태권도 행사'], type: 'event' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '새 학기 신규 수련생 모집', keywords: ['태권도 등록', '신규 모집'], urgency: 'high' },
      { months: [7, 8], topic: '여름방학 태권도 캠프', keywords: ['태권도 캠프', '방학 캠프'], urgency: 'medium' },
      { months: [5, 11], topic: '승급/승단 심사 시즌', keywords: ['승급심사', '승단심사'], urgency: 'medium' },
    ],

    titlePatterns: ['{지역} 태권도학원 - {특징}', '태권도 {효과}를 직접 경험한 학부모 후기'],
    tagRecommendations: ['#태권도', '#태권도학원', '#어린이태권도', '#품새', '#승급심사', '#{지역}태권도'],
    contentTone: '활기차고 건강한 톤. 아이들의 성장과 성취를 강조. 사진/영상 활용 권장.',
    successMetrics: ['대회 입상 실적', '승급/승단 합격률', '재원생 유지율', '체력 측정 향상'],
  },

  // ──────────────── 음악 (성악·기타 등) ────────────────
  {
    id: 'arts:음악',
    category: 'arts',
    subject: '음악',
    displayName: '음악학원',
    description: '성악, 기타, 바이올린, 첼로, 드럼, 관악기 등 다양한 악기 교육. 실용음악 입시 포함.',

    coreKeywords: ['음악학원', '기타 레슨', '바이올린 학원', '드럼 학원', '실용음악', '성악 레슨'],
    longTailKeywords: [
      '어린이 바이올린', '통기타 배우기', '드럼 초보', '실용음악 입시',
      '보컬 트레이닝', '작곡 레슨', '첼로 학원', '관악기 학원',
    ],
    locationKeywordPatterns: ['{지역} 음악학원', '{지역} 기타레슨', '{지역} 바이올린학원'],
    negativeKeywords: [],

    curriculum: [
      '현악기 (바이올린/첼로/비올라)',
      '기타 (클래식/어쿠스틱/일렉)',
      '관악기 (플루트/클라리넷/색소폰/트럼펫)',
      '드럼/퍼커션',
      '보컬 트레이닝 (성악/실용)',
      '작곡/MIDI/음악 프로듀싱',
      '실용음악 입시 대비',
    ],
    targetAudience: ['악기를 배우고 싶은 초등학생', '실용음악 입시 준비 학생', '취미 악기 성인', '밴드/앙상블 활동 희망자'],
    parentConcerns: ['어떤 악기가 우리 아이에게 맞을까', '악기를 사야 하나', '음악 전공의 진로 전망'],
    sellingPoints: ['1:1 맞춤 레슨', '다양한 악기 선택', '정기 연주회', '앙상블/밴드 활동', '연습실 제공'],
    industryTerms: ['솔페지오', '청음', '시창', '앙상블', '콩쿠르', '그레이드', 'ABRSM', '합주', '음악이론'],
    competitorTypes: ['종합 음악학원', '개인 레슨', '실용음악학원', '오케스트라 단체'],

    blogTopics: [
      { title: '우리 아이에게 맞는 악기 선택 가이드', description: '성격/연령별 악기 추천', keywords: ['악기 선택', '어린이 악기'], type: 'comparison' },
      { title: '기타 독학 vs 학원, 초보자에게 뭐가 좋을까?', description: '학원 장점 설명', keywords: ['기타 독학', '기타 레슨'], type: 'comparison' },
      { title: '우리 학원 정기 연주회 현장', description: '연주회 후기', keywords: ['연주회', '음악 발표'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [3, 9], topic: '새 학기 악기 입문 시즌', keywords: ['악기 시작', '음악 레슨'], urgency: 'high' },
      { months: [6, 12], topic: '정기 연주회 / 콩쿠르', keywords: ['연주회', '콩쿠르'], urgency: 'medium' },
    ],

    titlePatterns: ['{악기} 초보자를 위한 {N}가지 팁', '{지역} 음악학원 - {특징}'],
    tagRecommendations: ['#음악학원', '#기타레슨', '#바이올린', '#드럼', '#실용음악', '#{지역}음악학원'],
    contentTone: '음악의 즐거움을 전하는 밝은 톤. 연주 영상/사진 활용 권장.',
    successMetrics: ['콩쿠르 입상', '그레이드 합격', '입시 합격률', '연주회 참여 학생 수'],
  },

  // ──────────────── 무용/발레 ────────────────
  {
    id: 'arts:무용',
    category: 'arts',
    subject: '무용',
    displayName: '무용학원',
    description: '발레, 한국무용, 현대무용, 방송댄스, K-POP 댄스 등. 유아~성인, 취미/입시 모두 포함.',

    coreKeywords: ['발레학원', '무용학원', '방송댄스', 'K-POP댄스', '어린이 발레', '성인 발레'],
    longTailKeywords: ['유아 발레', '발레 키 크기', '예고 무용 입시', '성인 발레 초보', '방송댄스 학원'],
    locationKeywordPatterns: ['{지역} 발레학원', '{지역} 무용학원', '{지역} 댄스학원'],
    negativeKeywords: [],

    curriculum: ['유아 발레 (프리발레)', '클래식 발레 (RAD/바가노바)', '한국무용', '현대무용/컨템포러리', '방송댄스/K-POP', '예중·예고 무용 입시'],
    targetAudience: ['바른 자세와 유연성을 원하는 유아 학부모', '무용 전공 입시 준비 학생', '취미 발레/댄스 성인'],
    parentConcerns: ['발레를 하면 자세가 좋아지나', '토슈즈는 언제 신나', '무용 전공 진로가 걱정된다'],
    sellingPoints: ['체계적 발레 교수법(RAD등)', '무대 경험(발표회/공연)', '바른 자세 교정', '소수정예 수업'],
    industryTerms: ['바가노바', 'RAD', '토슈즈', '포인트', '바', '센터', '앙쉐느망', '파드되', '턴아웃'],
    competitorTypes: ['발레전문학원', '무용학원', '댄스학원', '문화센터 발레반'],

    blogTopics: [
      { title: '유아 발레, 몇 살부터 시작하면 좋을까?', description: '적정 시작 시기', keywords: ['유아 발레', '발레 시작'], type: 'info' },
      { title: '발레가 아이 성장에 미치는 5가지 효과', description: '발레 교육 효과', keywords: ['발레 효과', '자세 교정'], type: 'info' },
      { title: '연말 발레 공연 무대 뒷이야기', description: '공연 현장 스케치', keywords: ['발레 공연', '발표회'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [3], topic: '새 학기 발레 입문반 모집', keywords: ['발레 등록', '발레 입문'], urgency: 'high' },
      { months: [7, 8], topic: '여름방학 발레 캠프', keywords: ['발레 캠프'], urgency: 'medium' },
      { months: [12], topic: '호두까기인형 공연 / 연말 발표회', keywords: ['발레 공연', '호두까기인형'], urgency: 'medium' },
    ],

    titlePatterns: ['{지역} 발레학원 - {특징}', '발레 {효과}를 경험한 학부모 후기'],
    tagRecommendations: ['#발레학원', '#유아발레', '#발레', '#무용학원', '#{지역}발레학원', '#성인발레'],
    contentTone: '우아하고 격려하는 톤. 무대 사진을 적극 활용.',
    successMetrics: ['콩쿠르/대회 수상', '예중·예고 합격', '공연 참여 실적'],
  },

  // ──────────────── 축구 ────────────────
  {
    id: 'arts:축구',
    category: 'arts',
    subject: '축구',
    displayName: '축구교실',
    description: '유소년 축구 클럽/교실. 축구 기초, 전술, 리그, 체력 훈련.',

    coreKeywords: ['축구교실', '유소년 축구', '축구 클럽', '어린이 축구', '축구 학원'],
    longTailKeywords: ['5세 축구 시작', '초등 축구 클럽', '축구 선수 육성', '유소년 축구 리그'],
    locationKeywordPatterns: ['{지역} 축구교실', '{지역} 유소년 축구'],
    negativeKeywords: [],

    curriculum: ['유아 축구놀이 (4~6세)', '초등 기초 기술반', '전술·경기 운영반', '체력 강화 프로그램', '대회/리그 출전반'],
    targetAudience: ['아이에게 운동 습관을 만들어주고 싶은 학부모', '축구를 좋아하는 초등학생', '축구 선수를 꿈꾸는 학생'],
    parentConcerns: ['부상 위험은 없을까', '실력 차이가 나면 어떡하나', '전문 선수 코스는 어떻게 되나'],
    sellingPoints: ['AFC 자격 지도자', '연령/실력별 반 편성', '주말 리그 운영', '안전한 잔디 구장'],
    industryTerms: ['드리블', '패싱', '슈팅', '트래핑', '포메이션', '리그', '유소년 축구 협회'],
    competitorTypes: ['축구 클럽', '종합 체육학원', '방과후 축구교실'],

    blogTopics: [
      { title: '유소년 축구, 아이에게 이런 점이 좋습니다', description: '축구 교육 효과', keywords: ['유소년 축구', '축구 효과'], type: 'info' },
      { title: '우리 팀 주말 리그 경기 결과', description: '리그 활동 소개', keywords: ['축구 리그', '축구 경기'], type: 'result' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '봄 시즌 개강 / 신규 모집', keywords: ['축구 등록', '봄 축구'], urgency: 'high' },
      { months: [7, 8], topic: '여름 축구 캠프', keywords: ['축구 캠프'], urgency: 'medium' },
    ],
    titlePatterns: ['{지역} 축구교실 - {특징}', '유소년 축구가 아이에게 주는 {N}가지 선물'],
    tagRecommendations: ['#축구교실', '#유소년축구', '#어린이축구', '#{지역}축구교실'],
    contentTone: '활기차고 역동적인 톤. 경기/훈련 사진 활용.',
    successMetrics: ['대회 성적', '리그 순위', '선수 배출'],
  },

  // ──────────────── 수영 ────────────────
  {
    id: 'arts:수영',
    category: 'arts',
    subject: '수영',
    displayName: '수영학원',
    description: '유아~성인 수영 교육. 생존수영, 자유형/배영/평영/접영, 수영 선수반.',

    coreKeywords: ['수영학원', '어린이 수영', '수영 레슨', '생존수영', '수영장'],
    longTailKeywords: ['유아 수영 시작', '초등 수영 의무교육', '자유형 배우기', '성인 수영 초보'],
    locationKeywordPatterns: ['{지역} 수영학원', '{지역} 수영장', '{지역} 어린이 수영'],
    negativeKeywords: [],

    curriculum: ['유아 물놀이/생존수영', '초등 4영법 마스터', '수영 선수반/대회반', '성인 자유수영/교정', '다이빙/수구 특별반'],
    targetAudience: ['생존수영 교육을 원하는 유아 학부모', '수영을 배우려는 초등학생', '수영 선수 지망 학생'],
    parentConcerns: ['물을 무서워하는 아이', '수영을 배우면 감기에 잘 걸릴까', '몇 살부터 시작할까'],
    sellingPoints: ['수온 관리 깨끗한 수질', '소수정예 수업', '수영 선수 경력 강사', '레벨별 체계적 교육'],
    industryTerms: ['4영법', '자유형', '배영', '평영', '접영', '턴', '킥', '풀', '25m', '50m', '생존수영'],
    competitorTypes: ['수영장(종합체육관)', '개인 수영레슨', '아쿠아센터'],

    blogTopics: [
      { title: '어린이 수영, 몇 살부터 시작하면 좋을까?', description: '시작 시기 가이드', keywords: ['어린이 수영', '수영 시작'], type: 'info' },
      { title: '수영 배우면 키가 큰다? 수영의 성장 효과', description: '수영 건강 효과', keywords: ['수영 효과', '성장'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [5, 6], topic: '여름 수영 시즌 개강', keywords: ['여름 수영', '수영 등록'], urgency: 'high' },
      { months: [1, 2], topic: '겨울 실내수영 / 신규 등록', keywords: ['겨울 수영', '실내수영'], urgency: 'medium' },
    ],
    titlePatterns: ['{지역} 수영학원 - {특징}', '수영이 아이에게 주는 {N}가지 효과'],
    tagRecommendations: ['#수영학원', '#어린이수영', '#수영레슨', '#생존수영', '#{지역}수영'],
    contentTone: '건강하고 밝은 톤. 수영장 환경 사진 활용.',
    successMetrics: ['영법 습득 단계', '대회 입상', '수영 급수 취득'],
  },

  // ──────────────── 체육 전반 ────────────────
  {
    id: 'arts:체육',
    category: 'arts',
    subject: '체육',
    displayName: '체육학원',
    description: '종합 체육(체조, 줄넘기, 농구, 배드민턴 등), 체대 입시, 체력 훈련 전문.',

    coreKeywords: ['체육학원', '체조 교실', '줄넘기 학원', '체대 입시', '어린이 체육'],
    longTailKeywords: ['유아 체능 교육', '초등 줄넘기', '체대 입시 학원', '체력 검정', '농구 교실'],
    locationKeywordPatterns: ['{지역} 체육학원', '{지역} 체조교실'],
    negativeKeywords: [],

    curriculum: ['유아 체능 (기초 체력 + 소근육 발달)', '초등 줄넘기/매트/철봉', '스포츠 종목 체험', '체대 입시 실기 대비', '성인 PT/체력 관리'],
    targetAudience: ['아이 체력 발달을 원하는 유아 학부모', '체대 입시 준비 학생', '학교 체력 측정 대비'],
    parentConcerns: ['아이가 운동을 싫어한다', '체대 입시 실기 종목은?', '체력이 약해서 걱정'],
    sellingPoints: ['종목별 전문 코치', '체계적 체력 측정 시스템', '다양한 종목 체험', '안전한 시설'],
    industryTerms: ['PAPS(학생건강체력평가)', '순발력', '유연성', '근지구력', '심폐지구력', '실기 종목'],
    competitorTypes: ['종합 체육관', '스포츠센터', '체대 입시학원'],

    blogTopics: [
      { title: '초등학교 PAPS 체력 측정 완벽 대비법', description: '체력 측정 준비', keywords: ['PAPS', '체력 측정', '초등 체육'], type: 'tips' },
      { title: '체대 입시, 어떤 종목으로 준비할까?', description: '체대 입시 종목 안내', keywords: ['체대 입시', '실기 종목'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '새 학기 체육 교실 / PAPS 대비', keywords: ['새학기 체육', 'PAPS'], urgency: 'high' },
      { months: [7, 8], topic: '여름 스포츠 캠프', keywords: ['스포츠 캠프'], urgency: 'medium' },
    ],
    titlePatterns: ['{지역} 체육학원 - {특징}', 'PAPS {등급} 받는 체력 훈련법'],
    tagRecommendations: ['#체육학원', '#어린이체육', '#체대입시', '#줄넘기', '#체조교실', '#{지역}체육학원'],
    contentTone: '에너지 넘치고 건강한 톤. 운동하는 아이들 사진 활용.',
    successMetrics: ['체력 측정 등급', '대회 성적', '체대 합격률'],
  },

  // ──────────────── 연기/뮤지컬 ────────────────
  {
    id: 'arts:연기',
    category: 'arts',
    subject: '연기',
    displayName: '연기학원',
    description: '연기, 뮤지컬, 보컬 트레이닝. 예중·예고·대학 연극영화과 입시, 아역배우 양성.',

    coreKeywords: ['연기학원', '뮤지컬학원', '연극영화 입시', '아역배우', '보컬학원'],
    longTailKeywords: ['연기 입시 학원', '뮤지컬 오디션 준비', '아역 캐스팅', '연극영화과 대비'],
    locationKeywordPatterns: ['{지역} 연기학원', '{지역} 뮤지컬학원'],
    negativeKeywords: [],

    curriculum: ['기초 연기 (발성·감정표현·즉흥연기)', '뮤지컬 (노래+연기+댄스)', '보컬 트레이닝', '카메라 연기', '입시 대비 (자유/지정 연기)', '오디션 준비반'],
    targetAudience: ['연기/뮤지컬에 관심 있는 학생', '연극영화과 입시 준비생', '아역 활동을 원하는 어린이'],
    parentConcerns: ['연기를 전공하면 진로가 불안하지 않을까', '입시 실기는 어떻게 준비하나', '감정 표현이 서투른 아이'],
    sellingPoints: ['현직 배우/연출가 강사진', '정기 공연/쇼케이스', '1:1 피드백', '촬영 장비 보유'],
    industryTerms: ['모놀로그', '발성', '호흡', '즉흥연기', '대본 분석', '오디션', '쇼케이스', '감정 리콜'],
    competitorTypes: ['연기학원', '뮤지컬학원', '실용음악학원', '아역배우 소속사'],

    blogTopics: [
      { title: '연기 입시, 준비 시기와 과정 총정리', description: '입시 준비 가이드', keywords: ['연기 입시', '연극영화과'], type: 'info' },
      { title: '우리 학원 정기 공연 무대 뒤 이야기', description: '공연 현장 스케치', keywords: ['연기 공연', '쇼케이스'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [6, 7, 8], topic: '입시 실기 집중반 / 여름 워크숍', keywords: ['입시 실기', '연기 워크숍'], urgency: 'high' },
      { months: [12, 1], topic: '연말 공연 / 입시 마무리', keywords: ['공연', '입시 마무리'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 연기학원 - {특징}', '연극영화과 합격을 위한 {N}가지 준비'],
    tagRecommendations: ['#연기학원', '#뮤지컬학원', '#연극영화입시', '#연기레슨', '#{지역}연기학원'],
    contentTone: '감성적이고 열정적인 톤. 무대/연습 사진 활용.',
    successMetrics: ['연극영화과 합격률', '공연 참여 실적', '캐스팅/오디션 통과'],
  },

  // ──────────────── 영상/미디어 ────────────────
  {
    id: 'arts:미디어',
    category: 'arts',
    subject: '미디어',
    displayName: '미디어학원',
    description: '영상 제작, 유튜브, 사진, 영화, 미디어 리터러시 교육.',

    coreKeywords: ['영상 학원', '유튜브 교육', '영상 편집 학원', '미디어 교육', '사진 학원'],
    longTailKeywords: ['청소년 유튜브 교실', '영상 편집 프리미어', '1인 미디어 교육', '사진 촬영 강좌'],
    locationKeywordPatterns: ['{지역} 영상 학원', '{지역} 미디어 교육'],
    negativeKeywords: [],

    curriculum: ['영상 기획/촬영/편집 (프리미어/파이널컷)', '유튜브 콘텐츠 제작', '사진 촬영 (DSLR/미러리스)', '미디어 리터러시', '영화 제작 프로젝트'],
    targetAudience: ['1인 미디어에 관심 있는 청소년', '영상 관련 진로 희망 학생', '크리에이터를 꿈꾸는 학생'],
    parentConcerns: ['유튜브 활동이 공부에 방해되지 않을까', '미디어 관련 진로 전망은?'],
    sellingPoints: ['실무 장비 보유', '포트폴리오 구축', '현직 크리에이터/PD 강사', '프로젝트 기반 수업'],
    industryTerms: ['프리미어 프로', '파이널컷', '에프터이펙트', '색보정', '편집', 'B롤', '썸네일'],
    competitorTypes: ['미디어 교육센터', '영상 학원', '온라인 강좌'],

    blogTopics: [
      { title: '청소년 유튜브 교육, 이렇게 시작하세요', description: '건강한 미디어 활동 안내', keywords: ['유튜브 교육', '청소년 미디어'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [7, 8], topic: '방학 영상 제작 캠프', keywords: ['영상 캠프', '미디어 캠프'], urgency: 'medium' },
    ],
    titlePatterns: ['청소년 영상 제작 {기초/심화} 과정 소개', '{지역} 미디어 학원 - {특징}'],
    tagRecommendations: ['#영상학원', '#유튜브교육', '#미디어교육', '#영상편집', '#{지역}미디어학원'],
    contentTone: '트렌디하고 젊은 톤. 학생 작품 영상/이미지 활용.',
    successMetrics: ['학생 제작 콘텐츠 수', '영상 관련 대학 합격', '공모전 수상'],
  },
]
