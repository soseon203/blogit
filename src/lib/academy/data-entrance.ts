/**
 * 입시·보습 학원 전문 지식 DB
 */
import type { AcademySubjectKnowledge } from './types'

export const ENTRANCE_ACADEMY_DATA: AcademySubjectKnowledge[] = [
  // ──────────────── 수학 ────────────────
  {
    id: 'entrance:수학',
    category: 'entrance',
    subject: '수학',
    displayName: '수학학원',
    description: '초·중·고 수학 전문 학원. 선행학습, 내신 대비, 수능 수학, 경시대회 등을 포함.',

    coreKeywords: [
      '수학학원', '수학 잘하는법', '수학 선행', '수학 과외', '수능 수학',
      '중등 수학', '고등 수학', '초등 수학', '수학 학원 추천', '수학 내신',
    ],
    longTailKeywords: [
      '중학교 수학 선행학습 커리큘럼', '고1 수학 내신 대비', '수능 수학 킬러문항 대비',
      '초등 사고력 수학', '중등 수학 어려워하는 아이', '수학 기초 잡는 법',
      '고2 수학 문과 이과 차이', '수능 수학 1등급 학원', '영재원 수학 대비',
      '중3 고등 수학 선행 시작 시기', '수포자 탈출 학원', '수학 자신감 키우기',
    ],
    locationKeywordPatterns: [
      '{지역} 수학학원', '{지역} 수학학원 추천', '{지역} 수학 과외',
      '{지역} 초등 수학', '{지역} 중등 수학 학원', '{지역} 고등 수학 전문',
    ],
    negativeKeywords: ['무료 수학 문제', '수학 답지', '수학 족보'],

    curriculum: [
      '초등 사고력 수학 / 연산 강화반',
      '중등 선행반 (중1~중3 과정)',
      '고등 선행반 (수학Ⅰ·Ⅱ, 미적분, 확률과통계, 기하)',
      '내신 기출 분석 + 고득점 대비반',
      '수능 킬러문항 / 준킬러 특강',
      '수학 기초 보강반 (수포자 탈출)',
      '영재원 / 경시 대비 심화반',
      '1:1 맞춤 과외식 수업',
    ],
    targetAudience: [
      '선행학습을 시키고 싶은 초등 고학년 학부모',
      '내신 성적 향상이 필요한 중학생 학부모',
      '수능 수학 고득점을 목표로 하는 고등학생',
      '수학 기초가 부족한 학생 (수포자)',
      '영재원/과학고 준비 중인 학생',
    ],
    parentConcerns: [
      '아이가 수학을 싫어해서 흥미를 잃었다',
      '선행을 어디까지 해야 하는지 모르겠다',
      '내신은 좋은데 모의고사 성적이 안 나온다',
      '개념은 아는데 응용이 안 된다',
      '학원을 다녀도 성적이 오르지 않는다',
      '소수정예 vs 대형 학원 어디가 좋을까',
    ],
    sellingPoints: [
      '개념 → 유형 → 심화 3단계 시스템',
      '주간/월간 테스트 + 오답노트 관리',
      '소수정예 맞춤 수업 (6~10명)',
      '내신 기출 데이터베이스 보유',
      '수학 전공 / 경력 강사진',
      '자습실 + 질문 가능 시스템',
    ],
    industryTerms: [
      '선행학습', '사고력수학', '킬러문항', '준킬러', '수포자',
      '유형별 풀이', '오답노트', '기출분석', 'N제', '모의고사',
      '내신 마감반', '수능특강', '수능완성', 'EBS 연계', '등급컷',
    ],
    competitorTypes: ['대형 수학 프랜차이즈', '1인 수학학원', '과외/그룹과외', '인강/온라인 수학'],

    blogTopics: [
      { title: '중학교 수학 선행, 언제 시작해야 할까?', description: '적절한 선행 시기와 진도 가이드', keywords: ['수학 선행', '중등 수학', '선행학습 시기'], season: '1-2월', type: 'info' },
      { title: '수포자 탈출 성공기 - 3개월 만에 60점→90점', description: '실제 학생 성적 향상 사례', keywords: ['수포자', '수학 성적 올리기', '수학 기초'], type: 'result' },
      { title: '수능 수학 1등급 받는 학생의 공부법', description: '상위권 학생 학습 습관 분석', keywords: ['수능 수학', '1등급', '수학 공부법'], season: '연중', type: 'tips' },
      { title: '초등 사고력 수학 vs 연산 수학, 뭐가 더 중요할까?', description: '초등 수학 학습 방향 제시', keywords: ['초등 수학', '사고력 수학', '연산'], type: 'comparison' },
      { title: '우리 학원 1학기 중간고사 내신 결과 발표', description: '내신 성적 향상 실적 공유', keywords: ['내신 대비', '중간고사', '수학 성적'], season: '5월, 10월', type: 'result' },
      { title: '고1 수학 어려운 단원 TOP5와 대비법', description: '고등 수학 난이도 분석', keywords: ['고1 수학', '어려운 단원', '수학 대비'], type: 'tips' },
      { title: '여름방학 수학 특강 안내', description: '방학 집중반 모집 안내', keywords: ['방학 특강', '수학 방학', '여름방학 학원'], season: '6-7월', type: 'event' },
      { title: '우리 학원 수학 선생님을 소개합니다', description: '강사진 경력 및 교육 철학', keywords: ['수학 선생님', '수학 강사', '학원 소개'], type: 'intro' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '새 학기 선행반 모집 / 겨울방학 특강', keywords: ['겨울방학 수학', '새학기 선행', '수학 선행반'], urgency: 'high' },
      { months: [3, 4], topic: '새 학기 적응 / 첫 시험 대비', keywords: ['새학기 수학', '1학기 중간고사', '수학 시험'], urgency: 'high' },
      { months: [5], topic: '중간고사 결과 분석 / 기말 대비', keywords: ['중간고사 수학', '기말고사 대비', '성적 분석'], urgency: 'medium' },
      { months: [6, 7], topic: '여름방학 특강 / 2학기 선행', keywords: ['여름방학 수학', '방학 특강', '2학기 선행'], urgency: 'high' },
      { months: [8], topic: '2학기 대비 / 9월 모의고사 준비', keywords: ['2학기 수학', '모의고사', '9월 모의'], urgency: 'medium' },
      { months: [9, 10], topic: '2학기 중간고사 / 수능 D-100', keywords: ['2학기 중간고사', '수능 수학', '수능 D-100'], urgency: 'high' },
      { months: [11], topic: '수능 직전 마무리 / 기말고사 대비', keywords: ['수능 마무리', '기말고사 수학'], urgency: 'high' },
      { months: [12], topic: '겨울방학 선행 모집 / 정시 대비', keywords: ['겨울방학 선행', '정시 수학'], urgency: 'high' },
    ],

    titlePatterns: [
      '{지역} 수학학원 추천 - {차별점}',
      '{학년} 수학 {점수}점 올리는 비결',
      '수학 선행, {시기}에 시작하면 {결과}',
      '{시험} 수학 대비 - {학원명} {실적}',
    ],
    tagRecommendations: [
      '#수학학원', '#수학선행', '#내신수학', '#수능수학', '#수포자탈출',
      '#수학공부법', '#{지역}수학학원', '#중등수학', '#고등수학', '#수학과외',
    ],
    contentTone: '전문적이면서도 학부모 입장에서 이해하기 쉬운 톤. 데이터(점수, 등급)를 근거로 제시하되 과도한 자랑은 지양.',
    successMetrics: ['내신 평균 등급 향상', '수능 등급 분포', '100점 / 만점자 배출', '상위권 비율 변화'],
  },

  // ──────────────── 영어 ────────────────
  {
    id: 'entrance:영어',
    category: 'entrance',
    subject: '영어',
    displayName: '영어학원',
    description: '초·중·고 영어 전문 학원. 문법, 독해, 듣기, 내신, 수능영어, 영어 원서 등.',

    coreKeywords: [
      '영어학원', '영어학원 추천', '초등 영어', '중등 영어', '고등 영어',
      '영어 내신', '수능 영어', '영어 문법', '영어 독해', '영어 회화',
    ],
    longTailKeywords: [
      '초등 영어 학원 시작 시기', '중학교 영어 내신 대비', '수능 영어 1등급 학원',
      '영어 원서 읽기 학원', '초등 파닉스 학원', '영어 문법 기초 잡기',
      '내신 영어 서술형 대비', '고1 영어 절대평가 대비', '영어 듣기 만점 전략',
      '토셀 / TOEFL Junior 대비', '영자신문 읽기 수업',
    ],
    locationKeywordPatterns: [
      '{지역} 영어학원', '{지역} 영어학원 추천', '{지역} 초등 영어',
      '{지역} 중등 영어 내신', '{지역} 수능 영어 학원',
    ],
    negativeKeywords: ['영어 무료 강의', '영어 답지'],

    curriculum: [
      '초등 파닉스 / 리딩 기초반',
      '초등 원서 리딩 + 보캅 확장',
      '중등 문법 체계 완성반',
      '중등 독해 + 서술형 대비반',
      '고등 수능 영어 절대평가 대비',
      '내신 기출 + 서술형 특강',
      '영어 듣기 집중반',
      'TOEFL / TOEIC 기초반',
    ],
    targetAudience: [
      '영어 조기교육을 고민하는 초등 저학년 학부모',
      '내신 영어 성적 향상이 필요한 중학생',
      '수능 영어 절대평가 1등급을 목표로 하는 고등학생',
      '영어 기초가 부족해 자신감이 없는 학생',
      '해외 유학/어학연수를 준비하는 학생',
    ],
    parentConcerns: [
      '영어 학원을 언제부터 보내야 할까',
      '파닉스가 끝났는데 다음 단계는?',
      '문법을 외워도 독해가 안 된다',
      '듣기는 되는데 읽기가 약하다',
      '서술형 시험에서 점수가 깎인다',
      '수능 영어 절대평가 1등급이 안 나온다',
    ],
    sellingPoints: [
      '4Skills 통합 수업 (Reading·Writing·Listening·Speaking)',
      '원어민 + 한국인 강사 이중 시스템',
      '레벨테스트 기반 맞춤 반 배정',
      '매주 단어 테스트 + 문장 암기',
      '서술형 첨삭 개별 피드백',
      '영어 원서 라이브러리 운영',
    ],
    industryTerms: [
      '파닉스', '사이트워드', 'Lexile지수', 'AR레벨', '리딩레벨',
      '4Skills', '서술형', '절대평가', 'EBS 연계', '변형문제',
      '어법', '빈칸추론', '순서배열', '장문독해', '듣기모의고사',
    ],
    competitorTypes: ['영어전문학원(CDI/JLS 등)', '원어민 회화학원', '내신전문학원', '온라인 영어(엘리하이 등)'],

    blogTopics: [
      { title: '초등 영어, 파닉스 다음 단계는? 원서 리딩 로드맵', description: '파닉스 이후 학습 경로 제시', keywords: ['초등 영어', '파닉스', '원서 리딩'], type: 'tips' },
      { title: '중학 영어 서술형 만점 전략 3가지', description: '서술형 시험 대비 노하우', keywords: ['영어 서술형', '중학 영어', '내신 대비'], type: 'tips' },
      { title: '수능 영어 절대평가, 1등급 받는 학생들의 공통점', description: '상위권 학습 패턴 분석', keywords: ['수능 영어', '절대평가', '1등급'], type: 'info' },
      { title: '영어학원 3개월 수강 후기 - 레벨 2단계 상승', description: '실제 학생 후기', keywords: ['영어학원 후기', '영어 실력 향상'], type: 'review' },
      { title: '겨울방학 영어 원서 읽기 챌린지', description: '방학 이벤트/프로그램 소개', keywords: ['겨울방학 영어', '원서 읽기', '영어 챌린지'], season: '12-1월', type: 'event' },
      { title: '우리 학원 레벨테스트 무료 체험 안내', description: '신규 학생 모집 이벤트', keywords: ['영어 레벨테스트', '영어학원 체험'], type: 'event' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '겨울방학 영어 집중반 / 새학기 레벨업', keywords: ['겨울방학 영어', '영어 레벨업'], urgency: 'high' },
      { months: [3, 4], topic: '새 학기 반편성 / 중간고사 영어', keywords: ['새학기 영어', '중간고사 영어'], urgency: 'high' },
      { months: [6, 7], topic: '여름방학 영어캠프 / 원서 읽기', keywords: ['여름방학 영어', '영어 캠프'], urgency: 'high' },
      { months: [9, 10], topic: '2학기 내신 / 수능 영어 마무리', keywords: ['2학기 영어', '수능 영어'], urgency: 'high' },
      { months: [11, 12], topic: '수능 후 진로 영어 / 겨울방학 선행', keywords: ['수능 후 영어', '겨울방학'], urgency: 'medium' },
    ],

    titlePatterns: [
      '{지역} 영어학원 - {특징}으로 {결과}',
      '{학년} 영어 내신 {등급} 달성 비결',
      '영어 {영역} 약한 학생을 위한 {해결책}',
    ],
    tagRecommendations: [
      '#영어학원', '#초등영어', '#중등영어', '#수능영어', '#영어내신',
      '#영어문법', '#영어독해', '#{지역}영어학원', '#서술형대비', '#파닉스',
    ],
    contentTone: '학부모 관점에서 자녀의 영어 실력 향상 과정을 공감하며 설명. 구체적 레벨 기준과 성과 데이터 활용.',
    successMetrics: ['레벨 상승 단계', '내신 등급 향상', '수능 등급', '영어 인증시험 점수(TOEFL Jr 등)'],
  },

  // ──────────────── 국어 ────────────────
  {
    id: 'entrance:국어',
    category: 'entrance',
    subject: '국어',
    displayName: '국어학원',
    description: '초·중·고 국어/논술 전문 학원. 독서, 독해력, 서술형, 수능 국어(비문학·문학·화법과작문).',

    coreKeywords: ['국어학원', '국어 논술', '독서 논술', '수능 국어', '국어 내신', '독해력 학원'],
    longTailKeywords: [
      '초등 독서 논술 학원', '중학 국어 서술형 대비', '수능 국어 비문학 공부법',
      '국어 독해력 키우는 방법', '고등 국어 문학 분석', '화법과 작문 내신',
      '국어 1등급 학원', '문해력 키우기',
    ],
    locationKeywordPatterns: ['{지역} 국어학원', '{지역} 논술학원', '{지역} 독서논술'],
    negativeKeywords: [],

    curriculum: [
      '초등 독서 논술 (독해력 + 사고력)',
      '중등 국어 문법 + 서술형 대비',
      '고등 문학 작품 분석 / 비문학 독해 훈련',
      '수능 국어 (독서·문학·화법작문·언어와매체)',
      '논술 / 구술면접 대비',
    ],
    targetAudience: ['독해력이 부족한 초등학생', '서술형 시험 대비가 필요한 중학생', '수능 국어 고득점 목표 고등학생'],
    parentConcerns: [
      '아이가 책을 안 읽어서 독해력이 걱정된다',
      '수학·영어는 하는데 국어 성적이 안 오른다',
      '서술형 답안 작성을 어려워한다',
      '수능 국어 비문학이 너무 어렵다',
    ],
    sellingPoints: ['단계별 독해력 훈련 프로그램', '기출 지문 정밀 분석', '첨삭 기반 서술형/논술 지도', '독서 습관 형성 관리'],
    industryTerms: ['비문학', '문학', '화법과작문', '언어와매체', '독해력', '문해력', '서술형', '논술', '지문 분석', 'EBS 연계'],
    competitorTypes: ['국어 전문학원', '논술학원', '독서실/독서토론', '종합학원 국어반'],

    blogTopics: [
      { title: '초등 독해력, 이렇게 키워주세요', description: '연령별 독해력 발달 가이드', keywords: ['독해력', '초등 국어', '독서'], type: 'tips' },
      { title: '수능 국어 비문학 3분 안에 풀기', description: '시간 관리 + 독해 전략', keywords: ['수능 국어', '비문학', '시간 관리'], type: 'tips' },
      { title: '국어 서술형 점수 올리는 핵심 포인트', description: '서술형 채점 기준 분석', keywords: ['서술형', '국어 내신'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '겨울방학 독서 프로그램', keywords: ['겨울방학 독서', '독서 논술'], urgency: 'high' },
      { months: [6, 7], topic: '여름방학 독해력 집중반', keywords: ['여름방학 국어', '독해력'], urgency: 'high' },
      { months: [9, 10], topic: '수능 국어 파이널 / 2학기 내신', keywords: ['수능 국어', '기말고사'], urgency: 'high' },
    ],
    titlePatterns: ['{학년} 국어 {영역} 점수 올리는 법', '{지역} 국어학원 - {특징}'],
    tagRecommendations: ['#국어학원', '#독해력', '#수능국어', '#서술형', '#독서논술', '#비문학', '#{지역}국어학원'],
    contentTone: '문학적 감성과 논리적 분석을 겸비한 톤. 실제 지문 예시를 활용.',
    successMetrics: ['독해력 레벨 향상', '국어 내신 등급', '수능 국어 등급', '논술 합격률'],
  },

  // ──────────────── 과학 ────────────────
  {
    id: 'entrance:과학',
    category: 'entrance',
    subject: '과학',
    displayName: '과학학원',
    description: '초·중·고 과학 전문 학원. 물리, 화학, 생명과학, 지구과학, 과학탐구, 과학고/영재고 대비.',

    coreKeywords: ['과학학원', '과학 실험 학원', '물리학원', '화학학원', '과학고 대비', '영재원 대비'],
    longTailKeywords: [
      '초등 과학 실험 학원', '중등 과학 내신', '고등 물리 화학 선행',
      '과학고 영재고 입시', '과학탐구 수능', '과학 올림피아드',
      '생명과학 1등급', '지구과학 학원',
    ],
    locationKeywordPatterns: ['{지역} 과학학원', '{지역} 과학실험', '{지역} 과학고 대비'],
    negativeKeywords: [],

    curriculum: [
      '초등 과학실험 탐구반', '중등 과학 선행 + 내신',
      '고등 물리학Ⅰ·Ⅱ / 화학Ⅰ·Ⅱ / 생명과학Ⅰ·Ⅱ / 지구과학Ⅰ·Ⅱ',
      '과학고·영재고 입시 대비', '과학 올림피아드 심화',
    ],
    targetAudience: ['과학 흥미 유발이 필요한 초등학생', '과학고/영재고 지원 학생', '수능 과탐 고득점 목표 학생'],
    parentConcerns: ['과학을 재미없어 한다', '물리/화학이 너무 어렵다', '과학고 준비는 언제부터?', '탐구 과목 선택이 고민'],
    sellingPoints: ['직접 실험 중심 수업', '과학고/영재고 합격 실적', '개념+문제풀이 병행', '탐구보고서 작성 지도'],
    industryTerms: ['탐구실험', '과학탐구', '물화생지', 'KMO', 'KPhO', 'KBMO', '영재원', '과학고', 'R&E', '탐구보고서'],
    competitorTypes: ['과학전문학원', '과학고 입시학원', '실험전문교습소'],

    blogTopics: [
      { title: '과학고 입시, 준비 시기와 로드맵', description: '과학고 입시 전략', keywords: ['과학고', '영재고', '입시'], season: '3-5월', type: 'info' },
      { title: '재미있는 과학 실험 수업 현장', description: '학원 수업 현장 소개', keywords: ['과학 실험', '초등 과학'], type: 'intro' },
      { title: '수능 탐구 물리 vs 화학, 어떤 과목이 유리할까?', description: '과탐 과목 선택 가이드', keywords: ['수능 탐구', '물리', '화학'], type: 'comparison' },
    ],
    seasonalTopics: [
      { months: [3, 4, 5], topic: '과학고/영재고 입시 시즌', keywords: ['과학고 입시', '영재원'], urgency: 'high' },
      { months: [7, 8], topic: '방학 과학캠프 / 탐구대회 준비', keywords: ['과학캠프', '탐구대회'], urgency: 'medium' },
    ],
    titlePatterns: ['과학고 합격하려면 {시기}부터 {방법}', '{지역} 과학학원 - 실험으로 배우는 {과목}'],
    tagRecommendations: ['#과학학원', '#과학실험', '#과학고', '#영재원', '#물리', '#화학', '#수능탐구'],
    contentTone: '과학적 호기심을 자극하면서 입시 정보를 정확하게 전달. 실험 사진 활용 권장.',
    successMetrics: ['과학고/영재고 합격 수', '과학 올림피아드 수상', '수능 탐구 등급'],
  },

  // ──────────────── 논술 ────────────────
  {
    id: 'entrance:논술',
    category: 'entrance',
    subject: '논술',
    displayName: '논술학원',
    description: '대입 논술/구술 대비, 초등 독서논술, 중등 서술형 논술 전문 학원.',

    coreKeywords: ['논술학원', '대입 논술', '수시 논술', '논술 전형', '독서 논술', '논술 대비'],
    longTailKeywords: ['수시 논술 대비 학원', '인문계 논술', '자연계 수리논술', '의대 MMI 면접', '초등 독서논술'],
    locationKeywordPatterns: ['{지역} 논술학원', '{지역} 대입 논술'],
    negativeKeywords: [],

    curriculum: ['초등 독서논술', '중등 비판적 사고력 논술', '대입 인문논술 / 수리논술', '의약학 MMI 면접', '구술면접 대비'],
    targetAudience: ['수시 논술전형 준비생', '사고력 향상이 필요한 초등학생', '의대 면접 준비 학생'],
    parentConcerns: ['논술 실력이 하루아침에 늘지 않는다', '어떤 대학 논술을 준비해야 할까', '글쓰기를 어려워한다'],
    sellingPoints: ['대학별 기출 분석 + 첨삭', '1:1 첨삭 피드백', '모의논술 실전 훈련', '합격자 데이터 기반 전략'],
    industryTerms: ['인문논술', '수리논술', '첨삭', 'MMI', '구술면접', '제시문', '논제 분석', '개요 작성'],
    competitorTypes: ['대입논술 전문학원', '종합학원 논술반'],

    blogTopics: [
      { title: '수시 논술, 지금부터 준비해도 될까?', description: '논술 준비 타임라인', keywords: ['수시 논술', '논술 준비'], season: '3-6월', type: 'info' },
      { title: '2025 대학별 논술 출제 경향 분석', description: '주요 대학 논술 트렌드', keywords: ['대학 논술', '출제 경향'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [3, 4, 5, 6], topic: '논술 기초반 모집 / 여름 집중반', keywords: ['논술 기초', '논술 집중'], urgency: 'high' },
      { months: [7, 8, 9], topic: '대학별 논술 파이널 / 모의논술', keywords: ['논술 파이널', '모의논술'], urgency: 'high' },
    ],
    titlePatterns: ['{대학} 논술 합격 전략', '논술 {기간} 만에 합격한 비결'],
    tagRecommendations: ['#논술학원', '#수시논술', '#대입논술', '#논술전형', '#첨삭', '#{대학}논술'],
    contentTone: '논리적이고 분석적인 톤. 실제 논제와 합격 사례 중심.',
    successMetrics: ['논술전형 합격 수', '대학별 합격률', '모의논술 평균 점수 향상'],
  },

  // ──────────────── 입시종합 ────────────────
  {
    id: 'entrance:입시종합',
    category: 'entrance',
    subject: '입시종합',
    displayName: '입시종합학원',
    description: '수시/정시 입시 전략 컨설팅, 생기부 관리, 자소서, 면접 대비 등 입시 전반을 다루는 종합학원.',

    coreKeywords: ['입시학원', '입시 컨설팅', '생기부 관리', '자소서', '대입 상담', '수시 정시'],
    longTailKeywords: [
      '수시 생기부 관리 학원', '자소서 컨설팅', '입시 전략 상담', '학종 준비',
      '정시 올인 전략', '내신 관리 학원', '진로 탐색 프로그램',
    ],
    locationKeywordPatterns: ['{지역} 입시학원', '{지역} 입시 컨설팅'],
    negativeKeywords: [],

    curriculum: [
      '수시 학생부종합전형(학종) 로드맵 설계', '생활기록부 관리 프로그램',
      '자기소개서 작성 + 첨삭', '면접 대비 (서류면접/심층면접)',
      '정시 전략 수립 (성적 분석 → 대학 매칭)', '진로·진학 상담',
    ],
    targetAudience: ['대입을 1~2년 앞둔 고등학생', '학종 준비를 시작하는 고1 학부모', '재수/반수 준비생'],
    parentConcerns: ['수시 vs 정시 어디에 집중할까', '생기부를 어떻게 관리해야 할까', '자소서 쓰는 법을 모르겠다'],
    sellingPoints: ['1:1 맞춤 입시 전략', '대학별 합격 데이터 분석', '생기부·자소서·면접 올인원', '현직 입학사정관 출신 컨설턴트'],
    industryTerms: ['학종', '교과전형', '생기부', '세특', '자소서', '블라인드면접', '서류평가', '정시 배치표'],
    competitorTypes: ['대형 입시학원(메가/대성 등)', '소규모 컨설팅', '온라인 입시 플랫폼'],

    blogTopics: [
      { title: '고1부터 준비하는 학종 로드맵', description: '3년 생기부 관리 전략', keywords: ['학종', '생기부', '고1'], type: 'info' },
      { title: '수시 자소서 작성법 - 합격 자소서의 공통점', description: '자소서 핵심 포인트', keywords: ['자소서', '수시', '작성법'], type: 'tips' },
      { title: '올해 우리 학원 대입 합격 결과', description: '합격 실적 공유', keywords: ['대입 합격', '합격 실적'], season: '2-3월', type: 'result' },
    ],
    seasonalTopics: [
      { months: [2, 3], topic: '합격 발표 / 새 학기 입시 상담', keywords: ['합격 발표', '입시 상담'], urgency: 'high' },
      { months: [6, 7, 8], topic: '수시 원서 전략 / 자소서 집중', keywords: ['수시 원서', '자소서'], urgency: 'high' },
      { months: [9], topic: '수시 원서 접수 / 면접 대비', keywords: ['수시 접수', '면접'], urgency: 'high' },
      { months: [11, 12], topic: '수능 후 정시 배치 / 겨울 입시 설명회', keywords: ['정시', '입시 설명회'], urgency: 'high' },
    ],
    titlePatterns: ['{연도} 수시 전략 - {유형}전형 합격 비결', '{지역} 입시학원 합격 실적 공개'],
    tagRecommendations: ['#입시학원', '#수시', '#정시', '#학종', '#생기부', '#자소서', '#입시컨설팅'],
    contentTone: '신뢰감 있고 전문적인 톤. 구체적 입시 데이터와 합격 사례 중심. 과장 금지.',
    successMetrics: ['대학별 합격자 수', 'SKY/의대 합격률', '수시·정시 합격 비율'],
  },

  // ──────────────── 보습/과외 ────────────────
  {
    id: 'entrance:보습',
    category: 'entrance',
    subject: '보습',
    displayName: '보습학원',
    description: '전과목 내신 관리 및 보충학습 전문. 학교 진도 맞춤 수업, 자기주도학습 관리.',

    coreKeywords: ['보습학원', '내신 학원', '전과목 학원', '자기주도학습', '방과후학원'],
    longTailKeywords: ['중학교 전과목 학원', '내신 관리 학원', '자기주도학습 관리 학원', '학교 숙제 도와주는 학원'],
    locationKeywordPatterns: ['{지역} 보습학원', '{지역} 내신 학원'],
    negativeKeywords: [],

    curriculum: ['전과목 내신 대비 (중등/고등)', '자기주도학습 관리 프로그램', '약점 과목 집중 보강', '학교 과제/수행평가 관리'],
    targetAudience: ['전과목 관리가 필요한 중학생', '자기주도학습 습관이 안 잡힌 학생', '맞벌이 가정 학생'],
    parentConcerns: ['혼자 공부를 못 한다', '전과목 성적이 고르지 않다', '학원을 여러 개 보내기 부담된다'],
    sellingPoints: ['전과목 원스톱 관리', '소수정예 + 개별 진도', '자기주도학습 습관 형성', '학교별 내신 기출 보유'],
    industryTerms: ['내신', '수행평가', '자기주도학습', '학습플래너', '멘토링', '자습관리'],
    competitorTypes: ['대형 보습학원', '교습소', '공부방', '온라인 학습지'],

    blogTopics: [
      { title: '전과목 내신 관리, 보습학원이 답인 이유', description: '보습학원 장점 설명', keywords: ['보습학원', '내신 관리'], type: 'info' },
      { title: '자기주도학습 습관 만드는 3단계', description: '학습 습관 형성법', keywords: ['자기주도학습', '학습 습관'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '새 학기 전과목 관리 시작', keywords: ['새학기', '내신'], urgency: 'high' },
      { months: [7, 8], topic: '방학 보충학습 / 2학기 대비', keywords: ['방학 보습', '보충학습'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 보습학원 - 전과목 내신 {등급} 목표', '자기주도학습 {기간} 만에 성적 {변화}'],
    tagRecommendations: ['#보습학원', '#내신관리', '#전과목', '#자기주도학습', '#{지역}보습학원'],
    contentTone: '따뜻하고 꼼꼼한 톤. 학부모 걱정에 공감하면서 체계적 관리 시스템을 강조.',
    successMetrics: ['전과목 평균 등급 향상', '자기주도학습 시간 증가', '학부모 만족도'],
  },

  // ──────────────── 내신 대비 ────────────────
  {
    id: 'entrance:내신',
    category: 'entrance',
    subject: '내신',
    displayName: '내신전문학원',
    description: '학교별 내신 시험 집중 대비. 기출 분석, 출제 패턴, 서술형 대비 전문.',

    coreKeywords: ['내신 학원', '내신 대비', '중간고사 학원', '기말고사 학원', '학교별 내신'],
    longTailKeywords: ['OO중학교 내신 대비', 'OO고등학교 기출', '내신 서술형 대비', '학교별 시험 범위'],
    locationKeywordPatterns: ['{지역} 내신학원', '{지역} 중간고사 대비'],
    negativeKeywords: [],

    curriculum: ['학교별 기출 분석 + 출제 예측', '서술형/수행평가 대비', '시험 2주 전 집중 마감반', '오답 분석 + 보완 학습'],
    targetAudience: ['내신 성적에 민감한 중·고등학생', '수시 교과전형 준비 학생'],
    parentConcerns: ['학원을 다니는데 내신이 안 오른다', '학교별로 시험이 달라서 대비가 어렵다'],
    sellingPoints: ['해당 지역 학교 기출 DB 보유', '시험 직전 마감반 운영', '학교 담당 선생님 배정'],
    industryTerms: ['기출문제', '출제경향', '마감반', '족보', '서술형', '수행평가', '교과세특'],
    competitorTypes: ['내신전문학원', '종합학원 내신반', '족보 사이트'],

    blogTopics: [
      { title: 'OO고 1학기 중간고사 출제 경향 분석', description: '학교별 기출 분석 콘텐츠', keywords: ['중간고사', '기출 분석'], season: '4-5월', type: 'info' },
      { title: '내신 1등급 학생의 시험 2주 전 루틴', description: '시험 대비 학습법', keywords: ['내신 1등급', '시험 대비'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [4, 5], topic: '1학기 중간고사 대비', keywords: ['중간고사'], urgency: 'high' },
      { months: [6, 7], topic: '1학기 기말고사 대비', keywords: ['기말고사'], urgency: 'high' },
      { months: [9, 10], topic: '2학기 중간고사', keywords: ['2학기 중간고사'], urgency: 'high' },
      { months: [11, 12], topic: '2학기 기말고사', keywords: ['2학기 기말고사'], urgency: 'high' },
    ],
    titlePatterns: ['{학교} {시험} 완벽 대비 가이드', '내신 {과목} {등급}→{등급} 올리는 법'],
    tagRecommendations: ['#내신대비', '#중간고사', '#기말고사', '#내신학원', '#기출분석', '#{학교}내신'],
    contentTone: '구체적이고 실전적인 톤. 특정 학교명, 시험 범위 등 구체적 정보 활용.',
    successMetrics: ['내신 등급 향상률', '만점자 / A등급 비율'],
  },

  // ──────────────── 수능 전문 ────────────────
  {
    id: 'entrance:수능',
    category: 'entrance',
    subject: '수능',
    displayName: '수능전문학원',
    description: '수능 전과목 집중 대비. 재수종합반, N수생 관리, 수능 전략 컨설팅.',

    coreKeywords: ['수능 학원', '재수학원', '재수종합반', '수능 대비', 'N수생'],
    longTailKeywords: ['재수 종합반 추천', '수능 전과목 학원', '수능 상위권 학원', '의대 수능 전문'],
    locationKeywordPatterns: ['{지역} 재수학원', '{지역} 수능학원'],
    negativeKeywords: [],

    curriculum: ['수능 전과목 종합반 (국영수탐)', '과목별 단과반', '모의고사 + 성적 분석', '수능 D-100 파이널'],
    targetAudience: ['재수/N수 준비생', '수능 올인 고3', '반수 준비생'],
    parentConcerns: ['재수를 시킬까 말까', '어떤 재수학원이 좋을까', '자녀 멘탈 관리가 걱정된다'],
    sellingPoints: ['체계적 시간 관리', '매주 모의고사', '1:1 성적 컨설팅', '생활 관리 (출결/자습)'],
    industryTerms: ['모의고사', '등급컷', '표준점수', '백분위', '킬러문항', 'EBS 연계율', '정시 배치표'],
    competitorTypes: ['대형 재수종합반(대성/종로/메가 등)', '소규모 재수학원', '독학재수'],

    blogTopics: [
      { title: '재수, 성공하는 학생의 1년 플랜', description: '재수 로드맵', keywords: ['재수', '재수 계획'], type: 'info' },
      { title: '수능 D-100 학습 전략', description: '파이널 학습법', keywords: ['수능 D-100', '수능 전략'], season: '8월', type: 'tips' },
    ],
    seasonalTopics: [
      { months: [12, 1, 2], topic: '재수종합반 모집 / 정시 결과', keywords: ['재수 모집', '정시'], urgency: 'high' },
      { months: [6], topic: '6월 모의고사 분석 / 중간 점검', keywords: ['6월 모의고사'], urgency: 'high' },
      { months: [9], topic: '9월 모의고사 / 수능 최종 전략', keywords: ['9월 모의고사', '수능 전략'], urgency: 'high' },
    ],
    titlePatterns: ['재수 종합반 {연도} 합격 실적', '수능 {과목} {등급} 올리는 {기간} 전략'],
    tagRecommendations: ['#수능', '#재수학원', '#재수종합반', '#수능대비', '#정시', '#{지역}재수학원'],
    contentTone: '진지하고 현실적인 톤. 과장 없이 데이터로 말하는 스타일. 학생 멘탈 케어 언급.',
    successMetrics: ['수능 등급 분포', '의대/SKY 합격 수', '평균 성적 향상 폭'],
  },

  // ──────────────── 사회 ────────────────
  {
    id: 'entrance:사회',
    category: 'entrance',
    subject: '사회',
    displayName: '사회학원',
    description: '중등 사회, 고등 사회·한국사, 수능 사회탐구(사문/생윤/한지/세지 등) 전문.',

    coreKeywords: ['사회학원', '한국사', '사회탐구', '사문', '생활과윤리'],
    longTailKeywords: ['수능 사회탐구 학원', '한국사 내신', '사회문화 1등급', '생활과윤리 학원'],
    locationKeywordPatterns: ['{지역} 사회학원'],
    negativeKeywords: [],

    curriculum: ['중등 사회/역사 내신', '고등 한국사/사회문화/생활과윤리/한국지리/세계지리 등', '수능 사탐 선택과목 집중반'],
    targetAudience: ['사탐 고득점이 필요한 문과 학생', '한국사 필수 대비'],
    parentConcerns: ['사탐 과목 선택을 어떻게 해야 할까', '암기 과목인데 효율적으로 공부하려면'],
    sellingPoints: ['과목별 전문 강사', '기출 패턴 분석', '암기법 + 이해 병행 수업'],
    industryTerms: ['사문', '생윤', '한지', '세지', '윤사', '한국사 필수', '사탐 조합'],
    competitorTypes: ['사탐 전문학원', '종합학원 사회반', '인강'],

    blogTopics: [
      { title: '수능 사탐 과목 선택 가이드', description: '과목별 특성 비교', keywords: ['사탐', '과목 선택'], type: 'comparison' },
    ],
    seasonalTopics: [
      { months: [3, 4], topic: '사탐 과목 확정 / 1학기 내신', keywords: ['사탐 선택', '내신'], urgency: 'high' },
    ],
    titlePatterns: ['수능 {과목} 1등급 전략', '{과목} 암기 vs 이해, 효율적 공부법'],
    tagRecommendations: ['#사회학원', '#사탐', '#한국사', '#사회문화', '#생활과윤리'],
    contentTone: '지식 전달 중심의 정보성 톤.',
    successMetrics: ['사탐 등급', '한국사 만점 비율'],
  },

  // ──────────────── 재수/N수 ────────────────
  {
    id: 'entrance:재수',
    category: 'entrance',
    subject: '재수',
    displayName: '재수학원',
    description: '재수생/N수생 전문 종합 관리. 기숙형 재수, 통학 재수, 독학 재수 관리.',

    coreKeywords: ['재수학원', 'N수생', '재수종합반', '재수 기숙학원', '통학 재수'],
    longTailKeywords: ['기숙 재수학원 추천', '재수 독학 vs 학원', 'N수 성공 후기', '재수 비용', '반수 학원'],
    locationKeywordPatterns: ['{지역} 재수학원', '{지역} 재수종합반'],
    negativeKeywords: [],

    curriculum: ['기숙형 재수종합반', '통학 재수반', '독학 재수 관리반', '과목별 단과 + 모의고사', '1:1 멘토링'],
    targetAudience: ['수능 결과에 만족하지 못한 졸업생', '목표 대학에 미달한 학생', '반수를 고려하는 대학생'],
    parentConcerns: ['재수하면 정말 성적이 오를까', '자녀가 1년을 견딜 수 있을까', '비용 부담'],
    sellingPoints: ['철저한 생활 관리', '주간/월간 성적 리포트', '멘탈 케어 프로그램', '성적 보장제'],
    industryTerms: ['종합반', '단과', '자습관리', '의무자습', '모의고사', '성적표', '배치표'],
    competitorTypes: ['대형 재수학원', '소규모 재수', '기숙학원', '독학재수관리'],

    blogTopics: [
      { title: '재수 성공률을 높이는 5가지 습관', description: '성공적 재수를 위한 팁', keywords: ['재수 성공', '재수 습관'], type: 'tips' },
      { title: '우리 학원 재수생 수능 성적 발표', description: '실제 성적 향상 결과', keywords: ['재수 결과', '수능 성적'], season: '12월', type: 'result' },
    ],
    seasonalTopics: [
      { months: [12, 1, 2], topic: '재수종합반 모집 (최대 성수기)', keywords: ['재수 모집', '종합반'], urgency: 'high' },
      { months: [6, 9], topic: '6/9월 모의고사 후 중간 점검', keywords: ['모의고사', '중간 점검'], urgency: 'high' },
    ],
    titlePatterns: ['{연도} 재수 성공기 - {점수} 상승', '재수학원 선택 기준 {N}가지'],
    tagRecommendations: ['#재수학원', '#재수종합반', '#N수생', '#재수성공', '#{지역}재수학원'],
    contentTone: '현실적이고 솔직한 톤. 재수생의 심리에 공감하면서 동기부여. 뻥튀기 금지.',
    successMetrics: ['평균 등급 향상', '목표 대학 합격률', '의대/서울대 합격 수'],
  },
]
