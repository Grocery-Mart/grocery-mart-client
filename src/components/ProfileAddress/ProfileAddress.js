import classNames from 'classnames/bind';

import styles from './ProfileAddress.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon } from '../Icons';

const cx = classNames.bind(styles);

function ProfileAddress({ handleCancel }) {
  return (
    <div className={cx('col-12')}>
      <h2 className={cx('add-card__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        Thay đổi địa chỉ
      </h2>

      <form action="" className={cx('form', 'form-card')}>
        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="apartment-number" className={cx('form__label', 'form__label--lg')}>
              Số nhà
            </label>
            <div className={cx('form__text-input')}>
              <input
                autoFocus
                type="text"
                name="apartment-number"
                id="apartment-number"
                placeholder="Số nhà"
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="Wards-communes-towns" className={cx('form__label', 'form__label--lg')}>
              Phường, Xã, Thị trấn
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="Wards-communes-towns"
                id="Wards-communes-towns"
                placeholder="Phường, Xã, Thị trấn"
                className={cx('form__input')}
              />
            </div>
          </div>
        </div>

        <div className={cx('form__row')}>
          <div className={cx('form__group')}>
            <label htmlFor="district-province" className={cx('form__label', 'form__label--lg')}>
              Quận, Huyện, Tỉnh
            </label>
            <div className={cx('form__text-input')}>
              <input
                type="text"
                name="district-province"
                id="district-province"
                placeholder="Quận, Huyện, Tỉnh"
                className={cx('form__input')}
              />
            </div>
          </div>
          <div className={cx('form__group')}>
            <label htmlFor="city" className={cx('form__label', 'form__label--lg')}>
              Thành Phố
            </label>
            <div className={cx('form__text-input')}>
              <input type="text" name="city" id="city" placeholder="Thành Phố" className={cx('form__input')} />
            </div>
          </div>
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

export default ProfileAddress;
