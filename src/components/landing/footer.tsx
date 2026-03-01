import Link from 'next/link'
import { Logo } from '@/components/layout/logo'

export function Footer() {
  return (
    <footer style={{ background: 'hsl(230 35% 8%)', borderTop: '1px solid hsl(230 25% 15%)' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo size="sm" variant="light" />
          <div className="flex items-center gap-6 text-sm" style={{ color: 'hsl(230 15% 50%)' }}>
            <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid hsl(230 25% 15%)' }}>
          <p className="text-center text-xs" style={{ color: 'hsl(230 15% 40%)' }}>
            © 2025 블로그잇. 학원 블로그 마케팅을 AI로 혁신합니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
