import { QueryClient } from '@tanstack/react-query'

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,    // 5분간 fresh 유지
        gcTime: 1000 * 60 * 30,       // 30분 후 가비지 컬렉션
        refetchOnWindowFocus: true,
        retry: 1,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // 서버: 매번 새 클라이언트
    return makeQueryClient()
  }
  // 브라우저: 싱글톤
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}
