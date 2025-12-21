import { Mic, Camera, Monitor, Radio } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import studioCyclorama from '@/assets/studio-cyclorama.jpg';
import { Link } from 'react-router-dom';

export const Studio = () => {
  const { t, language } = useLanguage();

  const equipment = [
    {
      icon: Mic,
      title: t('studio.equipment.podcast'),
      description: {
        en: 'Professional podcast recording studio with high-end microphones and acoustics',
        uz: 'Yuqori sifatli mikrofonlar va akustika bilan professional podkast yozish studiyasi',
        ru: 'Профессиональная студия записи подкастов с микрофонами и акустикой высокого класса'
      },
    },
    {
      icon: Camera,
      title: t('studio.equipment.photo'),
      description: {
        en: 'Full photo and video production setup with professional lighting',
        uz: 'Professional yoritish bilan toʻliq foto va video ishlab chiqarish sozlamalari',
        ru: 'Полная фото- и видеопродакшн установка с профессиональным освещением'
      },
    },
    {
      icon: Monitor,
      title: t('studio.equipment.editing'),
      description: {
        en: 'Editing suites with latest software for post-production',
        uz: 'Post-ishlov berish uchun eng soʻnggi dasturlar bilan tahrirlash studiyalari',
        ru: 'Монтажные студии с новейшим программным обеспечением для постпродакшн'
      },
    },
    {
      icon: Radio,
      title: t('studio.equipment.streaming'),
      description: {
        en: 'Live streaming capabilities for events and broadcasts',
        uz: 'Tadbirlar va translyatsiyalar uchun jonli efir imkoniyatlari',
        ru: 'Возможности прямых трансляций для мероприятий и эфиров'
      },
    },
  ];

  const sectionTitles = {
    equipmentTitle: {
      en: 'State-of-the-Art Equipment',
      uz: 'Zamonaviy uskunalar',
      ru: 'Современное оборудование'
    },
    equipmentSubtitle: {
      en: 'Everything you need for professional content',
      uz: 'Professional kontent uchun kerak boʻlgan hamma narsa',
      ru: 'Всё необходимое для профессионального контента'
    },
    cyclorama: {
      en: 'Cyclorama Wall',
      uz: 'Siklorama devori',
      ru: 'Циклорама'
    },
    cycloramaDesc: {
      en: 'Professional curved wall for seamless background shots in both photo and video production.',
      uz: 'Foto va video ishlab chiqarishda uzluksiz fon suratlar uchun professional egri devor.',
      ru: 'Профессиональная изогнутая стена для бесшовного фона в фото- и видеопродакшн.'
    },
    lighting: {
      en: 'Professional Lighting',
      uz: 'Professional yoritish',
      ru: 'Профессиональное освещение'
    },
    lightingDesc: {
      en: 'Advanced lighting setups for any mood or style, from soft beauty lighting to dramatic commercial shots.',
      uz: 'Yumshoq goʻzallik yoritishidan dramatik tijorat suratlarigacha har qanday kayfiyat yoki uslub uchun ilgʻor yoritish sozlamalari.',
      ru: 'Продвинутые световые установки для любого настроения или стиля, от мягкого бьюти-освещения до драматичных коммерческих съёмок.'
    },
    booking: {
      en: 'Flexible Booking',
      uz: 'Moslashuvchan bron qilish',
      ru: 'Гибкое бронирование'
    },
    bookingDesc: {
      en: 'Hourly, half-day, or full-day bookings available. Package deals for ongoing projects.',
      uz: 'Soatlik, yarim kunlik yoki toʻliq kunlik bron qilish mumkin. Davom etayotgan loyihalar uchun paket takliflar.',
      ru: 'Доступны почасовые, полудневные или полнодневные бронирования. Пакетные предложения для текущих проектов.'
    },
    readyToCreate: {
      en: 'Ready to Create?',
      uz: 'Yaratishga tayyormisiz?',
      ru: 'Готовы творить?'
    },
    ctaText: {
      en: 'Book your studio session today and bring your creative vision to life',
      uz: 'Bugun studiya seansini band qiling va ijodiy qarashinigizni hayotga tatbiq eting',
      ru: 'Забронируйте студийную сессию сегодня и воплотите своё творческое видение в жизнь'
    }
  };

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
              <p className="text-xl text-muted-foreground">{t('studio.subtitle')}</p>
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
                alt={language === 'uz' ? 'Studiya sikloramasi' : language === 'ru' ? 'Студийная циклорама' : 'Studio Cyclorama'}
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{sectionTitles.equipmentTitle[language as 'en' | 'uz' | 'ru']}</h2>
            <p className="text-lg text-muted-foreground">{sectionTitles.equipmentSubtitle[language as 'en' | 'uz' | 'ru']}</p>
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
                <p className="text-muted-foreground text-sm">{item.description[language as 'en' | 'uz' | 'ru']}</p>
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
              <h3 className="text-2xl font-bold mb-4">{sectionTitles.cyclorama[language as 'en' | 'uz' | 'ru']}</h3>
              <p className="text-muted-foreground">
                {sectionTitles.cycloramaDesc[language as 'en' | 'uz' | 'ru']}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">{sectionTitles.lighting[language as 'en' | 'uz' | 'ru']}</h3>
              <p className="text-muted-foreground">
                {sectionTitles.lightingDesc[language as 'en' | 'uz' | 'ru']}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">{sectionTitles.booking[language as 'en' | 'uz' | 'ru']}</h3>
              <p className="text-muted-foreground">
                {sectionTitles.bookingDesc[language as 'en' | 'uz' | 'ru']}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="glass-panel rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">{sectionTitles.readyToCreate[language as 'en' | 'uz' | 'ru']}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {sectionTitles.ctaText[language as 'en' | 'uz' | 'ru']}
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
