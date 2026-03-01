import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.blogit.kr'),
  title: '블로그잇 - 학원 전용 AI 블로그 자동 생성기',
  description:
    '학원 홍보 블로그, AI가 대신 써드립니다. 학원 키워드 분석부터 SEO 최적화 글 작성, 네이버 상위노출까지.',
  keywords: ['학원 블로그', '학원 마케팅', 'AI 블로그 생성', '학원 홍보', '네이버 상위노출', '학원 SEO'],
  openGraph: {
    title: '블로그잇 - 학원 전용 AI 블로그 자동 생성기',
    description: '학원 홍보 블로그를 AI로 10분 만에. 키워드 분석, 글 자동 생성, SEO 점수 체크, 순위 트래킹까지.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '블로그잇 BlogIt',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: '블로그잇 - 학원 전용 AI 블로그 자동 생성기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '블로그잇 - 학원 전용 AI 블로그 자동 생성기',
    description: '학원 홍보 블로그를 AI로 10분 만에. 키워드 분석, 글 자동 생성, SEO 점수 체크, 순위 트래킹까지.',
    images: ['/banner.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
