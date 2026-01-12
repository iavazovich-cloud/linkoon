import { Palette, Share2, Video, Megaphone, Globe, Lightbulb, Plus, Minus, Tv, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { useState } from 'react';

export const Services = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Palette,
      title: t('services.branding'),
      description: {
        en: 'Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines.',
        uz: 'Auditoriyangizga mos keladigan esda qolarli brend identifikatsiyasini yarating. Logo dizaynidan to\'liq brend qo\'llanmasigacha.',
        ru: 'Создайте запоминающуюся идентичность бренда, которая находит отклик у вашей аудитории. От дизайна логотипа до полного брендбука.'
      },
      features: {
        en: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
        uz: ['Logo dizayn', 'Brend qo\'llanmasi', 'Vizual identifikatsiya', 'Brend strategiyasi'],
        ru: ['Дизайн логотипа', 'Брендбук', 'Визуальная идентичность', 'Стратегия бренда']
      },
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop'
    },
    {
      icon: Share2,
      title: t('services.smm'),
      description: {
        en: 'Engage your audience with strategic social media campaigns. Build community and drive conversions.',
        uz: 'Strategik ijtimoiy media kampaniyalar bilan auditoriyangizni jalb qiling. Jamoa qurib, konversiyalarni oshiring.',
        ru: 'Вовлекайте аудиторию стратегическими кампаниями в соцсетях. Создавайте сообщество и увеличивайте конверсии.'
      },
      features: {
        en: ['Content Planning', 'Community Management', 'Social Ads', 'Analytics'],
        uz: ['Kontent rejalashtirish', 'Jamoa boshqaruvi', 'Ijtimoiy reklamalar', 'Analitika'],
        ru: ['Планирование контента', 'Управление сообществом', 'Реклама в соцсетях', 'Аналитика']
      },
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
    },
    {
      icon: Video,
      title: t('services.content'),
      description: {
        en: 'Professional photo and video production that tells your brand story with stunning visuals.',
        uz: 'Brendingiz hikoyasini ajoyib vizuallar bilan aytib beradigan professional foto va video ishlab chiqarish.',
        ru: 'Профессиональное фото и видео производство, которое рассказывает историю вашего бренда.'
      },
      features: {
        en: ['Photo Shoots', 'Video Production', 'Animation', 'Post-Production'],
        uz: ['Fotosessiyalar', 'Video ishlab chiqarish', 'Animatsiya', 'Post-ishlov'],
        ru: ['Фотосессии', 'Видеопроизводство', 'Анимация', 'Постпродакшн']
      },
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
    },
    {
      icon: Megaphone,
      title: t('services.advertising'),
      description: {
        en: 'Data-driven advertising campaigns across all digital platforms to maximize your ROI.',
        uz: 'ROI ni maksimal darajada oshirish uchun barcha raqamli platformalarda ma\'lumotlarga asoslangan reklama kampaniyalari.',
        ru: 'Рекламные кампании на основе данных на всех цифровых платформах для максимизации ROI.'
      },
      features: {
        en: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Campaign Strategy'],
        uz: ['Google Ads', 'Ijtimoiy tarmoq reklamalari', 'Displey reklama', 'Kampaniya strategiyasi'],
        ru: ['Google Ads', 'Реклама в соцсетях', 'Медийная реклама', 'Стратегия кампаний']
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      icon: Globe,
      title: t('services.web'),
      description: {
        en: 'Modern, responsive websites and digital products that deliver exceptional user experiences.',
        uz: 'Ajoyib foydalanuvchi tajribasini taqdim etadigan zamonaviy, responsive veb-saytlar va raqamli mahsulotlar.',
        ru: 'Современные, адаптивные сайты и цифровые продукты с исключительным пользовательским опытом.'
      },
      features: {
        en: ['Web Design', 'Web Development', 'E-commerce', 'Mobile Apps'],
        uz: ['Veb dizayn', 'Veb ishlab chiqish', 'E-tijorat', 'Mobil ilovalar'],
        ru: ['Веб-дизайн', 'Веб-разработка', 'E-commerce', 'Мобильные приложения']
      },
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop'
    },
    {
      icon: Lightbulb,
      title: t('services.strategy'),
      description: {
        en: 'Strategic marketing planning that aligns with your business goals and drives growth.',
        uz: 'Biznes maqsadlaringizga mos keladigan va o\'sishni ta\'minlaydigan strategik marketing rejalashtirish.',
        ru: 'Стратегическое планирование маркетинга, соответствующее целям вашего бизнеса.'
      },
      features: {
        en: ['Market Research', 'Marketing Plans', 'Growth Strategy', 'Consulting'],
        uz: ['Bozor tadqiqoti', 'Marketing rejalari', 'O\'sish strategiyasi', 'Konsalting'],
        ru: ['Исследование рынка', 'Маркетинговые планы', 'Стратегия роста', 'Консалтинг']
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
  ];

  const tvLineService = {
    title: {
      en: 'TV-Line Namangan',
      uz: 'TV-Line Namangan',
      ru: 'TV-Line Наманган'
    },
    description: {
      en: 'In-store advertising network with TV screens and sound in Namangan\'s busiest grocery stores. Reach shoppers when they\'re ready to buy.',
      uz: 'Namanganning eng gavjum do\'konlarida TV ekranlar va ovoz bilan do\'kon ichidagi reklama tarmog\'i. Xaridorlarga sotib olishga tayyor paytda yetib boring.',
      ru: 'Рекламная сеть в магазинах с ТВ-экранами и звуком в самых оживлённых продуктовых магазинах Намангана. Достигайте покупателей, когда они готовы покупать.'
    },
    features: {
      en: ['~25,000 monthly impressions per store', 'Sound + video ads', '50/50 revenue for partners'],
      uz: ['~25,000 oylik ko\'rishlar har do\'konda', 'Ovoz + video reklamalar', 'Hamkorlar uchun 50/50 daromad'],
      ru: ['~25,000 показов в месяц на магазин', 'Звук + видео реклама', '50/50 доход для партнёров']
    },
    cta: {
      en: 'Learn More',
      uz: 'Batafsil',
      ru: 'Подробнее'
    }
  };

  const faqs = [
    {
      question: {
        en: 'How long does a typical project take?',
        uz: 'Odatiy loyiha qancha vaqt oladi?',
        ru: 'Сколько времени занимает типичный проект?'
      },
      answer: {
        en: 'Project timelines vary based on scope and complexity. Branding projects typically take 4-6 weeks, while web development can range from 6-12 weeks. We provide detailed timelines during initial consultation.',
        uz: 'Loyiha muddatlari ko\'lam va murakkablikka qarab o\'zgaradi. Brending loyihalari odatda 4-6 hafta davom etadi, veb ishlab chiqish esa 6-12 hafta davom etishi mumkin. Dastlabki maslahat davomida batafsil jadvallarni taqdim etamiz.',
        ru: 'Сроки проектов варьируются в зависимости от объема и сложности. Брендинговые проекты обычно занимают 4-6 недель, веб-разработка — от 6 до 12 недель. Мы предоставляем детальные сроки на первой консультации.'
      }
    },
    {
      question: {
        en: 'What is your pricing structure?',
        uz: 'Narxlash tizimingiz qanday?',
        ru: 'Какова ваша структура ценообразования?'
      },
      answer: {
        en: 'We offer customized pricing based on project requirements. After understanding your needs, we provide a detailed proposal with transparent pricing. We also offer monthly retainer packages for ongoing services.',
        uz: 'Loyiha talablariga asoslangan moslashtirilgan narxlarni taklif qilamiz. Ehtiyojlaringizni tushungandan so\'ng, shaffof narxlar bilan batafsil taklif beramiz. Shuningdek, davomiy xizmatlar uchun oylik to\'lov paketlarini taklif qilamiz.',
        ru: 'Мы предлагаем индивидуальное ценообразование на основе требований проекта. После понимания ваших потребностей мы предоставляем детальное предложение с прозрачными ценами. Также предлагаем ежемесячные пакеты для постоянных услуг.'
      }
    },
    {
      question: {
        en: 'Do you work with international clients?',
        uz: 'Xalqaro mijozlar bilan ishlaysizmi?',
        ru: 'Вы работаете с международными клиентами?'
      },
      answer: {
        en: 'Yes! While based in Uzbekistan, we work with clients globally. We have experience collaborating remotely and can accommodate different time zones.',
        uz: 'Ha! O\'zbekistonda joylashgan bo\'lsak-da, dunyo bo\'ylab mijozlar bilan ishlaymiz. Masofadan turib hamkorlik qilish tajribamiz bor va turli vaqt zonalarini qo\'llab-quvvatlaymiz.',
        ru: 'Да! Хотя мы базируемся в Узбекистане, мы работаем с клиентами по всему миру. У нас есть опыт удаленного сотрудничества с учетом разных часовых поясов.'
      }
    },
    {
      question: {
        en: 'Can you help with an existing brand refresh?',
        uz: 'Mavjud brendni yangilashda yordam bera olasizmi?',
        ru: 'Можете ли вы помочь с обновлением существующего бренда?'
      },
      answer: {
        en: 'Absolutely! We specialize in both creating new brands and refreshing existing ones. We can audit your current brand and propose strategic updates.',
        uz: 'Albatta! Biz yangi brendlarni yaratish va mavjudlarini yangilashga ixtisoslashganmiz. Joriy brendingizni tahlil qilib, strategik yangilanishlarni taklif qilishimiz mumkin.',
        ru: 'Безусловно! Мы специализируемся как на создании новых брендов, так и на обновлении существующих. Мы можем провести аудит вашего бренда и предложить стратегические обновления.'
      }
    },
    {
      question: {
        en: 'What industries do you work with?',
        uz: 'Qaysi sohalarda ishlaysiz?',
        ru: 'В каких отраслях вы работаете?'
      },
      answer: {
        en: 'We work across various industries including retail, technology, hospitality, healthcare, and more. Our diverse portfolio demonstrates our ability to adapt to different market needs.',
        uz: 'Biz chakana savdo, texnologiya, mehmondo\'stlik, sog\'liqni saqlash va boshqa turli sohalarda ishlaymiz. Bizning xilma-xil portfoliomiz turli bozor ehtiyojlariga moslashish qobiliyatimizni ko\'rsatadi.',
        ru: 'Мы работаем в различных отраслях: розничная торговля, технологии, гостеприимство, здравоохранение и другие. Наше разнообразное портфолио демонстрирует способность адаптироваться к различным рыночным потребностям.'
      }
    },
  ];

  const faqTitle = {
    en: 'Frequently Asked Questions',
    uz: 'Ko\'p beriladigan savollar',
    ru: 'Часто задаваемые вопросы'
  };

  const faqSubtitle = {
    en: 'Everything you need to know',
    uz: 'Bilishingiz kerak bo\'lgan hamma narsa',
    ru: 'Всё, что вам нужно знать'
  };

  const getStarted = {
    en: 'Get Started',
    uz: 'Boshlash',
    ru: 'Начать'
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Services Grid - Compact Layout */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="glass-panel rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.description[language as 'en' | 'uz' | 'ru']}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features[language as 'en' | 'uz' | 'ru'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  {getStarted[language as 'en' | 'uz' | 'ru']}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TV-Line Featured Service */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <div className="glass-panel rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  <Tv className="w-4 h-4" />
                  <span>New Service</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {tvLineService.title[language as 'en' | 'uz' | 'ru']}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {tvLineService.description[language as 'en' | 'uz' | 'ru']}
                </p>
                <ul className="space-y-3">
                  {tvLineService.features[language as 'en' | 'uz' | 'ru'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/tv-line-namangan"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-gradient rounded-full font-semibold hover:shadow-lg transition-all group"
                >
                  {tvLineService.cta[language as 'en' | 'uz' | 'ru']}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Tv className="w-24 h-24 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{faqTitle[language as 'en' | 'uz' | 'ru']}</h2>
            <p className="text-lg text-muted-foreground">{faqSubtitle[language as 'en' | 'uz' | 'ru']}</p>
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
                  <span className="font-semibold text-lg">{faq.question[language as 'en' | 'uz' | 'ru']}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer[language as 'en' | 'uz' | 'ru']}</p>
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
