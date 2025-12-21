import { Link } from 'react-router-dom';
import { Palette, Share2, Video, Megaphone, Globe, Lightbulb, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';

export const Home = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Palette, title: t('services.branding'), description: 'Logo, brand identity, visual design' },
    { icon: Share2, title: t('services.smm'), description: 'Social media management & growth' },
    { icon: Video, title: t('services.content'), description: 'Video production & photography' },
    { icon: Megaphone, title: t('services.advertising'), description: 'Digital ads & campaigns' },
    { icon: Globe, title: t('services.web'), description: 'Website design & development' },
    { icon: Lightbulb, title: t('services.strategy'), description: 'Marketing strategy & consulting' },
  ];

  const stats = [
    { value: '120+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
    { value: '5+', label: 'Years' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="space-y-8">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">5 Stars • 50+ Reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                {t('hero.title')}{' '}
                <span className="gradient-text">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
                >
                  <span className="relative z-10">{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-border bg-card/50 hover:bg-card transition-all"
                >
                  <Play className="w-5 h-5" />
                  <span>View Work</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              {/* Stats Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Main Stats Card */}
                <div className="col-span-2 p-6 rounded-3xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Visitor Growth</span>
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">+24%</span>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-1">32.7K</div>
                  <div className="text-sm text-muted-foreground">Monthly active users</div>
                </div>

                {/* Stat Cards */}
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
                  >
                    <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
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
              {t('services.title')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Charting your path to{' '}
              <span className="gradient-text">marketing mastery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <Link
                to="/services"
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-4">
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
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
              <span className="relative z-10">Book a call with us</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
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
            <Link to="/portfolio/1" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioBranding}
                alt="Luxury Brand Campaign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{t('services.branding')}</div>
                  <h3 className="text-2xl font-bold mb-2">Luxury Brand Campaign</h3>
                  <p className="text-muted-foreground">40% Increase in Sales</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.2}>
            <Link to="/portfolio/2" className="group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img
                src={portfolioWeb}
                alt="E-commerce Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-primary mb-2">{t('services.web')}</div>
                  <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
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
              View All Projects
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
                {t('studio.badge')}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Interested?{' '}
                <span className="gradient-text">Get in Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer the best opportunities for your business growth
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
              >
                <span className="relative z-10">Schedule a call</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
