import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './CheckoutCartItem.module.scss';
import Button from '~/components/Button';
import { MinusIcon, PlusIcon, SaveIcon, TrashIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

const CheckoutCartItem = forwardRef(({ data, id }, ref) => {
    const [saveModal, setSaveModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [quantity, setQuantity] = useState(data.quantity);

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
                        {`$${data.price}`} | <span className={cx('cart-item__status')}>In Stock</span>
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
                    <p className={cx('cart-item__total-price')}>{`$${quantity * data.price}`}</p>
                    <div className={cx('cart-item__ctrl', 'cart-item__ctrl--btn')}>
                        <Button
                            onClick={() => {
                                handleShowSaveModal();
                            }}
                            checkoutCartItemCtrl
                            leftIcon={<SaveIcon />}
                        >
                            Save
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
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
            {saveModal && (
                <Modal handleShowModal={handleShowSaveModal} handleConfirm={handleSaveConfirm} small confirm={'Thêm'}>
                    Bạn có chắc chắn muốn thêm sản phẩm này vào Yêu thích?
                </Modal>
            )}
            {deleteModal && (
                <Modal
                    handleShowModal={handleShowDeleteModal}
                    handleConfirm={handleDeleteConfirm}
                    small
                    confirm={'Xóa'}
                >
                    Bạn có chắc chắn muốn xóa sản phẩm này?
                </Modal>
            )}
        </article>
    );
});

export default CheckoutCartItem;
