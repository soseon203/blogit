import Link from 'next/link'
import { ArrowRight, Wand2, GraduationCap, Search, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const points = [
  { icon: Wand2, text: 'AI가 학원 홍보글 자동 작성' },
  { icon: GraduationCap, text: '36개 학원 종류 전문 지원' },
  { icon: Search, text: '네이버 실시간 키워드 데이터' },
  { icon: BarChart3, text: 'SEO 100점 만점 자동 채점' },
]

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl px-8 py-14 sm:px-16 sm:py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, hsl(239 60% 20%), hsl(230 40% 12%))',
          }}
        >
          {/* 배경 장식 */}
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full opacity-20 blur-[80px]"
            style={{ background: '#6366f1' }}
          />
          <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full opacity-15 blur-[80px]"
            style={{ background: '#f97316' }}
          />

          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              학원 블로그 마케팅,
              <br />
              오늘부터 AI에게 맡기세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 leading-relaxed">
              월 <span className="font-semibold text-white">$5</span>부터 학원 전용 블로그 마케팅 도구를 도입하세요.
            </p>

            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
              {points.map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-sm text-white/70">
                  <p.icon className="h-4 w-4 text-indigo-300" />
                  <span>{p.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/signup">
                <Button size="lg"
                  className="h-12 px-8 text-sm font-semibold shadow-lg"
                  style={{ background: 'white', color: '#1e2444' }}
                >
                  무료로 시작하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
