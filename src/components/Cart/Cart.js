import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Cart.module.scss';
import Button from '~/components/Button';
import CartProducts from '~/components/CartProducts';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Cart({ children, cart = false }) {
    return (
        <Tippy
            offset={[20, 12]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('content')}>
                            <div className={cx('header')}>
                                <p className={cx('header__title')}>Bạn có 3 sản phẩm</p>
                                <Link to={routes.cart}>
                                    <Button className={cx('header__btn')}>Tất cả</Button>
                                </Link>
                            </div>

                            <div className={cx('products')}>
                                <CartProducts />
                            </div>

                            {cart && (
                                <div className={cx('payment')}>
                                    <div className={cx('payment__item')}>
                                        <span className={cx('payment__label')}>Tổng</span>
                                        <span className={cx('payment__value')}>$415.99</span>
                                    </div>

                                    <div className={cx('payment__item')}>
                                        <span className={cx('payment__label')}>Thuế:</span>
                                        <span className={cx('payment__value')}>Free</span>
                                    </div>

                                    <div className={cx('payment__item')}>
                                        <span className={cx('payment__label')}>Phí giao hàng</span>
                                        <span className={cx('payment__value')}>$10.00</span>
                                    </div>

                                    <div className={cx('payment__item')}>
                                        <span className={cx('payment__label', 'total')}>Tổng tiền cần thanh toán</span>
                                        <span className={cx('payment__value', 'total')}>$425.99</span>
                                    </div>
                                </div>
                            )}

                            <div className={cx('checkout')}>
                                <Link to={routes.cart}>
                                    <Button primary className={cx('checkout-btn')}>
                                        Thanh toán tất cả
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Cart;
