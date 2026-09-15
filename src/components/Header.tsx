import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { User } from 'lucide-react';
import { ShowreelModal } from './ShowreelModal';
import { useLanguage } from '../contexts/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, setLanguage, t, getLanguagePath } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: getLanguagePath('/results'), label: t.nav.showcase },
    { href: getLanguagePath('/creative-direction'), label: t.nav.creativeDirection },
    { href: getLanguagePath('/film-animation'), label: t.nav.filmAnimation },
    { href: getLanguagePath('/ai-visualisation'), label: t.nav.aiVisualisation },
    { href: getLanguagePath('/automation'), label: t.nav.automation },
    { href: getLanguagePath('/about'), label: t.nav.aboutUs },
    { href: getLanguagePath('/contact'), label: t.nav.contact },
  ];

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 font-sans font-bold text-[10px] sm:text-[12px] uppercase tracking-widest ${className}`}>
      <button 
        onClick={() => setLanguage('en')}
        className={`transition-all hover:text-red-600 ${language === 'en' ? 'text-red-600' : 'text-black'}`}
      >
        EN
      </button>
      <span className="text-black/20">|</span>
      <button 
        onClick={() => setLanguage('pt')}
        className={`transition-all hover:text-red-600 ${language === 'pt' ? 'text-red-600' : 'text-black'}`}
      >
        PT
      </button>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px] flex justify-between items-center">
          <Link to={getLanguagePath('/')} className="flex items-center gap-2 group">
            <img loading="lazy" decoding="async" 
              src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/logo-black.png" 
              alt="NuStudios" 
              className="h-8 md:h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Desktop/Tablet Language Toggle - Centered */}
          <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Language Toggle - Right Aligned with Menu */}
            <div className="sm:hidden">
              <LanguageToggle />
            </div>

            {/* Desktop Watch Showreel Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-red-600 text-white border-2 border-red-600 px-6 py-2 font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 whitespace-nowrap"
            >
              {t.nav.watchShowreel}
            </button>

            {/* Login Icon */}
            <a 
              href="https://nulaabs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-red-600 transition-colors"
              aria-label="Login"
            >
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <button 
              className="flex items-center gap-2 px-2 py-2 transition-colors text-black font-sans font-bold text-[10px] uppercase tracking-widest hover:text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
              </div>
              <span className="hidden sm:inline">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-32 pb-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <nav className="lg:col-span-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.href} 
                    className="group flex items-center gap-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter text-text hover:text-red-600 transition-colors leading-[0.95] py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="lg:col-span-4 flex flex-col justify-between h-full gap-12">
                <div className="space-y-8">
                  <div className="space-y-8">
                    <a href="https://nulaabs.com/" target="_blank" rel="noopener noreferrer" className="block text-3xl font-display font-bold uppercase tracking-tighter text-text hover:text-red-600 transition-colors">
                      {t.nav.login}
                    </a>
                  </div>
                  <div className="h-px w-full bg-border" />
                  <div className="space-y-4">
                    <p className="font-sans text-sm font-bold uppercase tracking-widest text-text/60">Socials</p>
                    <div className="flex flex-col gap-2 text-sm font-sans font-bold uppercase tracking-widest text-text">
                      <a href="https://www.linkedin.com/company/112232643/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">LinkedIn <span className="text-xs">↗</span></a>
                      <a href="https://www.instagram.com/nustudios.agency/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">Instagram <span className="text-xs">↗</span></a>
                      <a href="https://www.youtube.com/@NUStudiosAIVFX" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">Youtube <span className="text-xs">↗</span></a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="font-sans text-sm font-bold uppercase tracking-widest text-text/60">{t.nav.contact}</p>
                  <a href="mailto:info@nustudios.co.uk" className="block text-xl font-display font-bold hover:text-red-600 transition-colors">
                    info@nustudios.co.uk
                  </a>
                  <a href="mailto:careers@nustudios.co.uk" className="block text-xl font-display font-bold hover:text-red-600 transition-colors">
                    careers@nustudios.co.uk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
