import classNames from "classnames/bind";

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('img')} src="https://down-vn.img.susercontent.com/file/87a79a9cf65f0618fcf2ec54486de865" alt=""/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>Robusta</h4>
                <span className={cx('trademark')}>Gờ cafe</span>
            </div>
        </div>
    );
}

export default ProductItem;