import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      id: 'uzum-market-seller',
      title: {
        en: "Uzum Market: Complete Guide from 0 to Sales",
        uz: "Uzum Market'da 0 dan Sotuvgacha — To'liq Qo'llanma",
        ru: "Uzum Market: Полное руководство от 0 до продаж"
      },
      metaTitle: {
        en: "How to Sell on Uzum Market | Complete Seller Guide 2025",
        uz: "Uzum Market'da sotish | To'liq qo'llanma 2025",
        ru: "Как продавать на Uzum Market | Полное руководство 2025"
      },
      metaDescription: {
        en: "Complete step-by-step guide to start selling on Uzum Market. From product selection to first sales - everything you need to know.",
        uz: "Uzum Market'da sotishni boshlash uchun to'liq bosqichma-bosqich qo'llanma. Mahsulot tanlashdan birinchi sotuvgacha.",
        ru: "Полное пошаговое руководство по продажам на Uzum Market. От выбора товара до первых продаж."
      },
      excerpt: {
        en: "Complete step-by-step guide from 0 to first sales on Uzum Market. Real strategies, real numbers.",
        uz: "Uzum Market'da 0 dan birinchi sotuvgacha to'liq bosqichma-bosqich qo'llanma. Real strategiyalar, real raqamlar.",
        ru: "Полное пошаговое руководство от 0 до первых продаж на Uzum Market. Реальные стратегии, реальные цифры."
      },
      date: '2025-02-09',
      readTime: '15 min',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop'
    },
    {
      id: 'telegram-ads-muammo',
      title: {
        en: "Telegram Ads – The Big Problem Most Don't See",
        uz: "Telegram Ads – ko'pchilik payqamayotgan katta muammo!",
        ru: "Telegram Ads – Большая проблема, которую многие не замечают"
      },
      metaTitle: {
        en: "Telegram Ads - Money Being Wasted? | LinkOn",
        uz: "Telegram Ads - Pullar sovurilmoqda? | LinkOn",
        ru: "Telegram Ads - Деньги тратятся впустую? | LinkOn"
      },
      metaDescription: {
        en: "When running Telegram ads, there's a big problem you can't see",
        uz: "Telegramda reklama yoqayotganingizda sizga ko'rinmaydigan katta muammo",
        ru: "Когда вы запускаете рекламу в Telegram, есть большая проблема, которую вы не видите"
      },
      excerpt: {
        en: "Telegram Premium users don't see ads. And these are often the decision-makers you're trying to reach.",
        uz: "Telegram Premium foydalanuvchilari reklamalarni ko'rmaydi. Ular ko'pincha aynan siz yetishmoqchi bo'lgan qaror qabul qiluvchilar.",
        ru: "Пользователи Telegram Premium не видят рекламу. А это часто те люди, которых вы пытаетесь достичь."
      },
      date: '2025-01-27',
      readTime: '12 min',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop'
    },
    {
      id: 'kofe-mofe-website-case-study',
      title: {
        en: "How We Built a Website for Kofe Mofe Coffee Shop",
        uz: "Kofe Mofe qahvaxonasi uchun veb-sayt qanday yaratdik",
        ru: "Как мы создали сайт для кофейни Кофе Мофе"
      },
      metaTitle: {
        en: "Kofe Mofe Website Case Study | Coffee Shop Web Design",
        uz: "Kofe Mofe veb-sayt loyihasi | Qahvaxona dizayni",
        ru: "Кейс сайта Кофе Мофе | Дизайн кофейни"
      },
      metaDescription: {
        en: "Discover how we designed and developed a modern website for Kofe Mofe coffee shop, establishing a strategic partnership for growth.",
        uz: "Kofe Mofe qahvaxonasi uchun zamonaviy veb-sayt qanday yaratganimiz va strategik hamkorlik o'rnatganimiz haqida bilib oling.",
        ru: "Узнайте, как мы создали современный сайт для кофейни Кофе Мофе и установили стратегическое партнёрство."
      },
      excerpt: {
        en: "Discover how we designed a modern website for Kofe Mofe and established a strategic partnership for marketing and growth.",
        uz: "Kofe Mofe uchun zamonaviy veb-sayt yaratish va strategik hamkorlik o'rnatish tajribamiz.",
        ru: "Узнайте, как мы создали современный сайт для Кофе Мофе и установили партнёрство для роста."
      },
      date: '2025-01-25',
      readTime: '5 min',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop'
    },
    {
      id: 'social-media-growth',
      title: {
        en: "Why My Business Isn't Growing on Social Media?",
        uz: "Nima uchun biznesim ijtimoiy tarmoqlarda o'smayapti?",
        ru: "Почему мой бизнес не растет в социальных сетях?"
      },
      metaTitle: {
        en: "Why Your Business Isn't Growing on Social Media | Common Mistakes",
        uz: "Biznes ijtimoiy tarmoqlarda nima uchun o'smayapti | Xatolar",
        ru: "Почему бизнес не растет в соцсетях | Ошибки"
      },
      metaDescription: {
        en: "Discover 5 common mistakes holding back your social media growth and learn actionable strategies to build a stronger online presence.",
        uz: "Ijtimoiy tarmoqlarda o'sishingizga to'sqinlik qilayotgan 5 ta keng tarqalgan xatoni bilib oling va kuchli onlayn mavjudlik yarating.",
        ru: "Узнайте 5 распространенных ошибок, препятствующих росту в соцсетях, и стратегии для усиления онлайн-присутствия."
      },
      excerpt: {
        en: "Discover the common mistakes holding back your social media growth and learn actionable strategies to build a stronger online presence.",
        uz: "Ijtimoiy tarmoqlarda o'sishingizga to'sqinlik qilayotgan keng tarqalgan xatolarni bilib oling.",
        ru: "Узнайте распространенные ошибки, препятствующие росту в социальных сетях."
      },
      date: '2025-01-15',
      readTime: '7 min',
      category: 'SMM',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop'
    },
    {
      id: 'viral-reels',
      title: {
        en: "How to Create Viral Reels That Actually Convert Customers",
        uz: "Mijozlarni jalb qiladigan viral reelslarni qanday yaratish",
        ru: "Как создать вирусные Reels, которые привлекают клиентов"
      },
      metaTitle: {
        en: "How to Create Viral Reels That Convert | Step-by-Step Guide",
        uz: "Viral Reels yaratish qo'llanmasi | Bosqichma-bosqich",
        ru: "Как создать вирусные Reels | Пошаговое руководство"
      },
      metaDescription: {
        en: "Master the art of creating engaging short-form video content that converts viewers into paying customers with proven strategies.",
        uz: "Tomoshabinlarni mijozlarga aylantiradigan qisqa video kontent yaratish san'atini o'rganing.",
        ru: "Овладейте искусством создания увлекательного видеоконтента, который превращает зрителей в клиентов."
      },
      excerpt: {
        en: "Master the art of creating engaging short-form video content that converts viewers into customers.",
        uz: "Tomoshabinlarni mijozlarga aylantiradigan qisqa video kontent yaratish san'atini o'rganing.",
        ru: "Овладейте искусством создания увлекательного короткого видеоконтента."
      },
      date: '2025-01-12',
      readTime: '8 min',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=500&fit=crop'
    },
    {
      id: 'ads-mistakes',
      title: {
        en: "Why Your Ads Don't Work: 7 Common Mistakes",
        uz: "Reklamalaringiz nima uchun ishlamayapti: 7 ta xato",
        ru: "Почему ваша реклама не работает: 7 ошибок"
      },
      metaTitle: {
        en: "Why Your Ads Don't Work | 7 Common Advertising Mistakes",
        uz: "Reklama nima uchun ishlamayapti | 7 ta xato",
        ru: "Почему реклама не работает | 7 ошибок"
      },
      metaDescription: {
        en: "Learn the critical mistakes that drain your advertising budget and discover strategies to maximize ROI on your ad campaigns.",
        uz: "Reklama byudjetingizni yo'qotadigan muhim xatolarni bilib oling va ROI ni oshirish strategiyalarini kashf eting.",
        ru: "Узнайте критические ошибки, опустошающие рекламный бюджет, и стратегии максимизации ROI."
      },
      excerpt: {
        en: "Learn the critical mistakes that drain your advertising budget and discover strategies to maximize ROI.",
        uz: "Reklama byudjetingizni yo'qotadigan muhim xatolarni bilib oling.",
        ru: "Узнайте критические ошибки, опустошающие ваш рекламный бюджет."
      },
      date: '2025-01-10',
      readTime: '6 min',
      category: 'Advertising',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 'video-pricing-uzbekistan',
      title: {
        en: "How Much Does a Video Cost in Uzbekistan?",
        uz: "O'zbekistonda video qancha turadi?",
        ru: "Сколько стоит видео в Узбекистане?"
      },
      metaTitle: {
        en: "Video Production Pricing Guide | Cost Breakdown 2025",
        uz: "Video ishlab chiqarish narxlari | 2025 qo'llanma",
        ru: "Стоимость видеопроизводства | Руководство 2025"
      },
      metaDescription: {
        en: "Transparent pricing guide for video production services. Learn what affects video costs and how to budget for your project.",
        uz: "Video ishlab chiqarish xizmatlari uchun shaffof narxlar qo'llanmasi. Loyihangiz uchun byudjetni qanday belgilashni bilib oling.",
        ru: "Прозрачное руководство по ценам на видеопроизводство. Узнайте, что влияет на стоимость видео."
      },
      excerpt: {
        en: "Transparent pricing guide for video production services in Uzbekistan.",
        uz: "O'zbekistonda video ishlab chiqarish xizmatlari uchun shaffof narxlar.",
        ru: "Прозрачное руководство по ценам на видеопроизводство в Узбекистане."
      },
      date: '2025-01-08',
      readTime: '10 min',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop'
    },
    {
      id: 'professional-video-2025',
      title: {
        en: "Why Your Business Needs Professional Video Content in 2025",
        uz: "2025-yilda biznesingizga professional video kontent kerak",
        ru: "Почему вашему бизнесу нужен видеоконтент в 2025"
      },
      metaTitle: {
        en: "Why Professional Video Content Matters in 2025 | Business Guide",
        uz: "Professional video kontent nima uchun kerak | 2025 qo'llanma",
        ru: "Почему важен профессиональный видеоконтент | Руководство 2025"
      },
      metaDescription: {
        en: "Video content is no longer optional. Discover why investing in professional video is crucial for business growth in 2025.",
        uz: "Video kontent endi ixtiyoriy emas. Professional videoga sarmoya kiritish nima uchun muhimligini bilib oling.",
        ru: "Видеоконтент больше не опционален. Узнайте, почему важны инвестиции в профессиональное видео."
      },
      excerpt: {
        en: "Video content is no longer optional. Discover why investing in professional video is crucial.",
        uz: "Video kontent endi ixtiyoriy emas. Professional videoga sarmoya kiritish muhimligini bilib oling.",
        ru: "Видеоконтент больше не опционален. Узнайте, почему важны инвестиции в видео."
      },
      date: '2025-01-05',
      readTime: '7 min',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop'
    },
    {
      id: 'choosing-agency-uzbekistan',
      title: {
        en: "How to Choose the Right Marketing Agency in Uzbekistan",
        uz: "O'zbekistonda to'g'ri marketing agentligini tanlash",
        ru: "Как выбрать маркетинговое агентство в Узбекистане"
      },
      metaTitle: {
        en: "How to Choose the Right Agency | Essential Checklist",
        uz: "To'g'ri agentlikni qanday tanlash | Nazorat ro'yxati",
        ru: "Как выбрать агентство | Чек-лист"
      },
      metaDescription: {
        en: "Essential checklist for selecting an agency that understands your business needs and delivers measurable results.",
        uz: "Biznesingizni tushungan agentlikni tanlash uchun muhim nazorat ro'yxati.",
        ru: "Чек-лист для выбора агентства, которое понимает ваш бизнес и дает измеримые результаты."
      },
      excerpt: {
        en: "Essential checklist for selecting a marketing agency that understands your business.",
        uz: "Biznesingizni tushungan marketing agentligini tanlash uchun muhim nazorat ro'yxati.",
        ru: "Чек-лист для выбора агентства, которое понимает ваш бизнес."
      },
      date: '2025-01-03',
      readTime: '9 min',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
    },
    {
      id: 'podcast-guide',
      title: {
        en: "How to Start a Podcast for Your Business",
        uz: "Biznesingiz uchun podkastni qanday boshlash",
        ru: "Как начать подкаст для бизнеса"
      },
      metaTitle: {
        en: "How to Start a Business Podcast | Complete Guide",
        uz: "Biznes podkastni qanday boshlash | To'liq qo'llanma",
        ru: "Как начать бизнес-подкаст | Полное руководство"
      },
      metaDescription: {
        en: "Step-by-step guide to launching a successful business podcast, from equipment selection to audience growth strategies.",
        uz: "Muvaffaqiyatli biznes podkastini ishga tushirish bo'yicha bosqichma-bosqich qo'llanma.",
        ru: "Пошаговое руководство по запуску бизнес-подкаста, от выбора оборудования до стратегий роста аудитории."
      },
      excerpt: {
        en: "Step-by-step guide to launching a successful business podcast.",
        uz: "Muvaffaqiyatli biznes podkastini ishga tushirish bo'yicha qo'llanma.",
        ru: "Пошаговое руководство по запуску бизнес-подкаста."
      },
      date: '2024-12-28',
      readTime: '12 min',
      category: 'Content',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop'
    },
    {
      id: 'phone-reels',
      title: {
        en: "How to Shoot Professional Reels With Just a Phone",
        uz: "Telefon bilan professional reelslarni qanday suratga olish",
        ru: "Как снимать профессиональные Reels на телефон"
      },
      metaTitle: {
        en: "Shoot Professional Reels With Your Phone | Tips & Tricks",
        uz: "Telefonda professional Reels | Maslahatlar",
        ru: "Профессиональные Reels на телефон | Советы"
      },
      metaDescription: {
        en: "You don't need expensive equipment to create stunning video content. Learn professional mobile filming techniques.",
        uz: "Ajoyib kontent yaratish uchun qimmat uskunalar kerak emas. Mobil suratga olish texnikalarini o'rganing.",
        ru: "Вам не нужно дорогое оборудование для создания контента. Изучите профессиональные техники мобильной съемки."
      },
      excerpt: {
        en: "You don't need expensive equipment to create stunning content.",
        uz: "Ajoyib kontent yaratish uchun qimmat uskunalar kerak emas.",
        ru: "Вам не нужно дорогое оборудование для создания контента."
      },
      date: '2024-12-25',
      readTime: '6 min',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=500&fit=crop'
    },
    {
      id: 'brand-identity',
      title: {
        en: "What Is Brand Identity and Why Does It Matter?",
        uz: "Brend identifikatsiyasi nima va u nima uchun muhim?",
        ru: "Что такое фирменный стиль и почему он важен?"
      },
      metaTitle: {
        en: "What Is Brand Identity and Why It Matters | Guide",
        uz: "Brend identifikatsiyasi nima | Qo'llanma",
        ru: "Что такое фирменный стиль | Руководство"
      },
      metaDescription: {
        en: "Understanding brand identity and how a strong visual identity can transform your business success and customer trust.",
        uz: "Brend identifikatsiyasi va kuchli vizual identifikatsiya biznes muvaffaqiyatingizni qanday o'zgartirishi.",
        ru: "Понимание фирменного стиля и как он преобразует ваш успех и доверие клиентов."
      },
      excerpt: {
        en: "Understanding brand identity and how it can transform your business success.",
        uz: "Brend identifikatsiyasi va u biznes muvaffaqiyatingizni qanday o'zgartirishi.",
        ru: "Понимание фирменного стиля и как он преобразует ваш успех."
      },
      date: '2024-12-20',
      readTime: '8 min',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=500&fit=crop'
    },
    {
      id: 'uzbekistan-trends-2025',
      title: {
        en: "Top Digital Marketing Trends in Uzbekistan for 2025",
        uz: "2025-yil uchun O'zbekistondagi top marketing trendlari",
        ru: "Топ трендов маркетинга в Узбекистане на 2025"
      },
      metaTitle: {
        en: "Digital Trends 2025 | What's Changing This Year",
        uz: "Raqamli trendlar 2025 | Bu yil nima o'zgarmoqda",
        ru: "Цифровые тренды 2025 | Что меняется в этом году"
      },
      metaDescription: {
        en: "Stay ahead with insights into the latest digital trends. Discover what's working and what's changing in 2025.",
        uz: "Eng so'nggi raqamli trendlar haqida ma'lumotlar bilan oldinda bo'ling. 2025-yilda nima ishlayotganini bilib oling.",
        ru: "Будьте впереди с инсайтами о цифровых трендах. Узнайте, что работает и что меняется в 2025."
      },
      excerpt: {
        en: "Stay ahead with insights into the latest digital marketing trends in Uzbekistan.",
        uz: "O'zbekiston bozorini shakllantirayotgan eng so'nggi trendlar haqida ma'lumotlar.",
        ru: "Будьте впереди с инсайтами о трендах узбекского рынка."
      },
      date: '2024-12-18',
      readTime: '11 min',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop'
    },
    {
      id: 'ai-business-automation',
      title: {
        en: "AI for Entrepreneurs in Uzbekistan 2025: How to Save Time and Money?",
        uz: "O'zbekistonda tadbirkorlar uchun 2025-yilda AI: Qanday qilib vaqt va pulni tejash mumkin?",
        ru: "ИИ для предпринимателей Узбекистана в 2025: Как сэкономить время и деньги?"
      },
      metaTitle: {
        en: "AI for Business | How to Save Time and Money",
        uz: "Biznes uchun AI | Vaqt va pulni qanday tejash",
        ru: "ИИ для бизнеса | Как сэкономить время и деньги"
      },
      metaDescription: {
        en: "Learn how AI can transform your business operations with CRM, chatbots, and automated content creation tools.",
        uz: "CRM, chatbotlar va avtomatlashtirilgan kontent yaratish vositalari bilan AI biznesingizni qanday o'zgartirishini bilib oling.",
        ru: "Узнайте, как ИИ может трансформировать бизнес с CRM, чат-ботами и автоматизацией контента."
      },
      excerpt: {
        en: "Learn how AI can transform your business operations with CRM, chatbots and content creation.",
        uz: "CRM, chatbotlar va kontent yaratishda AI biznesingizni qanday o'zgartirishini bilib oling.",
        ru: "Узнайте, как ИИ может трансформировать ваш бизнес с CRM, чат-ботами и созданием контента."
      },
      date: '2025-01-20',
      readTime: '9 min',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop'
    },
    {
      id: 'uzum-market-seller',
      title: {
        en: "How to Become a Successful Seller on Uzum Market in 2025",
        uz: "Uzum Marketda muvaffaqiyatli sotuvchi (seller) bo'lish: 2025-yilgi yangi qoidalar va strategiyalar",
        ru: "Как стать успешным продавцом на Uzum Market в 2025 году"
      },
      metaTitle: {
        en: "How to Sell on Uzum Market | Seller Guide 2025",
        uz: "Uzum Marketda sotish | Sotuvchi qo'llanmasi 2025",
        ru: "Как продавать на Uzum Market | Гид продавца 2025"
      },
      metaDescription: {
        en: "Complete guide to selling on the fastest growing e-commerce platform. Registration, optimization, and sales strategies.",
        uz: "Eng tez rivojlanayotgan e-tijorat platformasida sotish bo'yicha to'liq qo'llanma.",
        ru: "Полное руководство по продажам на самой быстрорастущей e-commerce платформе."
      },
      excerpt: {
        en: "Complete guide to selling on Uzbekistan's fastest growing e-commerce platform.",
        uz: "O'zbekistonning eng tez rivojlanayotgan e-tijorat platformasida sotish bo'yicha to'liq qo'llanma.",
        ru: "Полное руководство по продажам на самой быстрорастущей e-commerce платформе Узбекистана."
      },
      date: '2025-01-19',
      readTime: '12 min',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop'
    },
    {
      id: 'investment-10-million',
      title: {
        en: "How to Start Investing with 10 Million Sum in Uzbekistan?",
        uz: "O'zbekistonda 10 million so'm bilan qanday investitsiya boshlash mumkin?",
        ru: "Как начать инвестировать с 10 миллионов сумов в Узбекистане?"
      },
      metaTitle: {
        en: "Beginner's Investment Guide | Stocks, Gold, Bonds",
        uz: "Yangi boshlovchilar uchun investitsiya | Aksiyalar, Oltin",
        ru: "Руководство для начинающих инвесторов | Акции, Золото"
      },
      metaDescription: {
        en: "Guide to stocks, gold and bonds investment for beginners. Learn where to invest your first savings wisely.",
        uz: "Yangi boshlovchilar uchun aksiyalar, oltin va obligatsiyalarga investitsiya qo'llanmasi.",
        ru: "Руководство по инвестициям в акции, золото и облигации для начинающих."
      },
      excerpt: {
        en: "Guide to stocks, gold and bonds investment for beginners in Uzbekistan.",
        uz: "O'zbekistonda yangi boshlovchilar uchun aksiyalar, oltin va obligatsiyalarga investitsiya qo'llanmasi.",
        ru: "Руководство по инвестициям в акции, золото и облигации для начинающих в Узбекистане."
      },
      date: '2025-01-18',
      readTime: '10 min',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=500&fit=crop'
    },
    {
      id: 'instagram-tiktok-algorithms',
      title: {
        en: "Instagram and TikTok Algorithms 2025: How to Go Viral Without Ads",
        uz: "Instagram va TikTok algoritmlari 2025: Qanday qilib reklamaga pul sarflamay trendga chiqish mumkin?",
        ru: "Алгоритмы Instagram и TikTok 2025: Как стать вирусным без рекламы"
      },
      metaTitle: {
        en: "Instagram & TikTok Algorithm Secrets | Go Viral Organically",
        uz: "Instagram va TikTok algoritm sirlari | Organik viral",
        ru: "Секреты алгоритмов Instagram и TikTok | Вирусность без рекламы"
      },
      metaDescription: {
        en: "Master the algorithm secrets to maximize organic reach on social media without spending on advertisements.",
        uz: "Reklamasiz ijtimoiy tarmoqlarda organik auditoriyani oshirish uchun algoritm sirlarini o'rganing.",
        ru: "Освойте секреты алгоритмов для максимального органического охвата без рекламы."
      },
      excerpt: {
        en: "Master the algorithm secrets to maximize organic reach on social media.",
        uz: "Ijtimoiy tarmoqlarda organik auditoriyani maksimal darajada oshirish uchun algoritm sirlarini o'rganing.",
        ru: "Освойте секреты алгоритмов для максимального органического охвата в соцсетях."
      },
      date: '2025-01-17',
      readTime: '8 min',
      category: 'SMM',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=500&fit=crop'
    },
    {
      id: 'freelance-remote-work',
      title: {
        en: "Working for US and European Companies from Uzbekistan: Freelance Platforms Guide",
        uz: "O'zbekistondan turib AQSH yoki Yevropa kompaniyalarida ishlash: Freelance platformalar bo'yicha qo'llanma",
        ru: "Работа на компании США и Европы из Узбекистана: Гид по фриланс-платформам"
      },
      metaTitle: {
        en: "Remote Work Guide | Find International Freelance Jobs",
        uz: "Masofaviy ish qo'llanmasi | Xalqaro freelance",
        ru: "Гид по удаленной работе | Международный фриланс"
      },
      metaDescription: {
        en: "Step-by-step guide to landing international remote work opportunities on Upwork, Fiverr, and other platforms.",
        uz: "Xalqaro masofaviy ish imkoniyatlarini Upwork, Fiverr va boshqa platformalarda topish qo'llanmasi.",
        ru: "Пошаговое руководство по поиску международных удалённых вакансий на Upwork, Fiverr."
      },
      excerpt: {
        en: "Step-by-step guide to landing international remote work opportunities.",
        uz: "Xalqaro masofaviy ish imkoniyatlarini topish bo'yicha bosqichma-bosqich qo'llanma.",
        ru: "Пошаговое руководство по поиску международных удалённых вакансий."
      },
      date: '2025-01-16',
      readTime: '11 min',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&h=500&fit=crop'
    },
    {
      id: 'healthy-lifestyle-tashkent',
      title: {
        en: "Secrets to Healthy Eating and Effective Home Workouts in Tashkent",
        uz: "Toshkent sharoitida sog'lom ovqatlanish va uyda samarali mashg'ulot qilish sirlari",
        ru: "Секреты здорового питания и эффективных домашних тренировок в Ташкенте"
      },
      metaTitle: {
        en: "Healthy Eating & Home Workouts | Urban Lifestyle Tips",
        uz: "Sog'lom ovqatlanish va uy mashg'ulotlari | Maslahatlar",
        ru: "Здоровое питание и домашние тренировки | Советы"
      },
      metaDescription: {
        en: "Practical tips for maintaining a healthy lifestyle in the city. Diet plans, workout routines, and wellness advice.",
        uz: "Shaharda sog'lom turmush tarzini saqlash bo'yicha amaliy maslahatlar. Parhez va mashg'ulot rejalari.",
        ru: "Практические советы по здоровому образу жизни в городе. Диеты, тренировки и советы."
      },
      excerpt: {
        en: "Practical tips for maintaining a healthy lifestyle in urban Uzbekistan.",
        uz: "Shaharda sog'lom turmush tarzini saqlash bo'yicha amaliy maslahatlar.",
        ru: "Практические советы по поддержанию здорового образа жизни в городе."
      },
      date: '2025-01-14',
      readTime: '7 min',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop'
    },
    {
      id: 'top-5-careers-2025',
      title: {
        en: "5 Most Profitable Modern Professions in 2025: Why Everyone Chooses IT and Digital Marketing",
        uz: "2025-yilda eng daromadli 5 ta zamonaviy kasb: Nega hamma IT va Digital Marketingni tanlamoqda?",
        ru: "5 самых прибыльных профессий 2025: Почему все выбирают IT и Digital Marketing"
      },
      metaTitle: {
        en: "5 Most Profitable Careers in 2025 | Career Guide",
        uz: "2025-yilda eng daromadli 5 kasb | Kasb qo'llanmasi",
        ru: "5 самых прибыльных профессий 2025 | Карьерный гид"
      },
      metaDescription: {
        en: "Career guide to the most in-demand skills and highest-paying jobs in 2025. IT, design, and digital skills explained.",
        uz: "2025-yilda eng ko'p talab qilinadigan ko'nikmalar va eng yuqori maoshli kasblar qo'llanmasi.",
        ru: "Руководство по самым востребованным навыкам и высокооплачиваемым профессиям 2025."
      },
      excerpt: {
        en: "Career guide to the most in-demand skills and highest-paying jobs in 2025.",
        uz: "2025-yilda eng ko'p talab qilinadigan ko'nikmalar va eng yuqori maoshli kasblar bo'yicha qo'llanma.",
        ru: "Руководство по самым востребованным навыкам и высокооплачиваемым профессиям 2025."
      },
      date: '2025-01-13',
      readTime: '9 min',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop'
    },
    {
      id: 'solar-panels-home',
      title: {
        en: "Installing Solar Panels at Home: Is There Really Energy Savings?",
        uz: "Uyga quyosh panellarini o'rnatish: Haqiqatda elektr energiyasidan tejamkorlik bormi?",
        ru: "Установка солнечных панелей дома: Реальная ли экономия на электроэнергии?"
      },
      metaTitle: {
        en: "Solar Panels for Home | Cost-Benefit Analysis",
        uz: "Uy uchun quyosh panellari | Xarajat-foyda tahlili",
        ru: "Солнечные панели для дома | Анализ затрат и выгод"
      },
      metaDescription: {
        en: "Complete cost-benefit analysis of solar energy for households. ROI calculations, installation costs, and savings potential.",
        uz: "Xonadonlar uchun quyosh energiyasining to'liq xarajat-foyda tahlili va tejamkorlik potensiali.",
        ru: "Полный анализ затрат и выгод солнечной энергии для домохозяйств. Расчеты ROI."
      },
      excerpt: {
        en: "Complete cost-benefit analysis of solar energy for Uzbek households.",
        uz: "O'zbek xonadonlari uchun quyosh energiyasining to'liq xarajat-foyda tahlili.",
        ru: "Полный анализ затрат и выгод солнечной энергии для узбекских домохозяйств."
      },
      date: '2025-01-11',
      readTime: '10 min',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop'
    },
    {
      id: 'personal-brand-2025',
      title: {
        en: "Why Personal Brand is More Important Than Any Diploma in 2025",
        uz: "Nima uchun 2025-yilda shaxsiy brend har qanday diplomdan muhimroq?",
        ru: "Почему личный бренд важнее любого диплома в 2025 году"
      },
      metaTitle: {
        en: "Personal Brand vs Diploma | Why Reputation Matters More",
        uz: "Shaxsiy brend vs Diplom | Obro' nima uchun muhimroq",
        ru: "Личный бренд vs Диплом | Почему репутация важнее"
      },
      metaDescription: {
        en: "How experts and entrepreneurs build trust through personal branding. Build your reputation and attract opportunities.",
        uz: "Ekspertlar va tadbirkorlar shaxsiy brending orqali ishonchni qanday qozonadi. Obro'ingizni yarating.",
        ru: "Как эксперты и предприниматели строят доверие через личный бренд. Создайте репутацию."
      },
      excerpt: {
        en: "How experts and entrepreneurs build trust through personal branding.",
        uz: "Ekspertlar va tadbirkorlar shaxsiy brending orqali ishonchni qanday qozonadi.",
        ru: "Как эксперты и предприниматели строят доверие через личный бренд."
      },
      date: '2025-01-09',
      readTime: '8 min',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop'
    },
    {
      id: 'uzbekistan-hidden-places',
      title: {
        en: "5 Undiscovered Beautiful Places in Uzbekistan: Weekend Trip Destinations",
        uz: "O'zbekistonning hali kashf qilinmagan 5 ta go'zal maskani: Dam olish kuni qayerga borish kerak?",
        ru: "5 неоткрытых красивых мест Узбекистана: Куда поехать на выходные?"
      },
      metaTitle: {
        en: "5 Hidden Travel Gems | Weekend Getaway Ideas",
        uz: "5 ta yashirin go'zal joylar | Dam olish g'oyalari",
        ru: "5 скрытых туристических жемчужин | Идеи для выходных"
      },
      metaDescription: {
        en: "Hidden gems for weekend getaways including Bostanliq, Zomin, and more. Plan your perfect short trip.",
        uz: "Bo'stonliq, Zomin va boshqa dam olish zonalari. Qisqa sayohatingizni rejalashtiring.",
        ru: "Скрытые жемчужины для выходных включая Бостанлык и Зомин. Спланируйте поездку."
      },
      excerpt: {
        en: "Hidden gems for weekend getaways in Uzbekistan including Bostanliq and Zomin.",
        uz: "Bo'stonliq, Zomin va boshqa dam olish zonalari haqida ma'lumotlar.",
        ru: "Скрытые жемчужины для поездок на выходные, включая Бостанлык и Зомин."
      },
      date: '2025-01-07',
      readTime: '6 min',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=500&fit=crop'
    }
  ];

  // Featured post (first one)
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold">{t('blog.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('blog.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <Reveal>
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title[language as 'en' | 'uz' | 'ru']}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title[language as 'en' | 'uz' | 'ru']}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt[language as 'en' | 'uz' | 'ru']}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <Link
                to={`/blog/${post.id}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[language as 'en' | 'uz' | 'ru']}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title[language as 'en' | 'uz' | 'ru']}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt[language as 'en' | 'uz' | 'ru']}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
