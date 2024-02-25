import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './ProfileDropdown.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';
import { Link, useLocation } from 'react-router-dom';
import routes from '~/config/routes';
import { DarkModeSetting } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileDropdown({ children }) {
  const [isDarkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const location = useLocation();
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [location]);

  return (
    <Tippy
      disabled={isDisabled}
      hideOnClick={false}
      offset={[12, 12]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('user')}>
              <div className={cx('user__top')}>
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocJLer4HZfc9c23PAhVoZBwXms-JHj5xacfLY2Pag60q6yM=s360-c-no"
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
                  <Link className={cx('user__option')} to={routes.profile} onClick={() => setDisabled(true)}>
                    Hồ sơ
                  </Link>
                </li>
                <li>
                  <Link className={cx('user__option')} to={routes.favorite} onClick={() => setDisabled(true)}>
                    Yêu thích
                  </Link>
                </li>
                <li>
                  <Link
                    className={cx('user__option', 'user__cart')}
                    to={routes.checkout}
                    onClick={() => setDisabled(true)}
                  >
                    <p>Giỏ hàng</p>
                    <p className={cx('cart-quantity')}>3</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className={cx('user__option', 'separate')}
                    onClick={() => {
                      handleDarkMode();
                      setDisabled(true);
                    }}
                    to={''}
                  >
                    {isDarkMode ? <span>Chế độ sáng</span> : <span>Chế độ tối</span>}
                    <DarkModeSetting className={cx('icon')} />
                  </Link>
                </li>
                <li>
                  <Link className={cx('user__option')} to={routes.profile} onClick={() => setDisabled(true)}>
                    Cài đặt
                  </Link>
                </li>
                <li>
                  <Link className={cx('user__option', 'separate')} to={routes.signup} onClick={() => setDisabled(true)}>
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
