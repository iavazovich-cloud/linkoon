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
  const [language, setLanguageState] = useState<Language>('uz');

  useEffect(() => {
    // Only access localStorage on the client side (SSR-safe)
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'uz', 'ru'].includes(saved)) {
      setLanguageState(saved as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

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
    blog: {
      title: 'Marketing Insights & Tips',
      subtitle: 'Expert advice for growing your business in Uzbekistan',
      readMore: 'Read More',
      backToBlog: 'Back to Blog',
      sectionTitle: 'From Our Blog',
      sectionSubtitle: 'Expert insights and marketing tips for your business',
      viewAll: 'View All Articles'
    },
    home: {
      stats: {
        visitors: 'Visitor Growth',
        monthly: 'Monthly active users',
        projects: 'Projects',
        clients: 'Clients',
        years: 'Years',
        satisfaction: 'Satisfaction'
      },
      viewWork: 'View Work',
      servicesHeading: 'Charting your path to',
      servicesHighlight: 'marketing mastery',
      viewAllProjects: 'View All Projects',
      ctaTitle: 'Interested?',
      ctaHighlight: 'Get in Touch',
      ctaDescription: 'We offer the best opportunities for your business growth',
      ctaButton: 'Schedule a call'
    },
    hero: {
      badge: 'SEO & Website Development',
      title: 'Grow your business in Uzbekistan with',
      subtitle: 'LinkOn',
      description: 'Professional website development and SEO services to rank high on Google and ChatGPT. Get a free consultation!',
      cta: 'Free Consultation'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive marketing solutions tailored to your needs',
      branding: 'Branding & Identity',
      smm: 'Social Media Marketing',
      content: 'Content Production',
      advertising: 'Digital Advertising',
      web: 'Web & Digital',
      strategy: 'Marketing Strategy',
      learnMore: 'Learn more',
      bookCall: 'Book a call with us'
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
      title: 'Let\'s Talk',
      subtitle: 'Start your project today',
      address: 'Namangan, Uzbekistan',
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email Address',
        interest: 'I\'m interested in',
        message: 'Tell us about your project',
        optional: 'optional',
        messagePlaceholder: 'Tell us about your project...',
        submit: 'Send Message',
        successMessage: 'Message sent! We\'ll get back to you soon.',
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
      brand: 'SEO & Website Development across Uzbekistan',
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
    hero: {
      badge: 'SEO & Veb-sayt yaratish',
      title: "O'zbekistonda biznesingizni o'stiring",
      subtitle: 'LinkOn',
      description: "Professional veb-sayt yaratish va SEO xizmatlari orqali Google'da va ChatGPT'da yuqori o'rinlarni egallang. Bepul konsultatsiya oling!",
      cta: 'Bepul konsultatsiya'
    },
    services: {
      title: 'Xizmatlarimiz',
      subtitle: 'Sizning ehtiyojlaringizga moslashtirilgan marketing yechimlari',
      branding: 'Brending va identifikatsiya',
      smm: 'Ijtimoiy tarmoqlar marketingi',
      content: 'Kontent ishlab chiqarish',
      advertising: 'Raqamli reklama',
      web: 'Veb va raqamli',
      strategy: 'Marketing strategiyasi',
      learnMore: 'Batafsil',
      bookCall: 'Biz bilan bog\'laning'
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
      brand: "O'zbekiston bo'ylab SEO va veb-sayt xizmatlari",
      services: 'Xizmatlar',
      company: 'Kompaniya',
      rights: 'Barcha huquqlar himoyalangan'
    },
    blog: {
      title: 'Marketing maslahatlari va tushunchalar',
      subtitle: 'O\'zbekistonda biznesingizni o\'stirish bo\'yicha ekspert maslahatlari',
      readMore: 'Batafsil o\'qish',
      backToBlog: 'Blogga qaytish',
      sectionTitle: 'Blogimizdan',
      sectionSubtitle: 'Biznesingiz uchun ekspert maslahatlar va marketing sirlari',
      viewAll: 'Barcha maqolalar'
    },
    home: {
      stats: {
        visitors: 'Tashriflar o\'sishi',
        monthly: 'Oylik faol foydalanuvchilar',
        projects: 'Loyihalar',
        clients: 'Mijozlar',
        years: 'Yillar',
        satisfaction: 'Mamnuniyat'
      },
      viewWork: 'Ishlarni ko\'rish',
      servicesHeading: 'Marketing muvaffaqiyatiga',
      servicesHighlight: 'yo\'lingizni chizing',
      viewAllProjects: 'Barcha loyihalar',
      ctaTitle: 'Qiziqyapsizmi?',
      ctaHighlight: 'Bog\'laning',
      ctaDescription: 'Biznesingiz o\'sishi uchun eng yaxshi imkoniyatlarni taklif qilamiz',
      ctaButton: 'Qo\'ng\'iroq rejalashtirish'
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
    hero: {
      badge: 'SEO & Создание сайтов',
      title: 'Развивайте бизнес в Узбекистане с',
      subtitle: 'LinkOn',
      description: 'Профессиональное создание сайтов и SEO для высоких позиций в Google и ChatGPT. Получите бесплатную консультацию!',
      cta: 'Бесплатная консультация'
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные маркетинговые решения для ваших нужд',
      branding: 'Брендинг и идентичность',
      smm: 'Маркетинг в социальных сетях',
      content: 'Производство контента',
      advertising: 'Цифровая реклама',
      web: 'Веб и цифровые решения',
      strategy: 'Маркетинговая стратегия',
      learnMore: 'Подробнее',
      bookCall: 'Связаться с нами'
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
      brand: 'SEO и создание сайтов по всему Узбекистану',
      services: 'Услуги',
      company: 'Компания',
      rights: 'Все права защищены'
    },
    blog: {
      title: 'Маркетинговые инсайты и советы',
      subtitle: 'Экспертные советы по развитию вашего бизнеса в Узбекистане',
      readMore: 'Читать далее',
      backToBlog: 'Вернуться к блогу',
      sectionTitle: 'Из нашего блога',
      sectionSubtitle: 'Экспертные советы и маркетинговые идеи для вашего бизнеса',
      viewAll: 'Все статьи'
    },
    home: {
      stats: {
        visitors: 'Рост посетителей',
        monthly: 'Ежемесячные активные пользователи',
        projects: 'Проектов',
        clients: 'Клиентов',
        years: 'Лет',
        satisfaction: 'Удовлетворённость'
      },
      viewWork: 'Смотреть работы',
      servicesHeading: 'Проложите путь к',
      servicesHighlight: 'маркетинговому успеху',
      viewAllProjects: 'Все проекты',
      ctaTitle: 'Заинтересованы?',
      ctaHighlight: 'Свяжитесь с нами',
      ctaDescription: 'Мы предлагаем лучшие возможности для роста вашего бизнеса',
      ctaButton: 'Запланировать звонок'
    },
    language: 'ru'
  }
};
