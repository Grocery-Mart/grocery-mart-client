import { useState, forwardRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './CheckoutCartItem.module.scss';
import Button from '~/components/Button';
import { MinusIcon, PlusIcon, SaveIcon, TrashIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

const CheckoutCartItem = forwardRef(({ data, id }, ref) => {
  const { t } = useTranslation();
  const [saveModal, setSaveModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [quantity, setQuantity] = useState(data.quantity);
  const [runOut, setRunOut] = useState(false);

  const handleShowSaveModal = () => {
    setSaveModal(!saveModal);
  };

  const handleShowDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleSaveConfirm = () => {
    handleShowSaveModal();
    console.log(id);
  };

  const handleDeleteConfirm = () => {
    handleShowDeleteModal();
    console.log(id);
  };

  useEffect(() => {
    if (data.status === t('checkout.status02')) {
      setRunOut(true);
    }
  }, [data.status, t]);

  return (
    <article className={cx('cart-item')}>
      <a href="#!">
        <img src={data.image} className={cx('cart-item__thumb')} alt="" />
      </a>
      <div className={cx('cart-item__content')}>
        <div className={cx('cart-item__content-left')}>
          <h3 className={cx('cart-item__title')}>
            <a href="#!">{data.title}</a>
          </h3>
          <p className={cx('cart-item__price-wrap')}>
            {`$${data.price}`} |{' '}
            <span className={cx('cart-item__status', runOut ? 'cart-item__status--run-out' : '')}>{data.status}</span>
          </p>
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
        </div>
        <div className={cx('cart-item__content-right')}>
          <p className={cx('cart-item__total-price')}>{`$${(quantity * data.price).toFixed(2)}`}</p>
          <div className={cx('cart-item__ctrl', 'cart-item__ctrl--btn')}>
            <Button
              onClick={() => {
                handleShowSaveModal();
              }}
              checkoutCartItemCtrl
              leftIcon={<SaveIcon />}
            >
              {t('button.btn05')}
            </Button>
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
      {saveModal && (
        <Modal
          handleShowModal={handleShowSaveModal}
          handleConfirm={handleSaveConfirm}
          small
          confirm={t('button.btn08')}
        >
          {t('modal.message01')}
        </Modal>
      )}
      {deleteModal && (
        <Modal
          handleShowModal={handleShowDeleteModal}
          handleConfirm={handleDeleteConfirm}
          small
          confirm={t('button.btn06')}
        >
          {t('modal.message02')}
        </Modal>
      )}
    </article>
  );
});

export default CheckoutCartItem;
