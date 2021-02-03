import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import locale from 'react-native-locale-detector';

import en from '../i18n/en';
import ptBR from '../i18n/pt-BR';

const i18nextReactNativeDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => locale,
  cacheUserLanguage: Function.prototype,
};

i18next
  .use(i18nextReactNativeDetector)
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    debug: true,
    resources: {
      'pt-BR': ptBR,
      en,
    },
  });
