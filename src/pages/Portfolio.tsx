import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioSocial from '@/assets/portfolio-social.jpg';

type Category = 'all' | 'branding' | 'web' | 'video' | 'social';

export const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t('portfolio.all') },
    { id: 'branding', label: t('portfolio.branding') },
    { id: 'web', label: t('portfolio.webDesign') },
    { id: 'video', label: t('portfolio.video') },
    { id: 'social', label: t('portfolio.social') },
  ];

  const projects = [
    {
      image: portfolioBranding,
      category: 'branding',
      client: 'Luxury Cosmetics',
      result: '40% Increase in Sales',
    },
    {
      image: portfolioWeb,
      category: 'web',
      client: 'Fashion E-commerce',
      result: '3x Revenue Growth',
    },
    {
      image: portfolioVideo,
      category: 'video',
      client: 'Tech Startup',
      result: '1M+ Views',
    },
    {
      image: portfolioSocial,
      category: 'social',
      client: 'Lifestyle Brand',
      result: '500K New Followers',
    },
    {
      image: portfolioBranding,
      category: 'branding',
      client: 'Restaurant Chain',
      result: '60% Brand Recognition',
    },
    {
      image: portfolioWeb,
      category: 'web',
      client: 'SaaS Platform',
      result: '5x User Signups',
    },
    {
      image: portfolioVideo,
      category: 'video',
      client: 'Music Festival',
      result: '2M+ Engagement',
    },
    {
      image: portfolioSocial,
      category: 'social',
      client: 'Fitness App',
      result: '300% Growth',
    },
    {
      image: portfolioBranding,
      category: 'branding',
      client: 'Financial Services',
      result: '85% Trust Score',
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
            <p className="text-xl text-muted">{t('portfolio.subtitle')}</p>
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
            const projectId = project.client.toLowerCase().replace(/\s+/g, '-');
            return (
              <Reveal key={index} delay={index * 0.05}>
                <Link to={`/portfolio/${projectId}`} className="block group relative overflow-hidden rounded-3xl aspect-square">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="text-sm text-muted mb-2">
                        {categories.find((c) => c.id === project.category)?.label}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.client}</h3>
                      <p className="text-primary font-semibold">{project.result}</p>
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
