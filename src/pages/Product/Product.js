import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <h2>Product page</h2>
    </div>
  );
}

export default Product;
