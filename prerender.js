import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Base URL for canonical/OG tags during SSG
const siteUrl = process.env.SITE_URL || 'https://linkon.uz'

// Blog post slugs (matching BlogPost.tsx)
const blogPostSlugs = [
  'telegram-ads-muammo',
  'kofe-mofe-website-case-study',
  'social-media-growth',
  'viral-reels',
  'ads-mistakes',
  'video-pricing-uzbekistan',
  'professional-video-2025',
  'choosing-agency-uzbekistan',
  'podcast-guide',
  'phone-reels',
  'brand-identity',
  'uzbekistan-trends-2025',
  'ai-business-automation',
  'uzum-market-seller',
  'invest-10-million',
  'instagram-tiktok-algorithms',
  'freelance-platforms',
  'healthy-lifestyle-tashkent',
  'top-professions-2025',
  'solar-panels-uzbekistan',
  'personal-brand-2025',
  'hidden-places-uzbekistan'
]

// Portfolio slugs (matching PortfolioDetail.tsx)
const portfolioSlugs = [
  'kofe-mofe',
  'luxury-cosmetics',
  'fashion-ecommerce',
  'tech-startup',
  'lifestyle-brand',
  'restaurant-chain',
  'saas-platform',
  'music-festival',
  'fitness-app',
  'financial-services'
]

// Routes matching App.tsx
const routesToPrerender = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/studio',
  '/blog',
  '/contact',
  '/marketing-agentligi-namangan',
  '/tv-line-namangan',
  ...blogPostSlugs.map((slug) => `/blog/${slug}`),
  ...portfolioSlugs.map((slug) => `/portfolio/${slug}`)
]

;(async () => {
  for (const route of routesToPrerender) {
    const appHtml = render(route)
    const pageUrl = new URL(route, siteUrl).toString()

    let html = template.replace('<!--app-html-->', appHtml)
    html = html
      .replaceAll('__SITE_URL__', siteUrl)
      .replaceAll('__PAGE_URL__', pageUrl)
      .replaceAll('__CANONICAL_URL__', pageUrl)

    // Netlify (and most static hosts) expect pretty URLs as folders:
    // /about -> dist/about/index.html
    const filePath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`
    const absolutePath = toAbsolute(filePath)

    // Ensure directory exists before writing
    const dir = path.dirname(absolutePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
