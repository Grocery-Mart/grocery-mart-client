import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Shipping.module.scss';

import routes from '~/config/routes';
import images from '~/assets/images';
import SearchInput from '~/components/SearchInput';
import { AddAddressIcon, ArrowRightIcon } from '~/components/Icons';
import CheckoutCartItem from '~/components/CheckoutCartItem';
import Button from '~/components/Button';
import UserAddressCard from '~/components/UserAddressCard';
import AddUserAddress from '~/components/AddUserAddress';

const cx = classNames.bind(styles);

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

function Shipping() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);

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

    const handleShowModal = () => {
        setModal(!modal);
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
                            <Link to={routes.checkout} className={cx('breadcrumbs__link')}>
                                Giỏ hàng
                                <ArrowRightIcon />
                            </Link>
                        </li>

                        <li>
                            <a href="#!" className={cx('breadcrumbs__link', 'breadcrumbs__link--current')}>
                                Vận chuyển
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Checkout content */}
                <div className={cx('checkout-container')}>
                    <div className={cx('row gy-4 gy-lg-5 gy-md-5 gy-sm-4')}>
                        <div className={cx('col-12 col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12')}>
                            <div className={cx('cart-info')}>
                                <h1 className={cx('cart-info__heading')}>
                                    1. Vận chuyển, đến từ Thứ Hai, ngày 16 tháng 5—Thứ Ba, ngày 24 tháng 5
                                </h1>
                                <div className={cx('cart-info__separate')}></div>

                                {/* Checkout address */}
                                <div className={cx('user-address')}>
                                    <div className={cx('user-address__top')}>
                                        <div>
                                            <h2 className={cx('user-address__title')}>Địa chỉ giao hàng</h2>
                                            <p className={cx('user-address__desc')}>
                                                Chúng tôi nên giao hàng cho bạn ở đâu?
                                            </p>
                                        </div>
                                        <Button
                                            onClick={handleShowModal}
                                            addAddress
                                            primary
                                            leftIcon={<AddAddressIcon />}
                                        >
                                            Thêm địa chỉ mới
                                        </Button>
                                    </div>
                                    <div className={cx('user-address__list')}>
                                        {/* Empty message */}
                                        {/* <p className={cx('user-address__message')}>
                                            Bạn chưa có địa chỉ nào.{' '}
                                            <a href="#!" className={cx('user-address__link')}>
                                                Thêm địa chỉ mới
                                            </a>
                                        </p> */}

                                        <UserAddressCard />
                                        <UserAddressCard />
                                    </div>
                                </div>

                                <div className={cx('cart-info__separate')}></div>
                                <h2 className={cx('cart-info__sub-heading')}>Chi tiết các sản phẩm</h2>

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
                                <Link to={routes.payment_method}>
                                    <Button continueCheckout primary className={cx('cart-info__next-btn')}>
                                        Tiếp tục thanh toán
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <AddUserAddress handleShowModal={handleShowModal} />}
        </div>
    );
}

export default Shipping;
