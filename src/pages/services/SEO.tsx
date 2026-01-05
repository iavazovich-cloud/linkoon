import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle, BarChart3, FileSearch, Globe, MapPin, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const SEO = () => {
  const { language } = useLanguage();

  const seoServices = [
    {
      icon: FileSearch,
      title: {
        en: 'Technical SEO',
        uz: 'Texnik SEO',
        ru: 'Техническое SEO'
      },
      description: {
        en: 'Core Web Vitals, indexing, site structure optimization',
        uz: 'Core Web Vitals, indekslash, sayt strukturasi optimizatsiyasi',
        ru: 'Core Web Vitals, индексация, оптимизация структуры сайта'
      }
    },
    {
      icon: Search,
      title: {
        en: 'Keyword Research',
        uz: 'Kalit so\'z tadqiqoti',
        ru: 'Исследование ключевых слов'
      },
      description: {
        en: 'Uzbek & Russian intent analysis',
        uz: 'O\'zbek va rus tilidagi so\'rovlar tahlili',
        ru: 'Анализ запросов на узбекском и русском'
      }
    },
    {
      icon: Globe,
      title: {
        en: 'On-page SEO',
        uz: 'On-page SEO',
        ru: 'On-page SEO'
      },
      description: {
        en: 'Titles, H1-H3, internal links optimization',
        uz: 'Sarlavhalar, H1-H3, ichki havolalar optimizatsiyasi',
        ru: 'Заголовки, H1-H3, внутренняя перелинковка'
      }
    },
    {
      icon: BarChart3,
      title: {
        en: 'Content SEO',
        uz: 'Kontent SEO',
        ru: 'Контентное SEO'
      },
      description: {
        en: 'Blog & landing page optimization',
        uz: 'Blog va landing sahifalar optimizatsiyasi',
        ru: 'Оптимизация блога и посадочных страниц'
      }
    },
    {
      icon: MapPin,
      title: {
        en: 'Local & National SEO',
        uz: 'Mahalliy va milliy SEO',
        ru: 'Локальное и национальное SEO'
      },
      description: {
        en: 'Google Maps, local business optimization',
        uz: 'Google Maps, mahalliy biznes optimizatsiyasi',
        ru: 'Google Maps, оптимизация локального бизнеса'
      }
    },
    {
      icon: TrendingUp,
      title: {
        en: 'Monthly Tracking',
        uz: 'Oylik monitoring',
        ru: 'Ежемесячный мониторинг'
      },
      description: {
        en: 'Performance reports & strategy adjustments',
        uz: 'Ishlash hisobotlari va strategiya moslashtirish',
        ru: 'Отчёты и корректировка стратегии'
      }
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Search className="w-4 h-4" />
              <span>SEO</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {language === 'uz' 
                ? "O'zbekiston bozori uchun Professional SEO xizmatlari"
                : language === 'ru'
                ? "Профессиональные SEO услуги для рынка Узбекистана"
                : "Professional SEO Services for Uzbekistan Market"
              }
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'uz' 
                ? "Biz O'zbekiston bozoridagi qidiruv tizimini, raqobatni va mijoz xulqini chuqur tahlil qilib, biznesingizni Google'da va barcha AI modellarida yuqori o'rinlarga olib chiqamiz."
                : language === 'ru'
                ? "Мы глубоко анализируем поисковую систему, конкуренцию и поведение клиентов на рынке Узбекистана, выводя ваш бизнес на топовые позиции в Google и AI-моделях."
                : "We deeply analyze the search system, competition, and customer behavior in the Uzbek market, bringing your business to top positions on Google and all AI models."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
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

      {/* SEO Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'uz' 
                ? "SEO xizmatlari tarkibi"
                : language === 'ru'
                ? "Состав SEO услуг"
                : "SEO Services Included"
              }
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title[language as 'en' | 'uz' | 'ru']}
                </h3>
                <p className="text-muted-foreground">
                  {service.description[language as 'en' | 'uz' | 'ru']}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {language === 'uz' 
                  ? "Nima uchun SEO muhim?"
                  : language === 'ru'
                  ? "Почему SEO важно?"
                  : "Why SEO Matters?"
                }
              </h2>
              <div className="space-y-4">
                {[
                  {
                    en: 'Organic traffic is free and sustainable',
                    uz: 'Organik trafik bepul va barqaror',
                    ru: 'Органический трафик бесплатный и устойчивый'
                  },
                  {
                    en: 'Customers trust organic results more than ads',
                    uz: 'Mijozlar organik natijalarga reklamadan ko\'ra ko\'proq ishonadi',
                    ru: 'Клиенты доверяют органическим результатам больше, чем рекламе'
                  },
                  {
                    en: 'AI assistants use SEO-optimized content',
                    uz: 'AI yordamchilari SEO-optimallashtirilgan kontentdan foydalanadi',
                    ru: 'AI-ассистенты используют SEO-оптимизированный контент'
                  },
                  {
                    en: 'Long-term ROI compared to paid advertising',
                    uz: 'Pullik reklamaga nisbatan uzoq muddatli ROI',
                    ru: 'Долгосрочный ROI по сравнению с платной рекламой'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item[language as 'en' | 'uz' | 'ru']}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
                alt="SEO Analytics"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center bg-card border border-border">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {language === 'uz' 
                  ? "SEO strategiyangizni boshlang"
                  : language === 'ru'
                  ? "Начните свою SEO стратегию"
                  : "Start Your SEO Strategy"
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'uz' 
                  ? "Bepul SEO audit va konsultatsiya oling"
                  : language === 'ru'
                  ? "Получите бесплатный SEO аудит и консультацию"
                  : "Get a free SEO audit and consultation"
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
