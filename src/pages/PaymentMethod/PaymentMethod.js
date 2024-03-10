import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './PaymentMethod.module.scss';

import routes from '~/config/routes';
import images from '~/assets/images';
import { ArrowRightIcon, EditIcon } from '~/components/Icons';
import Button from '~/components/Button';
import AddUserAddress from '~/components/AddUserAddress';

const cx = classNames.bind(styles);

function PaymentMethod() {
  const { t } = useTranslation();
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
  const [paymentCost, setPaymentCost] = useState('');
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
              <Link to={routes.shipping} className={cx('breadcrumbs__link')}>
                {t('header.na05')}
                <ArrowRightIcon />
              </Link>
            </li>
            <li>
              <a href="#!" className={cx('breadcrumbs__link', 'breadcrumbs__link--current')}>
              {t('header.na06')}
              </a>
            </li>
          </ul>
        </div>

        {/* Checkout content */}
        <div className={cx('checkout-container')}>
          <div className={cx('row gy-4 gy-lg-5 gy-md-5 gy-sm-4')}>
            <div className={cx('col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12')}>
              <div className={cx('cart-info')}>
                <div className={cx('cart-info__top')}>
                  <h2 className={cx('cart-info__heading', 'cart-info__heading--lv2')}>
                  1. {t('shipping.heading')}
                  </h2>
                  <Button edit leftIcon={<EditIcon className={cx('icon')} />} className={cx('card-info__ctrl-btn')}>
                  {t('button.btn11')}
                  </Button>
                </div>

                <article className={cx('payment-item')}>
                  <div className={cx('payment-item__content')}>
                    <div className={cx('payment-item__info')}>
                      <h3 className={cx('payment-item__title')}>Như Công</h3>
                      <p className={cx('payment-item__desc')}>Ngõ 36, Đường An Lạc 1, Hạ Mỗ, Đan Phượng, Hà Nội</p>
                    </div>
                  </div>
                  <div className={cx('payment-item__checked')}></div>
                </article>

                <article className={cx('payment-item')}>
                  <div className={cx('payment-item__content')}>
                    <div className={cx('payment-item__info')}>
                      <h3 className={cx('payment-item__title')}>{t('paymentMethod.title01')}</h3>
                      <p className={cx('payment-item__desc')}>2 {t('paymentMethod.desc01')}</p>
                    </div>
                  </div>
                  <p className={cx('payment-item__view-detail')}>{t('paymentMethod.title02')}</p>
                </article>
              </div>

              <div className={cx('cart-info')}>
                <h2 className={cx('cart-info__heading', 'cart-info__heading--lv2')}>2. {t('paymentMethod.heading')}</h2>
                <div className={cx('cart-info__separate')}></div>

                <h3 className={cx('cart-info__sub-heading')}>{t('paymentMethod.title03')}</h3>
                <article className={cx('payment-item')}>
                  <img src={images.GHN} alt="" className={cx('payment-item__thumb')} />
                  <div className={cx('payment-item__content')}>
                    <div className={cx('payment-item__info')}>
                      <h3 className={cx('payment-item__title')}>{t('paymentMethod.title04')}</h3>
                      <p className={cx('payment-item__desc', 'payment-item__desc--low')}>
                      {t('paymentMethod.desc02')}
                      </p>
                    </div>

                    <span className={cx('payment-item__cost-wrap')}>
                      <label className={cx('cart-info__checkbox')}>
                        <input
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPaymentCost(e.target.value);
                              e.target.checked = true;
                            }
                          }}
                          defaultChecked
                          value="1"
                          id="ghn"
                          name="payment-delivery"
                          type="radio"
                          className={cx('cart-info__checkbox-input', 'payment-item__checkbox-input')}
                        />
                      </label>
                      <label
                        htmlFor="ghn"
                        style={paymentCost === '1' ? { color: 'var(--text-color)', fontWeight: '600' } : {}}
                        className={cx('payment-item__cost')}
                      >
                        $1.00
                      </label>
                    </span>
                  </div>
                </article>

                <article className={cx('payment-item')}>
                  <img src={images.GHTK} alt="" className={cx('payment-item__thumb')} />
                  <div className={cx('payment-item__content')}>
                    <div className={cx('payment-item__info')}>
                      <h3 className={cx('payment-item__title')}>{t('paymentMethod.title05')}</h3>
                      <p className={cx('payment-item__desc', 'payment-item__desc--low')}>
                      {t('paymentMethod.desc03')}
                      </p>
                    </div>
                    <span className={cx('payment-item__cost-wrap')}>
                      <label className={cx('cart-info__checkbox', 'payment-item__checkbox')}>
                        <input
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPaymentCost(e.target.value);
                            }
                          }}
                          value="2"
                          id="ghtk"
                          name="payment-delivery"
                          type="radio"
                          className={cx('cart-info__checkbox-input', 'payment-item__checkbox-input')}
                        />
                      </label>
                      <label
                        htmlFor="ghtk"
                        style={paymentCost === '2' ? { color: 'var(--text-color)', fontWeight: '600' } : {}}
                        className={cx('payment-item__cost')}
                      >
                        $0.80
                      </label>
                    </span>
                  </div>
                </article>
              </div>
            </div>

            <div className={cx('col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12')}>
              <div className={cx('cart-info')}>
                <h2 className={cx('cart-info__heading', 'cart-info__heading--lv2')}>{t('paymentMethod.heading')}</h2>

                <form className={cx('form', 'cart-info__form')}>
                  <div className={cx('form__group')}>
                    <div className={cx('form__radios')}>
                      <input defaultChecked type="radio" id="ship-cod" name="payments" className={cx('form__radio')} />
                      <label htmlFor="ship-cod" className={cx('form__label--medium')}>
                      {t('paymentMethod.title06')}
                      </label>
                    </div>
                  </div>

                  <div className={cx('form__group')}>
                    <div className={cx('form__radios')}>
                      <input type="radio" id="transfer" name="payments" className={cx('form__radio')} />
                      <label htmlFor="transfer" className={cx('form__label--medium')}>
                      {t('paymentMethod.title07')}
                      </label>
                    </div>
                  </div>

                  <div className={cx('form__group')}>
                    <div className={cx('form__radios')}>
                      <input type="radio" id="international-card" name="payments" className={cx('form__radio')} />
                      <label htmlFor="international-card" className={cx('form__label--medium')}>
                      {t('paymentMethod.title08')}
                      </label>
                    </div>
                  </div>
                </form>
                <p className={cx('cart-info__desc')}>{t('paymentMethod.desc04')}</p>
                <img src={images.QR} alt="" className={cx('cart-info__QR')} />

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
                <Link to={'#!'}>
                  <Button continueCheckout primary className={cx('cart-info__next-btn')}>
                  {t('button.btn07')}
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

export default PaymentMethod;
