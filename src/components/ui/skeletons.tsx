'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

/** 단일 카드 스켈레톤 */
export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="h-4 w-32 bg-muted animate-pulse rounded" />
      </CardHeader>
      <CardContent className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-muted animate-pulse rounded"
            style={{ width: `${85 - i * 15}%` }}
          />
        ))}
      </CardContent>
    </Card>
  )
}

/** 통계 카드 그리드 스켈레톤 */
export function StatsGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-${Math.min(count, 4)}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <div className="h-3 w-20 bg-muted animate-pulse rounded mb-2" />
            <div className="h-7 w-16 bg-muted animate-pulse rounded" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

/** 테이블 스켈레톤 */
export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          {/* 헤더 */}
          <div className="flex border-b bg-muted/30 p-3 gap-4">
            {Array.from({ length: cols }).map((_, i) => (
              <div key={i} className="h-3 bg-muted animate-pulse rounded flex-1" />
            ))}
          </div>
          {/* 행 */}
          {Array.from({ length: rows }).map((_, ri) => (
            <div key={ri} className="flex border-b p-3 gap-4">
              {Array.from({ length: cols }).map((_, ci) => (
                <div
                  key={ci}
                  className="h-3 bg-muted animate-pulse rounded flex-1"
                  style={{ animationDelay: `${(ri * cols + ci) * 50}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/** 리스트 아이템 스켈레톤 */
export function ListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-lg border">
          <div className="h-10 w-10 bg-muted animate-pulse rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-3/4 bg-muted animate-pulse rounded" />
            <div className="h-2.5 w-1/2 bg-muted animate-pulse rounded" />
          </div>
          <div className="h-6 w-16 bg-muted animate-pulse rounded flex-shrink-0" />
        </div>
      ))}
    </div>
  )
}

/** 차트 영역 스켈레톤 */
export function ChartSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="h-4 w-40 bg-muted animate-pulse rounded" />
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-end gap-1.5 pt-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-muted animate-pulse rounded-t"
              style={{
                height: `${30 + Math.random() * 60}%`,
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/** 전체 페이지 로딩 (대시보드용) */
export function DashboardPageSkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 헤더 */}
      <div className="space-y-2">
        <div className="h-6 w-48 bg-muted animate-pulse rounded" />
        <div className="h-3 w-72 bg-muted animate-pulse rounded" />
      </div>
      {/* 통계 카드 */}
      <StatsGridSkeleton count={4} />
      {/* 차트 */}
      <ChartSkeleton />
      {/* 리스트 */}
      <ListSkeleton count={3} />
    </div>
  )
}

/** 콘텐츠 생성 페이지 스켈레톤 */
export function ContentPageSkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="space-y-2">
        <div className="h-6 w-36 bg-muted animate-pulse rounded" />
        <div className="h-3 w-56 bg-muted animate-pulse rounded" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <CardSkeleton lines={2} />
          <div className="h-[400px] bg-muted animate-pulse rounded-lg" />
        </div>
        <div className="space-y-4">
          <CardSkeleton lines={4} />
          <CardSkeleton lines={3} />
        </div>
      </div>
    </div>
  )
}

/** 에러 상태 컴포넌트 */
export function ErrorState({
  title = '오류가 발생했습니다',
  message = '잠시 후 다시 시도해주세요.',
  onRetry,
}: {
  title?: string
  message?: string
  onRetry?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
        <svg className="h-6 w-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-primary hover:underline"
        >
          다시 시도
        </button>
      )}
    </div>
  )
}

/** 빈 상태 컴포넌트 */
export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
      {description && <p className="text-sm text-muted-foreground mb-4 max-w-md">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  )
}
