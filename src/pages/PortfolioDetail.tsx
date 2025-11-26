import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioSocial from '@/assets/portfolio-social.jpg';

const projectsData = [
  {
    id: 'luxury-cosmetics',
    title: 'Luxury Cosmetics Brand Campaign',
    category: 'Branding',
    client: 'Luxury Cosmetics',
    date: '2024',
    result: '40% Increase in Sales',
    image: portfolioBranding,
    description: 'A comprehensive branding campaign for a luxury cosmetics brand targeting high-end consumers. We developed a sophisticated visual identity that resonated with the premium market segment.',
    challenges: 'The client needed to differentiate in a crowded luxury market while maintaining an approachable yet exclusive brand image.',
    solution: 'We created a minimalist yet luxurious brand identity with gold accents, elegant typography, and high-quality product photography that emphasized the premium nature of the products.',
    results: [
      '40% increase in overall sales',
      '65% boost in social media engagement',
      '50+ press mentions in beauty publications',
      'Expanded to 15 new retail locations'
    ]
  },
  {
    id: 'fashion-ecommerce',
    title: 'Fashion E-commerce Platform',
    category: 'Web Design',
    client: 'Fashion E-commerce',
    date: '2024',
    result: '3x Revenue Growth',
    image: portfolioWeb,
    description: 'Complete redesign and development of an e-commerce platform for a fashion retailer, focusing on user experience and conversion optimization.',
    challenges: 'High cart abandonment rates and poor mobile experience were limiting sales potential.',
    solution: 'We implemented a mobile-first design with streamlined checkout, personalized recommendations, and advanced filtering to help users find products quickly.',
    results: [
      '300% increase in revenue',
      '45% reduction in cart abandonment',
      '80% of traffic now from mobile',
      'Average session duration up by 120%'
    ]
  },
  {
    id: 'tech-startup',
    title: 'Tech Startup Brand Video',
    category: 'Video Production',
    client: 'Tech Startup',
    date: '2024',
    result: '1M+ Views',
    image: portfolioVideo,
    description: 'A compelling brand story video that helped a tech startup communicate their mission and attract both customers and investors.',
    challenges: 'Complex technology needed to be explained simply while maintaining credibility with technical audiences.',
    solution: 'We crafted a narrative-driven video combining motion graphics, testimonials, and product demonstrations to create an engaging story.',
    results: [
      'Over 1 million organic views',
      '250% increase in demo requests',
      'Featured at 3 major tech conferences',
      'Helped secure Series A funding'
    ]
  },
  {
    id: 'lifestyle-brand',
    title: 'Lifestyle Brand Social Campaign',
    category: 'Social Media',
    client: 'Lifestyle Brand',
    date: '2024',
    result: '500K New Followers',
    image: portfolioSocial,
    description: 'A multi-platform social media campaign that transformed a local lifestyle brand into a regional phenomenon.',
    challenges: 'Limited brand awareness outside local market with tight budget constraints.',
    solution: 'We developed a content strategy focused on user-generated content, influencer partnerships, and viral-worthy campaigns that maximized organic reach.',
    results: [
      '500,000 new followers across platforms',
      '85% engagement rate on campaign posts',
      '2M+ impressions per week',
      'Organic reach increased 400%'
    ]
  },
  {
    id: 'restaurant-chain',
    title: 'Restaurant Chain Rebrand',
    category: 'Branding',
    client: 'Restaurant Chain',
    date: '2023',
    result: '60% Brand Recognition',
    image: portfolioBranding,
    description: 'Complete rebranding of a regional restaurant chain to modernize their image and attract younger demographics.',
    challenges: 'Outdated brand perception was limiting growth and appeal to younger audiences.',
    solution: 'Fresh visual identity with vibrant colors, modern typography, and lifestyle photography that emphasized the dining experience.',
    results: [
      '60% increase in brand recognition',
      '35% growth in 18-34 demographic',
      'Opened 8 new locations',
      'Social media following tripled'
    ]
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform Redesign',
    category: 'Web Design',
    client: 'SaaS Platform',
    date: '2023',
    result: '5x User Signups',
    image: portfolioWeb,
    description: 'UX/UI redesign of a B2B SaaS platform to improve user onboarding and reduce churn.',
    challenges: 'Complex interface was confusing new users, leading to high churn in the first month.',
    solution: 'Simplified the interface, created guided onboarding flows, and implemented progressive disclosure to reduce cognitive load.',
    results: [
      '500% increase in user signups',
      '70% reduction in first-month churn',
      'Onboarding time reduced by 60%',
      'Customer satisfaction score: 4.8/5'
    ]
  },
  {
    id: 'music-festival',
    title: 'Music Festival Promo Video',
    category: 'Video Production',
    client: 'Music Festival',
    date: '2023',
    result: '2M+ Engagement',
    image: portfolioVideo,
    description: 'High-energy promotional video for an annual music festival, designed to drive ticket sales and create buzz.',
    challenges: 'Competitive festival market required standing out with limited production budget.',
    solution: 'Created an energetic video using dynamic editing, artist interviews, and crowd footage to capture the festival atmosphere.',
    results: [
      '2M+ social media engagements',
      'Festival sold out 3 weeks early',
      '45% increase in early bird sales',
      'Video shared by major music outlets'
    ]
  },
  {
    id: 'fitness-app',
    title: 'Fitness App Social Growth',
    category: 'Social Media',
    client: 'Fitness App',
    date: '2023',
    result: '300% Growth',
    image: portfolioSocial,
    description: 'Social media strategy that transformed a fitness app from local to national recognition.',
    challenges: 'Highly competitive fitness app market with limited marketing budget.',
    solution: 'Implemented a content strategy focused on transformation stories, workout tutorials, and community building.',
    results: [
      '300% follower growth in 6 months',
      'App downloads increased 250%',
      '75% of new users from social',
      'Featured in Apple App Store'
    ]
  },
  {
    id: 'financial-services',
    title: 'Financial Services Rebrand',
    category: 'Branding',
    client: 'Financial Services',
    date: '2023',
    result: '85% Trust Score',
    image: portfolioBranding,
    description: 'Rebranding a financial services company to build trust and appeal to modern consumers.',
    challenges: 'Traditional industry perception needed modernization while maintaining credibility.',
    solution: 'Created a professional yet approachable brand identity with clear communication and transparent messaging.',
    results: [
      '85% trust score in customer surveys',
      '50% increase in new clients',
      'Reduced client inquiries by 30%',
      'Won 2 industry awards for branding'
    ]
  }
];

export const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <Reveal>
          <div className="rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Project Info */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">{project.title}</h1>
                <p className="text-xl text-muted">{project.description}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="text-muted leading-relaxed">{project.challenges}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Our Solution</h2>
                <p className="text-muted leading-relaxed">{project.solution}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Results</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="glass-panel p-6 rounded-2xl">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass-panel p-8 rounded-3xl space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-muted mb-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">Category</span>
                  </div>
                  <p className="font-semibold">{project.category}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-muted mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Year</span>
                  </div>
                  <p className="font-semibold">{project.date}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-muted mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Key Result</span>
                  </div>
                  <p className="font-semibold text-primary">{project.result}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/contact"
                className="block w-full text-center px-8 py-4 btn-gradient rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Start Your Project
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
