import { useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ProfileChangePassword.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon, PasswordIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfilePersonalInfo({ handleCancel }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState('password');

  const handleShowPassword = () => {
    if (showPassword === 'password') {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  };

  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        {t('profile.title04')}
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="old-password" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title23')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type={showPassword}
                autoFocus
                name="old-password"
                id="old-password"
                placeholder={t('profile.title23')}
                className={cx('form__input')}
              />
              <PasswordIcon className={cx('form__input-icon')} />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="new-password" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title24')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type={showPassword}
                name="new-password"
                id="new-password"
                placeholder={t('profile.title24')}
                className={cx('form__input')}
              />
              <PasswordIcon className={cx('form__input-icon')} />
            </div>
          </div>
        </div>

        <div className={cx('form__group')}>
          <label className={cx('form__checkbox')} onChange={handleShowPassword}>
            <input
              type="checkbox"
              name="set-default-card"
              id="set-default-card"
              className={cx('form__checkbox-input')}
            />
            <span className={cx('form__checkbox-label')}>{t('profile.desc05')}</span>
          </label>
        </div>

        <div className={cx('form-card__bottom')}>
          <Button onClick={handleCancel}>{t('button.btn01')}</Button>
          <Button favoriteCheckout primary>
            {t('button.btn05')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePersonalInfo;
