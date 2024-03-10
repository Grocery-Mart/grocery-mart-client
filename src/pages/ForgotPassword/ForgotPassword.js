import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ForgotPassword.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { EmailIcon } from '~/components/Icons';
import routes from '~/config/routes';
import Message from '~/components/Message';

const cx = classNames.bind(styles);

function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(true);
  const [isSuccessMessage, setSuccessMessage] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);

  const emailRegex = useMemo(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, []);
  const [errors, setErrors] = useState('');

  const checkSubmit = useCallback(() => {
    setSubmit(!emailRegex.test(email) || email === '');
  }, [emailRegex, email]);

  const handleChangeEmail = useCallback(() => {
    if (!emailRegex.test(email)) {
      setErrors(t('error.err02'));
    }
    if (email === '') {
      setErrors(t('error.err01'));
    }
    if (emailRegex.test(email)) {
      setErrors('');
    }
    setErrorMessage(false);
    checkSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, checkSubmit, emailRegex]);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setSuccessMessage(true);

    if (isSuccessMessage) {
      setSuccessMessage(false);
      setErrorMessage(true);
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (email === '' && isErrorMessage) {
      setErrorMessage(false);
    }
  }, [email, isErrorMessage]);

  return (
    <div className={cx('inner')}>
      <Logo />

      <h1 className={cx('inner__heading')}>{t('forgotPassword.heading')}</h1>
      <p className={cx('inner__desc')}>{t('forgotPassword.desc')}</p>
      {isSuccessMessage && (
        <Message success className={cx('inner__message')}>
          {t('forgotPassword.message01')}
        </Message>
      )}
      {isErrorMessage && (
        <Message error className={cx('inner__message')}>
          {t('forgotPassword.message02')}
        </Message>
      )}
      <form action="" className={cx('inner__form', 'form')}>
        <div className={cx('form__group')}>
          <div className={cx('form__text-input')} style={errors !== '' ? { border: '1px solid #f44336' } : {}}>
            <input
              type="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleChangeEmail}
              placeholder={t('footer.t4-item01')}
              className={cx('form__input')}
            />
            <EmailIcon className={cx('form__input-icon')} />
          </div>
          <p className={cx('form__error')}>{errors}</p>
        </div>
        <div className={cx('form__group', 'inner__btn-group')}>
          <Button primary auth disabled={submit} onClick={(e) => handleForgotPassword(e)}>
            {t('button.btn15')}
          </Button>
        </div>
      </form>
      <p className={cx('inner__text')}>
        {t('button.desc01')}
        <Link className={cx('inner__link')} to={routes.login}>
          {t('header.prof08')}
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
