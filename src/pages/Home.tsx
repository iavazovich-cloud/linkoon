import { Link } from 'react-router-dom';
import { Search, Globe, BarChart3, ArrowRight, Play, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';

export const Home = () => {
  const { t, language } = useLanguage();

  const services = [
    { 
      icon: Search, 
      title: {
        en: 'SEO Services',
        uz: 'SEO xizmatlari',
        ru: 'SEO услуги'
      },
      description: {
        en: 'Get found on Google and AI search engines',
        uz: "Google va AI qidiruv tizimlarida topiling",
        ru: 'Будьте найдены в Google и AI поисковиках'
      },
      link: '/services/seo'
    },
    { 
      icon: Globe, 
      title: {
        en: 'Website Development',
        uz: 'Veb-sayt yaratish',
        ru: 'Создание сайтов'
      },
      description: {
        en: 'SEO-optimized websites that convert',
        uz: 'SEO-optimallashtirilgan saytlar',
        ru: 'SEO-оптимизированные сайты'
      },
      link: '/services/website-development'
    },
    { 
      icon: BarChart3, 
      title: {
        en: 'Analytics & CRO',
        uz: 'Analitika va CRO',
        ru: 'Аналитика и CRO'
      },
      description: {
        en: 'Data-driven conversion optimization',
        uz: "Ma'lumotlarga asoslangan konversiya",
        ru: 'Оптимизация на основе данных'
      },
      link: '/services'
    },
  ];

  const trustSignals = [
    {
      en: 'SEO-first methodology',
      uz: 'SEO asosida ishlab chiqilgan saytlar',
      ru: 'SEO-ориентированная методология'
    },
    {
      en: 'Uzbek market expertise',
      uz: "O'zbekiston bozoriga mos strategiyalar",
      ru: 'Экспертиза узбекского рынка'
    },
    {
      en: 'Technical SEO + Design + Conversion',
      uz: 'Texnik SEO + dizayn + konversiya',
      ru: 'Технический SEO + дизайн + конверсия'
    },
    {
      en: 'Measurable results',
      uz: "O'lchab bo'ladigan natijalar",
      ru: 'Измеримые результаты'
    }
  ];

  // Blog posts for promotion section
  const blogPosts = [
    {
      id: 'seo-nima-uzbekistan',
      title: {
        en: "What is SEO and How Does It Benefit Businesses in Uzbekistan?",
        uz: "SEO nima va u O'zbekistonda biznesga qanday foyda beradi?",
        ru: "Что такое SEO и как оно помогает бизнесу в Узбекистане?"
      },
      excerpt: {
        en: "Learn the fundamentals of SEO and why it matters for Uzbek businesses.",
        uz: "SEO asoslarini va u O'zbekiston bizneslari uchun nima uchun muhimligini bilib oling.",
        ru: "Изучите основы SEO и почему это важно для узбекского бизнеса."
      },
      readTime: '8 min',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop'
    },
    {
      id: 'website-google-chiqmasligi',
      title: {
        en: "7 Reasons Your Website Doesn't Appear on Google",
        uz: "Veb-sayt Google'da chiqmasligining 7 sababi",
        ru: "7 причин, почему ваш сайт не появляется в Google"
      },
      excerpt: {
        en: "Discover the technical issues preventing your website from ranking.",
        uz: "Saytingiz reytingga chiqmasligiga to'sqinlik qilayotgan texnik muammolarni aniqlang.",
        ru: "Узнайте технические проблемы, мешающие вашему сайту ранжироваться."
      },
      readTime: '10 min',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 'seo-strategiya-2026',
      title: {
        en: "SEO Strategy 2026 for Uzbek Businesses",
        uz: "O'zbek bizneslari uchun SEO strategiya 2026",
        ru: "SEO стратегия 2026 для узбекского бизнеса"
      },
      excerpt: {
        en: "The complete SEO roadmap for businesses targeting the Uzbek market.",
        uz: "O'zbekiston bozorini nishonga olgan bizneslar uchun to'liq SEO yo'l xaritasi.",
        ru: "Полная SEO-дорожная карта для бизнеса на узбекском рынке."
      },
      readTime: '12 min',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                {language === 'uz' 
                  ? <>O'zbekistonda biznesingizni <span className="gradient-text">LinkOn</span> bilan o'stiring</>
                  : language === 'ru'
                  ? <>Развивайте бизнес в Узбекистане с <span className="gradient-text">LinkOn</span></>
                  : <>Grow your business in Uzbekistan with <span className="gradient-text">LinkOn</span></>
                }
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {language === 'uz' 
                  ? "Professional veb-sayt yaratish va SEO xizmatlari orqali Google'da va ChatGPT'da yuqori o'rinlarni egallang. Bepul konsultatsiya oling!"
                  : language === 'ru'
                  ? "Занимайте высокие позиции в Google и ChatGPT благодаря профессиональному созданию сайтов и SEO. Получите бесплатную консультацию!"
                  : "Rank high on Google and ChatGPT with professional website development and SEO services. Get a free consultation!"
                }
              </p>
              
              {/* Hero Subtext */}
              <p className="text-base text-muted-foreground max-w-xl">
                {language === 'uz' 
                  ? "LinkOn — O'zbekiston bo'ylab bizneslar uchun SEO-optimallashtirilgan veb-saytlar va Google'da yuqori natijalar. Biz bilan raqamli o'sishga erishing."
                  : language === 'ru'
                  ? "LinkOn — SEO-оптимизированные сайты и высокие результаты в Google для бизнеса по всему Узбекистану. Достигните цифрового роста с нами."
                  : "LinkOn — SEO-optimized websites and top Google results for businesses across Uzbekistan. Achieve digital growth with us."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
                >
                  <span className="relative z-10">
                    {language === 'uz' ? 'Bepul konsultatsiya' : language === 'ru' ? 'Бесплатная консультация' : 'Free Consultation'}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-border bg-card/50 hover:bg-card transition-all"
                >
                  <span>{language === 'uz' ? 'Xizmatlar' : language === 'ru' ? 'Услуги' : 'Services'}</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              {/* Trust Signals Card */}
              <div className="p-6 lg:p-8 rounded-3xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-6">
                  {language === 'uz' ? 'Nima uchun LinkOn?' : language === 'ru' ? 'Почему LinkOn?' : 'Why LinkOn?'}
                </h3>
                <div className="space-y-4">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{signal[language as 'en' | 'uz' | 'ru']}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {language === 'uz' ? 'Xizmatlar' : language === 'ru' ? 'Услуги' : 'Services'}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {language === 'uz' 
                ? <>SEO va <span className="gradient-text">veb-sayt</span> xizmatlari</>
                : language === 'ru'
                ? <>SEO и <span className="gradient-text">веб-сайты</span></>
                : <>SEO & <span className="gradient-text">Website</span> Services</>
              }
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'uz' 
                ? "Biz saytlarni faqat chiroyli qilish uchun emas, balki Google'da reyting va sotuv olib kelish uchun yaratamiz."
                : language === 'ru'
                ? "Мы создаём сайты не только красивыми, но и для рейтинга в Google и продаж."
                : "We build websites not just to look good, but to rank on Google and drive sales."
              }
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Link
                to={service.link}
                className="group block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title[language as 'en' | 'uz' | 'ru']}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {service.description[language as 'en' | 'uz' | 'ru']}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>{language === 'uz' ? 'Batafsil' : language === 'ru' ? 'Подробнее' : 'Learn more'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="flex justify-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
            >
              <span className="relative z-10">
                {language === 'uz' ? 'Bepul konsultatsiya olish' : language === 'ru' ? 'Получить бесплатную консультацию' : 'Get Free Consultation'}
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Blog Promotion Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('blog.sectionTitle')}</h2>
            <p className="text-lg text-muted-foreground">{t('blog.sectionSubtitle')}</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <Link
                to={`/blog/${post.id}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className="aspect-[16/10] overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title[language as 'en' | 'uz' | 'ru']}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
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
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                    {post.excerpt[language as 'en' | 'uz' | 'ru']}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="flex justify-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
            >
              {t('blog.viewAll')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('portfolio.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('portfolio.subtitle')}</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <Link to="/portfolio/kofe-mofe" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioBranding}
                alt="Kofe Mofe Website"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{language === 'uz' ? 'Veb-sayt' : language === 'ru' ? 'Веб-сайт' : 'Website'}</div>
                  <h3 className="text-2xl font-bold mb-2">Kofe Mofe</h3>
                  <p className="text-muted-foreground">{language === 'uz' ? 'Strategik hamkorlik' : language === 'ru' ? 'Стратегическое партнёрство' : 'Strategic Partnership'}</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.2}>
            <Link to="/portfolio/tech-startup" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioWeb}
                alt="E-commerce Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{language === 'uz' ? 'Veb-sayt + SEO' : language === 'ru' ? 'Веб-сайт + SEO' : 'Website + SEO'}</div>
                  <h3 className="text-2xl font-bold mb-2">Tech Startup</h3>
                  <p className="text-muted-foreground">3x Revenue Growth</p>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
            >
              {t('home.viewAllProjects')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center bg-card border border-border">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {language === 'uz' ? 'Boshlash' : language === 'ru' ? 'Начать' : 'Get Started'}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">
                {language === 'uz' 
                  ? <>Biznesingizni <span className="gradient-text">Google'da</span> ko'rsating</>
                  : language === 'ru'
                  ? <>Покажите бизнес в <span className="gradient-text">Google</span></>
                  : <>Get your business on <span className="gradient-text">Google</span></>
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'uz' 
                  ? "Bepul konsultatsiya orqali biznesingiz uchun SEO va veb-sayt strategiyasini bilib oling."
                  : language === 'ru'
                  ? "Узнайте SEO и веб-стратегию для вашего бизнеса на бесплатной консультации."
                  : "Discover SEO and website strategy for your business with a free consultation."
                }
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
              >
                <span className="relative z-10">
                  {language === 'uz' ? 'Bepul konsultatsiya' : language === 'ru' ? 'Бесплатная консультация' : 'Free Consultation'}
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
