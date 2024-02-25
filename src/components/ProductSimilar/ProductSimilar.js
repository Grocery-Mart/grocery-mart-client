import classNames from 'classnames/bind';

import styles from './ProductSimilar.module.scss';

import images from '~/assets/images';
import Product from '~/components/Product';

const cx = classNames.bind(styles);

function ProductSimilar() {
  const DataProducts = [
    {
      image: images.product1,
      title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      brand: 'Lavazza',
      price: '$47.00',
      score: '4.3',
    },
    {
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '$53.00',
      score: '3.4',
    },
    {
      image: images.product3,
      title: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      brand: 'welikecoffee',
      price: '$99.99',
      score: '5.0',
    },
    {
      image: images.product4,
      title: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
      brand: 'Lavazza',
      price: '$38.65',
      score: '4.4',
    },
    {
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '$53.00',
      score: '3.4',
    },
  ];

  return (
    <div className={cx('prod-content')}>
      <h2 className={cx('prod-content__heading')}>Các mặt hàng tương tự bạn có thể thích</h2>
      <div className={cx('prod-content__similar')}>
        <div
          className={cx('row row-cols-1 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 g-4')}
        >
          {DataProducts &&
            DataProducts.map((data, index) => (
              <div className={cx('col')} key={index}>
                <Product data={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSimilar;
