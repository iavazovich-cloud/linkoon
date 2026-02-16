import { Target, Zap, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { usePageMeta } from '@/hooks/usePageMeta';
import teamOffice from '@/assets/team-office.jpg';
import teamCollab from '@/assets/team-collab.jpg';
import studioSpace from '@/assets/studio-space.jpg';
import teamBrainstorm from '@/assets/team-brainstorm.jpg';
import workspaceWide from '@/assets/workspace-wide.jpg';

export const About = () => {
  const { t, language } = useLanguage();
  usePageMeta(
    'Biz haqimizda — LinkOn Marketing Agentligi',
    'LinkOn jamoasi haqida: tajriba, qadriyatlar va missiyamiz. Namangandagi professional marketing xizmatlari.'
  );

  const values = [
    {
      icon: Zap,
      title: t('about.values.boldness'),
      description: {
        en: 'We take creative risks and push boundaries to deliver exceptional results.',
        uz: 'Biz ijodiy xavf-xatar qilamiz va ajoyib natijalarga erishish uchun chegaralarni kengaytiramiz.',
        ru: 'Мы идём на творческий риск и раздвигаем границы для достижения исключительных результатов.'
      },
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
    },
    {
      icon: Target,
      title: t('about.values.precision'),
      description: {
        en: 'Every detail matters. We craft with meticulous attention and care.',
        uz: "Har bir tafsilot muhim. Biz puxta e'tibor va g'amxo'rlik bilan ishlaymiz.",
        ru: 'Каждая деталь важна. Мы работаем с тщательным вниманием и заботой.'
      },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      icon: Globe2,
      title: t('about.values.global'),
      description: {
        en: 'Rooted in Uzbekistan, thinking globally. Best of both worlds.',
        uz: "O'zbekistonda ildiz otgan, global fikrlaydigan. Ikkala dunyoning eng yaxshisi.",
        ru: 'Корни в Узбекистане, мышление глобальное. Лучшее из обоих миров.'
      },
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop'
    },
  ];

  const stats = [
    { value: '5+', label: t('about.stats.experience') },
    { value: '120+', label: t('about.stats.projects') },
    { value: '25', label: t('about.stats.team') },
  ];

  const sectionTitles = {
    values: {
      en: 'Our Values',
      uz: 'Bizning qadriyatlarimiz',
      ru: 'Наши ценности'
    },
    valuesSubtitle: {
      en: 'What drives us forward',
      uz: 'Bizni oldinga yetaklovchi narsa',
      ru: 'Что движет нами вперёд'
    },
    mission: {
      en: 'Our Mission',
      uz: 'Bizning missiyamiz',
      ru: 'Наша миссия'
    },
    missionText: {
      en: 'We exist to help businesses in Uzbekistan and beyond unlock their full potential through strategic marketing and creative excellence. By combining local market knowledge with global best practices, we deliver results that matter.',
      uz: "Biz O'zbekiston va undan tashqaridagi bizneslarning strategik marketing va ijodiy mukammallik orqali to'liq salohiyatini ochishga yordam berish uchun mavjudmiz. Mahalliy bozor bilimlarini global eng yaxshi amaliyotlar bilan birlashtirib, muhim natijalarni taqdim etamiz.",
      ru: 'Мы существуем, чтобы помочь бизнесу в Узбекистане и за его пределами раскрыть свой полный потенциал через стратегический маркетинг и творческое совершенство. Объединяя знание местного рынка с мировыми лучшими практиками, мы достигаем значимых результатов.'
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden">
              <img src={teamOffice} alt={language === 'uz' ? 'Jamoa ofisi' : language === 'ru' ? 'Офис команды' : 'Team Office'} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={studioSpace} alt={language === 'uz' ? 'Studiya maydoni' : language === 'ru' ? 'Студийное пространство' : 'Studio Space'} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={teamBrainstorm} alt={language === 'uz' ? 'Jamoa brainstormi' : language === 'ru' ? 'Мозговой штурм команды' : 'Team Brainstorming'} className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-2 rounded-3xl overflow-hidden aspect-[2/1]">
              <img src={workspaceWide} alt={language === 'uz' ? 'Ijodiy ish joyi' : language === 'ru' ? 'Творческое рабочее пространство' : 'Creative Workspace'} className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{sectionTitles.values[language as 'en' | 'uz' | 'ru']}</h2>
            <p className="text-lg text-muted-foreground">{sectionTitles.valuesSubtitle[language as 'en' | 'uz' | 'ru']}</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-panel rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center space-y-4 flex-1 flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description[language as 'en' | 'uz' | 'ru']}</p>
                </div>
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
                  <div className="text-muted-foreground">{stat.label}</div>
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
            <h2 className="text-4xl lg:text-5xl font-bold">{sectionTitles.mission[language as 'en' | 'uz' | 'ru']}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {sectionTitles.missionText[language as 'en' | 'uz' | 'ru']}
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
