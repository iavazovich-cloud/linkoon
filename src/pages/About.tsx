import { Target, Zap, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import teamOffice from '@/assets/team-office.jpg';

export const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: t('about.values.boldness'),
      description: 'We take creative risks and push boundaries to deliver exceptional results.',
    },
    {
      icon: Target,
      title: t('about.values.precision'),
      description: 'Every detail matters. We craft with meticulous attention and care.',
    },
    {
      icon: Globe2,
      title: t('about.values.global'),
      description: 'Rooted in Uzbekistan, thinking globally. Best of both worlds.',
    },
  ];

  const stats = [
    { value: '5+', label: t('about.stats.experience') },
    { value: '120+', label: t('about.stats.projects') },
    { value: '25', label: t('about.stats.team') },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{t('about.title')}</h1>
            <p className="text-xl text-muted">{t('about.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden">
              <img src={teamOffice} alt="Team Office" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl glass-panel aspect-square" />
            <div className="rounded-3xl glass-panel aspect-square" />
            <div className="lg:col-span-2 rounded-3xl glass-panel aspect-[2/1]" />
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted">What drives us forward</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-panel p-8 rounded-3xl text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="glass-panel rounded-3xl p-12 lg:p-20">
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted leading-relaxed">
              We exist to help businesses in Uzbekistan and beyond unlock their full potential
              through strategic marketing and creative excellence. By combining local market
              knowledge with global best practices, we deliver results that matter.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
