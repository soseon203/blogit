import { Wand2, Search, Users, Activity, TrendingUp, Lightbulb, Camera, FileText, GraduationCap } from 'lucide-react'

const features = [
  { icon: Wand2, title: 'AI 학원 블로그 자동 생성', description: '학원 종류와 키워드만 입력하면 AI가 네이버 SEO에 최적화된 홍보 글을 자동 작성합니다. 수강 후기, 학습법 소개, 학원 홍보글 등 다양한 유형을 지원합니다.', color: '#6366f1', saving: '글 작성 3시간 → 10분' },
  { icon: Search, title: '학원 키워드 리서치', description: '"강남 수학학원", "목동 영어학원" 등 지역+학원 키워드의 실시간 검색량, 경쟁도, 클릭률을 분석. 학부모가 실제 검색하는 키워드를 찾아드립니다.', color: '#f97316', saving: '키워드 조사 1시간 → 30초' },
  { icon: Users, title: '상위노출 학원 분석', description: '내 지역에서 상위 노출되는 경쟁 학원 블로그의 제목 패턴, 글 길이, 키워드 전략을 분석. 벤치마킹 데이터로 전략을 수립하세요.', color: '#2dd4bf', saving: '경쟁 분석 자동화' },
  { icon: Camera, title: '인스타그램 변환', description: '블로그 글을 인스타그램 캡션, 해시태그, 캐러셀, 릴스 대본으로 원클릭 변환. 학원 맞춤 해시태그와 톤을 자동 적용합니다.', color: '#ec4899' },
  { icon: Lightbulb, title: '학원 키워드 발굴', description: 'AI가 경쟁 낮고 검색량 높은 학원 관련 블루오션 키워드를 자동 발굴. "중등 수학 선행학습" 같은 롱테일 키워드를 찾아드립니다.', color: '#eab308' },
  { icon: TrendingUp, title: '순위 트래킹', description: '타겟 키워드의 네이버 블로그탭 순위를 자동 추적. 우리 학원 블로그가 몇 위에 노출되는지 한눈에 확인하세요.', color: '#a78bfa' },
  { icon: Activity, title: '블로그 지수 분석', description: '내 블로그의 검색 노출 파워를 레이더 차트로 시각화. 경쟁 학원 블로그와 비교하여 부족한 점을 파악합니다.', color: '#06b6d4' },
  { icon: GraduationCap, title: '36개 학원 과목 지식 DB', description: '수학·영어·피아노·미술·태권도·코딩 등 36개 과목별 전문 지식, 시즌 키워드, 학부모 관심사를 AI가 자동으로 활용합니다.', color: '#6366f1' },
  { icon: FileText, title: 'SEO 점수 자동 채점', description: '작성한 글의 제목, 키워드 밀도, 글 길이, 구조를 100점 만점으로 채점. 구체적 개선 제안도 함께 제공합니다.', color: '#f97316' },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">주요 기능</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            학원 블로그 마케팅에 필요한 <span className="gradient-text">모든 도구</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            키워드 리서치부터 AI 글 생성, SEO 분석, 순위 트래킹까지 올인원으로 제공합니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}
              className="group relative rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-2.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${feature.color}12` }}
                >
                  <feature.icon className="h-5 w-5" style={{ color: feature.color }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  {feature.saving && (
                    <span className="inline-block mt-2 text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${feature.color}10`, color: feature.color }}
                    >
                      {feature.saving}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
