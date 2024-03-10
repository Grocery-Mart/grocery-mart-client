import { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './SignUp.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { EmailIcon, PasswordIcon, GoogleIcon } from '~/components/Icons';
import routes from '~/config/routes';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submit, setSubmit] = useState(true);
  const [showPassword, setShowPassword] = useState('password');

  const emailRegex = useMemo(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, []);
  const passwordRegex = useMemo(() => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@-_]).{8,}$/, []);
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

  const checkSubmit = useCallback(() => {
    setSubmit(
      !emailRegex.test(email) ||
        !passwordRegex.test(password) ||
        confirmPassword !== password ||
        email === '' ||
        password === '' ||
        confirmPassword === '',
    );
  }, [emailRegex, passwordRegex, email, password, confirmPassword]);

  const handleChangeEmail = useCallback(() => {
    if (!emailRegex.test(email)) {
      setErrors({ ...errors, email: t('error.err02') });
    }
    if (email === '') {
      setErrors({ ...errors, email: t('error.err01') });
    }
    if (emailRegex.test(email)) {
      setErrors({ ...errors, email: '' });
    }
    checkSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, checkSubmit, emailRegex, errors]);

  const handleChangePassword = useCallback(() => {
    if (!passwordRegex.test(password)) {
      setErrors({
        ...errors,
        password: t('error.err04'),
      });
    }
    if (password === '') {
      setErrors({ ...errors, password: t('error.err03') });
    }
    if (passwordRegex.test(password)) {
      setErrors({ ...errors, password: '' });
    }
    checkSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordRegex, password, errors, checkSubmit]);

  const handleChangeConfirmPassword = useCallback(() => {
    if (confirmPassword !== password) {
      setErrors({
        ...errors,
        confirmPassword: t('error.err06'),
      });
    }
    if (confirmPassword === '') {
      setErrors({ ...errors, confirmPassword: t('error.err05') });
    }
    if (confirmPassword === password) {
      setErrors({ ...errors, confirmPassword: '' });
    }
    checkSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPassword, password, errors, checkSubmit]);

  const handleShowPassword = () => {
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  };

  return (
    <div className={cx('inner')}>
      <Logo />

      <h1 className={cx('inner__heading')}>{t('header.prof10')}</h1>
      <p className={cx('inner__desc')}>{t('signUp.desc')}</p>
      <form action="" className={cx('inner__form', 'form')}>
        <div className={cx('form__group')}>
          <div className={cx('form__text-input')} style={errors.email !== '' ? { border: '1px solid red' } : {}}>
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
          <p className={cx('form__error')}>{errors.email}</p>
        </div>
        <div className={cx('form__group')}>
          <div className={cx('form__text-input')} style={errors.password !== '' ? { borderColor: 'red' } : {}}>
            <input
              type={showPassword}
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleChangePassword}
              placeholder={t('profile.title12')}
              className={cx('form__input')}
            />
            <PasswordIcon className={cx('form__input-icon')} />
          </div>
          <p className={cx('form__error')}>{errors.password}</p>
        </div>
        <div className={cx('form__group')}>
          <div
            className={cx('form__text-input')}
            style={errors.confirmPassword !== '' ? { border: '1px solid red' } : {}}
          >
            <input
              type={showPassword}
              name=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleChangeConfirmPassword}
              placeholder={t('signUp.label02')}
              className={cx('form__input')}
            />
            <PasswordIcon className={cx('form__input-icon')} />
          </div>
          <p className={cx('form__error')}>{errors.confirmPassword}</p>
        </div>
        <div className={cx('form__group', 'form__group--inline')}>
          <label className={cx('form__checkbox')} onChange={handleShowPassword}>
            <input type="checkbox" name="" className={cx('form__checkbox-input')} />
            <span className={cx('form__checkbox-label')}>{t('profile.desc05')}</span>
          </label>
        </div>
        <div className={cx('form__group', 'inner__btn-group')}>
          <Button
            primary
            auth
            disabled={submit}
            onClick={(e) => {
              e.preventDefault();
              alert('Submit from');
            }}
          >
            {t('header.prof10')}
          </Button>
          <Button leftIcon={<GoogleIcon className={cx('icon-google')} />} auth className={cx('btn--no-margin')}>
            {t('button.btn16')}
          </Button>
        </div>
      </form>
      <p className={cx('inner__text')}>
        {t('button.desc03')}
        <Link className={cx('inner__link')} to={routes.login}>
          {t('header.prof08')}
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
