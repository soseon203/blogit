interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  variant?: 'default' | 'light'  // light = 사이드바(다크 배경)용
}

export function Logo({ size = 'md', showText = true, variant = 'default' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 24, text: 'text-base', gap: 'gap-1.5' },
    md: { icon: 30, text: 'text-lg', gap: 'gap-2' },
    lg: { icon: 38, text: 'text-2xl', gap: 'gap-2.5' },
  }

  const { icon, text, gap } = sizeMap[size]
  const isLight = variant === 'light'

  return (
    <div className={`flex items-center ${gap}`}>
      {/* 커스텀 로고 아이콘 — 졸업모+펜 */}
      <div className="relative flex items-center justify-center">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 그라디언트 정의 */}
          <defs>
            <linearGradient id="blogit-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="blogit-accent" x1="16" y1="20" x2="26" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          {/* 라운드 사각형 배경 */}
          <rect width="32" height="32" rx="8" fill="url(#blogit-grad)" />
          {/* 책/노트 아이콘 */}
          <path d="M8 10.5C8 9.67 8.67 9 9.5 9H15V22H9.5C8.67 22 8 21.33 8 20.5V10.5Z" fill="white" fillOpacity="0.9" />
          <path d="M17 9H22.5C23.33 9 24 9.67 24 10.5V20.5C24 21.33 23.33 22 22.5 22H17V9Z" fill="white" fillOpacity="0.7" />
          {/* 펜 닙 (악센트 코랄) */}
          <path d="M20 18L23 25L26 18L23 20L20 18Z" fill="url(#blogit-accent)" />
          {/* 텍스트 라인 */}
          <rect x="10" y="12" width="3.5" height="1" rx="0.5" fill="#6366f1" fillOpacity="0.5" />
          <rect x="10" y="14.5" width="3" height="1" rx="0.5" fill="#6366f1" fillOpacity="0.4" />
          <rect x="10" y="17" width="3.5" height="1" rx="0.5" fill="#6366f1" fillOpacity="0.3" />
        </svg>
      </div>
      {showText && (
        <span className={`font-bold tracking-tight ${text}`}>
          <span className={isLight ? 'text-white' : 'text-foreground'}>블로그</span>
          <span className={isLight ? 'text-indigo-300' : 'text-primary'}>잇</span>
        </span>
      )}
    </div>
  )
}
