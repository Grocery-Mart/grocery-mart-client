import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { ArrowDownIcon, ArrowLeftIcon, CartIcon, MenuIcon, SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '~/components/SearchInput';
import Image from '~/components/Image';
import Cart from '~/components/Cart';
import ProfileDropdown from '~/components/ProfileDropdown';
import ListProductMenu from '~/components/ListProductMenu';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const [openSearch, setOpenSearch] = useState(false);
    const [openOverlay, setOpenOverlay] = useState(false);
    const navbarElement = useRef(null);

    const openSearchInput = () => {
        if (openSearch) {
            setOpenSearch(false);
        } else {
            setOpenSearch(true);
        }
    };

    const location = useLocation();

    const handleOpenOverlay = () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
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
        if (!window.matchMedia('(max-width: 767px)').matches) {
            if (navbarElement.current) {
                navbarElement.current.style.transform = 'translateX(0)';
                navbarElement.current.style.setProperty('transform', 'translateX(0)', 'important');
                navbarElement.current.style.transition = 'none';
                setOpenOverlay(false);
            }
        }
        if (window.matchMedia('(max-width: 767px)').matches) {
            if (navbarElement.current) {
                navbarElement.current.style.transform = 'translateX(-100%)';
                navbarElement.current.style.setProperty('transform', 'translateX(-100%)', 'important');
                navbarElement.current.style.transition = 'none';
                setOpenOverlay(false);
            }
        }
    });

    console.log(navbarElement);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <button className={cx('content-menu')} onClick={handleOpenOverlay}>
                        <MenuIcon className={cx('icon')} />
                    </button>
                    <div className={cx('content-left')}>
                        <Logo />
                        <nav ref={navbarElement} className={cx('navbar')} id="navbar">
                            <Button
                                className={cx('navbar__close-btn')}
                                leftIcon={<ArrowLeftIcon />}
                                onClick={handleOpenOverlay}
                            ></Button>
                            <div>
                                <ListProductMenu departments>
                                    <div className={cx('navbar__link')}>
                                        <p>Danh mục</p>
                                        <ArrowDownIcon className={cx('icon', 'navbar__arrow')} />
                                    </div>
                                </ListProductMenu>
                            </div>

                            <div>
                                <ListProductMenu grocery>
                                    <div className={cx('navbar__link')}>
                                        <p>Cửa hàng tạp hóa</p>
                                        <ArrowDownIcon className={cx('icon', 'navbar__arrow')} />
                                    </div>
                                </ListProductMenu>
                            </div>

                            <div>
                                <ListProductMenu fashion>
                                    <div className={cx('navbar__link')}>
                                        <p>Thời trang</p>
                                        <ArrowDownIcon className={cx('icon', 'navbar__arrow')} />
                                    </div>
                                </ListProductMenu>
                            </div>
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

                                {openSearch && <SearchInput className={cx('action__search')} />}

                                {location.pathname !== '/cart' && (
                                    <div className={cx('action__group')}>
                                        <Cart cart>
                                            <button className={cx('action__btn')}>
                                                <CartIcon className={cx('icon')} />
                                                <span className={cx('action__title')}>$65.42</span>
                                            </button>
                                        </Cart>
                                    </div>
                                )}

                                <ProfileDropdown>
                                    <Image
                                        src="https://wx4.sinaimg.cn/mw690/001Pb9yIgy1hl9fqj7mkuj62te4804qu02.jpg"
                                        alt="avatar"
                                        className={cx('action__avatar')}
                                    />
                                </ProfileDropdown>
                            </div>
                        ) : (
                            <>
                                <Button none text rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                    Đăng nhập
                                </Button>
                                <Button primary>Đăng ký</Button>
                            </>
                        )}
                    </div>
                    {openOverlay && (
                        <div className={cx('overlay')} onClick={handleOpenOverlay} data-aos="fade-right"></div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
