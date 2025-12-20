import { Link } from 'react-router-dom';
import { Palette, Share2, Video, Megaphone, Globe, Lightbulb, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';

export const Home = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Palette, title: t('services.branding'), description: t('home.services.brandingDesc') },
    { icon: Share2, title: t('services.smm'), description: t('home.services.smmDesc') },
    { icon: Video, title: t('services.content'), description: t('home.services.contentDesc') },
    { icon: Megaphone, title: t('services.advertising'), description: t('home.services.advertisingDesc') },
    { icon: Globe, title: t('services.web'), description: t('home.services.webDesc') },
    { icon: Lightbulb, title: t('services.strategy'), description: t('home.services.strategyDesc') },
  ];

  const stats = [
    { value: '120+', label: t('home.stats.projects') },
    { value: '50+', label: t('home.stats.clients') },
    { value: '5+', label: t('home.stats.years') },
    { value: '98%', label: t('home.stats.satisfaction') },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Marketing agentligi Namangan */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-label="Hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <header className="space-y-8">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{t('home.rating')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <strong>{t('hero.title')}</strong>{' '}
                <span className="gradient-text">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                <strong>LinkOn</strong> — {t('hero.description')} <strong>Namangan</strong>, O'zbekiston.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
                  aria-label={t('hero.cta')}
                >
                  <span className="relative z-10">{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-border bg-card/50 hover:bg-card transition-all"
                  aria-label={t('home.viewWork')}
                >
                  <Play className="w-5 h-5" />
                  <span>{t('home.viewWork')}</span>
                </Link>
              </div>
            </header>
          </Reveal>

          <Reveal delay={0.2}>
            <aside className="relative" aria-label="Statistics">
              {/* Stats Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Main Stats Card */}
                <article className="col-span-2 p-6 rounded-3xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{t('home.visitorGrowth')}</span>
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">+24%</span>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-1">32.7K</div>
                  <div className="text-sm text-muted-foreground">{t('home.monthlyUsers')}</div>
                </article>

                {/* Stat Cards */}
                {stats.map((stat, index) => (
                  <article 
                    key={index}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
                  >
                    <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </article>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl" />
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Services Section - Xizmatlar */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-label="Services">
        <Reveal>
          <header className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('services.title')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {t('home.services.heading')}{' '}
              <span className="gradient-text">{t('home.services.headingHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <Link
                to="/services"
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <article className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      <span>{t('home.learnMore')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
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
              <span className="relative z-10">{t('home.bookCall')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured Work - Portfolio */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-label="Portfolio">
        <Reveal>
          <header className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('portfolio.title')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('home.featuredWork')}</h2>
            <p className="text-lg text-muted-foreground">{t('portfolio.subtitle')}</p>
          </header>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <Link to="/portfolio/1" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioBranding}
                alt="Brending kampaniyasi - LinkOn marketing agentligi Namangan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{t('services.branding')}</div>
                  <h3 className="text-2xl font-bold mb-2">{t('home.project1.title')}</h3>
                  <p className="text-muted-foreground">{t('home.project1.result')}</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.2}>
            <Link to="/portfolio/2" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioWeb}
                alt="Veb ishlanma - E-commerce platforma Namangan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{t('services.web')}</div>
                  <h3 className="text-2xl font-bold mb-2">{t('home.project2.title')}</h3>
                  <p className="text-muted-foreground">{t('home.project2.result')}</p>
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

      {/* Why Choose Us - Nega biz */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-label="Why choose us">
        <Reveal>
          <header className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('home.whyUs.badge')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('home.whyUs.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('home.whyUs.subtitle')}</p>
          </header>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.1}>
            <article className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.whyUs.reason1.title')}</h3>
              <p className="text-muted-foreground">{t('home.whyUs.reason1.desc')}</p>
            </article>
          </Reveal>

          <Reveal delay={0.2}>
            <article className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.whyUs.reason2.title')}</h3>
              <p className="text-muted-foreground">{t('home.whyUs.reason2.desc')}</p>
            </article>
          </Reveal>

          <Reveal delay={0.3}>
            <article className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.whyUs.reason3.title')}</h3>
              <p className="text-muted-foreground">{t('home.whyUs.reason3.desc')}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" aria-label="Call to action">
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center bg-card border border-border">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {t('home.cta.badge')}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">
                {t('home.cta.title')}{' '}
                <span className="gradient-text">{t('home.cta.highlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('home.cta.description')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
              >
                <span className="relative z-10">{t('home.cta.button')}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        </Reveal>
      </section>

      {/* SEO Content Section - Hidden visually but crawlable */}
      <section className="sr-only" aria-hidden="true">
        <h2>Marketing agentligi Namangan - LinkOn</h2>
        <p>
          LinkOn — Namangandagi eng yaxshi marketing agentligi. Biz brending, ijtimoiy tarmoqlar marketingi (SMM), 
          video ishlab chiqarish, veb-sayt yaratish va raqamli marketing xizmatlarini taqdim etamiz. 
          O'zbekistondagi bizneslar uchun professional marketing yechimlari.
        </p>
        <h3>Bizning xizmatlarimiz</h3>
        <ul>
          <li>Brending va brendidentifikatsiya - logo dizayni, brend strategiyasi</li>
          <li>SMM xizmatlari - Instagram, Telegram, Facebook marketing</li>
          <li>Video ishlab chiqarish - reklama videolari, Reels, kontent</li>
          <li>Veb-sayt yaratish - sayt dizayni va ishlab chiqish</li>
          <li>Raqamli reklama - Google Ads, Facebook Ads, targetlangan reklama</li>
          <li>Marketing strategiyasi - konsalting va biznes rivojlantirish</li>
        </ul>
        <h3>Nega bizni tanlashadi?</h3>
        <p>
          Biz Namanganlik marketing mutaxassislarimiz. 5 yildan ortiq tajriba, 120+ muvaffaqiyatli loyihalar, 
          50+ mamnun mijozlar. Mahalliy bozorni yaxshi bilamiz va global standartlarda ishlaymiz.
        </p>
        <address>
          Manzil: Amir Temur ko'chasi, 42, Namangan, O'zbekiston
          Telefon: +998 90 693 77 37
          Email: iavazovich@gmail.com
        </address>
      </section>
    </main>
  );
};
