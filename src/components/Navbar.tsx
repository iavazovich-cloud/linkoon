import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import logoImage from '@/assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages: Array<'en' | 'uz' | 'ru'> = ['en', 'uz', 'ru'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-border/50' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoImage} alt="LinkOn" className="h-14 lg:h-16 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`nav-link text-sm font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-primary active' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-0.5 bg-card/50 backdrop-blur-sm rounded-full px-1.5 py-1 border border-border/50">
              {languages.map((lang) => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${language === lang ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'}`}>
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <ThemeToggle />
            <Link to="/contact" className="hidden lg:flex items-center gap-2 px-6 py-2.5 btn-gradient rounded-full text-sm font-bold text-white">
              <span className="relative z-10">{t('nav.startProject')}</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2.5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden backdrop-blur-xl bg-background/95 mt-2 mx-4 rounded-2xl overflow-hidden border border-border/50">
            <div className="p-6 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-card/50'}`}>
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                {languages.map((lang) => (
                  <button key={lang} onClick={() => setLanguage(lang)} className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${language === lang ? 'bg-primary text-white' : 'bg-card/50 text-muted-foreground'}`}>
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-6 py-3.5 btn-gradient rounded-xl text-sm font-bold text-white mt-4">
                <span className="relative z-10">{t('nav.startProject')}</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
