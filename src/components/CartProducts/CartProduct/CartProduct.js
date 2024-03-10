import classNames from 'classnames/bind';

import styles from './CartProduct.module.scss';
import images from '~/assets/images';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function CartProduct() {
  const { t } = useTranslation();
  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('border-img')}>
        <img className={cx('img')} src={images.product1} alt="" />
      </div>
      <div className={cx('info')}>
        <p className={cx('title')}>{t('products.title1')}</p>
        <span className={cx('price')}>đ55.000</span>
      </div>
    </div>
  );
}

export default CartProduct;
