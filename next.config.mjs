/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 보안 헤더
  async headers() {
    return [
      {
        // 모든 페이지에 적용
        source: '/(.*)',
        headers: [
          // iframe 삽입 방지 (클릭재킹 차단)
          { key: 'X-Frame-Options', value: 'DENY' },
          // MIME 스니핑 방지
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer 정보 최소화
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // 권한 정책 (카메라/마이크 등 차단)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // HSTS (HTTPS 강제)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // CSP (콘텐츠 보안 정책)
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.lemonsqueezy.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://generativelanguage.googleapis.com https://api.searchad.naver.com https://openapi.naver.com; frame-src https://*.lemonsqueezy.com;" },
        ],
      },
      {
        // API 엔드포인트 추가 보호
        source: '/api/(.*)',
        headers: [
          // 캐시 금지
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          // 검색엔진 인덱싱 차단
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        // 대시보드 페이지 검색엔진 차단
        source: '/(dashboard|keywords|content|seo-check|tracking|report|settings|competitors|blog-index|opportunities|admin|credits|billing|post-check|instagram|keywords-bulk|learning)(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ]
  },
};

export default nextConfig;
