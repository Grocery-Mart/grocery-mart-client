import classNames from 'classnames/bind';

import styles from './ProfilePersonalInfo.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon, EmailIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfilePersonalInfo({ handleCancel }) {
  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        Thông tin cá nhân
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="name" className={cx('form__label', 'form__label--lg')}>
              Họ Tên
            </label>
            <div className={cx('form__text-input')}>
              <input autoFocus type="text" name="name" id="name" placeholder="Họ Tên" className={cx('form__input')} />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="email-address" className={cx('form__label', 'form__label--lg')}>
              Địa chỉ email
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="email-address"
                id="email-address"
                placeholder="Email"
                className={cx('form__input')}
              />
              <EmailIcon className={cx('form__input-icon')} />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="phone-number" className={cx('form__label', 'form__label--lg')}>
              Số điện thoại
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="Số điện thoại"
                className={cx('form__input')}
              />
              <PhoneIcon className={cx('form__input-icon')} />
            </div>
          </div>
          <div className={cx('form__group')}></div>
        </div>

        <div className={cx('form-card__bottom')}>
          <Button onClick={handleCancel}>Hủy</Button>
          <Button favoriteCheckout primary>
            Lưu
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePersonalInfo;
