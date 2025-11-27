import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const BlogPost = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();

  const blogData: Record<string, any> = {
    'social-media-growth': {
      title: {
        en: "Why My Business Isn't Growing on Social Media?",
        uz: "Nima uchun biznesim ijtimoiy tarmoqlarda o'smayapti?",
        ru: "Почему мой бизнес не растет в социальных сетях?"
      },
      date: '2025-01-15',
      readTime: '7 min',
      category: 'SMM',
      content: {
        en: `<h2>The Hidden Obstacles Holding Your Business Back</h2>
<p>Many businesses struggle with social media growth, often without understanding why. Let's uncover the common mistakes and provide actionable solutions.</p>

<h3>1. Inconsistent Content</h3>
<p>Posting sporadically confuses your audience and algorithms. Consistency builds trust and keeps you visible in feeds.</p>
<p><strong>Solution:</strong> Create a content calendar and stick to a regular posting schedule - at least 3-4 times per week.</p>

<h3>2. Low Quality Visuals</h3>
<p>In the age of visual-first platforms, poor quality images and videos instantly decrease engagement.</p>
<p><strong>Solution:</strong> Invest in professional photography or learn basic design principles. Use tools like Canva or hire a content creator.</p>

<h3>3. No Strategy</h3>
<p>Random posting without clear goals leads nowhere. You need a defined strategy aligned with business objectives.</p>
<p><strong>Solution:</strong> Define your target audience, set measurable goals, and create content that serves those objectives.</p>

<h3>4. Wrong Audience Targeting</h3>
<p>Speaking to everyone means speaking to no one. Precise targeting is crucial for growth.</p>
<p><strong>Solution:</strong> Create detailed buyer personas and tailor content to their specific pain points and interests.</p>

<h3>5. No Storytelling</h3>
<p>Facts tell, but stories sell. Emotional connections drive engagement and loyalty.</p>
<p><strong>Solution:</strong> Share behind-the-scenes content, customer success stories, and brand journey narratives.</p>

<h2>Building Trust Through Action</h2>
<p>These insights come from years of helping Uzbek businesses transform their social media presence. At LinkOn, we've seen firsthand how addressing these issues leads to exponential growth.</p>

<p><strong>Ready to fix these issues?</strong> Our team specializes in creating data-driven social media strategies for Uzbek businesses.</p>`,
        uz: `<h2>Biznesingizni to'xtatib turgan yashirin to'siqlar</h2>
<p>Ko'pgina bizneslar ijtimoiy tarmoqlarda o'sishda qiynaladi, ko'pincha nima uchun ekanligini tushunmaydi. Keling, keng tarqalgan xatolarni ochib beraylik va amaliy yechimlar taqdim etaylik.</p>

<h3>1. Notekis kontent</h3>
<p>Tartibsiz post qo'yish auditoriya va algoritmlarni chalkashtirib yuboradi. Izchillik ishonch uyg'otadi va sizni tasmalarda ko'rinishda ushlab turadi.</p>
<p><strong>Yechim:</strong> Kontent kalendarini yarating va muntazam post qo'yish jadvaliga rioya qiling - haftasiga kamida 3-4 marta.</p>

<h3>2. Past sifatli vizual materiallar</h3>
<p>Vizual-birinchi platformalar davrida past sifatli rasmlar va videolar darhol faollikni pasaytiradi.</p>
<p><strong>Yechim:</strong> Professional fotografiyaga sarmoya kiriting yoki dizayn asoslarini o'rganing. Canva kabi vositalardan foydalaning yoki kontent yaratuvchini yollang.</p>

<h3>3. Strategiya yo'qligi</h3>
<p>Aniq maqsadlarsiz tasodifiy post qo'yish hech qayerga olib bormaydi. Biznes maqsadlariga moslashtirilgan aniq strategiya kerak.</p>
<p><strong>Yechim:</strong> Maqsadli auditoriyangizni aniqlang, o'lchanadigan maqsadlarni belgilang va bu maqsadlarga xizmat qiladigan kontent yarating.</p>

<h3>4. Noto'g'ri auditoriya nishonlash</h3>
<p>Hammaga gapirish hech kimga gapirmaslikni anglatadi. O'sish uchun aniq nishonlash muhim.</p>
<p><strong>Yechim:</strong> Batafsil xaridor shaxslarini yarating va kontentni ularning o'ziga xos muammolari va qiziqishlariga moslang.</p>

<h3>5. Hikoya qilmaslik</h3>
<p>Faktlar aytadi, lekin hikoyalar sotadi. Hissiy aloqalar faollik va sodiqlikni rag'batlantiradi.</p>
<p><strong>Yechim:</strong> Sahna ortidagi kontent, mijozlar muvaffaqiyat hikoyalari va brend sayohati narrativlarini baham ko'ring.</p>

<h2>Harakat orqali ishonch yaratish</h2>
<p>Ushbu tushunchalar O'zbekiston bizneslariga ijtimoiy tarmoqlardagi mavjudligini o'zgartirishda yordam bergan yillar tajribasidan kelib chiqqan. LinkOn'da biz bu muammolarni hal qilish eksponensial o'sishga olib kelishini o'z ko'zimiz bilan ko'rdik.</p>

<p><strong>Bu muammolarni tuzatishga tayyormisiz?</strong> Bizning jamoamiz O'zbekiston bizneslar uchun ma'lumotlarga asoslangan ijtimoiy tarmoqlar strategiyalarini yaratishga ixtisoslashgan.</p>`,
        ru: `<h2>Скрытые препятствия, сдерживающие ваш бизнес</h2>
<p>Многие компании испытывают трудности с ростом в социальных сетях, часто не понимая почему. Давайте раскроем распространенные ошибки и предоставим действенные решения.</p>

<h3>1. Непоследовательный контент</h3>
<p>Спорадическое размещение постов сбивает с толку вашу аудиторию и алгоритмы. Последовательность создает доверие и поддерживает вашу видимость в лентах.</p>
<p><strong>Решение:</strong> Создайте контент-календарь и придерживайтесь регулярного графика публикаций - минимум 3-4 раза в неделю.</p>

<h3>2. Низкокачественные визуалы</h3>
<p>В эпоху визуально-ориентированных платформ плохое качество изображений и видео мгновенно снижает вовлеченность.</p>
<p><strong>Решение:</strong> Инвестируйте в профессиональную фотографию или изучите основы дизайна. Используйте инструменты вроде Canva или наймите создателя контента.</p>

<h3>3. Отсутствие стратегии</h3>
<p>Случайные публикации без четких целей никуда не ведут. Вам нужна определенная стратегия, согласованная с бизнес-целями.</p>
<p><strong>Решение:</strong> Определите целевую аудиторию, установите измеримые цели и создавайте контент, который служит этим целям.</p>

<h3>4. Неправильное таргетирование аудитории</h3>
<p>Говорить со всеми означает не говорить ни с кем. Точное таргетирование критично для роста.</p>
<p><strong>Решение:</strong> Создайте детальные портреты покупателей и адаптируйте контент к их конкретным болевым точкам и интересам.</p>

<h3>5. Отсутствие сторителлинга</h3>
<p>Факты рассказывают, но истории продают. Эмоциональные связи стимулируют вовлеченность и лояльность.</p>
<p><strong>Решение:</strong> Делитесь закулисным контентом, историями успеха клиентов и повествованиями о пути бренда.</p>

<h2>Создание доверия через действие</h2>
<p>Эти инсайты основаны на многолетнем опыте помощи узбекским компаниям в трансформации их присутствия в социальных сетях. В LinkOn мы воочию убедились, как решение этих проблем приводит к экспоненциальному росту.</p>

<p><strong>Готовы исправить эти проблемы?</strong> Наша команда специализируется на создании стратегий для социальных сетей на основе данных для узбекского бизнеса.</p>`
      }
    },
    'viral-reels': {
      title: {
        en: "How to Create Viral Reels That Actually Convert Customers",
        uz: "Mijozlarni jalb qiladigan viral reelslarni qanday yaratish",
        ru: "Как создать вирусные Reels, которые привлекают клиентов"
      },
      date: '2025-01-12',
      readTime: '8 min',
      category: 'Video',
      content: {
        en: `<h2>The Science Behind Viral Content</h2>
<p>Creating viral reels isn't just luck - it's a systematic approach combining psychology, storytelling, and strategic planning.</p>

<h3>1. Hook in the First 3 Seconds</h3>
<p>You have 3 seconds to grab attention. Start with a compelling question, bold statement, or visual surprise.</p>
<p><strong>Examples:</strong></p>
<ul>
<li>"Stop scrolling if you want to 10x your sales..."</li>
<li>Unexpected visual: product transformation</li>
<li>Relatable problem statement</li>
</ul>

<h3>2. Master the Story Structure</h3>
<p>Every viral reel follows a proven structure:</p>
<ul>
<li><strong>Hook:</strong> Grab attention (0-3 seconds)</li>
<li><strong>Problem:</strong> Present the pain point (3-10 seconds)</li>
<li><strong>Solution:</strong> Show your product/service (10-20 seconds)</li>
<li><strong>CTA:</strong> Clear call-to-action (final 3 seconds)</li>
</ul>

<h3>3. The Power of CTA</h3>
<p>Don't just entertain - convert. Every reel needs a clear next step:</p>
<ul>
<li>"DM us 'START' to get started"</li>
<li>"Link in bio for 20% off"</li>
<li>"Save this for later"</li>
<li>"Follow for daily tips"</li>
</ul>

<h3>4. How Agencies Create Viral Content Systematically</h3>
<p>At LinkOn, we use data-driven approaches:</p>
<ul>
<li>Trend analysis and adaptation</li>
<li>A/B testing different hooks</li>
<li>Strategic posting times</li>
<li>Engaging with comments within first hour</li>
<li>Cross-platform repurposing</li>
</ul>

<h2>Ready to Go Viral?</h2>
<p>Our content team has created hundreds of viral reels for Uzbek businesses. We understand local culture, trending sounds, and what makes content share-worthy.</p>`,
        uz: `<h2>Viral kontent ortidagi fan</h2>
<p>Viral reelslar yaratish - bu faqat omad emas, bu psixologiya, hikoya qilish va strategik rejalashtirish kombinatsiyasidan iborat tizimli yondashuv.</p>

<h3>1. Birinchi 3 soniyada hook</h3>
<p>Diqqatni tortish uchun 3 soniyangiz bor. Qiziqarli savol, dadil bayonot yoki vizual ajablanish bilan boshlang.</p>
<p><strong>Misollar:</strong></p>
<ul>
<li>"Sotuvingizni 10 barobarga oshirishni xohlasangiz, scroll qilishni to'xtating..."</li>
<li>Kutilmagan vizual: mahsulot transformatsiyasi</li>
<li>Bog'lanadigan muammo bayonoti</li>
</ul>

<h3>2. Hikoya tuzilmasini o'zlashtiring</h3>
<p>Har bir viral reels isbotlangan tuzilmaga amal qiladi:</p>
<ul>
<li><strong>Hook:</strong> Diqqatni tortish (0-3 soniya)</li>
<li><strong>Muammo:</strong> Og'riq nuqtasini taqdim etish (3-10 soniya)</li>
<li><strong>Yechim:</strong> Mahsulot/xizmatingizni ko'rsatish (10-20 soniya)</li>
<li><strong>CTA:</strong> Aniq harakat chaqiruvi (oxirgi 3 soniya)</li>
</ul>

<h3>3. CTA kuchi</h3>
<p>Faqat ko'ngil ochirmasdan - konvertatsiya qiling. Har bir reelsga aniq keyingi qadam kerak:</p>
<ul>
<li>"Boshlash uchun bizga 'START' yozing"</li>
<li>"20% chegirma uchun biodagi havola"</li>
<li>"Buni keyinroq uchun saqlang"</li>
<li>"Kundalik maslahatlar uchun kuzatib boring"</li>
</ul>

<h3>4. Agentliklar viral kontentni qanday tizimli yaratadi</h3>
<p>LinkOn'da biz ma'lumotlarga asoslangan yondashuvlardan foydalanamiz:</p>
<ul>
<li>Trend tahlili va moslashuv</li>
<li>Turli hooklarni A/B test qilish</li>
<li>Strategik post qo'yish vaqtlari</li>
<li>Birinchi soat ichida izohlar bilan bog'lanish</li>
<li>Platformalar bo'ylab qayta foydalanish</li>
</ul>

<h2>Viral bo'lishga tayyormisiz?</h2>
<p>Bizning kontent jamoamiz O'zbekiston bizneslar uchun yuzlab viral reelslar yaratdi. Biz mahalliy madaniyat, trend ovozlar va kontentni ulashishga arziydigan narsalarni tushunamiz.</p>`,
        ru: `<h2>Наука за вирусным контентом</h2>
<p>Создание вирусных Reels - это не просто удача, а систематический подход, сочетающий психологию, сторителлинг и стратегическое планирование.</p>

<h3>1. Хук в первые 3 секунды</h3>
<p>У вас есть 3 секунды, чтобы привлечь внимание. Начните с убедительного вопроса, смелого утверждения или визуального сюрприза.</p>
<p><strong>Примеры:</strong></p>
<ul>
<li>"Перестаньте скроллить, если хотите увеличить продажи в 10 раз..."</li>
<li>Неожиданный визуал: трансформация продукта</li>
<li>Релевантная формулировка проблемы</li>
</ul>

<h3>2. Освойте структуру истории</h3>
<p>Каждый вирусный Reels следует проверенной структуре:</p>
<ul>
<li><strong>Хук:</strong> Привлечь внимание (0-3 секунды)</li>
<li><strong>Проблема:</strong> Представить болевую точку (3-10 секунд)</li>
<li><strong>Решение:</strong> Показать продукт/услугу (10-20 секунд)</li>
<li><strong>CTA:</strong> Четкий призыв к действию (последние 3 секунды)</li>
</ul>

<h3>3. Сила CTA</h3>
<p>Не только развлекайте - конвертируйте. Каждому Reels нужен четкий следующий шаг:</p>
<ul>
<li>"Напишите нам 'START', чтобы начать"</li>
<li>"Ссылка в био для скидки 20%"</li>
<li>"Сохраните на потом"</li>
<li>"Подпишитесь для ежедневных советов"</li>
</ul>

<h3>4. Как агентства систематически создают вирусный контент</h3>
<p>В LinkOn мы используем подходы на основе данных:</p>
<ul>
<li>Анализ и адаптация трендов</li>
<li>A/B тестирование разных хуков</li>
<li>Стратегическое время публикаций</li>
<li>Взаимодействие с комментариями в первый час</li>
<li>Кросс-платформенное перепрофилирование</li>
</ul>

<h2>Готовы стать вирусными?</h2>
<p>Наша команда по контенту создала сотни вирусных Reels для узбекского бизнеса. Мы понимаем местную культуру, трендовые звуки и что делает контент достойным распространения.</p>`
      }
    }
    // More blog posts can be added here with similar structure
  };

  if (!id || !blogData[id]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogData[id];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('blog.backToBlog')}</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block glass-panel px-4 py-2 rounded-full">
              <span className="text-sm gradient-text font-medium">{post.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold">
              {post.title[language as 'en' | 'uz' | 'ru']}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} read</span>
              </div>
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <Reveal delay={0.2}>
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:font-bold prose-headings:gradient-text
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-muted prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content[language as 'en' | 'uz' | 'ru'] }}
            />

            {/* CTA Section */}
            <div className="mt-16 glass-panel p-8 lg:p-12 rounded-3xl text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {language === 'uz' ? 'Sizning loyihangizni muhokama qilaylikmi?' :
                 language === 'ru' ? 'Обсудим ваш проект?' :
                 'Ready to Discuss Your Project?'}
              </h3>
              <p className="text-muted mb-8 max-w-2xl mx-auto">
                {language === 'uz' ? 'Bizning jamoamiz sizning biznesingizni keyingi bosqichga olib chiqishga tayyor' :
                 language === 'ru' ? 'Наша команда готова вывести ваш бизнес на новый уровень' :
                 'Our team is ready to take your business to the next level'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-full font-semibold text-lg"
              >
                {t('nav.contact')}
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </div>
  );
};