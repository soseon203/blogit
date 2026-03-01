import Link from 'next/link'
import { ArrowRight, Search, Wand2, BarChart3, TrendingUp, Zap, GraduationCap, Sparkles, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* 배경 — 인디고/코랄 메쉬 그라디언트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 -translate-y-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
        />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #fb923c 0%, transparent 70%)' }}
        />
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
        />
        {/* 도트 패턴 */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            style={{ background: 'linear-gradient(135deg, hsl(239 84% 67% / 0.1), hsl(24 95% 53% / 0.1))', border: '1px solid hsl(239 84% 67% / 0.15)' }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-foreground/80">학원 블로그 1편 작성: <span className="font-bold text-primary">3시간 → 10분</span></span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            학원 블로그, 아직 직접 쓰세요?
            <br />
            <span className="gradient-text">AI가 10분이면 써드립니다</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            수학학원, 영어학원, 피아노학원, 미술학원…
            <br className="hidden sm:block" />
            어떤 학원이든{' '}
            <span className="font-semibold text-foreground">네이버 상위노출</span>되는
            홍보 블로그를 AI가 자동 생성합니다.
          </p>

          {/* CTA */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/signup">
              <Button size="lg" className="h-12 w-full sm:w-auto whitespace-nowrap px-8 shadow-glow text-sm font-semibold">
                무료로 시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg" className="h-12 w-full sm:w-auto whitespace-nowrap px-8 text-sm font-semibold">
                기능 살펴보기
              </Button>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            {['무료 플랜 제공', '신용카드 불필요', '3분 만에 시작'].map(t => (
              <span key={t} className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-primary/60" />
                {t}
              </span>
            ))}
          </div>

          {/* 기능 카드 그리드 */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Wand2, label: 'AI 글 생성', desc: '학원 맞춤 블로그 자동 작성', color: '#6366f1' },
              { icon: Search, label: '학원 키워드', desc: '지역+학원 검색량 분석', color: '#f97316' },
              { icon: BarChart3, label: 'SEO 분석', desc: '상위노출 점수 자동 채점', color: '#2dd4bf' },
              { icon: TrendingUp, label: '순위 추적', desc: '네이버 검색 순위 모니터링', color: '#a78bfa' },
            ].map((item) => (
              <div key={item.label}
                className="group relative flex flex-col items-center gap-2.5 rounded-xl border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="rounded-xl p-2.5" style={{ background: `${item.color}15` }}>
                  <item.icon className="h-5 w-5" style={{ color: item.color }} />
                </div>
                <div className="text-sm font-bold">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 하단 트러스트 바 */}
          <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>입시·보습·예체능·어학 <strong className="text-foreground">36개 과목</strong> 지원</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" style={{ color: '#f97316' }} />
              <span>학원 전용 <strong className="text-foreground">프리셋 내장</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Search className="h-4 w-4 text-primary" />
              <span>네이버 API <strong className="text-foreground">실시간 데이터</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
