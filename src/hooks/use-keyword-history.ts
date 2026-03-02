'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * Supabase DB 기반 키워드 검색 히스토리 훅 (React Query)
 * @param type - 히스토리 타입 ('keyword-research-history' | 'keyword-discovery-history')
 */
export function useKeywordHistory(type: string) {
  const queryClient = useQueryClient()

  const { data: history = [] } = useQuery<string[]>({
    queryKey: ['search-history', type],
    queryFn: async () => {
      const res = await fetch(`/api/search-history?type=${encodeURIComponent(type)}`)
      const data = await res.json()
      return data.history?.length ? data.history : []
    },
  })

  const { mutate: addKeyword } = useMutation({
    mutationFn: async (keyword: string) => {
      const trimmed = keyword.trim()
      if (!trimmed) return
      await fetch('/api/search-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: trimmed, type }),
      })
    },
    // 낙관적 업데이트: DB 저장 전에 UI 즉시 반영
    onMutate: async (keyword: string) => {
      const trimmed = keyword.trim()
      if (!trimmed) return
      await queryClient.cancelQueries({ queryKey: ['search-history', type] })
      const prev = queryClient.getQueryData<string[]>(['search-history', type]) ?? []
      const next = [trimmed, ...prev.filter((k) => k !== trimmed)].slice(0, 5)
      queryClient.setQueryData(['search-history', type], next)
      return { prev }
    },
    // 에러 시 롤백
    onError: (_err, _keyword, context) => {
      if (context?.prev) {
        queryClient.setQueryData(['search-history', type], context.prev)
      }
    },
  })

  return { history, addKeyword }
}
