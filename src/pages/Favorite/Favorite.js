import { useEffect } from 'react';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                            name="check-all"
                                            type="checkbox"
                                            className={cx('cart-info__checkbox-input')}
                                        />
                                    </label>
                                </div>

                                <div className={cx('cart-info__list')}>
                                    {DataProduct.map((product, index) => (
                                        <FavoriteItem id={index + 1} data={product} key={index} />
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
