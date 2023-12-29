import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

import styles from './Logo.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link to={routes.home} className={cx('logo')}>
            <img src={images.logo} alt="grocerymart" className={cx('logo__img')} />
            <h1 className={cx('logo__title')}>grocerymart</h1>
        </Link>
    );
}

export default Logo;
