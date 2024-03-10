import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ProfileAddress.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon } from '../Icons';

const cx = classNames.bind(styles);

function ProfileAddress({ handleCancel }) {
  const { t } = useTranslation();

  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        {t('profile.heading08')}
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="apartment-number" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title19')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                autoFocus
                type="text"
                name="apartment-number"
                id="apartment-number"
                placeholder={t('profile.title19')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="Wards-communes-towns" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title20')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="Wards-communes-towns"
                id="Wards-communes-towns"
                placeholder={t('profile.title20')}
                className={cx('form__input')}
              />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="district-province" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title21')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="district-province"
                id="district-province"
                placeholder={t('profile.title21')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="city" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title22')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="city"
                id="city"
                placeholder={t('profile.title22')}
                className={cx('form__input')}
              />
            </div>
          </div>
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

export default ProfileAddress;
