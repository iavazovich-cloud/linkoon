import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const Blog = () => {
  const { t, language } = useLanguage();

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
    // New 10 blog posts
    {
      id: 'ai-business-automation',
      title: {
        en: "AI for Entrepreneurs in Uzbekistan 2025: How to Save Time and Money?",
        uz: "O'zbekistonda tadbirkorlar uchun 2025-yilda AI: Qanday qilib vaqt va pulni tejash mumkin?",
        ru: "ИИ для предпринимателей Узбекистана в 2025: Как сэкономить время и деньги?"
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
