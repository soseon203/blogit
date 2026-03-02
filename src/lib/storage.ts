/**
 * 타입 안전한 localStorage 래퍼
 * IJW-Calendar 패턴 기반
 */

export const STORAGE_KEYS = {
  KEYWORD_DRAFT: 'blogit_keyword_draft',
  CONTENT_DRAFT: 'blogit_content_draft',
  SIDEBAR_COLLAPSED: 'blogit_sidebar_collapsed',
  RECENT_SEARCH: 'blogit_recent_search',
  SEO_FILTER: 'blogit_seo_filter',
  TABLE_PAGE_SIZE: 'blogit_table_page_size',
  EDITOR_PREFERENCES: 'blogit_editor_prefs',
} as const

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]

export const storage = {
  getString(key: string): string | null {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },

  setString(key: string, value: string): void {
    try {
      localStorage.setItem(key, value)
    } catch {
      // 스토리지 꽉 참 등 무시
    }
  },

  getBoolean(key: string, defaultValue = false): boolean {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return defaultValue
      return value === 'true'
    } catch {
      return defaultValue
    }
  },

  setBoolean(key: string, value: boolean): void {
    try {
      localStorage.setItem(key, String(value))
    } catch {
      // 무시
    }
  },

  getNumber(key: string, defaultValue = 0): number {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return defaultValue
      const num = Number(value)
      return Number.isNaN(num) ? defaultValue : num
    } catch {
      return defaultValue
    }
  },

  setNumber(key: string, value: number): void {
    try {
      localStorage.setItem(key, String(value))
    } catch {
      // 무시
    }
  },

  getJSON<T>(key: string, defaultValue: T): T {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return defaultValue
      return JSON.parse(value) as T
    } catch {
      return defaultValue
    }
  },

  setJSON(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 무시
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch {
      // 무시
    }
  },

  /** blogit_ 프리픽스 키 전체 삭제 */
  clearAll(): void {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('blogit_')) localStorage.removeItem(key)
      })
    } catch {
      // 무시
    }
  },
}
