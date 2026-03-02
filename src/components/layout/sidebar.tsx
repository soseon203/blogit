'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/layout/logo'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PLANS } from '@/types/database'
import { navGroups, adminNavItems, canAccessFeature } from '@/lib/navigation'
import { Lock, ChevronRight } from 'lucide-react'
import { useUserProfile } from '@/contexts/user-profile'

export function Sidebar() {
  const pathname = usePathname()
  const {
    plan, role, creditsBalance, creditsQuota,
    avatarUrl, userName, userEmail, loaded,
  } = useUserProfile()

  const planInfo = PLANS[plan]
  const creditPercent = creditsQuota > 0 ? Math.min(100, (creditsBalance / creditsQuota) * 100) : 0

  return (
    <aside className="blogit-sidebar hidden w-64 shrink-0 lg:block"
      style={{ background: 'linear-gradient(180deg, hsl(230 35% 14%), hsl(230 30% 10%))' }}
    >
      <div className="flex h-full flex-col">
        {/* 로고 */}
        <div className="flex h-16 items-center px-5" style={{ borderBottom: '1px solid hsl(230 25% 22%)' }}>
          <Link href="/dashboard">
            <Logo size="md" variant="light" />
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navGroups.map((group, gi) => (
            <div key={group.label} className={gi > 0 ? 'mt-5' : ''}>
              {gi > 0 && (
                <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest"
                  style={{ color: 'hsl(230 15% 50%)' }}
                >
                  {group.label}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href
                  const locked = !canAccessFeature(plan, item.minPlan)
                  return (
                    <Tooltip key={item.href}>
                      <TooltipTrigger asChild>
                        <Link
                          href={locked ? '/billing' : item.href}
                          className={cn(
                            'group flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200',
                            locked
                              ? 'cursor-default opacity-40'
                              : isActive
                              ? 'text-white shadow-glow'
                              : 'hover:text-white'
                          )}
                          style={
                            isActive
                              ? { background: 'hsl(239 84% 67%)', color: 'white' }
                              : { color: 'hsl(230 15% 65%)' }
                          }
                          onMouseEnter={(e) => {
                            if (!isActive && !locked)
                              e.currentTarget.style.background = 'hsl(230 30% 20%)'
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive)
                              e.currentTarget.style.background = 'transparent'
                          }}
                        >
                          <item.icon className={cn('h-[18px] w-[18px]', isActive ? 'text-white' : 'text-inherit')} />
                          <span className="flex-1">{item.label}</span>
                          {locked && <Lock className="h-3 w-3" />}
                          {isActive && <ChevronRight className="h-3.5 w-3.5 text-white/60" />}
                        </Link>
                      </TooltipTrigger>
                      {locked && (
                        <TooltipContent side="right">
                          <p>{item.minPlan === 'lite' ? 'Lite' : 'Starter'} 이상 플랜 필요</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          ))}

          {/* 관리자 메뉴 */}
          {role === 'admin' && (
            <>
              <div className="my-3 mx-3" style={{ borderTop: '1px solid hsl(230 25% 22%)' }} />
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: 'hsl(230 15% 50%)' }}
              >
                관리자
              </p>
              {adminNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200',
                    )}
                    style={
                      isActive
                        ? { background: 'hsl(239 84% 67%)', color: 'white' }
                        : { color: 'hsl(230 15% 65%)' }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'hsl(230 30% 20%)'
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <item.icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </Link>
                )
              })}
            </>
          )}
        </nav>

        {/* 하단 프로필 + 크레딧 */}
        <div className="p-4" style={{ borderTop: '1px solid hsl(230 25% 22%)' }}>
          {/* 로딩 중 스켈레톤 */}
          {!loaded ? (
            <div className="space-y-3 animate-pulse">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full" style={{ background: 'hsl(230 30% 25%)' }} />
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 w-20 rounded" style={{ background: 'hsl(230 30% 25%)' }} />
                  <div className="h-2.5 w-32 rounded" style={{ background: 'hsl(230 30% 25%)' }} />
                </div>
              </div>
              <div className="rounded-lg p-3 space-y-2" style={{ background: 'hsl(230 30% 18%)' }}>
                <div className="h-2.5 w-12 rounded" style={{ background: 'hsl(230 30% 25%)' }} />
                <div className="h-3.5 w-16 rounded" style={{ background: 'hsl(230 30% 25%)' }} />
                <div className="h-1.5 w-full rounded-full" style={{ background: 'hsl(230 25% 25%)' }} />
              </div>
            </div>
          ) : (
          <>
          {(avatarUrl || userEmail) && (
            <div className="mb-3 flex items-center gap-2.5">
              <Avatar className="h-8 w-8 ring-2 ring-white/10">
                {avatarUrl && <AvatarImage src={avatarUrl} alt="Profile" referrerPolicy="no-referrer" />}
                <AvatarFallback className="bg-indigo-500/20 text-xs text-indigo-300">
                  {(userName || userEmail).charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                {userName && <p className="truncate text-xs font-medium text-white/90">{userName}</p>}
                <p className="truncate text-[11px]" style={{ color: 'hsl(230 15% 55%)' }}>{userEmail}</p>
              </div>
            </div>
          )}
          <div className="rounded-lg p-3" style={{ background: 'hsl(230 30% 18%)' }}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium" style={{ color: 'hsl(230 15% 55%)' }}>현재 플랜</p>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                style={{ background: 'hsl(239 84% 67% / 0.2)', color: '#a5b4fc' }}
              >
                {planInfo.name}
              </span>
            </div>
            <div className="mt-2.5">
              <div className="flex justify-between text-[11px] mb-1" style={{ color: 'hsl(230 15% 55%)' }}>
                <span>크레딧</span>
                <span className="text-white/80">{creditsBalance.toLocaleString()}/{creditsQuota.toLocaleString()}</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'hsl(230 25% 25%)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${creditPercent}%`,
                    background: creditPercent <= 20
                      ? '#ef4444'
                      : creditPercent <= 50
                      ? '#f59e0b'
                      : 'linear-gradient(90deg, #818cf8, #6366f1)',
                  }}
                />
              </div>
            </div>
          </div>
          </>
          )}
        </div>
      </div>
    </aside>
  )
}
