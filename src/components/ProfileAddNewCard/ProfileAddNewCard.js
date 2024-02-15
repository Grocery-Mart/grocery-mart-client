import classNames from 'classnames/bind';

import styles from './ProfileAddNewCard.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileAddNewCard({ handleCancel }) {
    return (
        <div className={cx('col-12')}>
            <h2 className={cx('add-card__heading')}>
                <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
                Thêm thẻ tín dụng hoặc thẻ ghi nợ
            </h2>

            <form action="" className={cx('form', 'form-card')}>
                <div className={cx('form__row')}>
                    <div className={cx('form__group')}>
                        <label htmlFor="first-name" className={cx('form__label', 'form__label--lg')}>
                            Tên
                        </label>
                        <div className={cx('form__text-input')}>
                            <input
                                autoFocus
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Tên"
                                className={cx('form__input')}
                            />
                        </div>
                    </div>
                    <div className={cx('form__group')}>
                        <label htmlFor="last-name" className={cx('form__label', 'form__label--lg')}>
                            Họ
                        </label>
                        <div className={cx('form__text-input')}>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                placeholder="Họ"
                                className={cx('form__input')}
                            />
                        </div>
                    </div>
                </div>

                <div className={cx('form__row')}>
                    <div className={cx('form__group')}>
                        <label htmlFor="card-number" className={cx('form__label', 'form__label--lg')}>
                            Số thẻ
                        </label>
                        <div className={cx('form__text-input')}>
                            <input
                                type="text"
                                name="card-number"
                                id="card-number"
                                placeholder="Số thẻ"
                                className={cx('form__input')}
                            />
                        </div>
                    </div>
                    <div className={cx('form__group')}>
                        <label htmlFor="expiration-date" className={cx('form__label', 'form__label--lg')}>
                            Ngày hết hạn
                        </label>
                        <div className={cx('form__text-input')}>
                            <input
                                type="text"
                                name="expiration-date"
                                id="expiration-date"
                                placeholder="Ngày hết hạn"
                                className={cx('form__input')}
                            />
                        </div>
                    </div>
                </div>

                <div className={cx('form__row')}>
                    <div className={cx('form__group')}>
                        <label htmlFor="card-ccv" className={cx('form__label', 'form__label--lg')}>
                            CVV
                        </label>
                        <div className={cx('form__text-input')}>
                            <input
                                type="text"
                                name="card-ccv"
                                id="card-ccv"
                                placeholder="CCV"
                                className={cx('form__input')}
                            />
                        </div>
                    </div>
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
                </div>

                <div className={cx('form__group')}>
                    <label htmlFor="set-default-card" className={cx('form__label', 'form__label--lg')}>
                        Tùy chọn thẻ
                    </label>
                    <label className={cx('form__checkbox')}>
                        <input
                            type="checkbox"
                            name="set-default-card"
                            id="set-default-card"
                            className={cx('form__checkbox-input')}
                        />
                        <span className={cx('form__checkbox-label')}>Đặt làm thẻ mặc định</span>
                    </label>
                </div>

                <div className={cx('form-card__bottom')}>
                    <Button onClick={handleCancel}>Hủy</Button>
                    <Button favoriteCheckout primary>
                        Lưu thẻ
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ProfileAddNewCard;
