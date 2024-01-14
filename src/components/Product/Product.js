import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Product.module.scss';
import Button from '~/components/Button';
import { HeartIcon, HeartIconLike, StarIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Product({ data }) {
    const [like, setLike] = useState(false);

    const handleLikeBtn = () => {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
        }
    }

    return (
        <article className={cx('product-cart')}>
            <div className={cx('product-cart__img-wrap')}>
                <a href="#!">
                    <img src={data.image} alt="" className={cx('product-cart__thumb')} />
                </a>
                <Button heart className={cx('product-cart__like-btn')} onClick={handleLikeBtn}>
                    {like ? <HeartIconLike className={cx('icon-like')}/> : <HeartIcon className={cx('icon')} />}
                </Button>
            </div>
            <h3 className={cx('product-cart__title')}>
                <a href="#!">{data.title}</a>
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
