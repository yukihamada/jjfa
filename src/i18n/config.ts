import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ja from './locales/ja';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es }
    },
    fallbackLng: 'ja',
    lng: 'ja', // Set Japanese as the default language
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'localStorage'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      htmlTag: document.documentElement,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;