import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ProfileAddNewCard.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileAddNewCard({ handleCancel }) {
  const { t } = useTranslation();

  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        {t('profile.heading07')}
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="first-name" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title13')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                autoFocus
                type="text"
                name="first-name"
                id="first-name"
                placeholder={t('profile.title13')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="last-name" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title14')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder={t('profile.title14')}
                className={cx('form__input')}
              />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="card-number" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title15')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder={t('profile.title15')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="expiration-date" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title16')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="expiration-date"
                id="expiration-date"
                placeholder={t('profile.title16')}
                className={cx('form__input')}
              />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="card-ccv" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title17')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="card-ccv"
                id="card-ccv"
                placeholder={t('profile.title17')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="phone-number" className={cx('form__label', 'form__label--lg')}>
              {t('profile.title11')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder={t('profile.title11')}
                className={cx('form__input')}
              />
              <PhoneIcon className={cx('form__input-icon')} />
            </div>
          </div>
        </div>

        <div className={cx('form__group')}>
          <label htmlFor="set-default-card" className={cx('form__label', 'form__label--lg')}>
            {t('profile.title18')}
          </label>
          <label className={cx('form__checkbox')}>
            <input
              type="checkbox"
              name="set-default-card"
              id="set-default-card"
              className={cx('form__checkbox-input')}
            />
            <span className={cx('form__checkbox-label')}>{t('profile.desc04')}</span>
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

export default ProfileAddNewCard;
