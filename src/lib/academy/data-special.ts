/**
 * 특수/기타 학원 전문 지식 DB
 */
import type { AcademySubjectKnowledge } from './types'

export const SPECIAL_ACADEMY_DATA: AcademySubjectKnowledge[] = [
  // ──────────────── 코딩/SW ────────────────
  {
    id: 'special:코딩',
    category: 'special',
    subject: '코딩',
    displayName: '코딩학원',
    description: '초등~고등 코딩/SW 교육. 스크래치, 파이썬, 정보올림피아드, AI/로봇 교육.',

    coreKeywords: ['코딩학원', '코딩 교육', '초등 코딩', 'SW교육', '파이썬 학원'],
    longTailKeywords: [
      '초등 스크래치 학원', '파이썬 기초 학원', '정보올림피아드 대비', 'AI 교육',
      '코딩 자격증(COS)', '앱 만들기 수업', '로봇코딩', '아두이노 학원',
      'SW 특기자 전형', '코딩 영재원',
    ],
    locationKeywordPatterns: ['{지역} 코딩학원', '{지역} SW교육', '{지역} 코딩 교실'],
    negativeKeywords: ['코딩 무료 강좌'],

    curriculum: [
      '초등 블록코딩 (스크래치/엔트리)',
      '텍스트코딩 입문 (파이썬)',
      'C/C++ 알고리즘 (정보올림피아드 대비)',
      '앱 개발 (앱인벤터/Flutter)',
      '웹 개발 (HTML/CSS/JS)',
      'AI/머신러닝 기초',
      '로봇코딩 (아두이노/레고 EV3)',
      '3D 프린팅/메이킹',
    ],
    targetAudience: [
      '코딩 교육을 시작하려는 초등학생 학부모',
      '정보올림피아드/SW영재원 준비 학생',
      'SW 관련 대학 입시 준비 고등학생',
      '미래 IT 직업에 관심 있는 청소년',
    ],
    parentConcerns: [
      '코딩을 몇 살부터 시작해야 하나',
      '스크래치만 하면 되나, 파이썬도 해야 하나',
      '코딩이 입시에 도움이 되나',
      '수학을 잘해야 코딩을 잘하나',
      '게임만 만들면 게임 중독이 되지 않을까',
    ],
    sellingPoints: [
      '프로젝트 기반 학습 (PBL)',
      '소수정예 (4~8명)',
      '정보올림피아드 수상 실적',
      '포트폴리오 구축 지원',
      '현직 개발자 / 전공 강사',
      '최신 장비 (노트북/로봇킷) 제공',
    ],
    industryTerms: [
      '스크래치', '엔트리', '파이썬', 'C++', '알고리즘', '자료구조',
      '정보올림피아드(KOI)', 'COS(코딩활용능력)', '블록코딩', '텍스트코딩',
      'SW교육 의무화', 'CT(Computational Thinking)', '디버깅', 'API',
    ],
    competitorTypes: ['코딩전문학원', '로봇/메이커 학원', '온라인 코딩(코드잇/엘리스)', '방과후 코딩교실'],

    blogTopics: [
      { title: '초등 코딩, 몇 살부터 어떤 언어로 시작할까?', description: '연령별 코딩 교육 가이드', keywords: ['초등 코딩', '코딩 시작', '스크래치'], type: 'info' },
      { title: '스크래치 → 파이썬 전환, 최적 시기와 방법', description: '언어 전환 가이드', keywords: ['스크래치', '파이썬', '코딩 언어'], type: 'tips' },
      { title: '정보올림피아드, 준비 과정과 수상 후기', description: '대회 준비 가이드 + 수상 사례', keywords: ['정보올림피아드', 'KOI', '코딩 대회'], type: 'result' },
      { title: '우리 학원 학생이 만든 앱 소개', description: '학생 프로젝트 쇼케이스', keywords: ['앱 개발', '학생 작품', '코딩 프로젝트'], type: 'result' },
      { title: 'AI 시대, 코딩 교육이 필수인 이유', description: 'SW 교육의 미래 가치', keywords: ['코딩 교육', 'AI 시대', 'SW교육'], type: 'info' },
      { title: '여름방학 코딩 캠프 안내', description: '방학 특별 프로그램', keywords: ['코딩 캠프', '방학 코딩'], season: '6-7월', type: 'event' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '새 학기 코딩 입문반 / SW교육 의무화', keywords: ['코딩 시작', 'SW교육'], urgency: 'high' },
      { months: [7, 8], topic: '여름방학 코딩 캠프 / 프로젝트', keywords: ['코딩 캠프', '방학 코딩'], urgency: 'high' },
      { months: [5, 10], topic: '정보올림피아드 대비', keywords: ['정보올림피아드', 'KOI'], urgency: 'medium' },
    ],

    titlePatterns: ['초등 코딩 {시작 시기}에 시작하면 {결과}', '{지역} 코딩학원 - {특징}', '코딩 {프로그램}으로 {성과}를 이루다'],
    tagRecommendations: ['#코딩학원', '#코딩교육', '#스크래치', '#파이썬', '#정보올림피아드', '#{지역}코딩학원', '#SW교육'],
    contentTone: '미래지향적이고 논리적인 톤. 학생 작품/프로젝트 스크린샷 활용.',
    successMetrics: ['정보올림피아드 수상', 'COS 자격 취득', 'SW특기자 합격', '프로젝트 완성도'],
  },

  // ──────────────── 로봇/AI ────────────────
  {
    id: 'special:로봇',
    category: 'special',
    subject: '로봇',
    displayName: '로봇학원',
    description: '로봇 프로그래밍, AI 교육, 메이킹, 드론, STEM 융합교육.',

    coreKeywords: ['로봇학원', '로봇코딩', 'AI학원', '드론교육', 'STEM교육'],
    longTailKeywords: ['레고 로봇 학원', '아두이노 로봇', '로봇 대회 준비', 'AI 교육 초등', '드론 학원'],
    locationKeywordPatterns: ['{지역} 로봇학원', '{지역} AI교육'],
    negativeKeywords: [],

    curriculum: [
      '유아 블록 로봇 (레고 에듀케이션)', '레고 EV3/스파이크 프라임',
      '아두이노 로봇 제작', 'AI 인공지능 기초', '드론 조종 + 프로그래밍',
      '로봇 대회(WRO/FLL/로보컵) 대비', '3D 프린팅 + 메이킹',
    ],
    targetAudience: ['로봇/기계에 관심 있는 초등학생', '영재원/과학고 활동 실적 필요 학생', 'STEM 융합교육 관심 학부모'],
    parentConcerns: ['비용 대비 효과가 있을까', '단순 조립이 아닌 진짜 교육인가', '로봇 대회에 나가면 도움이 되나'],
    sellingPoints: ['최신 로봇 키트 보유', '대회 입상 실적', 'STEM 융합 커리큘럼', '프로젝트 기반 수업'],
    industryTerms: ['WRO', 'FLL', 'FRC', '로보컵', 'EV3', '스파이크', '아두이노', '라즈베리파이', '센서', '모터'],
    competitorTypes: ['로봇전문학원', '코딩학원 로봇반', '메이커스페이스'],

    blogTopics: [
      { title: '아이가 만든 로봇이 움직이는 순간 - 수업 현장', description: '수업 현장 소개', keywords: ['로봇 수업', '로봇 만들기'], type: 'intro' },
      { title: 'WRO 대회 출전 준비 과정과 결과', description: '대회 후기', keywords: ['WRO', '로봇 대회'], type: 'result' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '새 학기 로봇 입문반', keywords: ['로봇 시작'], urgency: 'high' },
      { months: [7, 8], topic: '여름 메이킹 캠프 / 대회 준비', keywords: ['로봇 캠프', '대회 준비'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 로봇학원 - {특징}', '로봇 교육이 아이에게 주는 {N}가지 효과'],
    tagRecommendations: ['#로봇학원', '#로봇코딩', '#AI교육', '#STEM', '#드론교육', '#{지역}로봇학원'],
    contentTone: '흥미롭고 미래지향적인 톤. 로봇/작품 사진 필수.',
    successMetrics: ['로봇 대회 입상', '영재원 합격', '프로젝트 완성'],
  },

  // ──────────────── 요리/제과제빵 ────────────────
  {
    id: 'special:요리',
    category: 'special',
    subject: '요리',
    displayName: '요리학원',
    description: '요리, 제과제빵, 바리스타 교육. 자격증 취득, 취미 요리, 아동 쿠킹클래스.',

    coreKeywords: ['요리학원', '제과제빵학원', '쿠킹클래스', '요리 자격증', '베이킹 학원'],
    longTailKeywords: ['한식조리기능사', '제과기능사', '어린이 쿠킹클래스', '원데이 베이킹', '케이크 만들기'],
    locationKeywordPatterns: ['{지역} 요리학원', '{지역} 제과제빵', '{지역} 쿠킹클래스'],
    negativeKeywords: [],

    curriculum: [
      '한식/양식/중식/일식 조리기능사', '제과기능사/제빵기능사',
      '취미 요리/홈쿠킹', '어린이 쿠킹클래스', '원데이 베이킹 클래스',
      '바리스타 자격증', '푸드스타일링',
    ],
    targetAudience: ['조리 자격증 취득 희망자', '요리를 취미로 배우려는 성인', '아이와 함께 요리하고 싶은 학부모'],
    parentConcerns: ['자격증 취득 기간은?', '실습 재료비가 별도인가', '취업 연계가 되나'],
    sellingPoints: ['높은 자격증 합격률', '1인 1실습 (충분한 재료)', '소수정예 수업', '취업/창업 연계'],
    industryTerms: ['한식조리기능사', '양식조리기능사', '제과기능사', '제빵기능사', '바리스타', '위생교육'],
    competitorTypes: ['직업전문학교', '쿠킹스튜디오', '문화센터 요리교실'],

    blogTopics: [
      { title: '제과기능사 시험, 한 번에 합격하는 준비법', description: '자격증 대비 가이드', keywords: ['제과기능사', '자격증', '합격'], type: 'tips' },
      { title: '아이와 함께하는 주말 쿠킹클래스 체험기', description: '수업 체험 후기', keywords: ['쿠킹클래스', '어린이 요리'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [1, 7], topic: '방학 쿠킹클래스 / 자격증 단기반', keywords: ['방학 요리', '자격증 단기'], urgency: 'high' },
      { months: [12], topic: '크리스마스 베이킹 원데이', keywords: ['크리스마스 베이킹'], urgency: 'medium' },
    ],
    titlePatterns: ['{자격증} {기간}만에 합격 후기', '{지역} 요리학원 - {특징}'],
    tagRecommendations: ['#요리학원', '#제과제빵', '#쿠킹클래스', '#요리자격증', '#{지역}요리학원'],
    contentTone: '맛있고 따뜻한 톤. 요리 과정/완성 사진 필수.',
    successMetrics: ['자격증 합격률', '취업/창업 연계', '수강생 만족도'],
  },

  // ──────────────── 운전면허 ────────────────
  {
    id: 'special:운전',
    category: 'special',
    subject: '운전',
    displayName: '운전학원',
    description: '1종/2종 보통 운전면허 취득, 도로연수, 장롱면허 연수.',

    coreKeywords: ['운전학원', '운전면허', '도로연수', '장롱면허', '운전면허 시험'],
    longTailKeywords: ['운전면허 비용', '운전면허 기간', '도로연수 추천', '자동차 학원 가격', '2종 보통 코스'],
    locationKeywordPatterns: ['{지역} 운전학원', '{지역} 도로연수'],
    negativeKeywords: [],

    curriculum: ['학과 교육 + 필기시험 대비', '장내기능 (T코스/S코스)', '도로주행', '면허취득 후 도로연수', '장롱면허 연수'],
    targetAudience: ['처음 운전면허를 따려는 성인', '장롱면허 탈출 희망자', '외국 면허 전환'],
    parentConcerns: ['기간이 얼마나 걸리나', '한 번에 합격할 수 있나', '비용은 총 얼마인가'],
    sellingPoints: ['높은 합격률', '셔틀버스 운행', '주말/야간 수업', '1:1 맞춤 교육'],
    industryTerms: ['학과시험', '기능시험', '도로주행', 'T코스', 'S코스', '직진', '좌회전', '차로변경'],
    competitorTypes: ['인근 운전학원', '도로연수 전문업체'],

    blogTopics: [
      { title: '운전면허 한 번에 따는 꿀팁', description: '합격 노하우', keywords: ['운전면허', '합격 팁'], type: 'tips' },
      { title: '장롱면허 탈출, 도로연수 10시간 후기', description: '도로연수 체험기', keywords: ['장롱면허', '도로연수'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [1, 2, 7, 8], topic: '방학 시즌 면허 취득 러시', keywords: ['방학 운전면허'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 운전학원 - {합격률}% 합격률', '운전면허 {기간}만에 취득 후기'],
    tagRecommendations: ['#운전학원', '#운전면허', '#도로연수', '#장롱면허', '#{지역}운전학원'],
    contentTone: '실용적이고 친근한 톤. 시험 과정을 상세히 설명.',
    successMetrics: ['합격률', '평균 취득 기간', '수강생 만족도'],
  },

  // ──────────────── 바리스타/자격증 ────────────────
  {
    id: 'special:바리스타',
    category: 'special',
    subject: '바리스타',
    displayName: '바리스타학원',
    description: '바리스타 자격증, 커피 교육, 카페 창업 과정, 라떼아트.',

    coreKeywords: ['바리스타학원', '바리스타 자격증', '커피 교육', '카페 창업', '라떼아트'],
    longTailKeywords: ['바리스타 2급', '커피 원데이클래스', '카페 창업 과정', '홈카페 배우기'],
    locationKeywordPatterns: ['{지역} 바리스타학원', '{지역} 커피교육'],
    negativeKeywords: [],

    curriculum: ['바리스타 2급/1급 자격증', '에스프레소 추출 실습', '라떼아트', '핸드드립/브루잉', '카페 창업 과정', '커피 로스팅'],
    targetAudience: ['바리스타 자격증 취득 희망자', '카페 창업 예정자', '커피를 취미로 배우려는 성인'],
    parentConcerns: ['자격증이 취업에 도움이 되나', '실습 기회가 충분한가'],
    sellingPoints: ['실무 중심 실습', '높은 자격증 합격률', '카페 현장 실습 연계', '소수정예'],
    industryTerms: ['에스프레소', '그라인더', '탬핑', '스티밍', '라떼아트', '드립', '로스팅', 'SCA'],
    competitorTypes: ['커피 전문학원', '직업학교 바리스타과', '문화센터'],

    blogTopics: [
      { title: '바리스타 자격증, 독학 vs 학원 비교', description: '취득 방법 비교', keywords: ['바리스타 자격증', '독학', '학원'], type: 'comparison' },
      { title: '라떼아트 기초, 하트 모양 만들기', description: '라떼아트 입문', keywords: ['라떼아트', '바리스타'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [3, 9], topic: '새 시즌 자격증반 개강', keywords: ['바리스타 자격증'], urgency: 'high' },
    ],
    titlePatterns: ['바리스타 자격증 {기간}만에 취득 후기', '{지역} 바리스타학원 - {특징}'],
    tagRecommendations: ['#바리스타', '#바리스타자격증', '#커피교육', '#라떼아트', '#{지역}바리스타학원'],
    contentTone: '감성적이고 따뜻한 톤. 커피 사진 적극 활용.',
    successMetrics: ['자격증 합격률', '카페 창업 연계', '수강생 만족도'],
  },

  // ──────────────── 속셈/주산 ────────────────
  {
    id: 'special:속셈',
    category: 'special',
    subject: '속셈',
    displayName: '주산암산학원',
    description: '주산, 암산, 속셈 교육. 계산력·집중력·두뇌 개발. 유아~초등 대상.',

    coreKeywords: ['주산학원', '암산학원', '속셈학원', '주산암산', '계산력 학원'],
    longTailKeywords: ['유아 주산', '초등 암산', '주산 급수', '암산 대회', '두뇌 개발'],
    locationKeywordPatterns: ['{지역} 주산학원', '{지역} 속셈학원'],
    negativeKeywords: [],

    curriculum: ['주산 기초 (숫자 놓기)', '암산 훈련 (급수별)', '속셈 대회 준비', '두뇌계발 프로그램'],
    targetAudience: ['계산력을 키우고 싶은 초등학생 학부모', '집중력 향상이 필요한 유아'],
    parentConcerns: ['주산이 수학에 도움이 되나', '암기식 학습이 아닌지', '몇 살부터 가능한가'],
    sellingPoints: ['급수제 단계별 교육', '집중력·두뇌 개발 효과', '전국 암산대회 참여', '소수정예 수업'],
    industryTerms: ['주판', '보수', '급수(10급~단)', '암산', '속산', '플래시 암산'],
    competitorTypes: ['주산전문학원', '수학학원', '두뇌개발 학원'],

    blogTopics: [
      { title: '주산, 수학 성적에 정말 도움이 될까?', description: '주산 교육 효과 분석', keywords: ['주산', '수학', '계산력'], type: 'info' },
      { title: '암산 대회 입상 학생 인터뷰', description: '대회 수상 후기', keywords: ['암산 대회', '입상'], type: 'result' },
    ],
    seasonalTopics: [
      { months: [3], topic: '새 학기 주산 입문', keywords: ['주산 시작'], urgency: 'high' },
      { months: [6, 11], topic: '전국 암산대회 시즌', keywords: ['암산대회'], urgency: 'medium' },
    ],
    titlePatterns: ['주산이 아이 {능력}을 키우는 이유', '{지역} 주산학원 - {특징}'],
    tagRecommendations: ['#주산학원', '#암산', '#속셈', '#계산력', '#두뇌개발', '#{지역}주산학원'],
    contentTone: '교육적이고 신뢰감 있는 톤. 두뇌 개발 효과 강조.',
    successMetrics: ['급수 승급', '암산대회 입상', '수학 성적 연계'],
  },

  // ──────────────── 독서/토론 ────────────────
  {
    id: 'special:독서',
    category: 'special',
    subject: '독서',
    displayName: '독서토론학원',
    description: '독서 지도, 토론 교육, 글쓰기, 논리적 사고력 훈련. 유아~중등 대상.',

    coreKeywords: ['독서토론학원', '독서 지도', '토론 학원', '글쓰기 학원', '논리사고력'],
    longTailKeywords: ['초등 독서토론', '하브루타 교육', '디베이트 학원', '독서 감상문 쓰기', '논리적 사고'],
    locationKeywordPatterns: ['{지역} 독서토론', '{지역} 토론학원'],
    negativeKeywords: [],

    curriculum: ['독서 습관 형성 (유아~초등)', '하브루타 독서 토론', '디베이트(찬반토론)', '독서 감상문/서평 쓰기', '논술 글쓰기', '비판적 사고력 훈련'],
    targetAudience: ['책 읽기를 좋아하지만 깊이가 부족한 학생', '토론/발표력을 키우고 싶은 학생', '글쓰기 실력을 향상시키고 싶은 학생'],
    parentConcerns: ['아이가 책은 읽는데 독해가 안 된다', '발표를 두려워한다', '글쓰기를 어려워한다'],
    sellingPoints: ['소수정예 토론 수업', '다양한 장르 필독서 커리큘럼', '첨삭 기반 글쓰기 지도', '발표력+논리력 동시 향상'],
    industryTerms: ['하브루타', '디베이트', '비판적 사고', '창의적 글쓰기', '필독서', '독서록'],
    competitorTypes: ['독서논술 학원', '토론전문 학원', '방과후 독서교실', '독서지도사 과외'],

    blogTopics: [
      { title: '초등 독서 토론, 어떤 효과가 있을까?', description: '독서토론 교육 효과', keywords: ['독서토론', '초등', '효과'], type: 'info' },
      { title: '토론을 잘하는 아이의 공통 특징 5가지', description: '토론 능력 분석', keywords: ['토론', '발표력', '논리력'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [3], topic: '새 학기 독서토론 개강', keywords: ['독서토론 시작'], urgency: 'high' },
      { months: [7, 8], topic: '방학 독서 프로그램', keywords: ['방학 독서'], urgency: 'high' },
    ],
    titlePatterns: ['독서토론이 {학년} 아이에게 주는 {효과}', '{지역} 독서토론 학원 - {특징}'],
    tagRecommendations: ['#독서토론', '#토론학원', '#글쓰기', '#독서교육', '#{지역}독서토론'],
    contentTone: '지적이면서 따뜻한 톤. 책 추천, 토론 주제 예시 활용.',
    successMetrics: ['독서량 증가', '글쓰기 실력 향상', '토론대회 수상', '독서인증 레벨'],
  },

  // ──────────────── 방문학습 ────────────────
  {
    id: 'special:방문',
    category: 'special',
    subject: '방문',
    displayName: '방문학습',
    description: '가정 방문 형태의 학습지/과외. 구몬, 눈높이, 빨간펜 등 학습지부터 1:1 방문과외까지.',

    coreKeywords: ['방문학습', '학습지', '방문과외', '홈스쿨링', '가정방문교육'],
    longTailKeywords: ['유아 학습지 추천', '초등 방문학습', '학습지 비교', '방문과외 vs 학원', '자기주도학습 학습지'],
    locationKeywordPatterns: ['{지역} 방문학습', '{지역} 방문과외'],
    negativeKeywords: [],

    curriculum: ['유아 한글/수 기초', '초등 전과목 학습지', '1:1 맞춤 방문과외', '자기주도학습 관리', '학습 습관 형성 프로그램'],
    targetAudience: ['학원 이동이 어려운 가정', '1:1 맞춤 교육을 원하는 학부모', '자기주도학습 습관을 잡아주고 싶은 학부모'],
    parentConcerns: ['학습지만으로 충분한가', '선생님이 자주 바뀌면 어떡하나', '학원 vs 방문학습 어디가 나은가'],
    sellingPoints: ['1:1 맞춤 학습', '가정 방문 편의성', '아이 성향 파악 용이', '부모 상담 연계'],
    industryTerms: ['방문선생님', '학습관리', '학습지', '진도표', '월간 리포트'],
    competitorTypes: ['대형 학습지(구몬/눈높이/빨간펜)', '방문과외', '온라인 학습'],

    blogTopics: [
      { title: '학습지 vs 학원, 우리 아이에게 뭐가 맞을까?', description: '학습 형태 비교', keywords: ['학습지', '학원', '비교'], type: 'comparison' },
      { title: '방문학습 선생님이 알려주는 학습 습관 잡기', description: '학습 습관 팁', keywords: ['방문학습', '학습 습관'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [3], topic: '새 학기 방문학습 시작', keywords: ['새학기 학습지'], urgency: 'high' },
      { months: [7, 12], topic: '방학 집중 학습 프로그램', keywords: ['방학 학습지'], urgency: 'medium' },
    ],
    titlePatterns: ['방문학습 {기간} 후 변화 후기', '{학습지} vs {학습지} 비교'],
    tagRecommendations: ['#방문학습', '#학습지', '#방문과외', '#홈스쿨링', '#{지역}방문학습'],
    contentTone: '따뜻하고 세심한 톤. 아이와 선생님의 관계 강조.',
    successMetrics: ['학습 습관 변화', '성적 향상', '학부모 만족도'],
  },
]
