import classNames from 'classnames/bind';
import { useState, useRef, useCallback } from 'react';

import styles from './AddUserAddress.module.scss';

import Modal from '~/components/Modal';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AddUserAddress({ handleShowModal, handleConfirm }) {
    const [showOptions, setShowOptions] = useState(false);
    const formSelectOptions = useRef(null);

    const handleShowOptions = useCallback(() => {
        setShowOptions((preOptions) => !preOptions);
    }, []);

    return (
        <Modal
            handleShowModal={handleShowModal}
            handleConfirm={handleConfirm}
            confirm={'Tạo mới'}
            className={cx('address-modal')}
        >
            <div className={cx('address')}>
                <h2 className={cx('address__heading')}>Thêm địa chỉ giao hàng mới</h2>
                <div className={cx('address__body')}>
                    <form action="" className={cx('form')} autoComplete="off">
                        <div className={cx('form__row')}>
                            <div className={cx('form__group')}>
                                <label htmlFor="name" className={cx('form__label', 'form__label--sm')}>
                                    Họ tên
                                </label>
                                <div className={cx('form__text-input', 'form__text-input--sm')}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Họ tên"
                                        className={cx('form__input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('form__group')}>
                                <label htmlFor="phone" className={cx('form__label', 'form__label--sm')}>
                                    Điện thoại
                                </label>
                                <div className={cx('form__text-input', 'form__text-input--sm')}>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Điện thoại"
                                        className={cx('form__input')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('form__group')}>
                            <label htmlFor="address" className={cx('form__label', 'form__label--sm')}>
                                Địa chỉ
                            </label>
                            <div className={cx('form__text-area', 'form__text-area--sm')}>
                                <textarea
                                    id="address"
                                    name="address"
                                    placeholder="Địa chỉ (Số nhà, Đường, Xã)"
                                    className={cx('form__text-area-input')}
                                ></textarea>
                            </div>
                        </div>
                        <div className={cx('form__group')}>
                            <label htmlFor="city" className={cx('form__label', 'form__label--sm')}>
                                Thành phố/Quận/Huyện
                            </label>
                            <div className={cx('form__text-input', 'form__text-input--sm')}>
                                <input
                                    ref={formSelectOptions}
                                    onClick={handleShowOptions}
                                    readOnly
                                    type="text"
                                    id="city"
                                    name=""
                                    placeholder="Thành phố/Quận/Huyện"
                                    className={cx('form__input')}
                                />

                                {showOptions && (
                                    <div
                                        className={cx('form__select-dialog')}
                                        data-aos="zoom-in"
                                        data-aos-duration="100"
                                    >
                                        <div className={cx('form__heading-dialog')}>
                                            <h2 className={cx('form__heading-dialog-title')}>Thành phố/Quận/Huyện</h2>
                                            <button onClick={handleShowOptions} className={cx('form__close-dialog')}>
                                                &times;
                                            </button>
                                        </div>
                                        <div className={cx('form__search')}>
                                            <input className={cx('form__search-input')} placeholder="Search" />
                                            <SearchIcon className={cx('form__search-icon')} />
                                        </div>
                                        <ul className={cx('form__options-list')}>
                                            <li className={cx('form__option', 'form__option--current')}>Hà Nội</li>
                                            <li className={cx('form__option')}>Hồ Chí Minh</li>
                                            <li className={cx('form__option')}>Đà Nẵng</li>
                                            <li className={cx('form__option')}>Hải Phòng</li>
                                            <li className={cx('form__option')}>Đà Lạt</li>
                                            <li className={cx('form__option')}>Nha Trang</li>
                                            <li className={cx('form__option')}>Hà Nội</li>
                                            <li className={cx('form__option')}>Hồ Chí Minh</li>
                                            <li className={cx('form__option')}>Đà Nẵng</li>
                                            <li className={cx('form__option')}>Hải Phòng</li>
                                            <li className={cx('form__option')}>Đà Lạt</li>
                                            <li className={cx('form__option')}>Nha Trang</li>
                                            <li className={cx('form__option')}>Hà Nội</li>
                                            <li className={cx('form__option')}>Hồ Chí Minh</li>
                                            <li className={cx('form__option')}>Đà Nẵng</li>
                                            <li className={cx('form__option')}>Hải Phòng</li>
                                            <li className={cx('form__option')}>Đà Lạt</li>
                                            <li className={cx('form__option')}>Nha Trang</li>
                                            <li className={cx('form__option')}>Hà Nội</li>
                                            <li className={cx('form__option')}>Hồ Chí Minh</li>
                                            <li className={cx('form__option')}>Đà Nẵng</li>
                                            <li className={cx('form__option')}>Hải Phòng</li>
                                            <li className={cx('form__option')}>Đà Lạt</li>
                                            <li className={cx('form__option')}>Nha Trang</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={cx('form__group', 'form__group--inline')}>
                            <label className={cx('form__checkbox')}>
                                <input type="checkbox" name="" className={cx('form__checkbox-input')} />
                                <span className={cx('form__checkbox-label')}>Đặt là địa chỉ mặc định</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default AddUserAddress;
