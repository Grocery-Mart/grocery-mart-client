import classNames from 'classnames/bind';

import styles from './CartProduct.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CartProduct() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('border-img')}>
        <img className={cx('img')} src={images.product1} alt="" />
      </div>
      <div className={cx('info')}>
        <p className={cx('title')}>Lavazza Coffee Blends </p>
        <span className={cx('price')}>$329.00</span>
      </div>
    </div>
  );
}

export default CartProduct;
