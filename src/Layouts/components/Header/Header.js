import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useCallback, useRef, useState } from 'react';

import styles from './Header.module.scss';
import routes from '~/config/routes';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import Image from '~/components/Image';
import Cart from '~/components/Cart';
import ProfileDropdown from '~/components/ProfileDropdown';
import { ArrowLeftIcon, CartIcon, MenuIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const [openSearch, setOpenSearch] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const navbarElement = useRef(null);

  const openSearchInput = useCallback(() => {
    setOpenSearch((prevOpenSearch) => !prevOpenSearch);
  }, []);

  const handleOpenOverlay = () => {
    if (window.matchMedia('(max-width: 992px)').matches) {
      if (openOverlay) {
        setOpenOverlay(false);
        navbarElement.current.style.transform = 'translateX(-100%)';
        navbarElement.current.style.setProperty('transform', 'translateX(-100%)', 'important');
        navbarElement.current.style.transition = 'transform 0.5s';
      } else {
        setOpenOverlay(true);
        navbarElement.current.style.transform = 'translateX(0)';
        navbarElement.current.style.setProperty('transform', 'translateX(0)', 'important');
        navbarElement.current.style.transition = 'transform 0.5s';
      }
    }
  };

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 991px)').matches) {
      if (navbarElement.current) {
        navbarElement.current.style.transform = 'translateX(0)';
        navbarElement.current.style.setProperty('transform', 'translateX(0)', 'important');
        navbarElement.current.style.transition = 'none';
        setOpenOverlay(false);
      }
    }
    if (window.matchMedia('(max-width: 991px)').matches) {
      if (navbarElement.current) {
        navbarElement.current.style.transform = 'translateX(-100%)';
        navbarElement.current.style.setProperty('transform', 'translateX(-100%)', 'important');
        navbarElement.current.style.transition = 'none';
        setOpenOverlay(false);
      }
    }
  });

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container gx-5')}>
        <div className={cx('content')}>
          <button className={cx('content-menu')} onClick={handleOpenOverlay}>
            <MenuIcon className={cx('icon')} />
          </button>
          <div className={cx('content-left')}>
            <Logo />
            <nav ref={navbarElement} className={cx('navbar')} id="navbar">
              <Button
                className={cx('navbar__close-btn')}
                leftIcon={<ArrowLeftIcon className={cx('icon')} />}
                onClick={handleOpenOverlay}
              ></Button>

              <Link className={cx('navbar__link')} to={routes.home} onClick={handleOpenOverlay}>
                Trang chủ
              </Link>
              <Link className={cx('navbar__link')} to={routes.grocery} onClick={handleOpenOverlay}>
                Cửa hàng tạp hóa
              </Link>
              <Link className={cx('navbar__link')} to={routes.furniture} onClick={handleOpenOverlay}>
                Nhà & Nội thất
              </Link>
              <Link className={cx('navbar__link')} to={routes.fashion} onClick={handleOpenOverlay}>
                Thời trang
              </Link>
            </nav>
          </div>
          <div className={cx('content-right')}>
            {currentUser ? (
              <div className={cx('action')}>
                <div className={cx('action__group', 'action__group--single')}>
                  <button className={cx('action__btn')} onClick={openSearchInput}>
                    <SearchIcon className={cx('icon')} />
                  </button>
                </div>

                {openSearch && <SearchInput className={cx('action__search')} dataAos="fade-up" />}

                <div className={cx('action__group')}>
                  <Cart cart>
                    <button className={cx('action__btn')}>
                      <CartIcon className={cx('icon')} />
                      <span className={cx('action__title')}>$65.42</span>
                    </button>
                  </Cart>
                </div>

                <ProfileDropdown>
                  <Image
                    src="https://lh3.googleusercontent.com/a/ACg8ocJLer4HZfc9c23PAhVoZBwXms-JHj5xacfLY2Pag60q6yM=s360-c-no"
                    alt="avatar"
                    className={cx('action__avatar')}
                  />
                </ProfileDropdown>
              </div>
            ) : (
              <>
                <a href={routes.login}>
                  <Button none text className={cx('action__login')}>
                    Đăng nhập
                  </Button>
                </a>
                <a href={routes.signup}>
                  <Button primary className={cx('action__signup')}>
                    Đăng ký
                  </Button>
                </a>
              </>
            )}
          </div>
          {openOverlay && <div className={cx('overlay')} onClick={handleOpenOverlay} data-aos="fade-right"></div>}
        </div>
      </div>
    </header>
  );
}

export default Header;
