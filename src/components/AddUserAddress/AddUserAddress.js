import classNames from 'classnames/bind';
import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AddUserAddress.module.scss';

import Modal from '~/components/Modal';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AddUserAddress({ handleShowModal, handleConfirm }) {
  const { t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const formSelectOptions = useRef(null);

  const handleShowOptions = useCallback(() => {
    setShowOptions((preOptions) => !preOptions);
  }, []);

  return (
    <Modal
      handleShowModal={handleShowModal}
      handleConfirm={handleConfirm}
      confirm={t('button.btn13')}
      className={cx('address-modal')}
    >
      <div className={cx('address')}>
        <h2 className={cx('address__heading')}>{t('addUserAddress.heading')}</h2>
        <div className={cx('address__body')}>
          <form action="" className={cx('form')} autoComplete="off">
            <div className={cx('form__row')}>
              <div className={cx('form__group')}>
                <label htmlFor="name" className={cx('form__label', 'form__label--sm')}>
                  {t('addUserAddress.label01')}
                </label>
                <div className={cx('form__text-input', 'form__text-input--sm')}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('addUserAddress.label01')}
                    className={cx('form__input')}
                  />
                </div>
              </div>
              <div className={cx('form__group')}>
                <label htmlFor="phone" className={cx('form__label', 'form__label--sm')}>
                  {t('addUserAddress.label02')}
                </label>
                <div className={cx('form__text-input', 'form__text-input--sm')}>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder={t('addUserAddress.label02')}
                    className={cx('form__input')}
                  />
                </div>
              </div>
            </div>
            <div className={cx('form__group')}>
              <label htmlFor="address" className={cx('form__label', 'form__label--sm')}>
                {t('addUserAddress.label03')}
              </label>
              <div className={cx('form__text-area', 'form__text-area--sm')}>
                <textarea
                  id="address"
                  name="address"
                  placeholder={t('addUserAddress.placeholder01')}
                  className={cx('form__text-area-input')}
                ></textarea>
              </div>
            </div>
            <div className={cx('form__group')}>
              <label htmlFor="city" className={cx('form__label', 'form__label--sm')}>
                {t('addUserAddress.label04')}
              </label>
              <div className={cx('form__text-input', 'form__text-input--sm')}>
                <input
                  ref={formSelectOptions}
                  onClick={handleShowOptions}
                  readOnly
                  type="text"
                  id="city"
                  name=""
                  placeholder={t('addUserAddress.label04')}
                  className={cx('form__input')}
                />

                {showOptions && (
                  <div className={cx('form__select-dialog')} data-aos="zoom-in" data-aos-duration="100">
                    <div className={cx('form__heading-dialog')}>
                      <h2 className={cx('form__heading-dialog-title')}>{t('addUserAddress.label04')}</h2>
                      <button onClick={handleShowOptions} className={cx('form__close-dialog')}>
                        &times;
                      </button>
                    </div>
                    <div className={cx('form__search')}>
                      <input className={cx('form__search-input')} placeholder={t('addUserAddress.desc02')} />
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
                <span className={cx('form__checkbox-label')}>{t('addUserAddress.desc01')}</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default AddUserAddress;
