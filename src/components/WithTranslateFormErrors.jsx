import React from 'react';
import PropTypes from 'prop-types';
import useTranslationFormErrors from '../hooks/useTranslationFormErrors';

function WithTranslateFormErrors({
  errors,
  touched,
  setFieldTouched,
  children,
}) {
  useTranslationFormErrors(errors, touched, setFieldTouched);
  return <>{children}</>;
}

WithTranslateFormErrors.propTypes = {
  touched: PropTypes.object,
  errors: PropTypes.object,
  setFieldTouched: PropTypes.func,
  children: PropTypes.object,
};

export default WithTranslateFormErrors;
