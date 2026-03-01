import { Logo } from '@/components/layout/logo'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* 왼쪽 비주얼 패널 (데스크탑만) */}
      <div className="hidden lg:flex lg:w-[45%] relative items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(239 60% 20%), hsl(230 40% 10%))' }}
      >
        {/* 장식 원 */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full opacity-15 blur-[100px]"
          style={{ background: '#818cf8' }}
        />
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full opacity-10 blur-[80px]"
          style={{ background: '#fb923c' }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="relative text-center px-12">
          <div className="mb-6">
            <Logo size="lg" variant="light" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            학원 블로그 마케팅의<br />새로운 기준
          </h2>
          <p className="text-sm text-white/50 leading-relaxed max-w-sm mx-auto">
            AI가 학원 맞춤 블로그를 자동 생성합니다.<br />
            네이버 상위노출, 이제 전문가 없이도 가능합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {['36개 과목 지원', 'AI 자동 생성', 'SEO 최적화'].map(t => (
              <span key={t} className="text-[11px] px-3 py-1 rounded-full text-white/60"
                style={{ background: 'hsl(239 84% 67% / 0.15)', border: '1px solid hsl(239 84% 67% / 0.2)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 오른쪽 폼 영역 */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12"
        style={{ background: 'hsl(var(--background))' }}
      >
        <div className="lg:hidden mb-8">
          <Link href="/">
            <Logo size="lg" />
          </Link>
        </div>
        <div className="w-full max-w-[420px]">{children}</div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © 2026 블로그잇. All rights reserved.
        </p>
      </div>
    </div>
  )
}
