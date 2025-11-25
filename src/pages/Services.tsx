import { Palette, Share2, Video, Megaphone, Globe, Lightbulb, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { useState } from 'react';

export const Services = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Palette,
      title: t('services.branding'),
      description:
        'Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
    {
      icon: Share2,
      title: t('services.smm'),
      description:
        'Engage your audience with strategic social media campaigns. Build community and drive conversions.',
      features: ['Content Planning', 'Community Management', 'Social Ads', 'Analytics'],
    },
    {
      icon: Video,
      title: t('services.content'),
      description:
        'Professional photo and video production that tells your brand story with stunning visuals.',
      features: ['Photo Shoots', 'Video Production', 'Animation', 'Post-Production'],
    },
    {
      icon: Megaphone,
      title: t('services.advertising'),
      description:
        'Data-driven advertising campaigns across all digital platforms to maximize your ROI.',
      features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Campaign Strategy'],
    },
    {
      icon: Globe,
      title: t('services.web'),
      description:
        'Modern, responsive websites and digital products that deliver exceptional user experiences.',
      features: ['Web Design', 'Web Development', 'E-commerce', 'Mobile Apps'],
    },
    {
      icon: Lightbulb,
      title: t('services.strategy'),
      description:
        'Strategic marketing planning that aligns with your business goals and drives growth.',
      features: ['Market Research', 'Marketing Plans', 'Growth Strategy', 'Consulting'],
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. Branding projects typically take 4-6 weeks, while web development can range from 6-12 weeks. We provide detailed timelines during initial consultation.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer customized pricing based on project requirements. After understanding your needs, we provide a detailed proposal with transparent pricing. We also offer monthly retainer packages for ongoing services.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes! While based in Uzbekistan, we work with clients globally. We have experience collaborating remotely and can accommodate different time zones.',
    },
    {
      question: 'Can you help with an existing brand refresh?',
      answer:
        'Absolutely! We specialize in both creating new brands and refreshing existing ones. We can audit your current brand and propose strategic updates.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work across various industries including retail, technology, hospitality, healthcare, and more. Our diverse portfolio demonstrates our ability to adapt to different market needs.',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted">{t('services.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Services Details */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-foreground" />
                  </div>
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square glass-panel rounded-3xl" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted">Everything you need to know</p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="glass-panel rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-muted" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};
