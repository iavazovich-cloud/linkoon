
CREATE TABLE public.blog_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_slug TEXT NOT NULL,
  viewer_fingerprint TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Unique constraint to count unique views per visitor
CREATE UNIQUE INDEX idx_blog_views_unique ON public.blog_views (blog_slug, viewer_fingerprint);

-- Index for fast count queries
CREATE INDEX idx_blog_views_slug ON public.blog_views (blog_slug);

ALTER TABLE public.blog_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read views" ON public.blog_views FOR SELECT USING (true);
CREATE POLICY "Anyone can insert views" ON public.blog_views FOR INSERT WITH CHECK (true);
