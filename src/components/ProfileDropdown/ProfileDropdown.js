import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import styles from './ProfileDropdown.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';
import { Link, useLocation } from 'react-router-dom';
import routes from '~/config/routes';
import { ArrowLeftIcon, DarkModeSetting } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProfileDropdown({ children }) {
  const { t } = useTranslation();
  const [isDarkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });
  const langs = Cookies.get('lang');
  const [isLanguages, setIsLanguages] = useState(false);

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

  const handleResetToFirst = () => {
    setIsLanguages(false);
  };

  return (
    <Tippy
      delay={[0, 300]}
      disabled={isDisabled}
      hideOnClick={false}
      onHidden={handleResetToFirst}
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
                    {t('header.prof01')}
                  </Link>
                </li>
                <li>
                  <Link className={cx('user__option')} to={routes.favorite} onClick={() => setDisabled(true)}>
                    {t('header.prof02')}
                  </Link>
                </li>
                <li>
                  <Link
                    className={cx('user__option', 'user__cart')}
                    to={routes.checkout}
                    onClick={() => setDisabled(true)}
                  >
                    <p>{t('header.prof03')}</p>
                    <p className={cx('cart-quantity')}>3</p>
                  </Link>
                </li>
                {!isLanguages && (
                  <>
                    <li>
                      <Link
                        className={cx('user__option', 'separate')}
                        to={''}
                        onClick={() => {
                          setIsLanguages(true);
                        }}
                      >
                        {t('header.prof04')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={cx('user__option')}
                        onClick={() => {
                          handleDarkMode();
                          setDisabled(true);
                        }}
                        to={''}
                      >
                        {isDarkMode ? <span>{t('header.prof05')}</span> : <span>{t('header.prof06')}</span>}
                        <DarkModeSetting className={cx('icon')} />
                      </Link>
                    </li>
                    <li>
                      <Link className={cx('user__option')} to={routes.profile} onClick={() => setDisabled(true)}>
                        {t('header.prof07')}
                      </Link>
                    </li>
                  </>
                )}
                {isLanguages && (
                  <>
                    <li>
                      <Link
                        className={cx('user__option', 'user__option--languages', 'separate')}
                        to={''}
                        onClick={() => {
                          setIsLanguages(false);
                        }}
                      >
                        <ArrowLeftIcon className={cx('icon')} />
                        {t('header.prof04')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={cx('user__option')}
                        to={''}
                        onClick={() => {
                          setDisabled(true);
                          Cookies.set('lang', 'vi');
                          window.location.reload();
                        }}
                      >
                        Việt Nam
                        <img
                          src={images.vi}
                          alt="vi"
                          className={cx('user__language', langs === 'vi' ? 'user__language--current' : '')}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={cx('user__option')}
                        to={''}
                        onClick={() => {
                          setDisabled(true);
                          Cookies.set('lang', 'en');
                          window.location.reload();
                        }}
                      >
                        English
                        <img
                          src={images.en}
                          alt="en"
                          className={cx('user__language', langs === 'en' ? 'user__language--current' : '')}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={cx('user__option')}
                        to={''}
                        onClick={() => {
                          setDisabled(true);
                          Cookies.set('lang', 'zh');
                          window.location.reload();
                        }}
                      >
                        中国
                        <img
                          src={images.zh}
                          alt="zh"
                          className={cx('user__language', langs === 'zh' ? 'user__language--current' : '')}
                        />
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link className={cx('user__option', 'separate')} to={routes.signup} onClick={() => setDisabled(true)}>
                    {t('header.prof09')}
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
