/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, forwardRef, useRef } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './FavoriteItem.module.scss';
import Button from '~/components/Button';
import { MinusIcon, PlusIcon, TrashIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

const FavoriteItem = forwardRef(
  ({ data, id, checkAll, countChecked, dataProductLength, onCheckCountItemChecked, onAddCartProduct }, ref) => {
    const { t } = useTranslation();
    const [deleteModal, setDeleteModal] = useState(false);
    const [quantity, setQuantity] = useState(data.quantity);
    const [runOut, setRunOut] = useState(false);

    const checkItem = useRef(null);

    const handleShowDeleteModal = () => {
      setDeleteModal(!deleteModal);
    };

    const handleDeleteConfirm = () => {
      handleShowDeleteModal();
      console.log(id);
    };

    useEffect(() => {
      if (countChecked === dataProductLength) {
        checkItem.current.checked = true;
      } else {
        checkItem.current.checked = false;
      }
      onAddCartProduct(checkItem.current.checked, { ...data, quantity: quantity });
    }, [checkAll]);

    useEffect(() => {
      if (data.status === t('checkout.status02')) {
        setRunOut(true);
      }
    }, [data.status, t]);

    return (
      <article className={cx('cart-item')}>
        <label className={cx('cart-item__checkbox')}>
          <input
            ref={checkItem}
            name="check-item"
            type="checkbox"
            className={cx('cart-item__checkbox-input')}
            onChange={(e) => onAddCartProduct(e.target.checked, { ...data, quantity: quantity })}
            onClick={(e) => onCheckCountItemChecked(e.target.checked)}
          />
        </label>
        <a href="#!">
          <img src={data.image} className={cx('cart-item__thumb')} alt="" />
        </a>
        <div className={cx('cart-item__content')}>
          <div className={cx('cart-item__content-left')}>
            <h3 className={cx('cart-item__title')}>
              <a href="#!">{data.title}</a>
            </h3>
            <p className={cx('cart-item__price-wrap')}>
              {`$${data.price}`} | <span className={cx('cart-item__status', runOut ? 'cart-item__status--run-out' : '')}>{data.status}</span>
            </p>
            <div className={cx('cart-item__ctrl-wrap')}>
              <div className={cx('cart-item__ctrl', 'cart-item__ctrl--md-block')}>
                <div className={cx('cart-item__input')}>{data.brand}</div>
                <div className={cx('cart-item__input')}>
                  <button
                    className={cx('cart-item__input-btn')}
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    <MinusIcon className={cx('icon')} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    className={cx('cart-item__input-btn')}
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <PlusIcon className={cx('icon')} />
                  </button>
                </div>
              </div>
              <div className={cx('cart-item__ctrl', 'cart-item__ctrl--btn')}>
                <Button
                  ref={ref}
                  onClick={() => {
                    handleShowDeleteModal();
                  }}
                  checkoutCartItemCtrl
                  leftIcon={<TrashIcon />}
                  className={cx('btn--no-margin')}
                >
                  {t('button.btn06')}
                </Button>
              </div>
            </div>
          </div>
          <div className={cx('cart-item__content-right')}>
            <p className={cx('cart-item__total-price')}>{`$${(quantity * data.price).toFixed(2)}`}</p>
            <Button className={cx('cart-item__checkout-btn')} favoriteCheckout primary>
            {t('button.btn07')}
            </Button>
          </div>
        </div>

        {deleteModal && (
          <Modal handleShowModal={handleShowDeleteModal} handleConfirm={handleDeleteConfirm} small confirm={t('button.btn06')}>
            {t('modal.message02')}
          </Modal>
        )}
      </article>
    );
  },
);

export default FavoriteItem;
