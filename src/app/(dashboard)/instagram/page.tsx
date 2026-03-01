'use client'

import { useEffect, useState } from 'react'
import { Camera, Coins } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InstagramTabCaption } from '@/components/instagram/instagram-tab-caption'
import { InstagramTabHashtags } from '@/components/instagram/instagram-tab-hashtags'
import { InstagramTabCarousel } from '@/components/instagram/instagram-tab-carousel'
import { InstagramTabReels } from '@/components/instagram/instagram-tab-reels'
import { CREDIT_COSTS, type Plan } from '@/types/database'
import { createClient } from '@/lib/supabase/client'

export default function InstagramPage() {
  const [userPlan, setUserPlan] = useState<Plan | undefined>()
  const [academyType, setAcademyType] = useState<string>('')

  useEffect(() => {
    const fetchPlan = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', user.id)
          .single()
        if (data) setUserPlan(data.plan as Plan)
      }
    }
    fetchPlan()
  }, [])

  const ACADEMY_QUICK_OPTIONS = [
    { value: '', label: '일반' },
    { value: 'entrance:수학', label: '수학' },
    { value: 'entrance:영어', label: '영어' },
    { value: 'arts:피아노', label: '피아노' },
    { value: 'arts:미술', label: '미술' },
    { value: 'arts:태권도', label: '태권도' },
    { value: 'special:코딩', label: '코딩' },
    { value: 'language:토익', label: '토익' },
  ]

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
            <Camera className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">인스타그램 변환</h1>
            <p className="text-sm text-muted-foreground">
              네이버 블로그 콘텐츠를 인스타그램용으로 AI 변환
            </p>
          </div>
          <Badge variant="secondary" className="ml-auto gap-1">
            <Coins className="h-3 w-3" />
            {CREDIT_COSTS.instagram_convert} 크레딧/회
          </Badge>
        </div>
      </div>

      {/* 학원 종류 선택 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-muted-foreground">학원 맞춤:</span>
        {ACADEMY_QUICK_OPTIONS.map(opt => (
          <Badge
            key={opt.value}
            variant={academyType === opt.value ? 'default' : 'outline'}
            className={`cursor-pointer text-xs ${academyType === opt.value ? 'bg-pink-600 hover:bg-pink-700 border-pink-600' : 'hover:bg-pink-50'}`}
            onClick={() => setAcademyType(opt.value)}
          >
            {opt.label}
          </Badge>
        ))}
        {academyType && (
          <span className="text-[11px] text-pink-600">
            ✓ {ACADEMY_QUICK_OPTIONS.find(o => o.value === academyType)?.label}학원 맞춤 해시태그·톤 적용
          </span>
        )}
      </div>

      {/* 탭 */}
      <Tabs defaultValue="caption" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="caption">캡션 변환</TabsTrigger>
          <TabsTrigger value="hashtags">해시태그 추천</TabsTrigger>
          <TabsTrigger value="carousel">캐러셀 생성</TabsTrigger>
          <TabsTrigger value="reels">릴스 대본</TabsTrigger>
        </TabsList>

        <TabsContent value="caption">
          <InstagramTabCaption userPlan={userPlan} academyType={academyType} />
        </TabsContent>

        <TabsContent value="hashtags">
          <InstagramTabHashtags userPlan={userPlan} academyType={academyType} />
        </TabsContent>

        <TabsContent value="carousel">
          <InstagramTabCarousel userPlan={userPlan} academyType={academyType} />
        </TabsContent>

        <TabsContent value="reels">
          <InstagramTabReels userPlan={userPlan} academyType={academyType} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
