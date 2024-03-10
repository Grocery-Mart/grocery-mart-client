import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Modal.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Modal({ children, handleShowModal, handleConfirm, confirm, className, small, large, fill }) {
  const { t } = useTranslation();

  return (
    <div className={cx('dialog', { [className]: className, small: small, large: large, fill: fill })}>
      {fill && (
        <button onClick={handleShowModal} className={cx('dialog__close')}>
          &times;
        </button>
      )}
      <div className={cx('dialog__content')} data-aos="zoom-in" data-aos-duration="200">
        <div className={cx('dialog__text')}>{children}</div>
        <div className={cx('dialog__bottom')}>
          <Button onClick={handleShowModal} dialog className={cx('dialog__btn')}>
            {t('button.btn01')}
          </Button>
          <Button
            onClick={handleConfirm}
            primary
            deleteBtn={confirm === t('button.btn06')}
            dialog
            className={cx('dialog__btn', 'btn--no-margin')}
          >
            {confirm ? confirm : t('button.btn09')}
          </Button>
        </div>
      </div>
      <div className={cx('dialog__overlay')}></div>
    </div>
  );
}

export default Modal;
