import { Link } from 'react-router-dom';
import { Palette, Share2, Video, Megaphone, Globe, Lightbulb, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';

export const Home = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Palette, title: t('services.branding') },
    { icon: Share2, title: t('services.smm') },
    { icon: Video, title: t('services.content') },
    { icon: Megaphone, title: t('services.advertising') },
    { icon: Globe, title: t('services.web') },
    { icon: Lightbulb, title: t('services.strategy') },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-block glass-panel px-4 py-2 rounded-full">
                <span className="text-sm gradient-text font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t('hero.title')}{' '}
                <span className="gradient-text">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-lg text-muted max-w-xl">{t('hero.description')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-semibold text-lg group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Floating Cards Animation */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Element */}
                <div className="glass-panel rounded-3xl p-8 lg:p-12 text-center z-10 animate-float">
                  <div className="text-4xl lg:text-6xl font-bold gradient-text mb-2">120+</div>
                  <div className="text-sm lg:text-base text-muted">Completed Projects</div>
                </div>

                {/* Floating Card 1 - Top Left */}
                <div 
                  className="absolute top-0 left-0 lg:left-10 glass-panel rounded-2xl p-4 lg:p-6 w-32 lg:w-40"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary mb-2" />
                  <div className="text-xs lg:text-sm font-medium">Branding</div>
                </div>

                {/* Floating Card 2 - Top Right */}
                <div 
                  className="absolute top-10 right-0 lg:right-10 glass-panel rounded-2xl p-4 lg:p-6 w-32 lg:w-40"
                  style={{ animation: 'float 7s ease-in-out infinite 1s' }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-secondary to-primary mb-2" />
                  <div className="text-xs lg:text-sm font-medium">Web Design</div>
                </div>

                {/* Floating Card 3 - Bottom Left */}
                <div 
                  className="absolute bottom-10 left-5 lg:left-20 glass-panel rounded-2xl p-4 lg:p-6 w-28 lg:w-36"
                  style={{ animation: 'float 8s ease-in-out infinite 2s' }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-primary/80 to-secondary/80 mb-2" />
                  <div className="text-xs lg:text-sm font-medium">Video</div>
                </div>

                {/* Floating Card 4 - Bottom Right */}
                <div 
                  className="absolute bottom-0 right-5 lg:right-20 glass-panel rounded-2xl p-4 lg:p-6 w-28 lg:w-36"
                  style={{ animation: 'float 9s ease-in-out infinite 3s' }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-secondary/80 to-primary/80 mb-2" />
                  <div className="text-xs lg:text-sm font-medium">Social</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-lg text-muted">{t('services.subtitle')}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Link
                to="/services"
                className="glass-panel p-6 lg:p-8 rounded-3xl hover:bg-white/5 transition-all group relative"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2 relative z-10">{service.title}</h3>
                <div className="flex items-center gap-2 text-muted group-hover:text-foreground transition-colors relative z-10">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t('portfolio.title')}</h2>
            <p className="text-lg text-muted">{t('portfolio.subtitle')}</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src={portfolioBranding}
                alt="Luxury Brand Campaign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-muted mb-2">{t('services.branding')}</div>
                  <h3 className="text-2xl font-bold mb-2">Luxury Brand Campaign</h3>
                  <p className="text-muted">40% Increase in Sales</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src={portfolioWeb}
                alt="E-commerce Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-muted mb-2">{t('services.web')}</div>
                  <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
                  <p className="text-muted">3x Revenue Growth</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 glass-panel rounded-full font-semibold hover:bg-white/10 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Studio CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-block glass-panel px-4 py-2 rounded-full mb-4">
                <span className="text-sm gradient-text font-medium">{t('studio.badge')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">{t('studio.title')}</h2>
              <p className="text-lg text-muted">{t('studio.description')}</p>
              <Link
                to="/studio"
                className="inline-flex items-center gap-3 px-8 py-4 btn-gradient rounded-full font-semibold text-lg group"
              >
                <Play className="w-5 h-5" />
                {t('studio.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
