import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Modal({ children, handleShowModal, handleConfirm, confirm, className, small, large, fill }) {
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
            Hủy
          </Button>
          <Button
            onClick={handleConfirm}
            primary
            deleteBtn={confirm === 'Xóa' || confirm === 'Delete'}
            dialog
            className={cx('dialog__btn', 'btn--no-margin')}
          >
            {confirm ? confirm : 'Xác nhận'}
          </Button>
        </div>
      </div>
      <div className={cx('dialog__overlay')}></div>
    </div>
  );
}

export default Modal;
