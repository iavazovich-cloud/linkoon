import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 'social-media-growth',
      title: {
        en: "Why My Business Isn't Growing on Social Media?",
        uz: "Nima uchun biznesim ijtimoiy tarmoqlarda o'smayapti?",
        ru: "Почему мой бизнес не растет в социальных сетях?"
      },
      excerpt: {
        en: "Discover the common mistakes holding back your social media growth and learn actionable strategies to build a stronger online presence.",
        uz: "Ijtimoiy tarmoqlarda o'sishingizga to'sqinlik qilayotgan keng tarqalgan xatolarni bilib oling va kuchli onlayn mavjudlikni yaratish uchun amaliy strategiyalarni o'rganing.",
        ru: "Узнайте распространенные ошибки, препятствующие росту в социальных сетях, и изучите действенные стратегии для создания сильного онлайн-присутствия."
      },
      date: '2025-01-15',
      readTime: '7 min',
      category: 'SMM'
    },
    {
      id: 'viral-reels',
      title: {
        en: "How to Create Viral Reels That Actually Convert Customers",
        uz: "Mijozlarni jalb qiladigan viral reelslarni qanday yaratish",
        ru: "Как создать вирусные Reels, которые привлекают клиентов"
      },
      excerpt: {
        en: "Master the art of creating engaging short-form video content that not only goes viral but also converts viewers into paying customers.",
        uz: "Nafaqat viral bo'ladigan, balki tomoshabinlarni to'lovchi mijozlarga aylantiradigan qisqa video kontent yaratish san'atini o'rganing.",
        ru: "Овладейте искусством создания увлекательного короткого видеоконтента, который не только становится вирусным, но и превращает зрителей в платящих клиентов."
      },
      date: '2025-01-12',
      readTime: '8 min',
      category: 'Video'
    },
    {
      id: 'ads-mistakes',
      title: {
        en: "Why Your Ads Don't Work: 7 Common Mistakes Businesses Make",
        uz: "Reklamalaringiz nima uchun ishlamayapti: 7 ta keng tarqalgan xato",
        ru: "Почему ваша реклама не работает: 7 распространенных ошибок"
      },
      excerpt: {
        en: "Learn the critical mistakes that drain your advertising budget and discover proven strategies to maximize your ad ROI.",
        uz: "Reklama byudjetingizni yo'qotadigan muhim xatolarni bilib oling va reklama samaradorligini oshirish uchun isbotlangan strategiyalarni kashf eting.",
        ru: "Узнайте критические ошибки, опустошающие ваш рекламный бюджет, и откройте проверенные стратегии для максимизации ROI рекламы."
      },
      date: '2025-01-10',
      readTime: '6 min',
      category: 'Advertising'
    },
    {
      id: 'video-pricing-uzbekistan',
      title: {
        en: "How Much Does a Video Cost in Uzbekistan? (Full Breakdown)",
        uz: "O'zbekistonda video qancha turadi? (To'liq tahlil)",
        ru: "Сколько стоит видео в Узбекистане? (Полная разбивка)"
      },
      excerpt: {
        en: "Transparent pricing guide for video production services in Uzbekistan - from simple reels to full-scale commercial productions.",
        uz: "O'zbekistonda video ishlab chiqarish xizmatlari uchun shaffof narxlar qo'llanmasi - oddiy reelslardan to to'liq miqyosdagi tijorat ishlab chiqarishgacha.",
        ru: "Прозрачное руководство по ценам на услуги видеопроизводства в Узбекистане - от простых Reels до полномасштабных коммерческих производств."
      },
      date: '2025-01-08',
      readTime: '10 min',
      category: 'Video'
    },
    {
      id: 'professional-video-2025',
      title: {
        en: "Why Your Business Needs Professional Video Content in 2025",
        uz: "2025-yilda biznesingizga nima uchun professional video kontent kerak",
        ru: "Почему вашему бизнесу нужен профессиональный видеоконтент в 2025 году"
      },
      excerpt: {
        en: "Video content is no longer optional. Discover why investing in professional video production is crucial for business growth in 2025.",
        uz: "Video kontent endi ixtiyoriy emas. 2025-yilda biznes o'sishi uchun professional video ishlab chiqarishga sarmoya kiritish nima uchun muhimligini bilib oling.",
        ru: "Видеоконтент больше не является опциональным. Узнайте, почему инвестиции в профессиональное видеопроизводство критичны для роста бизнеса в 2025 году."
      },
      date: '2025-01-05',
      readTime: '7 min',
      category: 'Strategy'
    },
    {
      id: 'choosing-agency-uzbekistan',
      title: {
        en: "How to Choose the Right Marketing Agency in Uzbekistan",
        uz: "O'zbekistonda to'g'ri marketing agentligini qanday tanlash",
        ru: "Как выбрать правильное маркетинговое агентство в Узбекистане"
      },
      excerpt: {
        en: "Essential checklist for selecting a marketing agency that truly understands your business goals and the Uzbek market.",
        uz: "Biznes maqsadlaringiz va O'zbekiston bozorini haqiqatan tushungan marketing agentligini tanlash uchun muhim nazorat ro'yxati.",
        ru: "Необходимый чек-лист для выбора маркетингового агентства, которое действительно понимает ваши бизнес-цели и узбекский рынок."
      },
      date: '2025-01-03',
      readTime: '9 min',
      category: 'Strategy'
    },
    {
      id: 'podcast-guide',
      title: {
        en: "The Ultimate Guide: How to Start a Podcast for Your Business",
        uz: "To'liq qo'llanma: Biznesingiz uchun podkastni qanday boshlash",
        ru: "Полное руководство: Как начать подкаст для вашего бизнеса"
      },
      excerpt: {
        en: "Step-by-step guide to launching a successful business podcast that builds authority and connects with your target audience.",
        uz: "Maqsadli auditoriyangiz bilan bog'lanish va obro' yaratadigan muvaffaqiyatli biznes podkastini ishga tushirish bo'yicha bosqichma-bosqich qo'llanma.",
        ru: "Пошаговое руководство по запуску успешного бизнес-подкаста, который создает авторитет и связывается с целевой аудиторией."
      },
      date: '2024-12-28',
      readTime: '12 min',
      category: 'Content'
    },
    {
      id: 'phone-reels',
      title: {
        en: "How to Shoot Professional Reels With Just a Phone",
        uz: "Faqat telefon bilan professional reelslarni qanday suratga olish",
        ru: "Как снимать профессиональные Reels только с телефоном"
      },
      excerpt: {
        en: "You don't need expensive equipment to create stunning content. Learn pro techniques for mobile video production.",
        uz: "Ajoyib kontent yaratish uchun qimmat uskunalar kerak emas. Mobil video ishlab chiqarish uchun professional texnikalarni o'rganing.",
        ru: "Вам не нужно дорогое оборудование для создания потрясающего контента. Изучите профессиональные техники мобильного видеопроизводства."
      },
      date: '2024-12-25',
      readTime: '6 min',
      category: 'Video'
    },
    {
      id: 'brand-identity',
      title: {
        en: "What Is a Brand Identity and Why Is It Crucial for Small Businesses?",
        uz: "Brend identifikatsiyasi nima va u kichik bizneslar uchun nima uchun muhim?",
        ru: "Что такое фирменный стиль и почему он важен для малого бизнеса?"
      },
      excerpt: {
        en: "Understanding brand identity fundamentals and how a strong visual identity can transform your small business success.",
        uz: "Brend identifikatsiyasi asoslari va kuchli vizual identifikatsiya kichik biznes muvaffaqiyatingizni qanday o'zgartirishi mumkinligini tushunish.",
        ru: "Понимание основ фирменного стиля и того, как сильная визуальная идентичность может преобразовать успех вашего малого бизнеса."
      },
      date: '2024-12-20',
      readTime: '8 min',
      category: 'Branding'
    },
    {
      id: 'uzbekistan-trends-2025',
      title: {
        en: "Top Digital Marketing Trends in Uzbekistan for 2025",
        uz: "2025-yil uchun O'zbekistondagi top raqamli marketing trendlari",
        ru: "Топ трендов цифрового маркетинга в Узбекистане на 2025 год"
      },
      excerpt: {
        en: "Stay ahead of the curve with insights into the latest digital marketing trends shaping the Uzbek market in 2025.",
        uz: "2025-yilda O'zbekiston bozorini shakllantirayotgan eng so'nggi raqamli marketing trendlari haqida ma'lumotlar bilan oldinda bo'ling.",
        ru: "Будьте впереди с инсайтами о последних трендах цифрового маркетинга, формирующих узбекский рынок в 2025 году."
      },
      date: '2024-12-18',
      readTime: '11 min',
      category: 'Strategy'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{t('blog.title')}</h1>
            <p className="text-xl text-muted">{t('blog.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <Link
                to={`/blog/${post.id}`}
                className="group glass-panel rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/20">{post.category}</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass-panel rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                    {post.title[t('language') as 'en' | 'uz' | 'ru']}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {post.excerpt[t('language') as 'en' | 'uz' | 'ru']}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:text-primary transition-colors">
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