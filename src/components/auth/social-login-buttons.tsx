'use client'

import { useState } from 'react'
import { createClient as createBrowserClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

interface SocialLoginButtonsProps {
  redirectTo?: string
}

export default function SocialLoginButtons({ redirectTo }: SocialLoginButtonsProps) {
  const [loading, setLoading] = useState<string | null>(null)

  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  const handleOAuth = async (provider: 'google' | 'kakao') => {
    setLoading(provider)
    try {
      const supabase = createBrowserClient()
      await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: redirectTo || `${origin}/api/auth/callback`,
        },
      })
    } catch {
      setLoading(null)
    }
  }

  // Google, Kakao 소셜 로그인 비활성화
  return null
}
