import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Favorite.module.scss';

import routes from '~/config/routes';
import images from '~/assets/images';
import SearchInput from '~/components/SearchInput';
import { ArrowRightIcon } from '~/components/Icons';
import FavoriteItem from '~/components/FavoriteItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Favorite() {
  const DataProduct = [
    {
      id: 1,
      image: images.product1,
      title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      brand: 'Lavazza',
      price: '47.00',
      quantity: 1,
    },
    {
      id: 2,
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '53.00',
      quantity: 1,
    },
    {
      id: 3,
      image: images.product3,
      title: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      brand: 'welikecoffee',
      price: '99.99',
      quantity: 1,
    },
  ];

  const [cartProduct, setCartProduct] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [countChecked, setCountChecked] = useState(0);
  const inputCheckAll = useRef(null);
  const dataProductLength = DataProduct.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (countChecked === dataProductLength) {
      inputCheckAll.current.checked = true;
      setCheckAll(true);
    } else {
      inputCheckAll.current.checked = false;
    }
    if (countChecked === 0 && checkAll === true) {
      setCheckAll(false);
    }
  }, [countChecked, dataProductLength]);

  const handleCheckCountItemChecked = (isChecked) => {
    if (isChecked && countChecked < dataProductLength) {
      setCountChecked(countChecked + 1);
    }
    if (!isChecked && countChecked > 0) {
      setCountChecked(countChecked - 1);
    }
  };

  const handleAddCartProduct = (isChecked, info) => {
    if (isChecked) {
      setCartProduct((prev) => {
        const newCart = [...prev, info];
        /* Chuyển đổi các object trong mảng sang json, 
                tạo ra 1 set không chứa các giá trị trùng lặp, 
                chuyển sang mảng sau đó chuyển các giá trị thành object */
        const uniqueCart = Array.from(new Set(newCart.map((item) => JSON.stringify(item)))).map((item) =>
          JSON.parse(item),
        );
        return uniqueCart;
      });
    } else {
      setCartProduct((prev) => prev.filter((item) => item.id !== info.id));
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* Search input */}
        <div className={cx('checkout-input')}>
          <SearchInput className={cx('checkout-search')} />
        </div>

        {/* Breadcrumbs */}
        <div className={cx('checkout-container')}>
          <ul className={cx('breadcrumbs')}>
            <li>
              <Link to={routes.home} className={cx('breadcrumbs__link')}>
                Trang chủ
                <ArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link to={'#!'} className={cx('breadcrumbs__link', 'breadcrumbs__link--current')}>
                Yêu thích
              </Link>
            </li>
          </ul>
        </div>

        {/* Checkout content */}
        <div className={cx('checkout-container')}>
          <div className={cx('row gy-4 gy-lg-5 gy-md-5 gy-sm-4')}>
            <div className={cx('col-12')}>
              <div className={cx('cart-info')}>
                <h1 className={cx('cart-info__heading')}>Sản phẩm yêu thích</h1>
                <p className={cx('cart-info__desc')}>3 sản phẩm</p>
                <div className={cx('cart-info__check-all')}>
                  <label className={cx('cart-info__checkbox')}>
                    <input
                      ref={inputCheckAll}
                      onChange={(e) => {
                        setCheckAll(!checkAll);
                        if (e.target.checked) {
                          setCountChecked(DataProduct.length);
                        } else {
                          setCountChecked(0);
                        }
                      }}
                      onClick={() => {
                        if (countChecked < DataProduct.length) {
                          setCheckAll(true);
                        }
                      }}
                      id="check-all"
                      name="check-all"
                      type="checkbox"
                      className={cx('cart-info__checkbox-input')}
                    />
                  </label>
                </div>

                <div className={cx('cart-info__list')}>
                  {DataProduct.map((product, index) => (
                    <FavoriteItem
                      id={index + 1}
                      data={product}
                      key={index}
                      checkAll={checkAll}
                      countChecked={countChecked}
                      dataProductLength={dataProductLength}
                      onCheckCountItemChecked={handleCheckCountItemChecked}
                      onAddCartProduct={handleAddCartProduct}
                    />
                  ))}
                </div>
                <div className={cx('cart-info__bottom')}>
                  <div className={cx('cart-info__row')}>
                    <div className={cx('cart-info__continue')}>
                      <Link to={routes.home} className={cx('cart-info__continue-link')}>
                        <ArrowRightIcon className={cx('cart-info__continue-arrow')} />
                        Tiếp tục mua hàng
                      </Link>
                    </div>

                    <Button favoriteCheckout checkoutAll primary>
                      Thanh toán tất cả
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
