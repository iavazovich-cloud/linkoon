import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Generate a simple fingerprint for the visitor
function getVisitorFingerprint(): string {
  if (typeof window === 'undefined') return 'ssr';
  let fp = localStorage.getItem('visitor_fp');
  if (!fp) {
    fp = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('visitor_fp', fp);
  }
  return fp;
}

export function useBlogViewCount(blogSlug: string | undefined) {
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    if (!blogSlug) return;

    // Fetch count
    supabase
      .from('blog_views')
      .select('id', { count: 'exact', head: true })
      .eq('blog_slug', blogSlug)
      .then(({ count }) => {
        setViewCount(count || 0);
      });

    // Record view (upsert to avoid duplicates)
    const fp = getVisitorFingerprint();
    if (fp !== 'ssr') {
      supabase
        .from('blog_views')
        .upsert(
          { blog_slug: blogSlug, viewer_fingerprint: fp },
          { onConflict: 'blog_slug,viewer_fingerprint' }
        )
        .then(({ error }) => {
          if (!error) {
            // Re-fetch to get updated count
            supabase
              .from('blog_views')
              .select('id', { count: 'exact', head: true })
              .eq('blog_slug', blogSlug)
              .then(({ count }) => setViewCount(count || 0));
          }
        });
    }
  }, [blogSlug]);

  return viewCount;
}

export function useBlogViewCounts(blogSlugs: string[]) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (blogSlugs.length === 0) return;

    supabase
      .from('blog_views')
      .select('blog_slug')
      .in('blog_slug', blogSlugs)
      .then(({ data }) => {
        if (!data) return;
        const map: Record<string, number> = {};
        data.forEach((row) => {
          map[row.blog_slug] = (map[row.blog_slug] || 0) + 1;
        });
        setCounts(map);
      });
  }, [blogSlugs.join(',')]);

  return counts;
}
