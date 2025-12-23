import { Link } from 'react-router-dom';
import { Palette, Share2, Video, Globe, Lightbulb, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const MarketingAgentligiNamangan = () => {
  const { language } = useLanguage();

  const pageContent = {
    en: {
      title: 'Marketing Agency in Namangan',
      intro: 'LinkOn is a marketing agency based in Namangan, offering comprehensive marketing and digital services for businesses in the region.',
      servicesTitle: 'Our Services',
      trustTitle: 'Your Local Marketing Partner',
      trustText: 'We work with businesses in Namangan and the surrounding regions. Our team understands the local market and provides tailored solutions that drive real results for your business.',
      ctaTitle: 'Ready to Grow Your Business?',
      ctaText: 'Contact us today to discuss how we can help your business reach new heights.',
      ctaButton: 'Get in Touch',
      backHome: 'LinkOn marketing agency'
    },
    uz: {
      title: 'Marketing agentligi Namanganda',
      intro: 'LinkOn — Namanganda joylashgan marketing agentligi bo\'lib, mintaqadagi bizneslar uchun keng qamrovli marketing va raqamli xizmatlarni taqdim etadi.',
      servicesTitle: 'Xizmatlarimiz',
      trustTitle: 'Mahalliy Marketing Hamkoringiz',
      trustText: 'Biz Namangan va yaqin hududlardagi bizneslar bilan ishlaymiz. Jamoamiz mahalliy bozorni tushunadi va biznesingiz uchun haqiqiy natijalar beradigan moslashtirilgan yechimlarni taqdim etadi.',
      ctaTitle: 'Biznesingizni Oʻstirishga Tayyormisiz?',
      ctaText: 'Biznesingizni yangi bosqichga olib chiqishda qanday yordam berishimiz mumkinligini muhokama qilish uchun bugun biz bilan bogʻlaning.',
      ctaButton: 'Bogʻlanish',
      backHome: 'LinkOn marketing agentligi'
    },
    ru: {
      title: 'Маркетинговое агентство в Намангане',
      intro: 'LinkOn — маркетинговое агентство в Намангане, предлагающее комплексные маркетинговые и цифровые услуги для бизнеса в регионе.',
      servicesTitle: 'Наши услуги',
      trustTitle: 'Ваш Локальный Маркетинговый Партнёр',
      trustText: 'Мы работаем с бизнесами в Намангане и окрестных регионах. Наша команда понимает местный рынок и предоставляет индивидуальные решения, которые приносят реальные результаты для вашего бизнеса.',
      ctaTitle: 'Готовы Развивать Свой Бизнес?',
      ctaText: 'Свяжитесь с нами сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу выйти на новый уровень.',
      ctaButton: 'Связаться',
      backHome: 'LinkOn маркетинговое агентство'
    }
  };

  const services = [
    {
      icon: Palette,
      name: { en: 'Branding', uz: 'Brending', ru: 'Брендинг' },
      desc: { 
        en: 'Logo design, brand identity, and visual guidelines',
        uz: 'Logo dizayn, brend identifikatsiyasi va vizual qoʻllanmalar',
        ru: 'Дизайн логотипа, идентичность бренда и визуальные рекомендации'
      }
    },
    {
      icon: Share2,
      name: { en: 'SMM', uz: 'SMM', ru: 'SMM' },
      desc: { 
        en: 'Social media management and content creation',
        uz: 'Ijtimoiy tarmoqlarni boshqarish va kontent yaratish',
        ru: 'Управление социальными сетями и создание контента'
      }
    },
    {
      icon: Search,
      name: { en: 'SEO', uz: 'SEO', ru: 'SEO' },
      desc: { 
        en: 'Search engine optimization for better visibility',
        uz: 'Koʻrinishni yaxshilash uchun qidiruv tizimi optimizatsiyasi',
        ru: 'Поисковая оптимизация для лучшей видимости'
      }
    },
    {
      icon: Globe,
      name: { en: 'Website Development', uz: 'Veb-sayt yaratish', ru: 'Создание сайтов' },
      desc: { 
        en: 'Modern, responsive websites and web applications',
        uz: 'Zamonaviy, moslashuvchan veb-saytlar va veb-ilovalar',
        ru: 'Современные, адаптивные сайты и веб-приложения'
      }
    },
    {
      icon: Video,
      name: { en: 'Video Production', uz: 'Video ishlab chiqarish', ru: 'Видеопроизводство' },
      desc: { 
        en: 'Professional video content for your brand',
        uz: 'Brendingiz uchun professional video kontent',
        ru: 'Профессиональный видеоконтент для вашего бренда'
      }
    },
    {
      icon: Lightbulb,
      name: { en: 'Marketing Strategy', uz: 'Marketing strategiyasi', ru: 'Маркетинговая стратегия' },
      desc: { 
        en: 'Strategic planning and consulting services',
        uz: 'Strategik rejalashtirish va konsalting xizmatlari',
        ru: 'Стратегическое планирование и консалтинговые услуги'
      }
    }
  ];

  const content = pageContent[language as 'en' | 'uz' | 'ru'];
  const lang = language as 'en' | 'uz' | 'ru';

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{content.title}</h1>
            <p className="text-xl text-muted-foreground">{content.intro}</p>
          </div>
        </Reveal>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">{content.servicesTitle}</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.name[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc[lang]}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">{content.trustTitle}</h2>
            <p className="text-lg text-muted-foreground">{content.trustText}</p>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center bg-card border border-border">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">{content.ctaTitle}</h2>
              <p className="text-lg text-muted-foreground">{content.ctaText}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-bold text-white group"
              >
                <span className="relative z-10">{content.ctaButton}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Back link */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <Reveal>
          <div className="text-center">
            <Link to="/" className="text-primary hover:underline">
              {content.backHome}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};