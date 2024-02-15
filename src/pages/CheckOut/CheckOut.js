import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import styles from './CheckOut.module.scss';

import routes from '~/config/routes';
import images from '~/assets/images';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import { ArrowRightIcon, GiftIcon } from '~/components/Icons';
import CheckoutCartItem from '~/components/CheckoutCartItem';

const cx = classNames.bind(styles);

function CheckOut() {
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

    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let newTotalPrice = 0;
        for (const product of DataProduct) {
            newTotalPrice += product.quantity * product.price;
        }
        setTotalPrice(newTotalPrice);
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
                                Giỏ hàng
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Checkout content */}
                <div className={cx('checkout-container')}>
                    <div className={cx('row gy-4 gy-lg-5 gy-md-5 gy-sm-4')}>
                        <div className={cx('col-12 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12')}>
                            <div className={cx('cart-info')}>
                                <div className={cx('cart-info__list')}>
                                    {DataProduct.map((product, index) => (
                                        <CheckoutCartItem id={index + 1} data={product} key={index} />
                                    ))}
                                </div>
                                <div className={cx('cart-info__bottom')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-8 col-xxl-8 col-xl-7')}>
                                            <div className={cx('cart-info__continue')}>
                                                <Link to={routes.home} className={cx('cart-info__continue-link')}>
                                                    <ArrowRightIcon className={cx('cart-info__continue-arrow')} />
                                                    Tiếp tục mua hàng
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={cx('col-4 col-xxl-4 col-xl-5')}>
                                            <div className={cx('cart-info__row')}>
                                                <span>Tổng giá tiền:</span>
                                                <span>{`$${totalPrice}`}</span>
                                            </div>
                                            <div className={cx('cart-info__row')}>
                                                <span>Phí giao hàng:</span>
                                                <span>$10.00</span>
                                            </div>
                                            <div className={cx('cart-info__separate')}></div>
                                            <div className={cx('cart-info__row', 'cart-info__row--bold')}>
                                                <span>Tổng tất cả:</span>
                                                <span>{`$${totalPrice + 10}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-12 col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12')}>
                            <div className={cx('cart-info')}>
                                <div className={cx('cart-info__row')}>
                                    <span>Số sản phẩm:</span>
                                    <span>{DataProduct.length}</span>
                                </div>
                                <div className={cx('cart-info__row')}>
                                    <span>Tổng giá tiền:</span>
                                    <span>{`$${totalPrice}`}</span>
                                </div>
                                <div className={cx('cart-info__row')}>
                                    <span>Phí giao hàng:</span>
                                    <span>$10.00</span>
                                </div>
                                <div className={cx('cart-info__separate')}></div>
                                <div className={cx('cart-info__row')}>
                                    <span>Thành tiền:</span>
                                    <span>{`$${totalPrice + 10}`}</span>
                                </div>
                                <Link to={routes.shipping}>
                                    <Button continueCheckout primary className={cx('cart-info__next-btn')}>
                                        Thanh toán
                                    </Button>
                                </Link>
                            </div>
                            <div className={cx('cart-info')}>
                                <a href="#!">
                                    <article className={cx('gift-item')}>
                                        <div className={cx('gift-item__icon-wrap')}>
                                            <GiftIcon />
                                        </div>
                                        <div className={cx('gift-item__content')}>
                                            <h3 className={cx('gift-item__title')}>
                                                Gửi đơn đặt hàng này như một món quà.
                                            </h3>
                                            <p className={cx('gift-item__desc')}>
                                                Các mặt hàng trên sẽ được chuyển đến người nhận quà của bạn.
                                            </p>
                                        </div>
                                    </article>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
