import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { usePageMeta } from '@/hooks/usePageMeta';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioSocial from '@/assets/portfolio-social.jpg';
import portfolioKofemofe from '@/assets/portfolio-kofemofe.png';

type Category = 'all' | 'branding' | 'web' | 'video' | 'social';

export const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  usePageMeta(
    'Portfolio — Bizning ishlarimiz | LinkOn',
    "LinkOn agentligi tomonidan bajarilgan loyihalar: brending, veb-saytlar, video va ijtimoiy tarmoqlar bo'yicha ishlar."
  );

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t('portfolio.all') },
    { id: 'branding', label: t('portfolio.branding') },
    { id: 'web', label: t('portfolio.webDesign') },
    { id: 'video', label: t('portfolio.video') },
    { id: 'social', label: t('portfolio.social') },
  ];

  const projects = [
    {
      image: portfolioKofemofe,
      category: 'web',
      client: {
        en: 'Kofe Mofe',
        uz: 'Kofe Mofe',
        ru: 'Кофе Мофе'
      },
      result: {
        en: 'Strategic Partnership',
        uz: 'Strategik hamkorlik',
        ru: 'Стратегическое партнёрство'
      },
      slug: 'kofe-mofe'
    },
    {
      image: portfolioBranding,
      category: 'branding',
      client: {
        en: 'Luxury Cosmetics',
        uz: 'Lyuks kosmetika',
        ru: 'Люкс косметика'
      },
      result: {
        en: '40% Increase in Sales',
        uz: 'Sotuvda 40% o\'sish',
        ru: 'Рост продаж на 40%'
      },
      slug: 'luxury-cosmetics'
    },
    {
      image: portfolioWeb,
      category: 'web',
      client: {
        en: 'Fashion E-commerce',
        uz: 'Moda E-tijorat',
        ru: 'Модный E-commerce'
      },
      result: {
        en: '3x Revenue Growth',
        uz: 'Daromadda 3x o\'sish',
        ru: 'Рост дохода в 3 раза'
      },
      slug: 'fashion-ecommerce'
    },
    {
      image: portfolioVideo,
      category: 'video',
      client: {
        en: 'Tech Startup',
        uz: 'Texnologiya startapi',
        ru: 'Технологический стартап'
      },
      result: {
        en: '1M+ Views',
        uz: '1M+ ko\'rishlar',
        ru: '1M+ просмотров'
      },
      slug: 'tech-startup'
    },
    {
      image: portfolioSocial,
      category: 'social',
      client: {
        en: 'Lifestyle Brand',
        uz: 'Turmush tarzi brendi',
        ru: 'Лайфстайл бренд'
      },
      result: {
        en: '500K New Followers',
        uz: '500K yangi obunachilar',
        ru: '500K новых подписчиков'
      },
      slug: 'lifestyle-brand'
    },
    {
      image: portfolioBranding,
      category: 'branding',
      client: {
        en: 'Restaurant Chain',
        uz: 'Restoran tarmog\'i',
        ru: 'Сеть ресторанов'
      },
      result: {
        en: '60% Brand Recognition',
        uz: '60% brend tanilishi',
        ru: '60% узнаваемость бренда'
      },
      slug: 'restaurant-chain'
    },
    {
      image: portfolioWeb,
      category: 'web',
      client: {
        en: 'SaaS Platform',
        uz: 'SaaS platforma',
        ru: 'SaaS платформа'
      },
      result: {
        en: '5x User Signups',
        uz: '5x foydalanuvchi ro\'yxatdan o\'tish',
        ru: 'Регистраций в 5 раз больше'
      },
      slug: 'saas-platform'
    },
    {
      image: portfolioVideo,
      category: 'video',
      client: {
        en: 'Music Festival',
        uz: 'Musiqa festivali',
        ru: 'Музыкальный фестиваль'
      },
      result: {
        en: '2M+ Engagement',
        uz: '2M+ interaktivlik',
        ru: '2M+ вовлечённость'
      },
      slug: 'music-festival'
    },
    {
      image: portfolioSocial,
      category: 'social',
      client: {
        en: 'Fitness App',
        uz: 'Fitness ilovasi',
        ru: 'Фитнес приложение'
      },
      result: {
        en: '300% Growth',
        uz: '300% o\'sish',
        ru: 'Рост на 300%'
      },
      slug: 'fitness-app'
    },
    {
      image: portfolioBranding,
      category: 'branding',
      client: {
        en: 'Financial Services',
        uz: 'Moliyaviy xizmatlar',
        ru: 'Финансовые услуги'
      },
      result: {
        en: '85% Trust Score',
        uz: '85% ishonch ko\'rsatkichi',
        ru: '85% уровень доверия'
      },
      slug: 'financial-services'
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{t('portfolio.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('portfolio.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'btn-gradient'
                    : 'glass-panel hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <Reveal key={index} delay={index * 0.05}>
                <Link to={`/portfolio/${project.slug}`} className="block group relative overflow-hidden rounded-3xl aspect-square">
                  <img
                    src={project.image}
                    alt={project.client[language as 'en' | 'uz' | 'ru']}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="text-sm text-muted-foreground mb-2">
                        {categories.find((c) => c.id === project.category)?.label}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.client[language as 'en' | 'uz' | 'ru']}</h3>
                      <p className="text-primary font-semibold">{project.result[language as 'en' | 'uz' | 'ru']}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};
