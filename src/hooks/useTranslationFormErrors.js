import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTranslationFormErrors = (errors, touched, setFieldTouched) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.on('languageChanged', () => {
      Object.keys(errors).forEach((fieldName) => {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName);
        }
      });
    });
    return () => {
      i18n.off('languageChanged', () => {});
    };
  }, [errors]);
};

export default useTranslationFormErrors;
