import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations
const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      studio: 'Studio',
      blog: 'Blog',
      contact: 'Contact',
      startProject: 'Start Project'
    },
    home: {
      rating: '5 Stars • 50+ Reviews',
      viewWork: 'View Work',
      visitorGrowth: 'Visitor Growth',
      monthlyUsers: 'Monthly active users',
      learnMore: 'Learn more',
      bookCall: 'Book a call with us',
      featuredWork: 'Featured Work',
      viewAllProjects: 'View All Projects',
      stats: {
        projects: 'Projects',
        clients: 'Clients',
        years: 'Years',
        satisfaction: 'Satisfaction'
      },
      services: {
        heading: 'Charting your path to',
        headingHighlight: 'marketing mastery',
        brandingDesc: 'Logo, brand identity, visual design',
        smmDesc: 'Social media management & growth',
        contentDesc: 'Video production & photography',
        advertisingDesc: 'Digital ads & campaigns',
        webDesc: 'Website design & development',
        strategyDesc: 'Marketing strategy & consulting'
      },
      project1: {
        title: 'Luxury Brand Campaign',
        result: '40% Increase in Sales'
      },
      project2: {
        title: 'E-commerce Platform',
        result: '3x Revenue Growth'
      },
      whyUs: {
        badge: 'Why Choose Us?',
        title: 'The Best Marketing Agency in Namangan',
        subtitle: 'We understand the local market and work to global standards',
        reason1: {
          title: 'Results-Driven',
          desc: 'Clear goals and measurable results in every project'
        },
        reason2: {
          title: 'Creative Solutions',
          desc: 'Modern design and innovative marketing strategies'
        },
        reason3: {
          title: 'Fast & Quality',
          desc: 'Professional results within set deadlines'
        }
      },
      cta: {
        badge: 'Partnership',
        title: 'Interested?',
        highlight: 'Get in Touch',
        description: 'We offer the best opportunities for your business growth',
        button: 'Schedule a call'
      }
    },
    blog: {
      title: 'Marketing Insights & Tips',
      subtitle: 'Expert advice for growing your business in Uzbekistan',
      readMore: 'Read More',
      backToBlog: 'Back to Blog'
    },
    hero: {
      badge: 'Leading Marketing Agency in Uzbekistan',
      title: 'Unlock Premium Marketing Excellence',
      subtitle: 'Beyond Your Expectations',
      description: 'Transform your brand with innovative marketing strategies combining local market expertise and global industry standards.',
      cta: 'Start Your Project'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive marketing solutions tailored to your needs',
      branding: 'Branding & Identity',
      smm: 'Social Media Marketing',
      content: 'Content Production',
      advertising: 'Digital Advertising',
      web: 'Web & Digital',
      strategy: 'Marketing Strategy'
    },
    portfolio: {
      title: 'Featured Work',
      subtitle: 'Projects that drive results',
      all: 'All',
      branding: 'Branding',
      webDesign: 'Web',
      video: 'Video',
      social: 'Social',
      strategyTag: 'Strategy'
    },
    studio: {
      badge: 'Production Facilities',
      title: 'LinkOn Studio',
      subtitle: 'Professional content creation space',
      description: 'State-of-the-art production facilities for all your content needs',
      cta: 'Book Studio Time',
      equipment: {
        podcast: 'Podcast Station',
        photo: 'Photo & Video',
        editing: 'Editing Suite',
        streaming: 'Live Streaming'
      }
    },
    about: {
      title: 'We are LinkOn',
      subtitle: 'Your strategic partner in growth',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        team: 'Team Members'
      },
      values: {
        boldness: 'Boldness',
        precision: 'Precision',
        global: 'Local Soul, Global Mind'
      }
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Start your project today',
      address: 'Namangan, Uzbekistan',
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email Address',
        interest: "I'm interested in",
        message: 'Tell us about your project',
        optional: 'optional',
        messagePlaceholder: 'Tell us about your project...',
        submit: 'Send Message',
        successMessage: "Message sent! We'll get back to you soon.",
        errorMessage: 'Failed to send message. Please try again.',
        joinTelegram: 'Join our Telegram channel for updates',
        options: {
          branding: 'Branding',
          smm: 'Social Media',
          content: 'Content Production',
          web: 'Web Development',
          strategy: 'Marketing Strategy'
        }
      }
    },
    footer: {
      brand: 'Premium marketing agency in Uzbekistan',
      services: 'Services',
      company: 'Company',
      rights: 'All rights reserved'
    },
    language: 'en'
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      services: 'Xizmatlar',
      portfolio: 'Portfolio',
      about: 'Biz haqimizda',
      studio: 'Studiya',
      blog: 'Blog',
      contact: 'Aloqa',
      startProject: 'Loyihani boshlash'
    },
    home: {
      rating: '5 yulduz • 50+ sharhlar',
      viewWork: 'Ishlarni ko\'rish',
      visitorGrowth: 'Tashrif buyuruvchilar o\'sishi',
      monthlyUsers: 'Oylik faol foydalanuvchilar',
      learnMore: 'Batafsil',
      bookCall: 'Biz bilan bog\'laning',
      featuredWork: 'Taniqli loyihalarimiz',
      viewAllProjects: 'Barcha loyihalarni ko\'rish',
      stats: {
        projects: 'Loyihalar',
        clients: 'Mijozlar',
        years: 'Yillik tajriba',
        satisfaction: 'Mamnuniyat'
      },
      services: {
        heading: 'Marketing muvaffaqiyatiga',
        headingHighlight: 'yo\'l ochish',
        brandingDesc: 'Logo, brend identifikatsiyasi, vizual dizayn',
        smmDesc: 'Ijtimoiy tarmoqlarni boshqarish va rivojlantirish',
        contentDesc: 'Video ishlab chiqarish va fotografiya',
        advertisingDesc: 'Raqamli reklamalar va kampaniyalar',
        webDesc: 'Veb-sayt dizayni va ishlab chiqish',
        strategyDesc: 'Marketing strategiyasi va konsalting'
      },
      project1: {
        title: 'Brending kampaniyasi',
        result: 'Sotuvlar 40% oshdi'
      },
      project2: {
        title: 'E-commerce platformasi',
        result: 'Daromad 3 barobar oshdi'
      },
      whyUs: {
        badge: 'Nega biz?',
        title: 'Namangandagi eng yaxshi marketing agentligi',
        subtitle: 'Mahalliy bozorni yaxshi bilamiz va global standartlarda ishlaymiz',
        reason1: {
          title: 'Natijaga yo\'naltirilgan',
          desc: 'Har bir loyihada aniq maqsadlar va o\'lchanadigan natijalar'
        },
        reason2: {
          title: 'Kreativ yechimlar',
          desc: 'Zamonaviy dizayn va innovatsion marketing strategiyalari'
        },
        reason3: {
          title: 'Tez va sifatli',
          desc: 'Belgilangan muddatlarda professional natijalar'
        }
      },
      cta: {
        badge: 'Hamkorlik',
        title: 'Qiziqyapsizmi?',
        highlight: 'Bog\'laning',
        description: 'Biznesingizni rivojlantirish uchun eng yaxshi imkoniyatlarni taklif etamiz',
        button: 'Qo\'ng\'iroq rejalashtirish'
      }
    },
    hero: {
      badge: 'O\'zbekistonning yetakchi marketing agentligi',
      title: 'Premium marketing xizmatlaridan',
      subtitle: 'Foydalaning',
      description: 'Mahalliy bozor tajribasi va global standartlarni birlashtiradigan innovatsion marketing strategiyalari bilan brendingizni yangi bosqichga olib chiqing.',
      cta: 'Loyihani boshlash'
    },
    services: {
      title: 'Xizmatlarimiz',
      subtitle: 'Sizning ehtiyojlaringizga moslashtirilgan marketing yechimlari',
      branding: 'Brending va identifikatsiya',
      smm: 'Ijtimoiy tarmoqlar marketingi',
      content: 'Kontent ishlab chiqarish',
      advertising: 'Raqamli reklama',
      web: 'Veb va raqamli',
      strategy: 'Marketing strategiyasi'
    },
    portfolio: {
      title: 'Taniqli ishlar',
      subtitle: 'Natijaga olib keladigan loyihalar',
      all: 'Barchasi',
      branding: 'Brending',
      webDesign: 'Veb',
      video: 'Video',
      social: 'Ijtimoiy',
      strategyTag: 'Strategiya'
    },
    studio: {
      badge: 'Ishlab chiqarish ob\'ektlari',
      title: 'LinkOn Studiya',
      subtitle: 'Professional kontent yaratish maydoni',
      description: 'Barcha kontent ehtiyojlaringiz uchun zamonaviy ishlab chiqarish ob\'ektlari',
      cta: 'Studiya vaqtini band qilish',
      equipment: {
        podcast: 'Podcast studiyasi',
        photo: 'Foto va video',
        editing: 'Montaj studiyasi',
        streaming: 'Jonli efir'
      }
    },
    about: {
      title: 'Biz LinkOn',
      subtitle: 'O\'sishingizda strategik hamkoringiz',
      stats: {
        experience: 'Yillik tajriba',
        projects: 'Yakunlangan loyihalar',
        team: 'Jamoa a\'zolari'
      },
      values: {
        boldness: 'Dadillik',
        precision: 'Aniqlik',
        global: 'Mahalliy ruh, global aql'
      }
    },
    contact: {
      title: 'Gaplashamiz',
      subtitle: 'Bugun loyihangizni boshlang',
      address: 'Namangan, O\'zbekiston',
      form: {
        name: 'Ismingiz',
        phone: 'Telefon raqami',
        email: 'Email manzil',
        interest: 'Men qiziqaman',
        message: 'Loyihangiz haqida bizga ayting',
        optional: 'ixtiyoriy',
        messagePlaceholder: 'Loyihangiz haqida bizga ayting...',
        submit: 'Xabar yuborish',
        successMessage: 'Xabar yuborildi! Tez orada sizga javob beramiz.',
        errorMessage: 'Xabar yuborishda xatolik. Iltimos, qayta urinib ko\'ring.',
        joinTelegram: 'Yangiliklar uchun Telegram kanalimizga qo\'shiling',
        options: {
          branding: 'Brending',
          smm: 'Ijtimoiy tarmoqlar',
          content: 'Kontent ishlab chiqarish',
          web: 'Veb ishlanma',
          strategy: 'Marketing strategiyasi'
        }
      }
    },
    footer: {
      brand: 'O\'zbekistondagi premium marketing agentligidir',
      services: 'Xizmatlar',
      company: 'Kompaniya',
      rights: 'Barcha huquqlar himoyalangan'
    },
    blog: {
      title: 'Marketing maslahatlari va tushunchalar',
      subtitle: 'O\'zbekistonda biznesingizni o\'stirish bo\'yicha ekspert maslahatlari',
      readMore: 'Batafsil o\'qish',
      backToBlog: 'Blogga qaytish'
    },
    language: 'uz'
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      portfolio: 'Портфолио',
      about: 'О нас',
      studio: 'Студия',
      blog: 'Блог',
      contact: 'Контакты',
      startProject: 'Начать проект'
    },
    home: {
      rating: '5 звезд • 50+ отзывов',
      viewWork: 'Смотреть работы',
      visitorGrowth: 'Рост посетителей',
      monthlyUsers: 'Ежемесячные активные пользователи',
      learnMore: 'Подробнее',
      bookCall: 'Связаться с нами',
      featuredWork: 'Избранные работы',
      viewAllProjects: 'Все проекты',
      stats: {
        projects: 'Проекты',
        clients: 'Клиенты',
        years: 'Лет опыта',
        satisfaction: 'Удовлетворенность'
      },
      services: {
        heading: 'Путь к',
        headingHighlight: 'маркетинговому успеху',
        brandingDesc: 'Логотип, фирменный стиль, визуальный дизайн',
        smmDesc: 'Управление соцсетями и продвижение',
        contentDesc: 'Видеопроизводство и фотография',
        advertisingDesc: 'Цифровая реклама и кампании',
        webDesc: 'Дизайн и разработка сайтов',
        strategyDesc: 'Маркетинговая стратегия и консалтинг'
      },
      project1: {
        title: 'Брендинг кампания',
        result: 'Рост продаж на 40%'
      },
      project2: {
        title: 'E-commerce платформа',
        result: 'Рост дохода в 3 раза'
      },
      whyUs: {
        badge: 'Почему мы?',
        title: 'Лучшее маркетинговое агентство в Намангане',
        subtitle: 'Мы понимаем местный рынок и работаем по глобальным стандартам',
        reason1: {
          title: 'Ориентация на результат',
          desc: 'Четкие цели и измеримые результаты в каждом проекте'
        },
        reason2: {
          title: 'Креативные решения',
          desc: 'Современный дизайн и инновационные стратегии'
        },
        reason3: {
          title: 'Быстро и качественно',
          desc: 'Профессиональные результаты в срок'
        }
      },
      cta: {
        badge: 'Партнерство',
        title: 'Заинтересованы?',
        highlight: 'Свяжитесь с нами',
        description: 'Мы предлагаем лучшие возможности для роста вашего бизнеса',
        button: 'Запланировать звонок'
      }
    },
    hero: {
      badge: 'Ведущее маркетинговое агентство в Узбекистане',
      title: 'Премиум маркетинг',
      subtitle: 'Превосходящий ожидания',
      description: 'Трансформируйте ваш бренд с помощью инновационных маркетинговых стратегий, сочетающих экспертизу местного рынка и глобальные отраслевые стандарты.',
      cta: 'Начать проект'
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные маркетинговые решения для ваших нужд',
      branding: 'Брендинг и идентичность',
      smm: 'Маркетинг в социальных сетях',
      content: 'Производство контента',
      advertising: 'Цифровая реклама',
      web: 'Веб и цифровые решения',
      strategy: 'Маркетинговая стратегия'
    },
    portfolio: {
      title: 'Избранные работы',
      subtitle: 'Проекты, которые приносят результаты',
      all: 'Все',
      branding: 'Брендинг',
      webDesign: 'Веб',
      video: 'Видео',
      social: 'Социальные',
      strategyTag: 'Стратегия'
    },
    studio: {
      badge: 'Производственные мощности',
      title: 'LinkOn Студия',
      subtitle: 'Профессиональное пространство для создания контента',
      description: 'Современные производственные мощности для всех ваших потребностей в контенте',
      cta: 'Забронировать студию',
      equipment: {
        podcast: 'Подкаст-студия',
        photo: 'Фото и видео',
        editing: 'Монтажная',
        streaming: 'Прямые трансляции'
      }
    },
    about: {
      title: 'Мы LinkOn',
      subtitle: 'Ваш стратегический партнер в росте',
      stats: {
        experience: 'Лет опыта',
        projects: 'Завершенных проектов',
        team: 'Членов команды'
      },
      values: {
        boldness: 'Смелость',
        precision: 'Точность',
        global: 'Местная душа, глобальный разум'
      }
    },
    contact: {
      title: 'Давайте поговорим',
      subtitle: 'Начните свой проект сегодня',
      address: 'Наманган, Узбекистан',
      form: {
        name: 'Ваше имя',
        phone: 'Номер телефона',
        email: 'Email адрес',
        interest: 'Меня интересует',
        message: 'Расскажите о вашем проекте',
        optional: 'необязательно',
        messagePlaceholder: 'Расскажите о вашем проекте...',
        submit: 'Отправить сообщение',
        successMessage: 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
        errorMessage: 'Не удалось отправить сообщение. Пожалуйста, попробуйте снова.',
        joinTelegram: 'Присоединяйтесь к нашему Telegram каналу для обновлений',
        options: {
          branding: 'Брендинг',
          smm: 'Социальные сети',
          content: 'Производство контента',
          web: 'Веб-разработка',
          strategy: 'Маркетинговая стратегия'
        }
      }
    },
    footer: {
      brand: 'Премиум маркетинговое агентство в Узбекистане',
      services: 'Услуги',
      company: 'Компания',
      rights: 'Все права защищены'
    },
    blog: {
      title: 'Маркетинговые инсайты и советы',
      subtitle: 'Экспертные советы по развитию вашего бизнеса в Узбекистане',
      readMore: 'Читать далее',
      backToBlog: 'Вернуться к блогу'
    },
    language: 'ru'
  }
};
