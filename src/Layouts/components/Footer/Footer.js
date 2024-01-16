import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container gx-5')}>
                <div className={cx('footer__inner')}>
                    <div className={cx('footer__row')}>
                        <div className={cx('footer__col')}>
                            <Logo />

                            <p className={cx('footer__desc')}>
                                Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng
                                và mang đến cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi
                                ngày.
                            </p>

                            <p className={cx('footer__help-text')}>Nhận tin tức, cập nhật mới nhất và nhiều thứ khác mỗi tuần.</p>
                            <form action="" className={cx('footer__form')}>
                                <input className={cx('footer__input')} placeholder="Email address" />
                                <Button primary className={cx('footer__form-btn')} rightIcon={<SendIcon />}>SEND</Button>
                            </form>
                        </div>

                        <div className={cx('footer__col')}>
                            <h3 className={cx('footer__heading')}>Cửa hàng</h3>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Trang chủ
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Cửa hàng tạp hóa
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Nhà & Nội thất
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Thời trang
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('footer__col')}>
                            <h3 className={cx('footer__heading')}>Trợ giúp</h3>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Vị trí cửa hàng
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Tình trạng đặt hàng
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('footer__col')}>
                            <h3 className={cx('footer__heading')}>Công ty</h3>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Dịch vụ khách hàng
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Điều khoản sử dụng
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <a href="#!" className={cx('footer__link')}>
                                        Về chúng tôi
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('footer__col')}>
                            <h3 className={cx('footer__heading')}>Liên hệ</h3>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <p className={cx('footer__label')}>Email</p>
                                    <a href="mailto:yeusangtao96@gmail.com" className={cx('footer__link')}>
                                        yeusangtao96@gmail.com
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <p className={cx('footer__label')}>Điện thoại</p>
                                    <a href="tel:+84982155291" className={cx('footer__link')}>
                                        +84 921 55 291
                                    </a>
                                </li>
                                <li className={cx('footer__item')}>
                                    <p className={cx('footer__label')}>Địa chỉ</p>
                                    <p className={cx('footer__text')}>Hạ Mỗ, Đan Phượng, Hà Nội</p>
                                </li>
                                <li className={cx('footer__item')}>
                                    <p className={cx('footer__label')}>Mở cửa</p>
                                    <p className={cx('footer__text')}>Thứ Hai - Thứ Bảy 08:00 sáng - 06:00 chiều</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx('footer__bottom')}>
                        <p className={cx('footer__copyright')}>© 2021 - 2025 Grocery Mart. All rights reserved.</p>

                        <div className={cx('footer__socials')}>
                            <a href='#!' className={cx('footer__social-link', 'footer__social-link--facebook')}>
                                <FacebookIcon />
                            </a>
                            <a href='#!' className={cx('footer__social-link', 'footer__social-link--instagram')}>
                                <InstagramIcon />
                            </a>
                            <a href='#!' className={cx('footer__social-link', 'footer__social-link--linkedin')}>
                                <LinkedinIcon />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
