import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, translations, TranslationType } from '../lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  getLanguagePath: (path: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize language based on URL
  const getInitialLanguage = (): Language => {
    if (location.pathname.startsWith('/pt')) return 'pt';
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  // Sync language with URL changes (e.g. back button)
  useEffect(() => {
    const isPt = location.pathname.startsWith('/pt');
    if (isPt && language !== 'pt') {
      setLanguageState('pt');
    } else if (!isPt && language !== 'en') {
      setLanguageState('en');
    }
  }, [location.pathname, language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    const currentPath = location.pathname;
    let newPath = currentPath;

    if (lang === 'pt') {
      if (!currentPath.startsWith('/pt')) {
        newPath = `/pt${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/pt')) {
        newPath = currentPath.replace('/pt', '') || '/';
      }
    }

    setLanguageState(lang);
    navigate(newPath);
  };

  const getLanguagePath = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (language === 'pt') {
      return `/pt${cleanPath === '/' ? '' : cleanPath}`;
    }
    return cleanPath;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLanguagePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
