/**
 * 어학 학원 전문 지식 DB
 */
import type { AcademySubjectKnowledge } from './types'

export const LANGUAGE_ACADEMY_DATA: AcademySubjectKnowledge[] = [
  // ──────────────── 영어(회화) ────────────────
  {
    id: 'language:영어',
    category: 'language',
    subject: '영어',
    displayName: '영어회화학원',
    description: '영어 회화 전문. 원어민 수업, 비즈니스 영어, 프리토킹, 여행 영어 등.',

    coreKeywords: ['영어회화', '영어회화학원', '원어민 영어', '비즈니스 영어', '프리토킹'],
    longTailKeywords: [
      '성인 영어회화 학원', '직장인 영어', '원어민 1:1 영어', '영어 스피킹',
      '영어 발음 교정', '전화 영어 vs 학원', '여행 영어 회화',
    ],
    locationKeywordPatterns: ['{지역} 영어회화', '{지역} 영어회화학원', '{지역} 원어민 영어'],
    negativeKeywords: ['영어 무료 강의'],

    curriculum: [
      '레벨별 일반 회화 (초급~고급)', '원어민 1:1 / 소그룹 회화',
      '비즈니스 영어 (이메일/프레젠테이션/미팅)', '여행 영어', '발음 교정 클리닉',
      '토론/디베이트 영어', '영어 인터뷰 준비',
    ],
    targetAudience: ['영어 회화 실력을 키우려는 직장인', '해외 출장/주재원 파견 대비', '영어 울렁증 극복 희망자'],
    parentConcerns: ['수업을 들어도 말이 안 나온다', '원어민이 무조건 좋은가?', '그룹 vs 1:1 어디가 효과적인가'],
    sellingPoints: ['소그룹 (3~5명) 밀착 수업', '원어민 + 한국인 강사 듀얼', '실생활 주제 중심 커리큘럼', '녹음 피드백 제공'],
    industryTerms: ['프리토킹', 'CEFR 레벨', 'IELTS Speaking', '디베이트', '발음교정', 'IPA(국제음성기호)', '섀도잉'],
    competitorTypes: ['대형 어학원(YBM/파고다 등)', '소규모 회화학원', '전화영어/화상영어', '원어민 과외'],

    blogTopics: [
      { title: '영어 울렁증 극복, 3개월 회화 도전기', description: '수강생 후기', keywords: ['영어 울렁증', '영어 회화 후기'], type: 'review' },
      { title: '원어민 회화 vs 한국인 강사, 뭐가 더 효과적?', description: '강사 유형 비교', keywords: ['원어민', '영어 강사', '회화'], type: 'comparison' },
      { title: '직장인 영어, 매일 30분으로 실력 올리기', description: '바쁜 직장인 학습법', keywords: ['직장인 영어', '영어 학습법'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [1, 3], topic: '새해/새학기 영어 회화 시작', keywords: ['영어 회화 시작', '영어 목표'], urgency: 'high' },
      { months: [6, 7], topic: '여름 해외여행 대비 회화', keywords: ['여행 영어', '해외여행'], urgency: 'medium' },
    ],

    titlePatterns: ['{지역} 영어회화 - {레벨}부터 차근차근', '영어회화 {기간} 만에 {성과}'],
    tagRecommendations: ['#영어회화', '#영어회화학원', '#원어민영어', '#비즈니스영어', '#직장인영어', '#{지역}영어회화'],
    contentTone: '친근하고 동기부여하는 톤. 실제 대화 예시를 넣으면 좋음.',
    successMetrics: ['OPIC/토스 점수 향상', '회화 레벨 상승', '수강생 만족도'],
  },

  // ──────────────── 중국어 ────────────────
  {
    id: 'language:중국어',
    category: 'language',
    subject: '중국어',
    displayName: '중국어학원',
    description: '중국어 회화, HSK 대비, 비즈니스 중국어, 어린이/성인 중국어.',

    coreKeywords: ['중국어학원', '중국어 배우기', 'HSK', '중국어 회화', '중국어 과외'],
    longTailKeywords: ['HSK 4급 대비', '비즈니스 중국어', '초등 중국어', '중국어 발음', '성인 중국어 초보', '중국 유학 준비'],
    locationKeywordPatterns: ['{지역} 중국어학원', '{지역} 중국어 회화'],
    negativeKeywords: [],

    curriculum: ['입문 발음·성조 마스터', '생활 회화 (초·중·고급)', 'HSK 3~6급 대비', '비즈니스 중국어', '어린이 중국어', '중국 유학 준비반'],
    targetAudience: ['중국어를 처음 배우는 성인', '중국 비즈니스 관련 직장인', 'HSK 자격증 취득 희망자', '중국 유학 준비생'],
    parentConcerns: ['중국어 성조가 어렵다는데', '한자를 외워야 하나', '실용성이 있는 언어인가'],
    sellingPoints: ['원어민 강사 (표준 보통화)', '성조 교정 집중', 'HSK 합격 보장반', '소수정예 회화 수업'],
    industryTerms: ['성조', '병음(拼音)', 'HSK', 'BCT', '간체자', '번체자', '보통화', '4성'],
    competitorTypes: ['대형 어학원 중국어반', '중국어 전문학원', '온라인 중국어', '원어민 과외'],

    blogTopics: [
      { title: '중국어 성조, 이것만 알면 절반은 끝', description: '성조 학습 핵심', keywords: ['중국어 성조', '중국어 발음'], type: 'tips' },
      { title: 'HSK 4급, 3개월 만에 합격하는 전략', description: 'HSK 대비법', keywords: ['HSK 4급', 'HSK 대비'], type: 'tips' },
      { title: '중국어 배우면 취업에 유리한 이유', description: '중국어 활용 가치', keywords: ['중국어 취업', '비즈니스 중국어'], type: 'info' },
    ],
    seasonalTopics: [
      { months: [1, 3, 9], topic: '새 학기 중국어 입문 / HSK 시험 대비', keywords: ['중국어 입문', 'HSK 시험'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 중국어학원 - {특징}', 'HSK {급수} {기간}만에 합격 전략'],
    tagRecommendations: ['#중국어학원', '#중국어배우기', '#HSK', '#중국어회화', '#{지역}중국어학원'],
    contentTone: '실용적이고 명확한 톤. 중국어 예문을 적절히 포함.',
    successMetrics: ['HSK 합격률', '회화 레벨 향상', '비즈니스 활용 사례'],
  },

  // ──────────────── 일본어 ────────────────
  {
    id: 'language:일본어',
    category: 'language',
    subject: '일본어',
    displayName: '일본어학원',
    description: '일본어 회화, JLPT 대비, 비즈니스 일본어, 일본 유학/취업 준비.',

    coreKeywords: ['일본어학원', '일본어 배우기', 'JLPT', '일본어 회화', '일본어 과외'],
    longTailKeywords: ['JLPT N2 대비', 'JLPT N1 독학 vs 학원', '일본 워킹홀리데이', '비즈니스 일본어', '일본어 히라가나'],
    locationKeywordPatterns: ['{지역} 일본어학원', '{지역} 일본어 회화'],
    negativeKeywords: [],

    curriculum: ['입문 (히라가나/카타카나)', '초급~고급 회화', 'JLPT N5~N1 대비', '비즈니스 일본어(경어)', '일본 유학/취업 대비', '번역/통역반'],
    targetAudience: ['일본 문화에 관심 있는 학생/성인', 'JLPT 자격증 취득 희망자', '일본 취업/유학 준비생', '일본 거래처와 일하는 직장인'],
    parentConcerns: ['일본어가 취업에 도움이 되나', '한자가 많아서 어렵지 않을까'],
    sellingPoints: ['원어민 강사 + 한국인 문법 강사', 'JLPT 합격 보장', '소수정예 회화반', '일본 문화 체험 프로그램'],
    industryTerms: ['JLPT', 'JPT', 'EJU', '히라가나', '카타카나', '한자', '경어(敬語)', 'N1~N5'],
    competitorTypes: ['어학원 일본어과', '일본어전문학원', '온라인 일본어', 'ECC/AEON 등'],

    blogTopics: [
      { title: 'JLPT N2, 독학 vs 학원 뭐가 효율적일까?', description: 'JLPT 준비 방법 비교', keywords: ['JLPT N2', '일본어 독학'], type: 'comparison' },
      { title: '일본어 초보, 3개월 학습 로드맵', description: '입문자 학습 계획', keywords: ['일본어 초보', '일본어 입문'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [1, 4, 7, 10], topic: 'JLPT 시험 전 대비 시즌', keywords: ['JLPT 대비', 'JLPT 시험'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 일본어학원 - {특징}', 'JLPT {레벨} {기간}만에 합격 비결'],
    tagRecommendations: ['#일본어학원', '#JLPT', '#일본어배우기', '#일본어회화', '#{지역}일본어학원'],
    contentTone: '친근하고 실용적인 톤. 일본 문화 요소를 적절히 포함.',
    successMetrics: ['JLPT 합격률', '회화 레벨 상승'],
  },

  // ──────────────── 한국어(외국인 대상) ────────────────
  {
    id: 'language:한국어',
    category: 'language',
    subject: '한국어',
    displayName: '한국어학원',
    description: '외국인 대상 한국어 교육. TOPIK 대비, 생활 한국어, 비즈니스 한국어.',

    coreKeywords: ['한국어학원', 'Korean language school', 'TOPIK', '한국어 배우기', '외국인 한국어'],
    longTailKeywords: ['TOPIK 대비 학원', '한국어 초급 클래스', '비즈니스 한국어', 'K-POP 한국어'],
    locationKeywordPatterns: ['{지역} 한국어학원', '{지역} Korean class'],
    negativeKeywords: [],

    curriculum: ['한글 입문 (자음/모음)', '초급~고급 한국어 회화', 'TOPIK I/II 대비', '비즈니스 한국어', 'K-Culture 한국어 (드라마/K-POP)'],
    targetAudience: ['한국에 거주하는 외국인', '한국 유학 준비 외국인', '한류 팬', '한국 기업 취업 외국인'],
    parentConcerns: ['한국어를 빨리 배울 수 있을까', 'TOPIK 몇 급이 필요한가'],
    sellingPoints: ['다국적 학생 소규모 반', '한국어교육 전공 강사', 'TOPIK 집중반', '문화 체험 프로그램'],
    industryTerms: ['TOPIK', '한국어능력시험', '사회통합프로그램(KIIP)', '한글', '받침', '존댓말/반말'],
    competitorTypes: ['대학 한국어 교육원', '한국어 전문학원', '온라인 한국어', '1:1 과외'],

    blogTopics: [
      { title: 'TOPIK II 합격을 위한 학습 전략', description: 'TOPIK 대비 가이드', keywords: ['TOPIK', '한국어 시험'], type: 'tips' },
      { title: '외국인 학생들의 한국어 학습 후기', description: '학생 인터뷰', keywords: ['한국어 학습', '외국인 후기'], type: 'review' },
    ],
    seasonalTopics: [
      { months: [1, 4, 7, 10], topic: 'TOPIK 시험 대비 / 학기 시작', keywords: ['TOPIK 대비', '한국어 입문'], urgency: 'high' },
    ],
    titlePatterns: ['{지역} 한국어학원 - {특징}', 'TOPIK {급수} 합격 전략'],
    tagRecommendations: ['#한국어학원', '#TOPIK', '#한국어배우기', '#KoreanClass', '#{지역}한국어학원'],
    contentTone: '친절하고 쉬운 한국어 사용. 영어 병기 가능. 다문화 감수성.',
    successMetrics: ['TOPIK 합격률', '한국어 레벨 상승', '유학/취업 연계'],
  },

  // ──────────────── 불어/독어/스페인어 ────────────────
  {
    id: 'language:불어',
    category: 'language',
    subject: '불어',
    displayName: '제2외국어학원',
    description: '불어, 독일어, 스페인어 등 제2외국어 교육. 회화, 자격증(DELF/DALF, Goethe, DELE), 유학 준비.',

    coreKeywords: ['불어학원', '독일어학원', '스페인어학원', '제2외국어', 'DELF', 'DELE'],
    longTailKeywords: ['프랑스어 배우기', '독일어 입문', '스페인어 회화', '유럽 유학 언어 준비'],
    locationKeywordPatterns: ['{지역} 불어학원', '{지역} 스페인어학원'],
    negativeKeywords: [],

    curriculum: ['입문~고급 회화', '자격증 대비 (DELF/DALF, Goethe-Zertifikat, DELE)', '유학 준비반', '비즈니스 제2외국어'],
    targetAudience: ['제2외국어 자격증 취득 희망자', '유럽 유학 준비생', '외교관/국제기구 준비생'],
    parentConcerns: ['수능 제2외국어로 유리한가', '어떤 언어가 실용적인가'],
    sellingPoints: ['원어민 강사 수업', '소수정예 회화', '자격증 합격 실적'],
    industryTerms: ['DELF', 'DALF', 'TCF', 'Goethe-Zertifikat', 'DELE', 'CEFR A1~C2'],
    competitorTypes: ['종합 어학원', '전문 유럽어 학원', '대학 부설 어학원'],

    blogTopics: [
      { title: '불어 vs 독어 vs 스페인어, 어떤 언어를 배울까?', description: '제2외국어 선택 가이드', keywords: ['제2외국어', '불어', '독일어', '스페인어'], type: 'comparison' },
    ],
    seasonalTopics: [
      { months: [3, 9], topic: '새 학기 제2외국어 입문', keywords: ['제2외국어 시작'], urgency: 'medium' },
    ],
    titlePatterns: ['{언어} 입문, {기간}만에 {레벨} 달성', '{지역} {언어}학원 추천'],
    tagRecommendations: ['#불어학원', '#독일어학원', '#스페인어학원', '#제2외국어', '#DELF', '#DELE'],
    contentTone: '세련되고 지적인 톤. 해당 문화권 이야기를 곁들여 흥미 유발.',
    successMetrics: ['자격증 합격률', '레벨 향상', '유학 연계'],
  },

  // ──────────────── TOEIC/TOEFL ────────────────
  {
    id: 'language:토익',
    category: 'language',
    subject: '토익',
    displayName: '토익토플학원',
    description: 'TOEIC, TOEFL, IELTS 등 영어 공인인증시험 전문 대비 학원.',

    coreKeywords: ['토익학원', '토플학원', 'IELTS학원', '토익 점수', '토플 대비'],
    longTailKeywords: [
      '토익 900점 학원', '토익 한달 만에', '토플 100점 전략', 'IELTS 7.0 대비',
      '토익스피킹 학원', 'OPIc 대비', '공무원 영어 토익',
    ],
    locationKeywordPatterns: ['{지역} 토익학원', '{지역} 토플학원', '{지역} IELTS학원'],
    negativeKeywords: ['토익 무료 모의고사'],

    curriculum: ['토익 RC/LC 기초~실전', '토익 900+ 고득점반', '토플 iBT 종합반', 'IELTS Academic/General', '토익스피킹/OPIc', '단기 집중반'],
    targetAudience: ['취업 준비생', '승진/인사 평가 대비 직장인', '해외 유학 준비생', '공무원 시험 응시자'],
    parentConcerns: ['단기간에 점수를 올릴 수 있나', '독학 vs 학원 어디가 효율적인가'],
    sellingPoints: ['점수 보장제', '매일 모의고사', '단기 집중 커리큘럼', '실전 같은 CBT 환경'],
    industryTerms: ['LC', 'RC', 'Part 1~7', 'iBT', 'Speaking/Writing', 'Band Score', 'CBT'],
    competitorTypes: ['대형 어학원(YBM/해커스/파고다)', '인강(시원스쿨/해커스)', '과외'],

    blogTopics: [
      { title: '토익 900점, 한 달 만에 가능할까?', description: '단기 고득점 전략', keywords: ['토익 900', '토익 단기'], type: 'tips' },
      { title: '토플 vs IELTS, 어떤 시험이 나에게 맞을까?', description: '시험 비교', keywords: ['토플', 'IELTS', '비교'], type: 'comparison' },
    ],
    seasonalTopics: [
      { months: [1, 2], topic: '새해 토익 목표 / 취업 시즌 대비', keywords: ['토익 목표', '취업 토익'], urgency: 'high' },
      { months: [9, 10], topic: '하반기 채용 대비 / 유학 지원', keywords: ['채용 토익', '유학 토플'], urgency: 'high' },
    ],
    titlePatterns: ['토익 {목표점수} {기간}만에 달성 후기', '{지역} 토익학원 추천 TOP {N}'],
    tagRecommendations: ['#토익학원', '#토익', '#토플', '#IELTS', '#토익스피킹', '#{지역}토익학원'],
    contentTone: '목표 지향적이고 실전적인 톤. 점수 데이터와 합격 후기 중심.',
    successMetrics: ['평균 점수 향상 폭', '목표 점수 달성률', '900+ 달성자 수'],
  },

  // ──────────────── 원어민 회화 ────────────────
  {
    id: 'language:회화',
    category: 'language',
    subject: '회화',
    displayName: '원어민회화학원',
    description: '원어민 강사 중심 영어/외국어 회화 전문. 소그룹 프리토킹, 생활 회화.',

    coreKeywords: ['원어민 회화', '프리토킹', '영어 회화', '소그룹 회화', '1:1 영어'],
    longTailKeywords: ['원어민 1:1 회화', '소그룹 영어 스터디', '왕초보 영어 회화', '주말 영어 회화'],
    locationKeywordPatterns: ['{지역} 원어민 회화', '{지역} 프리토킹'],
    negativeKeywords: [],

    curriculum: ['레벨별 소그룹 회화 (3~5명)', '원어민 1:1 맞춤 수업', '주제별 프리토킹', '발음 교정', '실전 상황 롤플레이'],
    targetAudience: ['말하기 연습이 부족한 영어 학습자', '원어민과 대화하고 싶은 직장인', '해외 생활 준비자'],
    parentConcerns: ['원어민이면 무조건 좋은가', '말을 못해도 수업이 가능한가'],
    sellingPoints: ['검증된 원어민 강사', '소수정예 밀착 수업', '매수업 스피킹 보장', '다양한 주제와 상황'],
    industryTerms: ['프리토킹', '롤플레이', '섀도잉', 'CEFR', '유창성', '정확성'],
    competitorTypes: ['전화/화상영어', '대형 어학원', '랭귀지 익스체인지'],

    blogTopics: [
      { title: '왕초보도 가능한 원어민 회화 수업 체험기', description: '체험 후기', keywords: ['원어민 회화', '왕초보 영어'], type: 'review' },
      { title: '프리토킹 잘하는 사람의 공통 습관 5가지', description: '스피킹 팁', keywords: ['프리토킹', '영어 스피킹'], type: 'tips' },
    ],
    seasonalTopics: [
      { months: [1, 3, 9], topic: '새해/새학기 회화 도전', keywords: ['영어 회화 시작'], urgency: 'high' },
    ],
    titlePatterns: ['왕초보→프리토킹 {기간} 도전기', '{지역} 원어민 회화 학원 - {특징}'],
    tagRecommendations: ['#원어민회화', '#프리토킹', '#영어회화', '#소그룹회화', '#{지역}원어민회화'],
    contentTone: '밝고 격려하는 톤. 실제 회화 상황 예시 활용.',
    successMetrics: ['스피킹 레벨 향상', 'OPIc/토스 점수', '수강생 만족도'],
  },
]
