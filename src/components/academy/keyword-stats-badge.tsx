'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus, BarChart3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface KeywordStat {
  keyword: string
  monthlySearchPC: number
  monthlySearchMobile: number
  totalSearch: number
  competition: 'HIGH' | 'MEDIUM' | 'LOW'
  avgCPC: number
  trend: 'rising' | 'stable' | 'declining'
}

interface Props {
  academyType: string
  compact?: boolean         // true: 과목 선택 버튼 옆 미니 배지
  showDetails?: boolean     // true: 상위 키워드 리스트까지 표시
}

// 정적 데이터 캐시 (세션 중 유지)
const statsCache = new Map<string, { keywords: KeywordStat[]; topKeyword: KeywordStat | null }>()

export default function AcademyKeywordStats({ academyType, compact = false, showDetails = false }: Props) {
  const [stats, setStats] = useState<{ keywords: KeywordStat[]; topKeyword: KeywordStat | null } | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!academyType || !academyType.includes(':')) {
      setStats(null)
      return
    }

    // 캐시 히트
    if (statsCache.has(academyType)) {
      setStats(statsCache.get(academyType)!)
      return
    }

    setLoading(true)
    fetch(`/api/academy/keywords?type=${encodeURIComponent(academyType)}`)
      .then(res => res.json())
      .then(json => {
        const keywords = (json.keywords || []) as KeywordStat[]
        const sorted = [...keywords].sort((a, b) => b.totalSearch - a.totalSearch)
        const result = {
          keywords: sorted,
          topKeyword: sorted[0] || null,
        }
        statsCache.set(academyType, result)
        setStats(result)
      })
      .catch(() => setStats(null))
      .finally(() => setLoading(false))
  }, [academyType])

  if (!academyType || loading || !stats?.topKeyword) return null

  const top = stats.topKeyword

  // ===== Compact 모드: 과목 버튼 옆 미니 배지 =====
  if (compact) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center gap-0.5 ml-1">
            <span className="text-[9px] text-muted-foreground">
              {formatVolume(top.totalSearch)}
            </span>
            <CompetitionDot competition={top.competition} />
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs max-w-[200px]">
          <p className="font-semibold">{top.keyword}</p>
          <p>월 검색량: {top.totalSearch.toLocaleString()}회</p>
          <p>경쟁도: {competitionLabel(top.competition)}</p>
          <p>평균 CPC: ₩{top.avgCPC.toLocaleString()}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  // ===== 기본 모드: 요약 카드 =====
  return (
    <div className="rounded-lg border bg-slate-50/50 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="h-3.5 w-3.5 text-indigo-500" />
          <span className="text-xs font-semibold text-gray-700">네이버 검색 데이터</span>
        </div>
        <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-muted-foreground">
          {stats.keywords.length}개 키워드
        </Badge>
      </div>

      {/* 상위 3개 키워드 */}
      <div className="space-y-1">
        {stats.keywords.slice(0, showDetails ? 8 : 3).map((kw, i) => (
          <div key={kw.keyword} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[10px] text-muted-foreground w-3 text-right">{i + 1}</span>
              <span className="font-medium text-gray-700 truncate">{kw.keyword}</span>
              <TrendIcon trend={kw.trend} />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {formatVolume(kw.totalSearch)}/월
              </span>
              <CompetitionBadge competition={kw.competition} />
            </div>
          </div>
        ))}
      </div>

      {/* 골든 키워드 하이라이트 */}
      {!showDetails && (
        <GoldenKeywordHint keywords={stats.keywords} />
      )}
    </div>
  )
}

// ===== 하위 컴포넌트 =====

function CompetitionDot({ competition }: { competition: 'HIGH' | 'MEDIUM' | 'LOW' }) {
  const color = competition === 'HIGH' ? 'bg-red-400' : competition === 'MEDIUM' ? 'bg-amber-400' : 'bg-green-400'
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${color}`} />
}

function CompetitionBadge({ competition }: { competition: 'HIGH' | 'MEDIUM' | 'LOW' }) {
  const config = {
    HIGH: 'bg-red-100 text-red-600',
    MEDIUM: 'bg-amber-100 text-amber-600',
    LOW: 'bg-green-100 text-green-600',
  }
  return (
    <span className={`text-[10px] px-1.5 py-0 rounded ${config[competition]}`}>
      {competitionLabel(competition)}
    </span>
  )
}

function TrendIcon({ trend }: { trend: 'rising' | 'stable' | 'declining' }) {
  if (trend === 'rising') return <TrendingUp className="h-3 w-3 text-green-500" />
  if (trend === 'declining') return <TrendingDown className="h-3 w-3 text-red-400" />
  return null // stable은 표시 안 함
}

/** 골든 키워드: 검색량 높은데 경쟁 낮은 키워드 */
function GoldenKeywordHint({ keywords }: { keywords: KeywordStat[] }) {
  const golden = keywords
    .filter(kw => kw.competition === 'LOW' && kw.totalSearch >= 3000)
    .sort((a, b) => b.totalSearch - a.totalSearch)
    .slice(0, 2)

  if (golden.length === 0) return null

  return (
    <div className="pt-1.5 border-t border-slate-200">
      <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
        ✨ 골든 키워드 (검색↑ 경쟁↓)
      </p>
      <div className="flex flex-wrap gap-1 mt-1">
        {golden.map(kw => (
          <span key={kw.keyword} className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {kw.keyword} ({formatVolume(kw.totalSearch)})
          </span>
        ))}
      </div>
    </div>
  )
}

// ===== 유틸 =====

function formatVolume(n: number): string {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`
  return n.toString()
}

function competitionLabel(c: 'HIGH' | 'MEDIUM' | 'LOW'): string {
  return c === 'HIGH' ? '경쟁↑' : c === 'MEDIUM' ? '경쟁중' : '경쟁↓'
}
