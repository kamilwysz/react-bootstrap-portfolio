import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../data/lang/en.json';
import pl from '../data/lang/pl.json';

const resources = {
  en: {
    translation: {
      emailError: en.contact.writeMe.emailError,
      emailIncorrect: en.contact.writeMe.emailIncorrect,
      nameError: en.contact.writeMe.nameError,
      messageError: en.contact.writeMe.messageError,
    },
  },
  pl: {
    translation: {
      emailError: pl.contact.writeMe.emailError,
      emailIncorrect: pl.contact.writeMe.emailIncorrect,
      nameError: pl.contact.writeMe.nameError,
      messageError: pl.contact.writeMe.messageError,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
