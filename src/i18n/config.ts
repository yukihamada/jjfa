import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ja from './locales/ja';
import pt from './locales/pt';
import ko from './locales/ko';
import zh from './locales/zh';
import es from './locales/es';
import fr from './locales/fr';
import th from './locales/th';
import vi from './locales/vi';
import en from './locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      pt: { translation: pt },
      ko: { translation: ko },
      zh: { translation: zh },
      es: { translation: es },
      fr: { translation: fr },
      th: { translation: th },
      vi: { translation: vi },
      en: { translation: en }
    },
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;