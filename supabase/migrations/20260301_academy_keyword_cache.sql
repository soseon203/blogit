-- =============================================
-- 학원 키워드 캐시 테이블
-- =============================================
-- 네이버 검색광고 API에서 수집한 키워드 데이터를 캐시합니다.
-- TTL: 24시간 (앱에서 체크)

CREATE TABLE IF NOT EXISTS academy_keyword_cache (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  academy_type TEXT NOT NULL UNIQUE,          -- 'entrance:수학', 'arts:피아노' 등
  keyword_data JSONB NOT NULL DEFAULT '[]',   -- 수집된 키워드 배열 (JSON)
  keyword_count INTEGER DEFAULT 0,            -- 키워드 수
  top_keywords TEXT[] DEFAULT '{}',           -- 상위 키워드 목록 (빠른 조회용)
  updated_at TIMESTAMPTZ DEFAULT NOW(),       -- 마지막 수집 시각
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_academy_keyword_cache_type ON academy_keyword_cache(academy_type);
CREATE INDEX IF NOT EXISTS idx_academy_keyword_cache_updated ON academy_keyword_cache(updated_at);

-- RLS (서비스 롤 키로만 접근)
ALTER TABLE academy_keyword_cache ENABLE ROW LEVEL SECURITY;

-- 서비스 롤 전체 접근
CREATE POLICY "Service role full access" ON academy_keyword_cache
  FOR ALL USING (true) WITH CHECK (true);

-- 코멘트
COMMENT ON TABLE academy_keyword_cache IS '학원 키워드 네이버 실시간 데이터 캐시 (24h TTL)';
COMMENT ON COLUMN academy_keyword_cache.academy_type IS '학원 유형 ID (예: entrance:수학)';
COMMENT ON COLUMN academy_keyword_cache.keyword_data IS '수집된 키워드 데이터 배열 (JSON)';
COMMENT ON COLUMN academy_keyword_cache.top_keywords IS '검색량 상위 키워드 목록';
