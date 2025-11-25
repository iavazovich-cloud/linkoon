import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

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
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/about', label: t('nav.about') },
    { path: '/studio', label: t('nav.studio') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages: Array<'en' | 'uz' | 'ru'> = ['en', 'uz', 'ru'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <LinkIcon className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold gradient-text">LinkOn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden lg:flex items-center gap-1 glass-panel rounded-full px-3 py-1.5">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === lang
                      ? 'bg-white/10 text-foreground'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:block px-6 py-2.5 btn-gradient rounded-full text-sm font-semibold text-foreground"
            >
              {t('nav.startProject')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 glass-panel rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel mt-4 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-foreground gradient-text'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      language === lang
                        ? 'bg-white/10 text-foreground'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 btn-gradient rounded-full text-sm font-semibold text-center text-foreground"
              >
                {t('nav.startProject')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
