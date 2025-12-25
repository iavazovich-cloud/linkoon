import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, TrendingUp, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioSocial from '@/assets/portfolio-social.jpg';
import portfolioKofemofe from '@/assets/portfolio-kofemofe.png';

const projectsData = [
  {
    id: 'kofe-mofe',
    title: {
      en: 'Kofe Mofe - Website & Strategic Partnership',
      uz: 'Kofe Mofe - Veb-sayt va Strategik Hamkorlik',
      ru: 'Кофе Мофе - Веб-сайт и Стратегическое Партнёрство'
    },
    category: {
      en: 'Web Design',
      uz: 'Veb-dizayn',
      ru: 'Веб-дизайн'
    },
    client: 'Kofe Mofe',
    date: '2024',
    website: 'https://kofemofe.uz',
    result: {
      en: 'Strategic Partnership',
      uz: 'Strategik hamkorlik',
      ru: 'Стратегическое партнёрство'
    },
    image: portfolioKofemofe,
    description: {
      en: 'Complete website development for Kofe Mofe coffee shop at kofemofe.uz, establishing a strategic partnership for ongoing marketing, scaling, branding, and PR services.',
      uz: "Kofe Mofe qahvaxonasi uchun kofemofe.uz saytida to'liq veb-sayt yaratish, marketing, biznesni kengaytirish, brending va PR xizmatlarini davom ettirish uchun strategik hamkorlik o'rnatish.",
      ru: 'Полная разработка веб-сайта для кофейни Кофе Мофе на kofemofe.uz, установление стратегического партнёрства для постоянных маркетинговых, масштабирующих, брендинговых и PR-услуг.'
    },
    challenges: {
      en: 'The client needed a modern, appealing website that reflects their unique coffee culture while establishing a strong digital presence in the local market.',
      uz: "Mijozga o'ziga xos qahva madaniyatini aks ettiruvchi zamonaviy, jozibali veb-sayt va mahalliy bozorda kuchli raqamli mavjudlik kerak edi.",
      ru: 'Клиенту был нужен современный, привлекательный веб-сайт, отражающий их уникальную кофейную культуру, при этом создавая сильное цифровое присутствие на местном рынке.'
    },
    solution: {
      en: 'We developed a visually stunning website at kofemofe.uz with modern design, optimized for conversions, and established an ongoing strategic partnership for comprehensive marketing support. Visit the live site at kofemofe.uz to see the results.',
      uz: "Biz kofemofe.uz saytida zamonaviy dizaynli, konversiyaga optimallashtirilgan ajoyib veb-sayt yaratdik va keng qamrovli marketing qo'llab-quvvatlash uchun doimiy strategik hamkorlik o'rnatdik. Natijalarni ko'rish uchun kofemofe.uz saytiga tashrif buyuring.",
      ru: 'Мы разработали визуально привлекательный веб-сайт kofemofe.uz с современным дизайном, оптимизированный для конверсий, и установили постоянное стратегическое партнёрство для комплексной маркетинговой поддержки. Посетите kofemofe.uz, чтобы увидеть результаты.'
    },
    results: {
      en: [
        'Modern responsive website at kofemofe.uz',
        'Strategic partnership established',
        'Ongoing marketing & branding support',
        'Business scaling & PR services'
      ],
      uz: [
        'kofemofe.uz da zamonaviy responsive veb-sayt',
        "Strategik hamkorlik o'rnatildi",
        "Doimiy marketing va brending qo'llab-quvvatlashi",
        "Biznesni kengaytirish va PR xizmatlari"
      ],
      ru: [
        'Современный адаптивный веб-сайт kofemofe.uz',
        'Установлено стратегическое партнёрство',
        'Постоянная маркетинговая и брендинговая поддержка',
        'Услуги по масштабированию бизнеса и PR'
      ]
    }
  },
  {
    id: 'luxury-cosmetics',
    title: {
      en: 'Luxury Cosmetics Brand Campaign',
      uz: 'Hashamatli kosmetika brendi kampaniyasi',
      ru: 'Кампания люксового косметического бренда'
    },
    category: {
      en: 'Branding',
      uz: 'Brending',
      ru: 'Брендинг'
    },
    client: 'Luxury Cosmetics',
    date: '2024',
    result: {
      en: '40% Increase in Sales',
      uz: "Sotuvlar 40% ga oshdi",
      ru: 'Рост продаж на 40%'
    },
    image: portfolioBranding,
    description: {
      en: 'A comprehensive branding campaign for a luxury cosmetics brand targeting high-end consumers. We developed a sophisticated visual identity that resonated with the premium market segment.',
      uz: "Yuqori darajadagi iste'molchilarga mo'ljallangan hashamatli kosmetika brendi uchun keng qamrovli brending kampaniyasi. Biz premium bozor segmentiga mos keladigan murakkab vizual identifikatsiya ishlab chiqdik.",
      ru: 'Комплексная брендинговая кампания для люксового косметического бренда, ориентированного на премиум-потребителей. Мы разработали изысканную визуальную идентичность для премиального сегмента рынка.'
    },
    challenges: {
      en: 'The client needed to differentiate in a crowded luxury market while maintaining an approachable yet exclusive brand image.',
      uz: "Mijoz gavjum hashamat bozorida farqlanishi kerak edi, shu bilan birga qulay, ammo eksklyuziv brend imidjini saqlab qolishi kerak edi.",
      ru: 'Клиенту необходимо было выделиться на переполненном рынке люксовых товаров, сохраняя при этом доступный, но эксклюзивный имидж бренда.'
    },
    solution: {
      en: 'We created a minimalist yet luxurious brand identity with gold accents, elegant typography, and high-quality product photography that emphasized the premium nature of the products.',
      uz: "Biz oltin aksent, nafis tipografiya va mahsulotlarning yuqori sifatli suratlarini o'z ichiga olgan minimalist, ammo hashamatli brend identifikatsiyasini yaratdik.",
      ru: 'Мы создали минималистичную, но роскошную идентичность бренда с золотыми акцентами, элегантной типографикой и высококачественной продуктовой фотографией.'
    },
    results: {
      en: [
        '40% increase in overall sales',
        '65% boost in social media engagement',
        '50+ press mentions in beauty publications',
        'Expanded to 15 new retail locations'
      ],
      uz: [
        "Umumiy sotuvlar 40% ga oshdi",
        "Ijtimoiy tarmoqlardagi faollik 65% ga oshdi",
        "Go'zallik nashrlarda 50+ marta tilga olindi",
        "15 ta yangi chakana savdo nuqtasiga kengaytirildi"
      ],
      ru: [
        'Рост общих продаж на 40%',
        'Рост вовлечённости в соцсетях на 65%',
        '50+ упоминаний в бьюти-изданиях',
        'Расширение до 15 новых точек продаж'
      ]
    }
  },
  {
    id: 'fashion-ecommerce',
    title: {
      en: 'Fashion E-commerce Platform',
      uz: 'Moda elektron tijorat platformasi',
      ru: 'Модная e-commerce платформа'
    },
    category: {
      en: 'Web Design',
      uz: 'Veb-dizayn',
      ru: 'Веб-дизайн'
    },
    client: 'Fashion E-commerce',
    date: '2024',
    result: {
      en: '3x Revenue Growth',
      uz: 'Daromad 3 barobar oshdi',
      ru: 'Рост выручки в 3 раза'
    },
    image: portfolioWeb,
    description: {
      en: 'Complete redesign and development of an e-commerce platform for a fashion retailer, focusing on user experience and conversion optimization.',
      uz: "Moda chakana sotuvchisi uchun elektron tijorat platformasini to'liq qayta dizayn qilish va ishlab chiqish, foydalanuvchi tajribasi va konversiyani optimallashtirishga e'tibor qaratildi.",
      ru: 'Полный редизайн и разработка платформы электронной коммерции для модного ритейлера с фокусом на пользовательский опыт и оптимизацию конверсии.'
    },
    challenges: {
      en: 'High cart abandonment rates and poor mobile experience were limiting sales potential.',
      uz: "Savatchani tashlab ketish darajasi yuqori va mobil tajriba yomon bo'lgani sababli sotish imkoniyatlari cheklangan edi.",
      ru: 'Высокий процент брошенных корзин и плохой мобильный опыт ограничивали потенциал продаж.'
    },
    solution: {
      en: 'We implemented a mobile-first design with streamlined checkout, personalized recommendations, and advanced filtering to help users find products quickly.',
      uz: "Biz birinchi navbatda mobil dizaynni, soddalashtirilgan to'lov jarayonini, shaxsiylashtirilgan tavsiyalarni va foydalanuvchilarga mahsulotlarni tezda topishga yordam beradigan rivojlangan filtrlarni joriy qildik.",
      ru: 'Мы внедрили mobile-first дизайн с упрощённой оплатой, персонализированными рекомендациями и расширенной фильтрацией для быстрого поиска товаров.'
    },
    results: {
      en: [
        '300% increase in revenue',
        '45% reduction in cart abandonment',
        '80% of traffic now from mobile',
        'Average session duration up by 120%'
      ],
      uz: [
        'Daromad 300% ga oshdi',
        "Savatchani tashlab ketish 45% ga kamaydi",
        "Trafikning 80% endi mobildan",
        "O'rtacha sessiya davomiyligi 120% ga oshdi"
      ],
      ru: [
        'Рост выручки на 300%',
        'Снижение брошенных корзин на 45%',
        '80% трафика теперь с мобильных',
        'Средняя продолжительность сессии выросла на 120%'
      ]
    }
  },
  {
    id: 'tech-startup',
    title: {
      en: 'Tech Startup Brand Video',
      uz: 'Texnologik startap brend videosi',
      ru: 'Брендовое видео для технологического стартапа'
    },
    category: {
      en: 'Video Production',
      uz: 'Video ishlab chiqarish',
      ru: 'Видеопроизводство'
    },
    client: 'Tech Startup',
    date: '2024',
    result: {
      en: '1M+ Views',
      uz: "1M+ ko'rishlar",
      ru: '1M+ просмотров'
    },
    image: portfolioVideo,
    description: {
      en: 'A compelling brand story video that helped a tech startup communicate their mission and attract both customers and investors.',
      uz: "Texnologik startapga o'z missiyasini yetkazish va mijozlarni ham, investorlarni ham jalb qilishga yordam bergan ishontiruvchi brend hikoyasi videosi.",
      ru: 'Убедительное брендовое видео, которое помогло технологическому стартапу донести свою миссию и привлечь клиентов и инвесторов.'
    },
    challenges: {
      en: 'Complex technology needed to be explained simply while maintaining credibility with technical audiences.',
      uz: "Murakkab texnologiyani texnik auditoriya oldida ishonchlilikni saqlab qolgan holda oddiy tushuntirish kerak edi.",
      ru: 'Сложную технологию нужно было объяснить просто, сохраняя при этом доверие технической аудитории.'
    },
    solution: {
      en: 'We crafted a narrative-driven video combining motion graphics, testimonials, and product demonstrations to create an engaging story.',
      uz: "Biz qiziqarli hikoya yaratish uchun motion grafikalar, guvohliklar va mahsulot namoyishlarini birlashtirgan hikoyaga asoslangan video yaratdik.",
      ru: 'Мы создали нарративное видео, объединяющее моушн-графику, отзывы и демонстрацию продукта для создания увлекательной истории.'
    },
    results: {
      en: [
        'Over 1 million organic views',
        '250% increase in demo requests',
        'Featured at 3 major tech conferences',
        'Helped secure Series A funding'
      ],
      uz: [
        "1 milliondan ortiq organik ko'rishlar",
        "Demo so'rovlari 250% ga oshdi",
        '3 ta yirik texnologiya konferensiyasida namoyish etildi',
        'Series A investitsiyasini olishga yordam berdi'
      ],
      ru: [
        'Более 1 миллиона органических просмотров',
        'Рост запросов на демо на 250%',
        'Показано на 3 крупных технологических конференциях',
        'Помогло получить финансирование Series A'
      ]
    }
  },
  {
    id: 'lifestyle-brand',
    title: {
      en: 'Lifestyle Brand Social Campaign',
      uz: 'Turmush tarzi brendi ijtimoiy kampaniyasi',
      ru: 'Социальная кампания лайфстайл-бренда'
    },
    category: {
      en: 'Social Media',
      uz: 'Ijtimoiy tarmoqlar',
      ru: 'Социальные сети'
    },
    client: 'Lifestyle Brand',
    date: '2024',
    result: {
      en: '500K New Followers',
      uz: '500K yangi obunachilar',
      ru: '500K новых подписчиков'
    },
    image: portfolioSocial,
    description: {
      en: 'A multi-platform social media campaign that transformed a local lifestyle brand into a regional phenomenon.',
      uz: "Mahalliy turmush tarzi brendini mintaqaviy fenomenga aylantirgan ko'p platformali ijtimoiy media kampaniyasi.",
      ru: 'Мультиплатформенная кампания в социальных сетях, которая превратила локальный лайфстайл-бренд в региональный феномен.'
    },
    challenges: {
      en: 'Limited brand awareness outside local market with tight budget constraints.',
      uz: "Cheklangan byudjet bilan mahalliy bozordan tashqarida brend tanilishi past edi.",
      ru: 'Ограниченная узнаваемость бренда за пределами местного рынка при жёстких бюджетных ограничениях.'
    },
    solution: {
      en: 'We developed a content strategy focused on user-generated content, influencer partnerships, and viral-worthy campaigns that maximized organic reach.',
      uz: "Biz foydalanuvchilar tomonidan yaratilgan kontent, influenserlar bilan hamkorlik va organik qamrovni maksimal darajada oshiradigan viral kampaniyalarga yo'naltirilgan kontent strategiyasini ishlab chiqdik.",
      ru: 'Мы разработали контент-стратегию, ориентированную на пользовательский контент, партнёрство с инфлюенсерами и вирусные кампании для максимального органического охвата.'
    },
    results: {
      en: [
        '500,000 new followers across platforms',
        '85% engagement rate on campaign posts',
        '2M+ impressions per week',
        'Organic reach increased 400%'
      ],
      uz: [
        "Barcha platformalarda 500,000 yangi obunachi",
        "Kampaniya postlarida 85% ishtirok darajasi",
        "Haftasiga 2M+ ko'rishlar",
        "Organik qamrov 400% ga oshdi"
      ],
      ru: [
        '500 000 новых подписчиков на всех платформах',
        '85% вовлечённость в постах кампании',
        '2M+ показов в неделю',
        'Органический охват вырос на 400%'
      ]
    }
  },
  {
    id: 'restaurant-chain',
    title: {
      en: 'Restaurant Chain Rebrand',
      uz: "Restoran tarmog'ini qayta brendlash",
      ru: 'Ребрендинг сети ресторанов'
    },
    category: {
      en: 'Branding',
      uz: 'Brending',
      ru: 'Брендинг'
    },
    client: 'Restaurant Chain',
    date: '2023',
    result: {
      en: '60% Brand Recognition',
      uz: '60% brend tanilishi',
      ru: '60% узнаваемость бренда'
    },
    image: portfolioBranding,
    description: {
      en: 'Complete rebranding of a regional restaurant chain to modernize their image and attract younger demographics.',
      uz: "Mintaqaviy restoran tarmog'ini zamonaviylashtirish va yoshlarni jalb qilish uchun to'liq qayta brendlash.",
      ru: 'Полный ребрендинг региональной сети ресторанов для модернизации имиджа и привлечения молодой аудитории.'
    },
    challenges: {
      en: 'Outdated brand perception was limiting growth and appeal to younger audiences.',
      uz: "Eskirgan brend qabul qilinishi o'sish va yoshlarni jalb qilishni cheklayotgan edi.",
      ru: 'Устаревшее восприятие бренда ограничивало рост и привлекательность для молодой аудитории.'
    },
    solution: {
      en: 'Fresh visual identity with vibrant colors, modern typography, and lifestyle photography that emphasized the dining experience.',
      uz: "Yorqin ranglar, zamonaviy tipografiya va ovqatlanish tajribasini ta'kidlaydigan turmush tarzi fotografiyasi bilan yangi vizual identifikatsiya.",
      ru: 'Свежая визуальная идентичность с яркими цветами, современной типографикой и лайфстайл-фотографией, подчёркивающей опыт посещения ресторана.'
    },
    results: {
      en: [
        '60% increase in brand recognition',
        '35% growth in 18-34 demographic',
        'Opened 8 new locations',
        'Social media following tripled'
      ],
      uz: [
        'Brend tanilishi 60% ga oshdi',
        "18-34 yoshlilar orasida 35% o'sish",
        "8 ta yangi joy ochildi",
        "Ijtimoiy tarmoqdagi obunachilar 3 barobar oshdi"
      ],
      ru: [
        'Рост узнаваемости бренда на 60%',
        'Рост аудитории 18-34 лет на 35%',
        'Открыто 8 новых точек',
        'Количество подписчиков в соцсетях утроилось'
      ]
    }
  },
  {
    id: 'saas-platform',
    title: {
      en: 'SaaS Platform Redesign',
      uz: 'SaaS platformasini qayta dizayn qilish',
      ru: 'Редизайн SaaS-платформы'
    },
    category: {
      en: 'Web Design',
      uz: 'Veb-dizayn',
      ru: 'Веб-дизайн'
    },
    client: 'SaaS Platform',
    date: '2023',
    result: {
      en: '5x User Signups',
      uz: "Ro'yxatdan o'tish 5 barobar oshdi",
      ru: 'Регистрации выросли в 5 раз'
    },
    image: portfolioWeb,
    description: {
      en: 'UX/UI redesign of a B2B SaaS platform to improve user onboarding and reduce churn.',
      uz: "Foydalanuvchilarni jalb qilish va churnni kamaytirish uchun B2B SaaS platformasini UX/UI qayta dizayn qilish.",
      ru: 'UX/UI редизайн B2B SaaS-платформы для улучшения онбординга пользователей и снижения оттока.'
    },
    challenges: {
      en: 'Complex interface was confusing new users, leading to high churn in the first month.',
      uz: "Murakkab interfeys yangi foydalanuvchilarni chalkashtirib, birinchi oyda yuqori churnni keltirib chiqargan edi.",
      ru: 'Сложный интерфейс сбивал с толку новых пользователей, что приводило к высокому оттоку в первый месяц.'
    },
    solution: {
      en: 'Simplified the interface, created guided onboarding flows, and implemented progressive disclosure to reduce cognitive load.',
      uz: "Interfeysni soddalashtirildi, yo'riqnomali onboarding oqimlari yaratildi va kognitiv yukni kamaytirish uchun progressiv oshkor qilish joriy etildi.",
      ru: 'Упростили интерфейс, создали пошаговый онбординг и внедрили постепенное раскрытие информации для снижения когнитивной нагрузки.'
    },
    results: {
      en: [
        '500% increase in user signups',
        '70% reduction in first-month churn',
        'Onboarding time reduced by 60%',
        'Customer satisfaction score: 4.8/5'
      ],
      uz: [
        "Ro'yxatdan o'tish 500% ga oshdi",
        "Birinchi oyda churn 70% ga kamaydi",
        "Onboarding vaqti 60% ga kamaydi",
        "Mijozlar qoniqish ko'rsatkichi: 4.8/5"
      ],
      ru: [
        'Рост регистраций на 500%',
        'Снижение оттока в первый месяц на 70%',
        'Время онбординга сократилось на 60%',
        'Оценка удовлетворённости клиентов: 4.8/5'
      ]
    }
  },
  {
    id: 'music-festival',
    title: {
      en: 'Music Festival Promo Video',
      uz: 'Musiqa festivali promo video',
      ru: 'Промо-видео музыкального фестиваля'
    },
    category: {
      en: 'Video Production',
      uz: 'Video ishlab chiqarish',
      ru: 'Видеопроизводство'
    },
    client: 'Music Festival',
    date: '2023',
    result: {
      en: '2M+ Engagement',
      uz: '2M+ ishtirok',
      ru: '2M+ вовлечённость'
    },
    image: portfolioVideo,
    description: {
      en: 'High-energy promotional video for an annual music festival, designed to drive ticket sales and create buzz.',
      uz: "Yillik musiqa festivali uchun chipta sotishni oshirish va shov-shuv yaratish uchun mo'ljallangan yuqori energiyali reklama videosi.",
      ru: 'Энергичное промо-видео для ежегодного музыкального фестиваля, направленное на стимулирование продаж билетов и создание ажиотажа.'
    },
    challenges: {
      en: 'Competitive festival market required standing out with limited production budget.',
      uz: "Raqobatbardosh festival bozori cheklangan ishlab chiqarish byudjeti bilan ajralib turishni talab qildi.",
      ru: 'Конкурентный рынок фестивалей требовал выделиться при ограниченном производственном бюджете.'
    },
    solution: {
      en: 'Created an energetic video using dynamic editing, artist interviews, and crowd footage to capture the festival atmosphere.',
      uz: "Festival muhitini aks ettirish uchun dinamik tahrirlash, san'atkorlar intervyulari va olomon kadrlaridan foydalangan holda energetik video yaratildi.",
      ru: 'Создали энергичное видео с динамичным монтажом, интервью артистов и съёмками толпы для передачи атмосферы фестиваля.'
    },
    results: {
      en: [
        '2M+ social media engagements',
        'Festival sold out 3 weeks early',
        '45% increase in early bird sales',
        'Video shared by major music outlets'
      ],
      uz: [
        "Ijtimoiy tarmoqlarda 2M+ ishtirok",
        "Festival 3 hafta oldin sotildi",
        "Early bird sotuvlari 45% ga oshdi",
        "Video yirik musiqa nashrlari tomonidan ulashildi"
      ],
      ru: [
        '2M+ вовлечённость в соцсетях',
        'Фестиваль был распродан за 3 недели',
        'Рост ранних продаж на 45%',
        'Видео распространено крупными музыкальными СМИ'
      ]
    }
  },
  {
    id: 'fitness-app',
    title: {
      en: 'Fitness App Social Growth',
      uz: "Fitnes ilova ijtimoiy o'sishi",
      ru: 'Рост фитнес-приложения в соцсетях'
    },
    category: {
      en: 'Social Media',
      uz: 'Ijtimoiy tarmoqlar',
      ru: 'Социальные сети'
    },
    client: 'Fitness App',
    date: '2023',
    result: {
      en: '300% Growth',
      uz: "300% o'sish",
      ru: 'Рост на 300%'
    },
    image: portfolioSocial,
    description: {
      en: 'Social media strategy that transformed a fitness app from local to national recognition.',
      uz: "Fitnes ilovasini mahalliy tanilishdan milliy tanilishga aylantirgan ijtimoiy media strategiyasi.",
      ru: 'Стратегия в социальных сетях, которая превратила фитнес-приложение из локального в национально признанное.'
    },
    challenges: {
      en: 'Highly competitive fitness app market with limited marketing budget.',
      uz: "Cheklangan marketing byudjeti bilan yuqori raqobatbardosh fitnes ilova bozori.",
      ru: 'Высококонкурентный рынок фитнес-приложений с ограниченным маркетинговым бюджетом.'
    },
    solution: {
      en: 'Implemented a content strategy focused on transformation stories, workout tutorials, and community building.',
      uz: "O'zgarish hikoyalari, mashg'ulot darslari va jamiyat qurishga yo'naltirilgan kontent strategiyasi joriy etildi.",
      ru: 'Внедрили контент-стратегию, ориентированную на истории трансформации, обучающие видео и создание сообщества.'
    },
    results: {
      en: [
        '300% follower growth in 6 months',
        'App downloads increased 250%',
        '75% of new users from social',
        'Featured in Apple App Store'
      ],
      uz: [
        "6 oyda obunachilar 300% ga oshdi",
        "Ilova yuklanishlari 250% ga oshdi",
        "Yangi foydalanuvchilarning 75% ijtimoiy tarmoqlardan",
        "Apple App Store'da taqdim etildi"
      ],
      ru: [
        'Рост подписчиков на 300% за 6 месяцев',
        'Загрузки приложения выросли на 250%',
        '75% новых пользователей из соцсетей',
        'Показано в Apple App Store'
      ]
    }
  },
  {
    id: 'financial-services',
    title: {
      en: 'Financial Services Rebrand',
      uz: 'Moliyaviy xizmatlarni qayta brendlash',
      ru: 'Ребрендинг финансовых услуг'
    },
    category: {
      en: 'Branding',
      uz: 'Brending',
      ru: 'Брендинг'
    },
    client: 'Financial Services',
    date: '2023',
    result: {
      en: '85% Trust Score',
      uz: "85% ishonch ko'rsatkichi",
      ru: 'Уровень доверия 85%'
    },
    image: portfolioBranding,
    description: {
      en: 'Rebranding a financial services company to build trust and appeal to modern consumers.',
      uz: "Ishonch qurish va zamonaviy iste'molchilarni jalb qilish uchun moliyaviy xizmatlar kompaniyasini qayta brendlash.",
      ru: 'Ребрендинг компании финансовых услуг для укрепления доверия и привлечения современных потребителей.'
    },
    challenges: {
      en: 'Traditional industry perception needed modernization while maintaining credibility.',
      uz: "An'anaviy sanoat qabul qilishini ishonchlilikni saqlab qolgan holda modernizatsiya qilish kerak edi.",
      ru: 'Традиционное восприятие отрасли нуждалось в модернизации при сохранении авторитетности.'
    },
    solution: {
      en: 'Created a professional yet approachable brand identity with clear communication and transparent messaging.',
      uz: "Aniq aloqa va shaffof xabar almashish bilan professional, ammo qulay brend identifikatsiyasi yaratildi.",
      ru: 'Создали профессиональную, но доступную идентичность бренда с чёткой коммуникацией и прозрачными сообщениями.'
    },
    results: {
      en: [
        '85% trust score in customer surveys',
        '50% increase in new clients',
        'Reduced client inquiries by 30%',
        'Won 2 industry awards for branding'
      ],
      uz: [
        "Mijozlar so'rovlarida 85% ishonch ko'rsatkichi",
        "Yangi mijozlar 50% ga oshdi",
        "Mijozlar so'rovlari 30% ga kamaydi",
        "Brending uchun 2 ta sanoat mukofotini oldi"
      ],
      ru: [
        'Уровень доверия 85% в опросах клиентов',
        'Рост новых клиентов на 50%',
        'Снижение запросов клиентов на 30%',
        'Получено 2 отраслевые награды за брендинг'
      ]
    }
  }
];

type Language = 'en' | 'uz' | 'ru';

export const PortfolioDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const lang = language as Language;
  const project = projectsData.find(p => p.id === id);

  const labels = {
    backToPortfolio: {
      en: 'Back to Portfolio',
      uz: 'Portfolioga qaytish',
      ru: 'Назад к портфолио'
    },
    projectNotFound: {
      en: 'Project Not Found',
      uz: 'Loyiha topilmadi',
      ru: 'Проект не найден'
    },
    theChallenge: {
      en: 'The Challenge',
      uz: 'Muammo',
      ru: 'Задача'
    },
    ourSolution: {
      en: 'Our Solution',
      uz: 'Bizning yechim',
      ru: 'Наше решение'
    },
    results: {
      en: 'Results',
      uz: 'Natijalar',
      ru: 'Результаты'
    },
    category: {
      en: 'Category',
      uz: 'Kategoriya',
      ru: 'Категория'
    },
    year: {
      en: 'Year',
      uz: 'Yil',
      ru: 'Год'
    },
    keyResult: {
      en: 'Key Result',
      uz: 'Asosiy natija',
      ru: 'Ключевой результат'
    },
    startProject: {
      en: 'Start Your Project',
      uz: 'Loyihangizni boshlang',
      ru: 'Начните свой проект'
    },
    visitWebsite: {
      en: 'Visit Website',
      uz: 'Saytga tashrif buyuring',
      ru: 'Посетить сайт'
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{labels.projectNotFound[lang]}</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            {labels.backToPortfolio[lang]}
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
          {labels.backToPortfolio[lang]}
        </Link>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <Reveal>
          <div className="rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={project.image}
              alt={project.title[lang]}
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
                <h1 className="text-4xl lg:text-5xl font-bold">{project.title[lang]}</h1>
                <p className="text-xl text-muted">{project.description[lang]}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{labels.theChallenge[lang]}</h2>
                <p className="text-muted leading-relaxed">{project.challenges[lang]}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{labels.ourSolution[lang]}</h2>
                <p className="text-muted leading-relaxed">{project.solution[lang]}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{labels.results[lang]}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results[lang].map((result, index) => (
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
                    <span className="text-sm">{labels.category[lang]}</span>
                  </div>
                  <p className="font-semibold">{project.category[lang]}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-muted mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{labels.year[lang]}</span>
                  </div>
                  <p className="font-semibold">{project.date}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-muted mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{labels.keyResult[lang]}</span>
                  </div>
                  <p className="font-semibold text-primary">{project.result[lang]}</p>
                </div>

                {project.website && (
                  <div>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 glass-panel rounded-full font-semibold hover:bg-white/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {labels.visitWebsite[lang]}
                    </a>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/contact"
                className="block w-full text-center px-8 py-4 btn-gradient rounded-full font-semibold hover:shadow-lg transition-all"
              >
                {labels.startProject[lang]}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
