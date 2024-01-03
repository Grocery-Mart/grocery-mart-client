import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './ProfileDropdown.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { DarkModeSetting } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileDropdown({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        const htmlElement = document.documentElement;

        htmlElement.classList.toggle('dark');

        if (htmlElement.classList.contains('dark')) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('user')}>
                            <div className={cx('user__top')}>
                                <Image
                                    src="https://wx4.sinaimg.cn/mw690/001Pb9yIgy1hl9fqj7mkuj62te4804qu02.jpg"
                                    alt="avatar"
                                    className={cx('user__avatar')}
                                />
                                <div>
                                    <p className={cx('user__name')}>Feng Timo</p>
                                    <p className={cx('user__nickname')}>@fengtimo1219</p>
                                </div>
                            </div>
                            <ul className={cx('user__menu')}>
                                <li>
                                    <Link className={cx('user__option')} to={routes.profile}>
                                        Hồ sơ
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('user__option')} to={routes.profile}>
                                        Yêu thích
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('user__option', 'separate')} onClick={handleDarkMode} to={''}>
                                        {isDarkMode ? <span>Chế độ sáng</span> : <span>Chế độ tối</span>}
                                        <DarkModeSetting className={cx('icon')} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('user__option')} to={routes.profile}>
                                        Cài đặt
                                    </Link>
                                </li>
                                <li>
                                    <Link className={cx('user__option', 'separate')} to={routes.profile}>
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default ProfileDropdown;
