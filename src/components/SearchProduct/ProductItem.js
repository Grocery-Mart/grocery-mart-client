import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SearchProduct.module.scss';

const cx = classNames.bind(styles);

function SearchProduct({ data, onClick }) {
  return (
    <Link to={`/${data.nickname}`} onClick={onClick} className={cx('wrapper')}>
      <img
        className={cx('img')}
        src="https://down-vn.img.susercontent.com/file/87a79a9cf65f0618fcf2ec54486de865"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>{data.full_name}</h4>
        <span className={cx('trademark')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default SearchProduct;
