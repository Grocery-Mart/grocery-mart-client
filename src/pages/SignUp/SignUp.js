import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { EmailIcon, PasswordIcon, GoogleIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submit, setSubmit] = useState(true);
    const [showPassword, setShowPassword] = useState('password');

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const handleChangeEmail = () => {
        if (!emailRegex.test(email)) {
            setErrors({ ...errors, email: 'Email không hợp lệ, vui lòng nhập lại' });
        }
        if (email === '') {
            setErrors({ ...errors, email: 'Vui lòng nhập email' });
        }
        if (emailRegex.test(email)) {
            setErrors({ ...errors, email: '' });
        }
        checkSubmit();
    };

    const handleChangePassword = () => {
        if (password.length < 8) {
            setErrors({ ...errors, password: 'Mật khẩu phải có tối thiểu 8 ký tự' });
        }
        if (password === '') {
            setErrors({ ...errors, password: 'Vui lòng nhập password' });
        }
        if (password.length >= 8) {
            setErrors({ ...errors, password: '' });
        }
        checkSubmit();
    };

    const handleChangeConfirmPassword = () => {
        if (confirmPassword !== password) {
            setErrors({
                ...errors,
                confirmPassword: 'Mật khẩu không đúng, vui lòng nhập lại',
            });
        }
        if (confirmPassword === password) {
            setErrors({ ...errors, confirmPassword: '' });
        }
        checkSubmit();
    };

    const checkSubmit = () => {
        setSubmit(
            !emailRegex.test(email) ||
                password.length < 8 ||
                confirmPassword !== password ||
                email === '' ||
                password === '' ||
                confirmPassword === '',
        );
    };

    const handleShowPassword = () => {
        setShowPassword(showPassword === 'password' ? 'text' : 'password');
    };

    return (
        <div className={cx('inner')}>
            <Logo />

            <h1 className={cx('inner__heading')}>Đăng ký</h1>
            <p className={cx('inner__desc')}>
                Hãy tạo tài khoản của bạn và Mua sắm như một người chuyên nghiệp và tiết kiệm tiền.
            </p>
            <form action="" className={cx('inner__form', 'form')}>
                <div className={cx('form__group')}>
                    <div
                        className={cx('form__text-input')}
                        style={errors.email !== '' ? { border: '1px solid red' } : {}}
                    >
                        <input
                            type="email"
                            name=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleChangeEmail}
                            placeholder="Email"
                            className={cx('form__input')}
                        />
                        <EmailIcon className={cx('form__input-icon')} />
                    </div>
                    <p className={cx('form__error')}>{errors.email}</p>
                </div>
                <div className={cx('form__group')}>
                    <div
                        className={cx('form__text-input')}
                        style={errors.password !== '' ? { borderColor: 'red' } : {}}
                    >
                        <input
                            type={showPassword}
                            name=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={handleChangePassword}
                            placeholder="Mật khẩu"
                            className={cx('form__input')}
                        />
                        <PasswordIcon className={cx('form__input-icon')} />
                    </div>
                    <p className={cx('form__error')}>{errors.password}</p>
                </div>
                <div className={cx('form__group')}>
                    <div
                        className={cx('form__text-input')}
                        style={errors.confirmPassword !== '' ? { border: '1px solid red' } : {}}
                    >
                        <input
                            type={showPassword}
                            name=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={handleChangeConfirmPassword}
                            placeholder="Nhập lại mật khẩu"
                            className={cx('form__input')}
                        />
                        <PasswordIcon className={cx('form__input-icon')} />
                    </div>
                    <p className={cx('form__error')}>{errors.confirmPassword}</p>
                </div>
                <div className={cx('form__group', 'form__group--inline')}>
                    <label className={cx('form__checkbox')} onChange={handleShowPassword}>
                        <input type="checkbox" name="" className={cx('form__checkbox-input')} />
                        <span className={cx('form__checkbox-label')}>Hiển thị mật khẩu</span>
                    </label>
                    <a className={cx('inner__link', 'form__pull-right')} href="#!">
                        Khôi phục mật khẩu
                    </a>
                </div>
                <div className={cx('form__group', 'inner__btn-group')}>
                    <Button
                        primary
                        auth
                        disabled={submit}
                        onClick={(e) => {
                            e.preventDefault();
                            alert('Submit from');
                        }}
                    >
                        Đăng ký
                    </Button>
                    <Button
                        leftIcon={<GoogleIcon className={cx('icon-google')} />}
                        auth
                        className={cx('btn--no-margin')}
                    >
                        Đăng ký với Google
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
