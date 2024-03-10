import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ProfilePersonalInfo.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon, EmailIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfilePersonalInfo({ handleCancel }) {
  const { t } = useTranslation();

  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        {t('profile.heading05')}
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="name" className={cx('form__label', 'form__label--lg')}>
              {t('addUserAddress.label01')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                autoFocus
                type="text"
                name="name"
                id="name"
                placeholder={t('addUserAddress.label01')}
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="email-address" className={cx('form__label', 'form__label--lg')}>
              {t('footer.btn01')}
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="email-address"
                id="email-address"
                placeholder={t('footer.t4-item01')}
                className={cx('form__input')}
              />
              <EmailIcon className={cx('form__input-icon')} />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
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
          <div className={cx('form__group')}></div>
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
