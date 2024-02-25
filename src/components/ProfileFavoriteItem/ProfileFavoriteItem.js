import classNames from 'classnames/bind';

import styles from './ProfileFavoriteItem.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ProfileFavoriteItem() {
  return (
    <article className={cx('favorite-item')}>
      <img src={images.product1} alt="" className={cx('favorite-item__thumb')} />
      <div>
        <h3 className={cx('favorite-item__title')}>Coffee Beans - Espresso Arabica and Robusta Beans</h3>
        <div className={cx('favorite-item__content')}>
          <span className={cx('favorite-item__price')}>$47.00</span>
          <Button favoriteCheckout primary>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProfileFavoriteItem;
