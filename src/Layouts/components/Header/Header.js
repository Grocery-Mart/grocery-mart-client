import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    const [openSearch, setOpenSearch] = useState(false);

    const openSearchInput = () => {
        if (openSearch) {
            setOpenSearch(false);
        } else {
            setOpenSearch(true);
        }
    };

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
                            <Link to={routes.home} className={cx('navbar__link')}>
                                <p>Danh mục</p>
                                <div className={cx('navbar__arrow')}>
                                    <ArrowDownIcon className={cx('icon')} />
                                </div>
                            </Link>

                            <Link to={routes.home} className={cx('navbar__link')}>
                                <p>Cửa hàng tạp hóa</p>
                                <div className={cx('navbar__arrow')}>
                                    <ArrowDownIcon className={cx('icon')} />
                                </div>
                            </Link>

                            <Link to={routes.home} className={cx('navbar__link')}>
                                <p>Sắc đẹp</p>
                                <div className={cx('navbar__arrow')}>
                                    <ArrowDownIcon className={cx('icon')} />
                                </div>
                            </Link>
                        </nav>
                    </div>
                    <div className={cx('content-right')}>
                        {currentUser ? (
                            <div className={cx('action')}>
                                <div className={cx('action__group', 'action__group--single')}>
                                    <>
                                        <Tippy content='Tìm kiếm'>
                                            <button className={cx('action__btn')} onClick={openSearchInput}>
                                                <SearchIcon className={cx('icon')} />
                                            </button>
                                        </Tippy>
                                    </>
                                </div>

                                {openSearch && <SearchInput className={cx('action__search')}/>}

                                <div className={cx('action__group')}>
                                    <>
                                        <Tippy content='Yêu thích'>
                                            <button className={cx('action__btn')}>
                                                <HeartIcon className={cx('icon')} />
                                                <span className={cx('action__title')}>03</span>
                                            </button>
                                        </Tippy>
                                    </>

                                    <div className={cx('action__separate')}></div>

                                    <>
                                        <Tippy content='Giỏ hàng'>
                                            <button className={cx('action__btn')}>
                                                <CartIcon className={cx('icon')} />
                                                <span className={cx('action__title')}>$65.42</span>
                                            </button>
                                        </Tippy>
                                    </>
                                </div>

                                <div className={cx('action__user')}>
                                    <img
                                        src="https://wx4.sinaimg.cn/mw690/001Pb9yIgy1hl9fqj7mkuj62te4804qu02.jpg"
                                        alt="avatar"
                                        className={cx('action__avatar')}
                                    />
                                </div>
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
