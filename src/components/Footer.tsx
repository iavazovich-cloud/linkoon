import { Link } from 'react-router-dom';
import { Instagram, Send, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t, language } = useLanguage();

  const serviceLinks = [
    { label: t('services.branding'), path: '/services' },
    { label: t('services.smm'), path: '/services' },
    { label: t('services.content'), path: '/services' },
    { label: t('services.advertising'), path: '/services' },
  ];

  const companyLinks = [
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.blog'), path: '/blog' },
    { label: t('nav.contact'), path: '/contact' },
    { label: language === 'uz' ? 'Marketing Namanganda' : language === 'ru' ? 'Маркетинг в Намангане' : 'Marketing in Namangan', path: '/marketing-agentligi-namangan' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/linkonuz', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/linkonuz', label: 'Telegram' },
    { icon: Youtube, href: 'https://youtube.com/@linkonuz', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src={logo} 
                alt="LinkOn - Namangan Marketing Agency" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.brand')}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Namangan, Uzbekistan</li>
              <li>Amir Temur street, 42</li>
              <li>
                <a href="tel:+998906937737" className="hover:text-primary transition-colors">
                  +998 90 693 77 37
                </a>
              </li>
              <li>
                <a href="mailto:iavazovich@gmail.com" className="hover:text-primary transition-colors">
                  iavazovich@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LinkOn. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
