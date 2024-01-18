import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './AuthIntro.module.scss';
import images from '~/assets/images';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

function AuthIntro({ data }) {
    const handleShowAuth = () => {
        console.log(data.current);
        data.current.style.translate = '0';
    }

    useEffect(() => {
        document.addEventListener('click', handleShowAuth);

        return () => {
            document.removeEventListener('click', handleShowAuth);
        };
    }, []);

    return (
        <div className={cx('intro')}>
            <Logo className={cx('intro__logo')}/>
            <img className={cx('intro__img')} src={images.authIntro} alt="" />
            <p className={cx('intro__text')}>
                Giá trị thương hiệu cao cấp nhất, sản phẩm chất lượng cao và dịch vụ sáng tạo.
            </p>
            <button className={cx('intro__next')} onClick={handleShowAuth}>
                <img src={images.authIntroArrow} alt='' />
            </button>
        </div>
    );
}

export default AuthIntro;
