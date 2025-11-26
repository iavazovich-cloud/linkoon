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
    return (saved as Language) || 'en';
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
      title: 'Let\'s Talk',
      subtitle: 'Start your project today',
      address: 'Namangan, Uzbekistan',
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email Address',
        interest: 'I\'m interested in',
        message: 'Tell us about your project',
        submit: 'Send Message',
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
    }
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
        submit: 'Xabar yuborish',
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
      brand: 'O\'zbekistondagi premium marketing agentligi',
      services: 'Xizmatlar',
      company: 'Kompaniya',
      rights: 'Barcha huquqlar himoyalangan'
    }
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
        submit: 'Отправить сообщение',
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
    }
  }
};
