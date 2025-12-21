import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hook.eu1.make.com/3dk52oc5u669nlohk5ywl4742ncwktho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          <div className="space-y-2">
            <p>{t('contact.form.successMessage')}</p>
            <a 
              href="https://t.me/linkonuz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t('contact.form.joinTelegram')} →
            </a>
          </div>,
          { duration: 6000 }
        );
        setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
      } else {
        toast.error(t('contact.form.errorMessage'));
      }
    } catch (error) {
      toast.error(t('contact.form.errorMessage'));
    }
  };

  const interests = [
    t('contact.form.options.branding'),
    t('contact.form.options.smm'),
    t('contact.form.options.content'),
    t('contact.form.options.web'),
    t('contact.form.options.strategy'),
  ];

  const labels = {
    address: {
      en: 'Address',
      uz: 'Manzil',
      ru: 'Адрес'
    },
    phone: {
      en: 'Phone',
      uz: 'Telefon',
      ru: 'Телефон'
    },
    email: {
      en: 'Email',
      uz: 'Email',
      ru: 'Email'
    },
    selectService: {
      en: 'Select a service',
      uz: 'Xizmatni tanlang',
      ru: 'Выберите услугу'
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal>
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{labels.address[language as 'en' | 'uz' | 'ru']}</h3>
                    <p className="text-muted-foreground">{language === 'uz' ? "Namangan, O'zbekiston" : language === 'ru' ? 'Наманган, Узбекистан' : 'Namangan, Uzbekistan'}</p>
                    <p className="text-muted-foreground">{language === 'uz' ? 'Amir Temur koʻchasi, 42' : language === 'ru' ? 'Улица Амира Темура, 42' : 'Amir Temur street, 42'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{labels.phone[language as 'en' | 'uz' | 'ru']}</h3>
                    <a
                      href="tel:+998906937737"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +998 90 693 77 37
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{labels.email[language as 'en' | 'uz' | 'ru']}</h3>
                    <a
                      href="mailto:iavazovich@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      iavazovich@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder={language === 'uz' ? "Ismingiz" : language === 'ru' ? "Ваше имя" : "Your name"}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.form.interest')}
                </label>
                <select
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">{labels.selectService[language as 'en' | 'uz' | 'ru']}</option>
                  {interests.map((interest, index) => (
                    <option key={index} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.form.message')} <span className="text-muted-foreground text-xs">({t('contact.form.optional')})</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 btn-gradient rounded-xl font-semibold text-lg"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
