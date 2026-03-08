import { useEffect } from 'react';

const DEFAULT_TITLE = 'Marketing Agentligi Namanganda | LinkOn';
const DEFAULT_DESCRIPTION = 'LinkOn — Namangandagi marketing agentligi. Brending, SMM, SEO, veb-sayt yaratish va video ishlab chiqarish xizmatlari.';
const DEFAULT_OG_IMAGE = 'https://linkon.uz/og-image.png';

function setMetaTag(selector: string, attribute: string, value: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute(attribute, value);
  }
}

interface PageMetaOptions {
  ogImage?: string;
  ogType?: string;
}

export function usePageMeta(title: string, description: string, options?: PageMetaOptions) {
  useEffect(() => {
    const ogImage = options?.ogImage || DEFAULT_OG_IMAGE;
    const ogType = options?.ogType || 'website';

    document.title = title;
    setMetaTag('meta[name="title"]', 'content', title);
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Update canonical and og:url to current page
    const pageUrl = window.location.origin + window.location.pathname;
    setMetaTag('link[rel="canonical"]', 'href', pageUrl);
    setMetaTag('meta[property="og:url"]', 'content', pageUrl);
    setMetaTag('meta[name="twitter:url"]', 'content', pageUrl);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaTag('meta[name="title"]', 'content', DEFAULT_TITLE);
      setMetaTag('meta[name="description"]', 'content', DEFAULT_DESCRIPTION);
      setMetaTag('meta[property="og:title"]', 'content', DEFAULT_TITLE);
      setMetaTag('meta[property="og:description"]', 'content', DEFAULT_DESCRIPTION);
      setMetaTag('meta[property="og:image"]', 'content', DEFAULT_OG_IMAGE);
      setMetaTag('meta[property="og:type"]', 'content', 'website');
      setMetaTag('meta[name="twitter:title"]', 'content', DEFAULT_TITLE);
      setMetaTag('meta[name="twitter:description"]', 'content', DEFAULT_DESCRIPTION);
      setMetaTag('meta[name="twitter:image"]', 'content', DEFAULT_OG_IMAGE);
    };
  }, [title, description, options?.ogImage, options?.ogType]);
}
