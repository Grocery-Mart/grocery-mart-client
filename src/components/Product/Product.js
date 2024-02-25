import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import Button from '~/components/Button';
import { HeartIcon, HeartIconLike, StarIcon } from '~/components/Icons';
import routes from '~/config/routes';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ data }) {
  const [like, setLike] = useState(false);

  const handleLikeBtn = () => {
    setLike(!like);
  };

  return (
    <article className={cx('product-cart')}>
      <div className={cx('product-cart__img-wrap')}>
        <Link to={routes.product_detail}>
          <img src={data.image} alt="" className={cx('product-cart__thumb')} loading="lazy" />
        </Link>
        <Button heart className={cx('product-cart__like-btn')} onClick={handleLikeBtn}>
          {like ? <HeartIconLike className={cx('icon-like')} /> : <HeartIcon className={cx('icon')} />}
        </Button>
      </div>
      <h3 className={cx('product-cart__title')}>
        <Link to={routes.product_detail}>{data.title}</Link>
      </h3>
      <p className={cx('product-cart__brand')}>{data.brand}</p>
      <div className={cx('product-cart__row')}>
        <span className={cx('product-cart__price')}>{data.price}</span>
        <div className={cx('product-cart__evaluate')}>
          <StarIcon className={cx('product-cart__star')} />
          <span className={cx('product-cart__score')}>{data.score}</span>
        </div>
      </div>
    </article>
  );
}

export default Product;
