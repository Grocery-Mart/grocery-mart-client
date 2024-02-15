import { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { EmailIcon, PasswordIcon, GoogleIcon } from '~/components/Icons';
import routes from '~/config/routes';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submit, setSubmit] = useState(true);
    const [showPassword, setShowPassword] = useState('password');

    const emailRegex = useMemo(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, []);
    const passwordRegex = useMemo(() => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@-_]).{8,}$/, []);
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const checkSubmit = useCallback(() => {
        setSubmit(
            !emailRegex.test(email) ||
                !passwordRegex.test(password) ||
                confirmPassword !== password ||
                email === '' ||
                password === '' ||
                confirmPassword === '',
        );
    }, [emailRegex, passwordRegex, email, password, confirmPassword]);

    const handleChangeEmail = useCallback(() => {
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
    }, [email, checkSubmit, emailRegex, errors]);

    const handleChangePassword = useCallback(() => {
        if (!passwordRegex.test(password)) {
            setErrors({
                ...errors,
                password:
                    'Mật khẩu phải có tối thiểu 8 ký tự chứa ít nhất 1 chữ số, 1 chữ cái viết hoa, 1 chứ cái viết thường, và 1 ký tự đặc biệt @,-,_',
            });
        }
        if (password === '') {
            setErrors({ ...errors, password: 'Vui lòng nhập password' });
        }
        if (passwordRegex.test(password)) {
            setErrors({ ...errors, password: '' });
        }
        checkSubmit();
    }, [passwordRegex, password, errors, checkSubmit]);

    const handleChangeConfirmPassword = useCallback(() => {
        if (confirmPassword !== password) {
            setErrors({
                ...errors,
                confirmPassword: 'Mật khẩu không đúng, vui lòng nhập lại',
            });
        }
        if (confirmPassword === '') {
            setErrors({ ...errors, confirmPassword: 'Vui lòng nhập lại password' });
        }
        if (confirmPassword === password) {
            setErrors({ ...errors, confirmPassword: '' });
        }
        checkSubmit();
    }, [confirmPassword, password, errors, checkSubmit]);

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
                        Đăng nhập với Google
                    </Button>
                </div>
            </form>
            <p className={cx('inner__text')}>
                Bạn đã có tài khoản?
                <Link className={cx('inner__link')} to={routes.login}>
                    Đăng nhập
                </Link>
            </p>
        </div>
    );
}

export default SignUp;
