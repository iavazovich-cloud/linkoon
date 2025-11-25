import { Mic, Camera, Monitor, Radio } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import studioCyclorama from '@/assets/studio-cyclorama.jpg';
import { Link } from 'react-router-dom';

export const Studio = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      icon: Mic,
      title: t('studio.equipment.podcast'),
      description: 'Professional podcast recording studio with high-end microphones and acoustics',
    },
    {
      icon: Camera,
      title: t('studio.equipment.photo'),
      description: 'Full photo and video production setup with professional lighting',
    },
    {
      icon: Monitor,
      title: t('studio.equipment.editing'),
      description: 'Editing suites with latest software for post-production',
    },
    {
      icon: Radio,
      title: t('studio.equipment.streaming'),
      description: 'Live streaming capabilities for events and broadcasts',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-block glass-panel px-4 py-2 rounded-full">
                <span className="text-sm gradient-text font-medium">{t('studio.badge')}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">{t('studio.title')}</h1>
              <p className="text-xl text-muted">{t('studio.subtitle')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-semibold"
              >
                {t('studio.cta')}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={studioCyclorama}
                alt="Studio Cyclorama"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">State-of-the-Art Equipment</h2>
            <p className="text-lg text-muted">Everything you need for professional content</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-panel p-8 rounded-3xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Cyclorama Wall</h3>
              <p className="text-muted">
                Professional curved wall for seamless background shots in both photo and video
                production.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Professional Lighting</h3>
              <p className="text-muted">
                Advanced lighting setups for any mood or style, from soft beauty lighting to
                dramatic commercial shots.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Flexible Booking</h3>
              <p className="text-muted">
                Hourly, half-day, or full-day bookings available. Package deals for ongoing
                projects.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="glass-panel rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Create?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Book your studio session today and bring your creative vision to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-semibold text-lg"
            >
              {t('studio.cta')}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
