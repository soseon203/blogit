'use client'

import { useEffect, useState, useMemo } from 'react'
import { Flame, TrendingUp, Lightbulb, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface SeasonalRec {
  academyType: string
  academyName: string
  topic: string
  keywords: string[]
  urgency: 'high' | 'medium' | 'low'
  blogTopics: { title: string; keywords: string[]; description: string }[]
  titlePatterns: string[]
  tags: string[]
}

interface Props {
  academyType: string
  onApplyKeyword?: (keyword: string) => void
  onApplyTopic?: (topic: { title: string; keywords: string[] }) => void
}

export default function SeasonalRecommendationPanel({ academyType, onApplyKeyword, onApplyTopic }: Props) {
  const [data, setData] = useState<SeasonalRec | null>(null)
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const currentMonth = useMemo(() => new Date().getMonth() + 1, [])

  useEffect(() => {
    if (!academyType || !academyType.includes(':')) {
      setData(null)
      return
    }

    setLoading(true)
    fetch(`/api/academy/seasonal?type=${encodeURIComponent(academyType)}`)
      .then(res => res.json())
      .then(json => {
        setData(json.recommendation || null)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [academyType])

  if (!academyType || !academyType.includes(':') || loading) return null
  if (!data) return null

  const urgencyConfig = {
    high: { icon: Flame, label: '핵심 시즌', color: 'bg-red-50 border-red-200', textColor: 'text-red-700', badgeColor: 'bg-red-100 text-red-700' },
    medium: { icon: TrendingUp, label: '주목 시즌', color: 'bg-amber-50 border-amber-200', textColor: 'text-amber-700', badgeColor: 'bg-amber-100 text-amber-700' },
    low: { icon: Lightbulb, label: '참고', color: 'bg-blue-50 border-blue-200', textColor: 'text-blue-700', badgeColor: 'bg-blue-100 text-blue-700' },
  }

  const config = urgencyConfig[data.urgency]
  const Icon = config.icon

  return (
    <div className={`rounded-lg border p-3 ${config.color} transition-all`}>
      {/* 헤더 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${config.textColor}`} />
          <span className={`text-xs font-semibold ${config.textColor}`}>
            {currentMonth}월 {data.academyName}
          </span>
          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${config.badgeColor} border-0`}>
            {config.label}
          </Badge>
        </div>
        {expanded ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
      </button>

      {/* 시즌 주제 (항상 표시) */}
      <p className={`mt-1.5 text-xs ${config.textColor} font-medium`}>
        {data.topic}
      </p>

      {/* 추천 키워드 (항상 표시) */}
      <div className="flex flex-wrap gap-1 mt-2">
        {data.keywords.map(kw => (
          <button
            key={kw}
            onClick={(e) => {
              e.stopPropagation()
              onApplyKeyword?.(kw)
            }}
            className="text-[11px] px-2 py-0.5 rounded-full bg-white/70 hover:bg-white border border-current/10 transition-colors cursor-pointer"
            title={`"${kw}" 키워드 적용`}
          >
            {kw}
          </button>
        ))}
      </div>

      {/* 확장 영역 */}
      {expanded && (
        <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {/* 추천 블로그 주제 */}
          {data.blogTopics.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> 추천 블로그 주제
              </p>
              <div className="space-y-1.5">
                {data.blogTopics.map((bt, i) => (
                  <button
                    key={i}
                    onClick={() => onApplyTopic?.(bt)}
                    className="w-full text-left p-2 rounded-md bg-white/60 hover:bg-white border border-transparent hover:border-gray-200 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-800">{bt.title}</span>
                      <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{bt.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 추천 제목 패턴 */}
          {data.titlePatterns.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-1">📝 제목 패턴</p>
              <div className="space-y-0.5">
                {data.titlePatterns.map((tp, i) => (
                  <p key={i} className="text-[11px] text-gray-600">{tp}</p>
                ))}
              </div>
            </div>
          )}

          {/* 추천 태그 */}
          {data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {data.tags.map(tag => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/50 text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
