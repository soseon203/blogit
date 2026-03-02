'use client'

import { useQuery } from '@tanstack/react-query'
import type { Plan } from '@/types/database'

// ---------- 타입 ----------

export interface RecentKeyword {
  id: string
  seed_keyword: string
  created_at: string
}

export interface RecentContent {
  id: string
  target_keyword: string
  title: string
  content: string
  status: string
  seo_score: number | null
  created_at: string
}

export interface ContentStats {
  total: number
  draft: number
  published: number
  archived: number
  avgSeoScore: number
}

export interface DailyActivity {
  date: string
  keywords: number
  content: number
  seo: number
  tracking: number
}

export interface BlogProfile {
  blogUrl: string
  blogId: string | null
  blogName: string
  blogThumbnail: string | null
  totalPosts: number
  blogScore: number
  blogLevel: string
  categoryKeywords: string[]
  lastPostDate: string | null
  updatedAt: string | null
}

export interface DashboardData {
  plan: Plan
  creditsBalance: number
  creditsQuota: number
  recentKeywords: RecentKeyword[]
  recentContent: RecentContent[]
  contentStats: ContentStats
  dailyActivity: DailyActivity[]
  trackedKeywordsCount: number
  recommendedKeywords: string[]
  blogProfile: BlogProfile | null
  raw: Record<string, unknown>
}

const DEFAULT_CONTENT_STATS: ContentStats = {
  total: 0, draft: 0, published: 0, archived: 0, avgSeoScore: 0,
}

async function fetchDashboard(): Promise<DashboardData> {
  const res = await fetch('/api/dashboard')
  if (!res.ok) throw new Error('대시보드 데이터를 불러오지 못했습니다.')
  const data = await res.json()

  return {
    plan: (data.profile?.plan || 'free') as Plan,
    creditsBalance: data.profile?.credits_balance ?? 30,
    creditsQuota: data.profile?.credits_monthly_quota ?? 30,
    recentKeywords: data.recentKeywords || [],
    recentContent: data.recentContent || [],
    contentStats: data.contentStats || DEFAULT_CONTENT_STATS,
    dailyActivity: data.dailyActivity || [],
    trackedKeywordsCount: data.trackedKeywordsCount || 0,
    recommendedKeywords: data.recommendedKeywords || [],
    blogProfile: data.blogProfile || null,
    raw: data,
  }
}

/** 대시보드 API 데이터를 React Query로 관리하는 훅 */
export function useDashboard() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  })
}
