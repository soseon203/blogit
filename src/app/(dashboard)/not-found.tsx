import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground/40 mb-4" />
      <h2 className="text-xl font-semibold mb-2">페이지를 찾을 수 없습니다</h2>
      <p className="text-sm text-muted-foreground mb-6">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link href="/dashboard">
        <Button>대시보드로 돌아가기</Button>
      </Link>
    </div>
  )
}
