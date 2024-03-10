import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Shipping.module.scss';

import routes from '~/config/routes';
import images from '~/assets/images';
import { AddAddressIcon, ArrowRightIcon } from '~/components/Icons';
import CheckoutCartItem from '~/components/CheckoutCartItem';
import Button from '~/components/Button';
import UserAddressCard from '~/components/UserAddressCard';
import AddUserAddress from '~/components/AddUserAddress';

const cx = classNames.bind(styles);

function Shipping() {
  const { t } = useTranslation();
  const DataProduct = [
    {
      id: 1,
      image: images.product1,
      title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      brand: 'Lavazza',
      price: '47.00',
      quantity: 1,
      status: t('checkout.status01'),
    },
    {
      id: 2,
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '53.00',
      quantity: 1,
      status: t('checkout.status02'),
    },
    {
      id: 3,
      image: images.product3,
      title: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      brand: 'welikecoffee',
      price: '99.99',
      quantity: 1,
      status: t('checkout.status01'),
    },
  ];
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
        {/* Breadcrumbs */}
        <div className={cx('checkout-container')}>
          <ul className={cx('breadcrumbs')}>
            <li>
              <Link to={routes.home} className={cx('breadcrumbs__link')}>
                {t('header.na01')}
                <ArrowRightIcon />
              </Link>
            </li>
            <li>
              <Link to={routes.checkout} className={cx('breadcrumbs__link')}>
                {t('header.prof03')}
                <ArrowRightIcon />
              </Link>
            </li>

            <li>
              <a href="#!" className={cx('breadcrumbs__link', 'breadcrumbs__link--current')}>
                {t('header.na05')}
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
                {t('shipping.heading')}
                </h1>
                <div className={cx('cart-info__separate')}></div>

                {/* Checkout address */}
                <div className={cx('user-address')}>
                  <div className={cx('user-address__top')}>
                    <div>
                      <h2 className={cx('user-address__title')}>{t('shipping.title01')}</h2>
                      <p className={cx('user-address__desc')}>{t('shipping.desc01')}</p>
                    </div>
                    <Button onClick={handleShowModal} addAddress primary leftIcon={<AddAddressIcon />}>
                      {t('button.btn10')}
                    </Button>
                  </div>
                  <div className={cx('user-address__list')}>
                    {/* Empty message */}
                    {/* <p className={cx('user-address__message')}>
                      t('shipping.desc02')}{' '}
                      <a href="#!" className={cx('user-address__link')}>
                        {t('shipping.btn10')}
                      </a>
                    </p> */}

                    <UserAddressCard />
                    <UserAddressCard />
                  </div>
                </div>

                <div className={cx('cart-info__separate')}></div>
                <h2 className={cx('cart-info__sub-heading')}>{t('shipping.title02')}</h2>

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
                          {t('checkout.title06')}
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
                  <span>{t('checkout.title01')}</span>
                  <span>{DataProduct.length}</span>
                </div>
                <div className={cx('cart-info__row')}>
                  <span>{t('checkout.title02')}</span>
                  <span>{`$${totalPrice}`}</span>
                </div>
                <div className={cx('cart-info__row')}>
                  <span>{t('checkout.title03')}</span>
                  <span>$10.00</span>
                </div>
                <div className={cx('cart-info__separate')}></div>
                <div className={cx('cart-info__row')}>
                  <span>{t('checkout.title04')}</span>
                  <span>{`$${totalPrice + 10}`}</span>
                </div>
                <Link to={routes.payment_method}>
                  <Button continueCheckout primary className={cx('cart-info__next-btn')}>
                    {t('button.btn12')}
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
