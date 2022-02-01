import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import en from '../data/lang/en.json';
import pl from '../data/lang/pl.json';
import '../utilities/i18next';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(pl);
  const { i18n } = useTranslation();
  const selectEn = () => {
    if (lang === pl) {
      setLang(en);
      i18n.changeLanguage('en');
    }
  };
  const selectPl = () => {
    if (lang === en) {
      setLang(pl);
      i18n.changeLanguage('pl');
    }
  };
  return (
    <LangContext.Provider value={[lang, selectEn, selectPl]}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.array,
};
