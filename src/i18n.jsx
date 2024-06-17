import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './locale/en/translation.json';
import japanese from './locale/jp/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: english },
      jp: { translation: japanese },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
