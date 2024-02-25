import classNames from 'classnames/bind';

import styles from './CartProducts.module.scss';
import CartProduct from '~/components/CartProducts/CartProduct';

const cx = classNames.bind(styles);

function CartProducts() {
  return (
    <div className={cx('container')}>
      <div className={cx('row', 'product-list')}>
        <div className={cx('col-4')}>
          <CartProduct />
        </div>

        <div className={cx('col-4')}>
          <CartProduct />
        </div>

        <div className={cx('col-4')}>
          <CartProduct />
        </div>

        {/* <div className={cx('col-4')}>
                    <CartProduct />
                </div> */}
      </div>
    </div>
  );
}

export default CartProducts;
