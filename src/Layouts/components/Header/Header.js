import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

import routes from '~/config/routes';
import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { ArrowDownIcon, CartIcon, HeartIcon, MenuIcon, SearchIcon } from '~/components/Icons';
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

    const openSearchInput = () => {
        if (openSearch) {
            setOpenSearch(false);
        } else {
            setOpenSearch(true);
        }
    };

    const location = useLocation();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <button className={cx('content-menu')}>
                        <MenuIcon className={cx('icon')} />
                    </button>
                    <div className={cx('content-left')}>
                        <Logo />
                        <nav className={cx('navbar')}>
                            <div>
                                <ListProductMenu className={cx('departments')} offset={[-330, 45]} departments>
                                    <div className={cx('navbar__link')}>
                                        <p>Danh mục</p>
                                        <ArrowDownIcon className={cx('icon', 'navbar__arrow')} />
                                    </div>
                                </ListProductMenu>
                            </div>

                            <div>
                                <ListProductMenu className={cx('grocery')} offset={[-460, 45]} grocery>
                                    <div className={cx('navbar__link')}>
                                        <p>Cửa hàng tạp hóa</p>
                                        <ArrowDownIcon className={cx('icon', 'navbar__arrow')} />
                                    </div>
                                </ListProductMenu>
                            </div>

                            <div>
                                <ListProductMenu className={cx('beauty')} offset={[-645, 45]} beauty>
                                    <div className={cx('navbar__link')}>
                                        <p>Sắc đẹp</p>
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
                                    <Tippy content="Tìm kiếm">
                                        <button className={cx('action__btn')} onClick={openSearchInput}>
                                            <SearchIcon className={cx('icon')} />
                                        </button>
                                    </Tippy>
                                </div>

                                {openSearch && <SearchInput className={cx('action__search')} />}

                                {location.pathname !== '/cart' && (
                                    <div className={cx('action__group')}>
                                        <Cart>
                                            <button className={cx('action__btn')}>
                                                <HeartIcon className={cx('icon')} />
                                                <span className={cx('action__title')}>03</span>
                                            </button>
                                        </Cart>

                                        <div className={cx('action__separate')}></div>

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
                </div>
            </div>
        </header>
    );
}

export default Header;
