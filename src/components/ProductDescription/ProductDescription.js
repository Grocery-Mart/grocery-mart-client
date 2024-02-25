import classNames from 'classnames/bind';

import styles from './ProductDescription.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductDescription() {
  return (
    <div className={cx('prod-content')}>
      <div className={cx('row')}>
        <div className={cx('col-12 col-xxl-8 col-xl-8 col-lg-10 col-md-12')}>
          <div className={cx('text-content')}>
            <h2>Cổ điển: 100% Robusta rang đậm.</h2>
            <p>Vị rất đắng, phù hợp người gu mạnh, nhiều caffeine nhất.</p>
            <p>
              <img src={images.product1} alt="" />
              <em>Hình 1</em>
            </p>
            <hr />

            <h2>Truyền thống: 100% Robusta rang vừa. Vị đắng, đậm đà.</h2>
            <blockquote>
              <p>
                Được ưu chuộng, mua nhiều nhất. <a href="#!">Xem thêm</a>
              </p>
            </blockquote>
            <p>
              <img src={images.product2} alt="" />
              <em>Hình 2</em>
            </p>

            <hr />

            <h2>Tinh tế: 100% Arabica Cầu Đất.</h2>
            <p>
              Ít đắng, ít đậm, vị thanh chua nhẹ nhàng kiểu vị trái cây, ít cafeine. Loại này Tây khá thích, hợp với pha
              phin loãng, Cold Brew, French Press.
            </p>
            <p>
              <img src={images.product3} alt="" />
              <em>Hình 3</em>
            </p>

            <hr />

            <h2>Hiện đại: Robusta mix Arabica Cầu Đất.</h2>
            <p>
              Vị đắng nhưng dịu hơn, thanh hơn vị Truyền thống. Túi này mix giữa Đen và Trắng, nhưng nghiêng về phần đậm
              của màu đen nhiều hơn.
            </p>
            <p>
              <img src={images.product4} alt="" />
              <em>Hình 4</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
