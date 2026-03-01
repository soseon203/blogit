import { Clock, TrendingDown, Search, Wallet, ArrowDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  {
    icon: Search,
    title: '"강남 수학학원" 검색해도 안 나와요',
    description: '블로그를 열심히 쓰는데 네이버 검색에 노출이 안 됩니다. 어떤 키워드로 써야 학부모님 눈에 띄는지 모릅니다.',
    cost: '잠재 수강생 유실',
  },
  {
    icon: Clock,
    title: '블로그 쓸 시간이 없습니다',
    description: '수업 준비, 학부모 상담, 학원 관리하기도 벅찬데 블로그까지 쓰자니 시간이 부족합니다. 결국 방치하게 됩니다.',
    cost: '월 20시간+ 소모',
  },
  {
    icon: TrendingDown,
    title: '뭘 써야 할지 모르겠어요',
    description: '학원 소식만 올리자니 밋밋하고, 학습 팁을 쓰자니 전문적 글쓰기가 부담됩니다. 매번 주제 선정부터 막힙니다.',
    cost: '콘텐츠 고갈',
  },
  {
    icon: Wallet,
    title: '블로그 대행 비용이 너무 비싸요',
    description: '블로그 마케팅 대행을 맡기면 월 50~150만원. 소규모 학원에겐 부담이 큽니다. 효과가 보장되는 것도 아닙니다.',
    cost: '연 600만원~1,800만원',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">학원 원장님의 공통된 고민</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">블로그 마케팅이 중요한 건 아는데, 시간도 방법도 부족합니다</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <Card key={problem.title} className="border-none bg-background shadow-md">
              <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8 text-center">
                <div className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-destructive/10">
                  <problem.icon className="h-6 w-6 sm:h-7 sm:w-7 text-destructive" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold">{problem.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                  <ArrowDown className="h-3 w-3" />{problem.cost}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold">이 모든 문제를 <span className="text-primary">월 $5</span>부터 해결할 수 있다면?</p>
        </div>
      </div>
    </section>
  )
}
