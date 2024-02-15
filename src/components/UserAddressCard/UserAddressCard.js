import classNames from 'classnames/bind';

import styles from './UserAddressCard.module.scss';
import Button from '~/components/Button';
import { EditIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function UserAddressCard() {
    return (
        <article className={cx('address-card')}>
            <div className={cx('address-card__left')}>
                <div className={cx('address-card__choose')}>
                    <label className={cx('address-card__checkbox')}>
                        <input name="shipping-address" type="radio" className={cx('address-card__checkbox-input')} />
                    </label>
                </div>
                <div className={cx('address-card__info')}>
                    <h3 className={cx('address-card__title')}>Như Công</h3>
                    <p className={cx('address-card__desc')}>Số 15, ngõ 36, đường An Lạc 1, Hạ Mỗ, Đan Phượng, Hà Nội</p>
                    <ul className={cx('address-card__list')}>
                        <li className={cx('address-card__list-item')}>Đang chuyển hàng</li>
                        <li className={cx('address-card__list-item')}>Giao hàng từ cửa hàng</li>
                    </ul>
                </div>
            </div>
            <div className={cx('address-card__right')}>
                <div className={cx('address-card__ctrl')}>
                    <Button
                        edit
                        leftIcon={<EditIcon className={cx('icon')} />}
                        className={cx('address-card__ctrl-btn')}
                    >
                        Chỉnh sửa
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default UserAddressCard;
