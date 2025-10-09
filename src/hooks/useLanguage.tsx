import { useState } from 'react';

export type Language = 'en' | 'fr';

export const useLanguage = (defaultLanguage: Language = 'en') => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    isEnglish: language === 'en',
    isFrench: language === 'fr'
  };
};
