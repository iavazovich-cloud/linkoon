import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Tv, 
  Users, 
  Clock, 
  TrendingUp, 
  Store, 
  GraduationCap, 
  Building2, 
  Package, 
  Wrench,
  CheckCircle,
  Star,
  DollarSign,
  BarChart3,
  Handshake,
  Play,
  Calendar,
  FileText,
  Percent
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const TVLineNamangan = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      meta: {
        title: 'TV-Line Namangan — Retail In-Store Advertising Network | LinkOn',
        description: 'TV-Line Namangan brings your ads directly to shoppers with high attention and repeated frequency. Affordable retail-media packages for brands and stores.'
      },
      hero: {
        title: 'TV-Line Namangan',
        subtitle: 'In-Store Advertising Network',
        description: 'A captive audience, repeated attention — bring your brand directly to shoppers\' eyes while they wait, shop, and make purchase decisions in Namangan\'s busiest stores.',
        ctaAdvertise: 'Contact for Advertising',
        ctaPartner: 'Join as a Store Partner'
      },
      whatIs: {
        title: 'What is TV-Line?',
        paragraphs: [
          'TV-Line is a digital in-store advertising network consisting of TV screens with integrated sound systems, strategically placed in grocery stores and retail locations with high foot traffic and long customer waiting times. Our screens capture attention right where purchase decisions are made.',
          'The system operates through 10-minute looping cycles featuring multiple advertiser slots, ensuring strong message repetition throughout the day. Each loop contains 36 advertising slots with background music, creating an engaging shopping atmosphere while delivering your brand message.',
          'The value is clear: guaranteed repeated impressions, high attention levels from customers in a purchase-ready mindset, and proximity to the point of sale. Unlike fleeting social media scrolls or ignored billboards, TV-Line captures undivided attention in a controlled environment.'
        ]
      },
      audience: {
        title: 'Why It Works',
        subtitle: 'Audience & Reach',
        stats: [
          { icon: Users, label: 'Simultaneous Visitors', value: '15–30 people' },
          { icon: Clock, label: 'Average Stay', value: '10–40 minutes' },
          { icon: Calendar, label: 'Operating Hours', value: '8:00 – 24:00' },
          { icon: Play, label: 'Daily Ad Plays', value: '~2,500 plays' },
          { icon: TrendingUp, label: 'Monthly Impressions', value: '20,000–25,000 per store' }
        ],
        comparison: {
          title: 'Why More Effective Than Traditional Ads',
          points: [
            'Unlike static billboards, TV-Line ads are dynamic with motion and sound — impossible to ignore',
            'Unlike social media ads, viewers can\'t scroll past or skip your message',
            'Unlike online ads, there\'s zero ad-blocker interference',
            'Viewers are already in a buying mindset, not passively browsing'
          ]
        }
      },
      advertisers: {
        title: 'Who Should Advertise Here',
        subtitle: 'Perfect for businesses seeking local impact',
        categories: [
          {
            icon: Store,
            title: 'Local Businesses',
            description: 'Promote your store\'s own products, sales, and special offers directly to customers already in shopping mode.'
          },
          {
            icon: GraduationCap,
            title: 'Education Centers',
            description: 'Reach parents and students during their daily shopping routines. Perfect for course enrollments and announcements.'
          },
          {
            icon: Building2,
            title: 'Universities & Institutions',
            description: 'Build brand awareness among the local community and attract prospective students through consistent visibility.'
          },
          {
            icon: Package,
            title: 'FMCG Brands',
            description: 'Nestlé, snack brands, beverages — influence purchase decisions seconds before customers reach the shelf.'
          },
          {
            icon: Wrench,
            title: 'Service Providers',
            description: 'From repair services to salons to delivery apps — reach customers when they have time to notice your offer.'
          }
        ]
      },
      pricing: {
        title: 'Pricing & Packages',
        subtitle: 'Transparent, affordable advertising',
        singleStore: {
          title: 'Single Store Pricing',
          included: 'All packages include:',
          features: ['TV & speaker installation', 'Schedule configuration', 'Monthly performance report'],
          plans: [
            { name: 'Starter', duration: '10 sec', frequency: '~36 loops/day', impressions: '~20,000', price: '$100' },
            { name: 'Standard', duration: '15 sec', frequency: '~36 loops/day', impressions: '~30,000', price: '$150' },
            { name: 'Premium', duration: '20 sec', frequency: '~36 loops/day', impressions: '~40,000', price: '$200' }
          ]
        },
        multiStore: {
          title: 'Multi-Store Packages',
          packages: [
            { name: 'Local Pack', stores: '3 stores', duration: '10 sec', impressions: '~60,000', price: '$250', featured: false },
            { name: 'City Pack', stores: '5 stores', duration: '10 sec', impressions: '~100,000', price: '$400', featured: true },
            { name: 'City Plus', stores: '5 stores', duration: '15 sec', impressions: '~150,000', price: '$550', featured: false },
            { name: 'Dominance', stores: '10 stores', duration: '15 sec', impressions: '~300,000+', price: '$900', featured: false }
          ]
        },
        discounts: {
          title: 'Long-Term Discounts',
          tiers: [
            { period: '3 months', discount: '−10%' },
            { period: '6 months', discount: '−20%' },
            { period: '12 months', discount: '−30%' }
          ]
        },
        comparison: 'Compare this to static billboard advertising which costs approximately 1,500,000 UZS (~$120) per month for a single location with no sound, no motion, and far fewer guaranteed impressions. TV-Line delivers better value with measurable results.'
      },
      partners: {
        title: 'For Store Partners',
        subtitle: 'Earn passive income with zero investment',
        benefits: [
          { icon: DollarSign, text: 'No upfront cost — we provide TV, speaker & installation' },
          { icon: Handshake, text: '50/50 revenue split from advertising' },
          { icon: TrendingUp, text: 'Passive income with no operational burden' },
          { icon: Users, text: 'Enhanced customer experience with entertainment' }
        ],
        example: {
          title: 'Revenue Example',
          calculation: '5 stores × 10 advertisers × $400/month = $4,000 total revenue',
          result: 'Your share: $2,000 | Per store: $400/month passive income'
        },
        cta: 'Become a Store Partner'
      },
      process: {
        title: 'How It Works',
        subtitle: 'Simple 5-step process',
        steps: [
          { icon: Tv, text: 'We install the TV + sound system' },
          { icon: Calendar, text: 'Schedule & upload ads' },
          { icon: Play, text: 'Ads run throughout operating hours' },
          { icon: FileText, text: 'Monthly reporting with reach data' },
          { icon: Handshake, text: 'Payments split 50/50' }
        ]
      },
      testimonials: {
        title: 'What Our Advertisers Say',
        subtitle: 'Pilot case results coming soon',
        placeholder: 'We\'re currently onboarding our first advertisers. Check back soon for success stories and brand recall improvements!'
      }
    },
    uz: {
      meta: {
        title: 'TV-Line Namangan — Do\'konlardagi Reklama Tarmog\'i | LinkOn',
        description: 'TV-Line Namangan reklamalaringizni yuqori diqqat va takroriy chastota bilan bevosita xaridorlarga yetkazadi. Brendlar va do\'konlar uchun hamyonbop retail-media paketlari.'
      },
      hero: {
        title: 'TV-Line Namangan',
        subtitle: 'Do\'konlardagi Reklama Tarmog\'i',
        description: 'Band auditoriya, takroriy diqqat — brendingizni Namanganning eng gavjum do\'konlarida kutish, xarid qilish va sotib olish qarorlarini qabul qilish paytida xaridorlar ko\'z oldiga olib keling.',
        ctaAdvertise: 'Reklama uchun bog\'laning',
        ctaPartner: 'Do\'kon hamkor bo\'ling'
      },
      whatIs: {
        title: 'TV-Line nima?',
        paragraphs: [
          'TV-Line — bu yuqori oqimli va uzoq kutish vaqtiga ega oziq-ovqat do\'konlari va chakana savdo nuqtalarida strategik joylashtirilgan, o\'rnatilgan ovoz tizimlari bilan jihozlangan TV ekranlardan iborat raqamli do\'kon ichidagi reklama tarmog\'i. Ekranlarimiz diqqatni aynan sotib olish qarorlari qabul qilinadigan joyda jalb qiladi.',
          'Tizim bir nechta reklama beruvchi slotlarini o\'z ichiga olgan 10 daqiqalik takroriy sikllar orqali ishlaydi, bu esa kun davomida kuchli xabar takrorlanishini ta\'minlaydi. Har bir sikl fon musiqasi bilan 36 ta reklama slotini o\'z ichiga oladi, bu esa brendingiz xabarini yetkazib, jalb qiluvchi xarid muhitini yaratadi.',
          'Qiymat aniq: kafolatlangan takroriy ko\'rishlar, sotib olishga tayyor holatdagi mijozlardan yuqori diqqat darajalari va sotish nuqtasiga yaqinlik. Tez o\'tib ketadigan ijtimoiy tarmoq aylanishlari yoki e\'tiborga olinmaydigan bilbordlardan farqli o\'laroq, TV-Line boshqariladigan muhitda bo\'linmas diqqatni egallaydi.'
        ]
      },
      audience: {
        title: 'Nima uchun ishlaydi',
        subtitle: 'Auditoriya va qamrov',
        stats: [
          { icon: Users, label: 'Bir vaqtdagi tashrifchilar', value: '15–30 kishi' },
          { icon: Clock, label: "O'rtacha qolish", value: '10–40 daqiqa' },
          { icon: Calendar, label: 'Ish soatlari', value: '8:00 – 24:00' },
          { icon: Play, label: 'Kunlik reklama ijrolari', value: '~2,500 ijro' },
          { icon: TrendingUp, label: 'Oylik ko\'rishlar', value: 'Har do\'konga 20,000–25,000' }
        ],
        comparison: {
          title: 'Nima uchun an\'anaviy reklamadan samaraliroq',
          points: [
            'Statik bilbordlardan farqli o\'laroq, TV-Line reklamalari harakatli va ovozli — e\'tiborsiz qoldirib bo\'lmaydi',
            'Ijtimoiy tarmoq reklamalaridan farqli, tomoshabinlar xabaringizni o\'tkazib yubora olmaydi',
            'Onlayn reklamalardan farqli, reklama bloklash aralashuvi yo\'q',
            'Tomoshabinlar passiv ko\'rishda emas, balki allaqachon sotib olish kayfiyatida'
          ]
        }
      },
      advertisers: {
        title: 'Bu yerda kim reklama qilishi kerak',
        subtitle: 'Mahalliy ta\'sir izlayotgan bizneslar uchun mukammal',
        categories: [
          {
            icon: Store,
            title: 'Mahalliy bizneslar',
            description: 'Do\'koningizning mahsulotlari, chegirmalar va maxsus takliflarni allaqachon xarid rejimidagi mijozlarga bevosita reklama qiling.'
          },
          {
            icon: GraduationCap,
            title: "Ta'lim markazlari",
            description: 'Ota-onalar va talabalarni kundalik xarid qilish vaqtida yetib boring. Kursga yozilish va e\'lonlar uchun ideal.'
          },
          {
            icon: Building2,
            title: 'Universitetlar va muassasalar',
            description: 'Mahalliy jamiyat orasida brend tanilishini yarating va doimiy ko\'rinish orqali bo\'lajak talabalarni jalb qiling.'
          },
          {
            icon: Package,
            title: 'FMCG brendlari',
            description: 'Nestlé, gazak brendlari, ichimliklar — mijozlar javonga yetib kelishidan soniyalar oldin sotib olish qarorlariga ta\'sir qiling.'
          },
          {
            icon: Wrench,
            title: 'Xizmat ko\'rsatuvchilar',
            description: 'Ta\'mirlash xizmatlaridan salonlarga va yetkazib berish ilovalarigacha — mijozlar taklifingizni sezish uchun vaqt bo\'lganda yetib boring.'
          }
        ]
      },
      pricing: {
        title: 'Narxlar va paketlar',
        subtitle: 'Shaffof, hamyonbop reklama',
        singleStore: {
          title: 'Bitta do\'kon narxi',
          included: 'Barcha paketlarga kiritilgan:',
          features: ['TV va karnay o\'rnatilishi', 'Jadval sozlash', 'Oylik samaradorlik hisoboti'],
          plans: [
            { name: 'Starter', duration: '10 sek', frequency: '~36 sikl/kun', impressions: '~20,000', price: '$100' },
            { name: 'Standard', duration: '15 sek', frequency: '~36 sikl/kun', impressions: '~30,000', price: '$150' },
            { name: 'Premium', duration: '20 sek', frequency: '~36 sikl/kun', impressions: '~40,000', price: '$200' }
          ]
        },
        multiStore: {
          title: 'Ko\'p do\'konli paketlar',
          packages: [
            { name: 'Local Pack', stores: '3 do\'kon', duration: '10 sek', impressions: '~60,000', price: '$250', featured: false },
            { name: 'City Pack', stores: '5 do\'kon', duration: '10 sek', impressions: '~100,000', price: '$400', featured: true },
            { name: 'City Plus', stores: '5 do\'kon', duration: '15 sek', impressions: '~150,000', price: '$550', featured: false },
            { name: 'Dominance', stores: '10 do\'kon', duration: '15 sek', impressions: '~300,000+', price: '$900', featured: false }
          ]
        },
        discounts: {
          title: 'Uzoq muddatli chegirmalar',
          tiers: [
            { period: '3 oy', discount: '−10%' },
            { period: '6 oy', discount: '−20%' },
            { period: '12 oy', discount: '−30%' }
          ]
        },
        comparison: 'Buni oyiga taxminan 1,500,000 so\'m (~$120) turadigan statik bilbord reklamasi bilan solishtiring — ovoz yo\'q, harakat yo\'q, kafolatlangan ko\'rishlar kamroq. TV-Line o\'lchanadigan natijalar bilan yaxshiroq qiymat taqdim etadi.'
      },
      partners: {
        title: 'Do\'kon hamkorlari uchun',
        subtitle: 'Nol investitsiya bilan passiv daromad oling',
        benefits: [
          { icon: DollarSign, text: 'Oldindan to\'lov yo\'q — biz TV, karnay va o\'rnatishni ta\'minlaymiz' },
          { icon: Handshake, text: 'Reklamadan 50/50 daromad bo\'lishish' },
          { icon: TrendingUp, text: 'Operatsion yuklamasiz passiv daromad' },
          { icon: Users, text: 'Ko\'ngilochar bilan yaxshilangan mijoz tajribasi' }
        ],
        example: {
          title: 'Daromad misoli',
          calculation: '5 do\'kon × 10 reklama beruvchi × $400/oy = $4,000 jami daromad',
          result: 'Sizning ulushingiz: $2,000 | Har do\'konga: $400/oy passiv daromad'
        },
        cta: 'Do\'kon hamkori bo\'ling'
      },
      process: {
        title: 'Qanday ishlaydi',
        subtitle: 'Oddiy 5 bosqichli jarayon',
        steps: [
          { icon: Tv, text: 'TV + ovoz tizimini o\'rnatamiz' },
          { icon: Calendar, text: 'Jadval va reklamalarni yuklaymiz' },
          { icon: Play, text: 'Reklamalar ish soatlari davomida ishlaydi' },
          { icon: FileText, text: 'Qamrov ma\'lumotlari bilan oylik hisobot' },
          { icon: Handshake, text: 'To\'lovlar 50/50 bo\'linadi' }
        ]
      },
      testimonials: {
        title: 'Reklama beruvchilarimiz nima deydi',
        subtitle: 'Sinov holati natijalari tez orada',
        placeholder: 'Hozirda birinchi reklama beruvchilarimizni qabul qilmoqdamiz. Muvaffaqiyat tarixi va brend eslab qolish yaxshilanishi uchun tez orada qaytib keling!'
      }
    },
    ru: {
      meta: {
        title: 'TV-Line Наманган — Рекламная сеть в магазинах | LinkOn',
        description: 'TV-Line Наманган доставляет вашу рекламу напрямую покупателям с высоким вниманием и частым повторением. Доступные retail-media пакеты для брендов и магазинов.'
      },
      hero: {
        title: 'TV-Line Наманган',
        subtitle: 'Рекламная сеть в магазинах',
        description: 'Захваченная аудитория, повторяющееся внимание — донесите свой бренд прямо до глаз покупателей, пока они ждут, покупают и принимают решения о покупке в самых оживлённых магазинах Намангана.',
        ctaAdvertise: 'Связаться для рекламы',
        ctaPartner: 'Стать партнёром-магазином'
      },
      whatIs: {
        title: 'Что такое TV-Line?',
        paragraphs: [
          'TV-Line — это цифровая рекламная сеть в магазинах, состоящая из телевизионных экранов с интегрированными звуковыми системами, стратегически размещённых в продуктовых магазинах и розничных точках с высокой проходимостью и длительным временем ожидания клиентов. Наши экраны привлекают внимание именно там, где принимаются решения о покупке.',
          'Система работает через 10-минутные циклы повторения с несколькими рекламными слотами, обеспечивая сильное повторение сообщения в течение дня. Каждый цикл содержит 36 рекламных слотов с фоновой музыкой, создавая увлекательную атмосферу покупок при доставке сообщения вашего бренда.',
          'Ценность очевидна: гарантированные повторные показы, высокий уровень внимания от клиентов в настроении покупки и близость к точке продажи. В отличие от мимолётной прокрутки соцсетей или игнорируемых билбордов, TV-Line захватывает безраздельное внимание в контролируемой среде.'
        ]
      },
      audience: {
        title: 'Почему это работает',
        subtitle: 'Аудитория и охват',
        stats: [
          { icon: Users, label: 'Одновременных посетителей', value: '15–30 человек' },
          { icon: Clock, label: 'Среднее время пребывания', value: '10–40 минут' },
          { icon: Calendar, label: 'Часы работы', value: '8:00 – 24:00' },
          { icon: Play, label: 'Показов рекламы в день', value: '~2,500 показов' },
          { icon: TrendingUp, label: 'Показов в месяц', value: '20,000–25,000 на магазин' }
        ],
        comparison: {
          title: 'Почему эффективнее традиционной рекламы',
          points: [
            'В отличие от статичных билбордов, реклама TV-Line динамичная с движением и звуком — невозможно игнорировать',
            'В отличие от рекламы в соцсетях, зрители не могут пролистать ваше сообщение',
            'В отличие от онлайн-рекламы, нет помех от блокировщиков рекламы',
            'Зрители уже в настроении покупки, а не пассивно просматривают'
          ]
        }
      },
      advertisers: {
        title: 'Кому стоит здесь рекламироваться',
        subtitle: 'Идеально для бизнеса, ищущего местное влияние',
        categories: [
          {
            icon: Store,
            title: 'Местный бизнес',
            description: 'Продвигайте товары, акции и специальные предложения вашего магазина напрямую клиентам, уже находящимся в режиме покупки.'
          },
          {
            icon: GraduationCap,
            title: 'Образовательные центры',
            description: 'Достигайте родителей и студентов во время их ежедневных покупок. Идеально для набора на курсы и объявлений.'
          },
          {
            icon: Building2,
            title: 'Университеты и учреждения',
            description: 'Повышайте узнаваемость бренда среди местного сообщества и привлекайте будущих студентов через постоянную видимость.'
          },
          {
            icon: Package,
            title: 'FMCG бренды',
            description: 'Nestlé, снеки, напитки — влияйте на решения о покупке за секунды до того, как клиенты дойдут до полки.'
          },
          {
            icon: Wrench,
            title: 'Поставщики услуг',
            description: 'От ремонтных услуг до салонов и приложений доставки — достигайте клиентов, когда у них есть время заметить ваше предложение.'
          }
        ]
      },
      pricing: {
        title: 'Цены и пакеты',
        subtitle: 'Прозрачная, доступная реклама',
        singleStore: {
          title: 'Цены для одного магазина',
          included: 'Все пакеты включают:',
          features: ['Установка ТВ и колонок', 'Настройка расписания', 'Ежемесячный отчёт эффективности'],
          plans: [
            { name: 'Starter', duration: '10 сек', frequency: '~36 циклов/день', impressions: '~20,000', price: '$100' },
            { name: 'Standard', duration: '15 сек', frequency: '~36 циклов/день', impressions: '~30,000', price: '$150' },
            { name: 'Premium', duration: '20 сек', frequency: '~36 циклов/день', impressions: '~40,000', price: '$200' }
          ]
        },
        multiStore: {
          title: 'Мультимагазинные пакеты',
          packages: [
            { name: 'Local Pack', stores: '3 магазина', duration: '10 сек', impressions: '~60,000', price: '$250', featured: false },
            { name: 'City Pack', stores: '5 магазинов', duration: '10 сек', impressions: '~100,000', price: '$400', featured: true },
            { name: 'City Plus', stores: '5 магазинов', duration: '15 сек', impressions: '~150,000', price: '$550', featured: false },
            { name: 'Dominance', stores: '10 магазинов', duration: '15 сек', impressions: '~300,000+', price: '$900', featured: false }
          ]
        },
        discounts: {
          title: 'Долгосрочные скидки',
          tiers: [
            { period: '3 месяца', discount: '−10%' },
            { period: '6 месяцев', discount: '−20%' },
            { period: '12 месяцев', discount: '−30%' }
          ]
        },
        comparison: 'Сравните со статичной билбордной рекламой, которая стоит около 1,500,000 сум (~$120) в месяц за одну локацию без звука, без движения и с гораздо меньшим количеством гарантированных показов. TV-Line предлагает лучшее соотношение цены и измеримые результаты.'
      },
      partners: {
        title: 'Для партнёров-магазинов',
        subtitle: 'Зарабатывайте пассивный доход без инвестиций',
        benefits: [
          { icon: DollarSign, text: 'Без первоначальных затрат — мы предоставляем ТВ, колонки и установку' },
          { icon: Handshake, text: 'Деление дохода от рекламы 50/50' },
          { icon: TrendingUp, text: 'Пассивный доход без операционной нагрузки' },
          { icon: Users, text: 'Улучшенный клиентский опыт с развлечением' }
        ],
        example: {
          title: 'Пример дохода',
          calculation: '5 магазинов × 10 рекламодателей × $400/месяц = $4,000 общий доход',
          result: 'Ваша доля: $2,000 | На магазин: $400/месяц пассивного дохода'
        },
        cta: 'Стать партнёром-магазином'
      },
      process: {
        title: 'Как это работает',
        subtitle: 'Простой 5-шаговый процесс',
        steps: [
          { icon: Tv, text: 'Устанавливаем ТВ + звуковую систему' },
          { icon: Calendar, text: 'Настраиваем расписание и загружаем рекламу' },
          { icon: Play, text: 'Реклама крутится в течение рабочих часов' },
          { icon: FileText, text: 'Ежемесячный отчёт с данными охвата' },
          { icon: Handshake, text: 'Платежи делятся 50/50' }
        ]
      },
      testimonials: {
        title: 'Что говорят наши рекламодатели',
        subtitle: 'Результаты пилотного проекта скоро',
        placeholder: 'Мы сейчас подключаем первых рекламодателей. Скоро здесь появятся истории успеха и улучшения узнаваемости бренда!'
      }
    }
  };

  const t = content[language as keyof typeof content] || content.uz;

  const tableHeaders = {
    en: { plan: 'Plan', duration: 'Ad Length', frequency: 'Frequency', impressions: 'Est. Monthly Impressions', price: 'Price (USD/month)', stores: 'Stores' },
    uz: { plan: 'Paket', duration: 'Reklama uzunligi', frequency: 'Chastota', impressions: 'Taxminiy oylik ko\'rishlar', price: 'Narx (USD/oy)', stores: 'Do\'konlar' },
    ru: { plan: 'Пакет', duration: 'Длина рекламы', frequency: 'Частота', impressions: 'Прим. показов/месяц', price: 'Цена (USD/месяц)', stores: 'Магазины' }
  };

  const headers = tableHeaders[language as keyof typeof tableHeaders] || tableHeaders.uz;

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TV-Line Namangan",
    "description": t.meta.description,
    "provider": {
      "@type": "Organization",
      "name": "LinkOn",
      "url": "https://linkon.uz"
    },
    "areaServed": {
      "@type": "City",
      "name": "Namangan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TV-Line Advertising Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Starter Package",
          "price": "100",
          "priceCurrency": "USD",
          "description": "10 second ad, ~20,000 monthly impressions"
        },
        {
          "@type": "Offer",
          "name": "City Pack",
          "price": "400",
          "priceCurrency": "USD",
          "description": "5 stores, 10 second ad, ~100,000 monthly impressions"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                <Tv className="w-5 h-5" />
                <span>{t.hero.subtitle}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="btn-gradient">
                  <Link to="/contact">{t.hero.ctaAdvertise}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">{t.hero.ctaPartner}</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* What is TV-Line Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">{t.whatIs.title}</h2>
              <div className="space-y-6">
                {t.whatIs.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Audience & Reach Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.audience.title}</h2>
                <p className="text-xl text-muted-foreground">{t.audience.subtitle}</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {t.audience.stats.map((stat, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <Card className="text-center glass-panel border-0">
                    <CardContent className="pt-6">
                      <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                      <p className="text-2xl font-bold mb-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <Card className="max-w-3xl mx-auto glass-panel border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    {t.audience.comparison.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t.audience.comparison.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Who Should Advertise Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.advertisers.title}</h2>
              <p className="text-xl text-muted-foreground">{t.advertisers.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advertisers.categories.map((category, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="h-full glass-panel border-0 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <category.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.pricing.title}</h2>
                <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
              </div>
            </Reveal>

            {/* Single Store Pricing */}
            <Reveal>
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">{t.pricing.singleStore.title}</h3>
                <div className="overflow-x-auto">
                  <Table className="max-w-4xl mx-auto">
                    <TableHeader>
                      <TableRow>
                        <TableHead>{headers.plan}</TableHead>
                        <TableHead>{headers.duration}</TableHead>
                        <TableHead>{headers.frequency}</TableHead>
                        <TableHead>{headers.impressions}</TableHead>
                        <TableHead className="text-right">{headers.price}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {t.pricing.singleStore.plans.map((plan, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{plan.name}</TableCell>
                          <TableCell>{plan.duration}</TableCell>
                          <TableCell>{plan.frequency}</TableCell>
                          <TableCell>{plan.impressions}</TableCell>
                          <TableCell className="text-right font-bold text-primary">{plan.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-2">{t.pricing.singleStore.included}</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {t.pricing.singleStore.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Multi-Store Packages */}
            <Reveal>
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">{t.pricing.multiStore.title}</h3>
                <div className="overflow-x-auto">
                  <Table className="max-w-5xl mx-auto">
                    <TableHeader>
                      <TableRow>
                        <TableHead>{headers.plan}</TableHead>
                        <TableHead>{headers.stores}</TableHead>
                        <TableHead>{headers.duration}</TableHead>
                        <TableHead>{headers.impressions}</TableHead>
                        <TableHead className="text-right">{headers.price}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {t.pricing.multiStore.packages.map((pkg, index) => (
                        <TableRow key={index} className={pkg.featured ? 'bg-primary/10' : ''}>
                          <TableCell className="font-medium">
                            {pkg.name}
                            {pkg.featured && <Star className="inline w-4 h-4 ml-2 text-yellow-500" />}
                          </TableCell>
                          <TableCell>{pkg.stores}</TableCell>
                          <TableCell>{pkg.duration}</TableCell>
                          <TableCell>{pkg.impressions}</TableCell>
                          <TableCell className="text-right font-bold text-primary">{pkg.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Reveal>

            {/* Discounts */}
            <Reveal>
              <div className="max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <Percent className="w-6 h-6 text-primary" />
                  {t.pricing.discounts.title}
                </h3>
                <div className="flex justify-center gap-6">
                  {t.pricing.discounts.tiers.map((tier, index) => (
                    <Card key={index} className="text-center glass-panel border-0">
                      <CardContent className="pt-6">
                        <p className="text-2xl font-bold text-primary">{tier.discount}</p>
                        <p className="text-sm text-muted-foreground">{tier.period}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                {t.pricing.comparison}
              </p>
            </Reveal>
          </div>
        </section>

        {/* For Store Partners Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.partners.title}</h2>
              <p className="text-xl text-muted-foreground">{t.partners.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.partners.benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="text-center glass-panel border-0">
                  <CardContent className="pt-6">
                    <benefit.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">{benefit.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Card className="max-w-2xl mx-auto glass-panel border-primary/20 border-2">
              <CardHeader>
                <CardTitle className="text-center">{t.partners.example.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg text-muted-foreground">{t.partners.example.calculation}</p>
                <p className="text-xl font-bold text-primary">{t.partners.example.result}</p>
                <Button asChild size="lg" className="btn-gradient mt-4">
                  <Link to="/contact">{t.partners.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        {/* How It Works Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.process.title}</h2>
                <p className="text-xl text-muted-foreground">{t.process.subtitle}</p>
              </div>
            </Reveal>

            <div className="max-w-3xl mx-auto">
              {t.process.steps.map((step, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                        <p className="text-lg">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">{t.testimonials.subtitle}</p>
              <Card className="glass-panel border-0">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic">{t.testimonials.placeholder}</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Reveal>
              <div className="text-center space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold">{t.hero.title}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="btn-gradient">
                    <Link to="/contact">{t.hero.ctaAdvertise}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">{t.hero.ctaPartner}</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
};
