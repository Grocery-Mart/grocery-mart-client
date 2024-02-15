import classNames from 'classnames/bind';

import styles from './AuthIntro.module.scss';
import images from '~/assets/images';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

function AuthIntro({ data, isIntro }) {
    return (
        <div className={cx('intro', { isIntro: isIntro })}>
            <Logo className={cx('intro__logo')} original />
            <div className={cx('dot-pulse')}></div>
            <img className={cx('intro__img')} src={images.authIntro} alt="" />
            <p className={cx('intro__text')}>
                Giá trị thương hiệu cao cấp nhất, sản phẩm chất lượng cao và dịch vụ sáng tạo.
            </p>
            <button className={cx('intro__next')} onClick={data}>
                <img src={images.authIntroArrow} alt="" />
            </button>
        </div>
    );
}

export default AuthIntro;
