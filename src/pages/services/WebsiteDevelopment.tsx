import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle, Layout, ShoppingCart, Building2, FileText, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const WebsiteDevelopment = () => {
  const { language } = useLanguage();

  const websiteTypes = [
    {
      icon: Building2,
      title: {
        en: 'Business Websites',
        uz: 'Biznes saytlar',
        ru: 'Бизнес сайты'
      },
      description: {
        en: 'Professional company websites with SEO foundation',
        uz: 'SEO asosidagi professional kompaniya saytlari',
        ru: 'Профессиональные сайты компаний с SEO-основой'
      }
    },
    {
      icon: FileText,
      title: {
        en: 'Landing Pages',
        uz: 'Landing page',
        ru: 'Лендинги'
      },
      description: {
        en: 'High-converting single-page websites',
        uz: 'Yuqori konversiyali bir sahifali saytlar',
        ru: 'Высококонверсионные одностраничные сайты'
      }
    },
    {
      icon: ShoppingCart,
      title: {
        en: 'E-commerce',
        uz: 'E-commerce',
        ru: 'Интернет-магазины'
      },
      description: {
        en: 'Online stores with payment integration',
        uz: 'To\'lov integratsiyali onlayn do\'konlar',
        ru: 'Интернет-магазины с интеграцией оплаты'
      }
    },
    {
      icon: Layout,
      title: {
        en: 'Corporate Websites',
        uz: 'Korporativ saytlar',
        ru: 'Корпоративные сайты'
      },
      description: {
        en: 'Enterprise-level web solutions',
        uz: 'Korxona darajasidagi veb yechimlar',
        ru: 'Веб-решения корпоративного уровня'
      }
    }
  ];

  const seoFeatures = [
    {
      en: 'Clean URL structure',
      uz: 'Toza URL strukturasi',
      ru: 'Чистая структура URL'
    },
    {
      en: 'Semantic HTML',
      uz: 'Semantik HTML',
      ru: 'Семантический HTML'
    },
    {
      en: 'Fast loading speed',
      uz: 'Tez yuklanish tezligi',
      ru: 'Быстрая скорость загрузки'
    },
    {
      en: 'Mobile-first design',
      uz: 'Mobile-first dizayn',
      ru: 'Mobile-first дизайн'
    },
    {
      en: 'Schema markup ready',
      uz: 'Schema markup tayyor',
      ru: 'Готовность к Schema markup'
    },
    {
      en: 'Core Web Vitals optimized',
      uz: 'Core Web Vitals optimallashtirilgan',
      ru: 'Оптимизация Core Web Vitals'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Globe className="w-4 h-4" />
              <span>{language === 'uz' ? 'Veb-sayt' : language === 'ru' ? 'Веб-сайт' : 'Website'}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {language === 'uz' 
                ? "SEO-optimallashtirilgan veb-saytlar yaratish"
                : language === 'ru'
                ? "Создание SEO-оптимизированных веб-сайтов"
                : "SEO-Optimized Website Development"
              }
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'uz' 
                ? "Biz saytlarni faqat chiroyli qilish uchun emas, balki Google'da reyting va sotuv olib kelish uchun yaratamiz."
                : language === 'ru'
                ? "Мы создаём сайты не только для красоты, но и для рейтинга в Google и продаж."
                : "We build websites not just to look good, but to rank on Google and drive sales."
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

      {/* Website Types */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'uz' 
                ? "Veb-sayt turlari"
                : language === 'ru'
                ? "Типы веб-сайтов"
                : "Website Types"
              }
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteTypes.map((type, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {type.title[language as 'en' | 'uz' | 'ru']}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {type.description[language as 'en' | 'uz' | 'ru']}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Built-in SEO Features */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {language === 'uz' 
                  ? "Har bir saytda SEO asosi"
                  : language === 'ru'
                  ? "SEO-основа в каждом сайте"
                  : "Built-in SEO Foundation"
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'uz' 
                  ? "Har bir veb-sayt boshidanoq SEO-optimallashtirilgan holda yaratiladi."
                  : language === 'ru'
                  ? "Каждый сайт создаётся с SEO-оптимизацией с самого начала."
                  : "Every website is built with SEO optimization from the ground up."
                }
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {seoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature[language as 'en' | 'uz' | 'ru']}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=450&fit=crop"
                alt="Website Development"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {language === 'uz' 
                ? "Ish jarayoni"
                : language === 'ru'
                ? "Процесс работы"
                : "Our Process"
              }
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: { en: 'Discovery', uz: 'Tahlil', ru: 'Анализ' },
              description: { 
                en: 'Understanding your business and goals', 
                uz: 'Biznesingiz va maqsadlaringizni tushunish',
                ru: 'Понимание вашего бизнеса и целей'
              }
            },
            {
              step: '02',
              title: { en: 'Design', uz: 'Dizayn', ru: 'Дизайн' },
              description: { 
                en: 'Creating modern, conversion-focused design', 
                uz: 'Zamonaviy, konversiyaga yo\'naltirilgan dizayn',
                ru: 'Современный дизайн для конверсии'
              }
            },
            {
              step: '03',
              title: { en: 'Development', uz: 'Ishlab chiqish', ru: 'Разработка' },
              description: { 
                en: 'Building with SEO-first approach', 
                uz: 'SEO-first yondashuvida qurish',
                ru: 'Разработка с SEO-first подходом'
              }
            },
            {
              step: '04',
              title: { en: 'Launch', uz: 'Ishga tushirish', ru: 'Запуск' },
              description: { 
                en: 'Going live with full SEO setup', 
                uz: 'To\'liq SEO sozlamalari bilan ishga tushirish',
                ru: 'Запуск с полной SEO-настройкой'
              }
            }
          ].map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title[language as 'en' | 'uz' | 'ru']}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description[language as 'en' | 'uz' | 'ru']}
                </p>
              </div>
            </Reveal>
          ))}
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
                  ? "Veb-saytingizni yaratamiz"
                  : language === 'ru'
                  ? "Создадим ваш веб-сайт"
                  : "Let's Build Your Website"
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'uz' 
                  ? "Bepul konsultatsiya va narx taklifi oling"
                  : language === 'ru'
                  ? "Получите бесплатную консультацию и ценовое предложение"
                  : "Get a free consultation and price estimate"
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
