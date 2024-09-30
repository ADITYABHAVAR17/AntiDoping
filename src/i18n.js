// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to the Anti-Doping App',
          content: 'Explore Anti-Doping Information',
        }
      },
      hi: {
        translation: {
          welcome: 'एंटी-डोपिंग ऐप में आपका स्वागत है',
          content: 'एंटी-डोपिंग जानकारी देखें',
        }
      },
      en: {
        translation: {
          welcome: 'Welcome',
          content: 'Explore Anti-Doping Information',
        }
      },
      hi: {
        translation: {
          welcome: 'एंटी-डोपिंग ऐप में आपका स्वागत है',
          content: 'एंटी-डोपिंग जानकारी देखें',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
