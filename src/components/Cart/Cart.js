import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useTranslation } from 'react-i18next';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Cart.module.scss';
import Button from '~/components/Button';
import CartProducts from '~/components/CartProducts';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Cart({ children, cart = false }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [location]);

  return (
    <Tippy
      disabled={isDisabled}
      hideOnClick={false}
      offset={[20, 12]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('content')}>
              <div className={cx('header')}>
                <p className={cx('header__title')}>{t('cart-dropdown.title')}</p>
                <Link to={routes.checkout} onClick={() => setDisabled(true)}>
                  <Button className={cx('header__btn')}>{t('button.btn04')}</Button>
                </Link>
              </div>

              <div className={cx('products')}>
                <CartProducts />
              </div>

              {cart && (
                <div className={cx('payment')}>
                  <div className={cx('payment__item')}>
                    <span className={cx('payment__label')}>{t('cart-dropdown.label01')}</span>
                    <span className={cx('payment__value')}>$415.99</span>
                  </div>

                  <div className={cx('payment__item')}>
                    <span className={cx('payment__label')}>{t('cart-dropdown.label02')}</span>
                    <span className={cx('payment__value')}>{t('cart-dropdown.value02')}</span>
                  </div>

                  <div className={cx('payment__item')}>
                    <span className={cx('payment__label')}>{t('cart-dropdown.label03')}</span>
                    <span className={cx('payment__value')}>$10.00</span>
                  </div>

                  <div className={cx('payment__item')}>
                    <span className={cx('payment__label', 'total')}>{t('cart-dropdown.label04')}</span>
                    <span className={cx('payment__value', 'total')}>$425.99</span>
                  </div>
                </div>
              )}

              <div className={cx('checkout')}>
                <Link to={routes.checkout} onClick={() => setDisabled(true)}>
                  <Button primary className={cx('checkout-btn')}>
                    {t('button.btn03')}
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
