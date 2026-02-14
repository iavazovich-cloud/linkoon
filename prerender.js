import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Base URL for canonical/OG tags during SSG
const siteUrl = process.env.SITE_URL || 'https://linkon.uz'

// Default meta (homepage)
const defaultMeta = {
  title: 'Marketing Agentligi Namanganda | LinkOn',
  description: 'LinkOn — Namangandagi marketing agentligi. Brending, SMM, SEO, veb-sayt yaratish va video ishlab chiqarish xizmatlari.',
}

// Per-page metadata (Uzbek as primary language for SEO)
const pageMeta = {
  '/': defaultMeta,
  '/services': {
    title: 'Xizmatlar — Brending, SMM, SEO, Video | LinkOn',
    description: 'LinkOn xizmatlari: brending, SMM, SEO, veb-sayt yaratish, video ishlab chiqarish va marketing strategiyasi. Namangan va butun O\'zbekiston bo\'ylab.',
  },
  '/portfolio': {
    title: 'Portfolio — Bizning ishlarimiz | LinkOn',
    description: 'LinkOn agentligi tomonidan bajarilgan loyihalar: brending, veb-saytlar, video va ijtimoiy tarmoqlar bo\'yicha ishlar.',
  },
  '/about': {
    title: 'Biz haqimizda — LinkOn Marketing Agentligi',
    description: 'LinkOn jamoasi haqida: tajriba, qadriyatlar va missiyamiz. Namangandagi professional marketing xizmatlari.',
  },
  '/studio': {
    title: 'Studiya — Professional Video Studio | LinkOn',
    description: 'LinkOn studiyasi: professional video suratga olish, fotosessiya va kontent yaratish uchun zamonaviy jihozlar.',
  },
  '/blog': {
    title: 'Blog — Marketing va Biznes Maqolalari | LinkOn',
    description: 'Marketing, SMM, SEO, brending va biznes bo\'yicha foydali maqolalar. O\'zbekiston bozori uchun amaliy maslahatlar.',
  },
  '/contact': {
    title: 'Bog\'lanish — LinkOn Marketing Agentligi',
    description: 'LinkOn bilan bog\'laning. Namangan, Amir Temur ko\'chasi 42. Telefon: +998906937737.',
  },
  '/marketing-agentligi-namangan': {
    title: 'Marketing Agentligi Namanganda | LinkOn',
    description: 'Namangandagi professional marketing agentligi. Brending, SMM, SEO, veb-sayt yaratish va reklama xizmatlari.',
  },
  '/tv-line-namangan': {
    title: 'TV Line Namangan — Video Production | LinkOn',
    description: 'Namanganda professional video production xizmatlari. Reklama videolari, korporativ filmlar va ijtimoiy tarmoq kontenti.',
  },

  // ─── Blog posts ───
  '/blog/uzum-market-seller': {
    title: "Uzum Market'da sotish | To'liq qo'llanma 2025",
    description: "Uzum Market'da sotishni boshlash uchun to'liq bosqichma-bosqich qo'llanma. Mahsulot tanlashdan birinchi sotuvgacha.",
  },
  '/blog/telegram-ads-muammo': {
    title: 'Telegram Ads - Pullar sovurilmoqda? | LinkOn',
    description: "Telegramda reklama yoqayotganingizda sizga ko'rinmaydigan katta muammo.",
  },
  '/blog/kofe-mofe-website-case-study': {
    title: 'Kofe Mofe veb-sayt loyihasi | Qahvaxona dizayni',
    description: "Kofe Mofe qahvaxonasi uchun zamonaviy veb-sayt qanday yaratganimiz va strategik hamkorlik o'rnatganimiz haqida bilib oling.",
  },
  '/blog/social-media-growth': {
    title: "Biznes ijtimoiy tarmoqlarda nima uchun o'smayapti | Xatolar",
    description: "Ijtimoiy tarmoqlarda o'sishingizga to'sqinlik qilayotgan 5 ta keng tarqalgan xatoni bilib oling.",
  },
  '/blog/viral-reels': {
    title: "Viral Reels qanday yaratiladi | Video Marketing Qo'llanma",
    description: "Mijozlarni jalb qiladigan viral reelslarni yaratish bo'yicha to'liq qo'llanma. Hook, struktura va CTA strategiyalari.",
  },
  '/blog/ads-mistakes': {
    title: 'Reklamalaringiz nima uchun ishlamayapti: 7 ta xato | LinkOn',
    description: "Reklama byudjetingizni sarflayotgan 7 ta keng tarqalgan xato va ularni qanday tuzatish kerak.",
  },
  '/blog/video-pricing-uzbekistan': {
    title: "O'zbekistonda video narxlari | Video Production Qo'llanma",
    description: "O'zbekistonda video ishlab chiqarish narxlari bo'yicha to'liq qo'llanma. Social media, reklama va korporativ video narxlari.",
  },
  '/blog/professional-video-2025': {
    title: '2025-yilda biznesingizga professional video kontent kerak',
    description: "2025-yilda video kontent biznesingiz uchun nima uchun muhim va professional video strategiyasi qanday yaratiladi.",
  },
  '/blog/choosing-agency-uzbekistan': {
    title: "O'zbekistonda marketing agentligini qanday tanlash | LinkOn",
    description: "O'zbekistonda to'g'ri marketing agentligini tanlash uchun 10 ta savoldan iborat tekshirish ro'yxati.",
  },
  '/blog/podcast-guide': {
    title: "Biznesingiz uchun podkast qanday boshlash | Qo'llanma",
    description: "Podkast boshlash bo'yicha bosqichma-bosqich qo'llanma: jihozlar, format, tarqatish va monetizatsiya.",
  },
  '/blog/phone-reels': {
    title: "Telefonda professional Reels suratga olish | Qo'llanma",
    description: "Faqat telefon bilan professional sifatli Reels yaratish sirlari: yorug'lik, sozlamalar va montaj.",
  },
  '/blog/brand-identity': {
    title: 'Brend identifikatsiyasi nima va u nima uchun muhim?',
    description: "Brend identifikatsiyasi haqida to'liq qo'llanma: logo, ranglar, shriftlar va brend qo'llanmasi.",
  },
  '/blog/uzbekistan-trends-2025': {
    title: "2025-yil uchun O'zbekistondagi top marketing trendlari",
    description: "2025-yilda O'zbekistondagi eng muhim digital marketing trendlari va ularga qanday tayyorgarlik ko'rish kerak.",
  },
  '/blog/ai-business-automation': {
    title: "O'zbekistonda AI bilan biznesni avtomatlashtirish 2025",
    description: "AI texnologiyalari yordamida vaqt va pulni tejash: chatbotlar, kontent yaratish, CRM va tahlil.",
  },
  '/blog/invest-10-million': {
    title: "10 million so'm bilan investitsiya boshlash | Qo'llanma",
    description: "O'zbekistonda 10 million so'm bilan qanday investitsiya boshlash mumkin? Aksiyalar, obligatsiyalar va ko'chmas mulk.",
  },
  '/blog/instagram-tiktok-algorithms': {
    title: 'Instagram va TikTok algoritmlari 2025 | Organik o\'sish',
    description: "2025-yilda Instagram va TikTok algoritmlari qanday ishlaydi va reklamasiz qanday trendga chiqish mumkin.",
  },
  '/blog/freelance-platforms': {
    title: "Freelance platformalar qo'llanmasi | Masofaviy ish",
    description: "O'zbekistondan turib AQSH va Yevropa kompaniyalarida ishlash: Upwork, Fiverr, Toptal va boshqalar.",
  },
  '/blog/healthy-lifestyle-tashkent': {
    title: "Toshkentda sog'lom turmush tarzi | Ovqatlanish va mashg'ulot",
    description: "Toshkent sharoitida sog'lom ovqatlanish va uyda samarali mashg'ulot qilish sirlari.",
  },
  '/blog/top-professions-2025': {
    title: "2025-yildagi eng talab yuqori kasblar | O'zbekiston",
    description: "2025-yilda O'zbekistonda eng ko'p talab qilinadigan kasblar va ularga qanday tayyorgarlik ko'rish.",
  },
  '/blog/solar-panels-uzbekistan': {
    title: 'Uyga quyosh panellari | Xarajat-foyda tahlili',
    description: "Quyosh panellarini o'rnatish: haqiqiy tejamkorlik bormi? To'liq xarajat va ROI tahlili.",
  },
  '/blog/personal-brand-2025': {
    title: '2025-yilda shaxsiy brend nima uchun muhim?',
    description: "Shaxsiy brend har qanday diplomdan muhimroq: qanday qilib o'z brendingizni qurishni boshlash kerak.",
  },
  '/blog/hidden-places-uzbekistan': {
    title: "O'zbekistonning 5 ta yashirin go'zal joylari | Sayohat",
    description: "Dam olish kuni uchun O'zbekistonning eng go'zal, hali kashf qilinmagan joylari: Bo'stonliq, Zomin va boshqalar.",
  },

  // ─── Portfolio pages ───
  '/portfolio/kofe-mofe': {
    title: 'Kofe Mofe — Brending va Veb-sayt | LinkOn Portfolio',
    description: "Kofe Mofe qahvaxonasi uchun brending va veb-sayt loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/luxury-cosmetics': {
    title: 'Luxury Cosmetics — Brending | LinkOn Portfolio',
    description: "Luxury kosmetika brendi uchun brending loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/fashion-ecommerce': {
    title: 'Fashion E-commerce — Veb-sayt | LinkOn Portfolio',
    description: "Fashion e-commerce platformasi uchun veb-sayt loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/tech-startup': {
    title: 'Tech Startup — Brending va Marketing | LinkOn Portfolio',
    description: "Texnologiya startapi uchun brending va marketing strategiyasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/lifestyle-brand': {
    title: 'Lifestyle Brand — Ijtimoiy Tarmoqlar | LinkOn Portfolio',
    description: "Lifestyle brendi uchun ijtimoiy tarmoqlar strategiyasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/restaurant-chain': {
    title: 'Restaurant Chain — Marketing | LinkOn Portfolio',
    description: "Restoran tarmog'i uchun marketing strategiyasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/saas-platform': {
    title: 'SaaS Platform — Veb-sayt va Marketing | LinkOn Portfolio',
    description: "SaaS platformasi uchun veb-sayt va marketing loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/music-festival': {
    title: 'Music Festival — Brending va Video | LinkOn Portfolio',
    description: "Musiqa festivali uchun brending va video loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/fitness-app': {
    title: 'Fitness App — UI/UX Dizayn | LinkOn Portfolio',
    description: "Fitness ilovasi uchun UI/UX dizayn loyihasi. LinkOn agentligi tomonidan bajarilgan.",
  },
  '/portfolio/financial-services': {
    title: 'Financial Services — Marketing | LinkOn Portfolio',
    description: "Moliyaviy xizmatlar uchun marketing strategiyasi. LinkOn agentligi tomonidan bajarilgan.",
  },
}

// Blog post slugs (matching BlogPost.tsx)
const blogPostSlugs = [
  'uzum-market-seller',
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
    const meta = pageMeta[route] || defaultMeta

    let html = template.replace('<!--app-html-->', appHtml)
    html = html
      .replaceAll('__SITE_URL__', siteUrl)
      .replaceAll('__PAGE_URL__', pageUrl)
      .replaceAll('__CANONICAL_URL__', pageUrl)

    // Replace meta tags with page-specific values
    html = html
      // <title>
      .replace(
        /<title>.*?<\/title>/,
        `<title>${meta.title}</title>`
      )
      // meta name="title"
      .replace(
        /<meta name="title" content=".*?" \/>/,
        `<meta name="title" content="${meta.title}" />`
      )
      // meta name="description"
      .replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${meta.description}" />`
      )
      // og:title
      .replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${meta.title}" />`
      )
      // og:description
      .replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${meta.description}" />`
      )
      // twitter:title
      .replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${meta.title}" />`
      )
      // twitter:description
      .replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${meta.description}" />`
      )

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
    console.log('pre-rendered:', filePath, '→', meta.title)
  }
})()
