import classNames from 'classnames/bind';

import styles from './MenuProducts.module.scss';
import MenuProduct from '~/components/MenuProducts/MenuProduct';

const cx = classNames.bind(styles);

function MenuProducts() {
    return (
        <div className={cx('container')}>
            <div className={cx('row', 'product-list')}>
                <div className={cx('col-4')}>
                    <MenuProduct />
                </div>

                <div className={cx('col-4')}>
                    <MenuProduct />
                </div>

                <div className={cx('col-4')}>
                    <MenuProduct />
                </div>

                {/* <div className={cx('col-4')}>
                    <MenuProduct />
                </div> */}
            </div>
        </div>
    );
}

export default MenuProducts;
