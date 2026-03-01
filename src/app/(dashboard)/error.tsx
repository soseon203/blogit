'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[Dashboard Error]', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">문제가 발생했습니다</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {error.message || '예기치 않은 오류가 발생했습니다. 다시 시도해주세요.'}
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button onClick={reset} variant="default" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              다시 시도
            </Button>
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                대시보드로
              </Button>
            </Link>
          </div>
          {error.digest && (
            <p className="text-[10px] text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
