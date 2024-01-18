import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { EmailIcon, PasswordIcon, GoogleIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx('inner')}>
            <Logo />

            <h1 className={cx('inner__heading')}>Đăng ký</h1>
            <p className={cx('inner__desc')}>
                Hãy tạo tài khoản của bạn và Mua sắm như một người chuyên nghiệp và tiết kiệm tiền.
            </p>
            <form action="" className={cx('inner__form', 'form')}>
                <div className={cx('form__group')}>
                    <div className={cx('form__text-input')}>
                        <input type="email" name="" placeholder="Email" className={cx('form__input')} />
                        <EmailIcon className={cx('form__input-icon')} />
                    </div>
                </div>
                <div className={cx('form__group')}>
                    <div className={cx('form__text-input')}>
                        <input type="password" name="" placeholder="Mật khẩu" className={cx('form__input')} />
                        <PasswordIcon className={cx('form__input-icon')} />
                    </div>
                </div>
                <div className={cx('form__group')}>
                    <div className={cx('form__text-input')}>
                        <input type="password" name="" placeholder="Nhập lại mật khẩu" className={cx('form__input')} />
                        <PasswordIcon className={cx('form__input-icon')} />
                    </div>
                </div>
                <div className={cx('form__group', 'form__group--inline')}>
                    <label className={cx('form__checkbox')}>
                        <input type="checkbox" name="" className={cx('form__checkbox-input')} />
                        <span className={cx('form__checkbox-label')}>Đặt làm thẻ mặc định</span>
                    </label>
                    <a className={cx('inner__link', 'form__pull-right')} href="#!">
                        Khôi phục mật khẩu
                    </a>
                </div>
                <div className={cx('form__group', 'inner__btn-group')}>
                    <Button primary auth>
                        Đăng ký
                    </Button>
                    <Button
                        leftIcon={<GoogleIcon className={cx('icon-google')} />}
                        auth
                        className={cx('btn--no-margin')}
                    >
                        Đăng ký với Email
                    </Button>
                </div>
            </form>
            <p className={cx('inner__text')}>
                Bạn đã có tài khoản?
                <a className={cx('inner__link')} href="#!">
                    Đăng nhập
                </a>
            </p>
        </div>
    );
}

export default SignUp;
