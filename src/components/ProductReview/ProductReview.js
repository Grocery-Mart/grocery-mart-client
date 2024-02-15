import classNames from 'classnames/bind';

import styles from './ProductReview.module.scss';
import { HalfStarIcon, NoStarIcon, StarIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProductReview() {
    return (
        <div className={cx('prod-content')}>
            <h2 className={cx('prod-content__heading')}>Đánh giá của các khách hàng</h2>
            <div className={cx('prod-content__reviews')}>
                <div
                    className={cx(
                        'row row-cols-1 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 gy-4',
                    )}
                >
                    <div className={cx('col')}>
                        <div className={cx('review-card')}>
                            <div className={cx('review-card__content')}>
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocJLer4HZfc9c23PAhVoZBwXms-JHj5xacfLY2Pag60q6yM=s360-c-no"
                                    alt=""
                                    className={cx('review-card__avatar')}
                                />
                                <div className={cx('review-card__info')}>
                                    <h4 className={cx('review-card__title')}>Jakir Hussen</h4>
                                    <p className={cx('review-card__desc')}>Great product, I love this Coffee Beans </p>
                                </div>
                            </div>
                            <div className={cx('review-card__rating')}>
                                <div className={cx('review-card__star-list')}>
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <HalfStarIcon className={cx('review-card__star')} />
                                    <NoStarIcon className={cx('review-card__star')} />
                                </div>
                                <span className={cx('review-card__rating-title')}>(3.5) Review</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('col')}>
                        <div className={cx('review-card')}>
                            <div className={cx('review-card__content')}>
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocJLer4HZfc9c23PAhVoZBwXms-JHj5xacfLY2Pag60q6yM=s360-c-no"
                                    alt=""
                                    className={cx('review-card__avatar')}
                                />
                                <div className={cx('review-card__info')}>
                                    <h4 className={cx('review-card__title')}>Jakir Hussen</h4>
                                    <p className={cx('review-card__desc')}>Great product, I love this Coffee Beans </p>
                                </div>
                            </div>
                            <div className={cx('review-card__rating')}>
                                <div className={cx('review-card__star-list')}>
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <HalfStarIcon className={cx('review-card__star')} />
                                    <NoStarIcon className={cx('review-card__star')} />
                                </div>
                                <span className={cx('review-card__rating-title')}>(3.5) Review</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('col')}>
                        <div className={cx('review-card')}>
                            <div className={cx('review-card__content')}>
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocJLer4HZfc9c23PAhVoZBwXms-JHj5xacfLY2Pag60q6yM=s360-c-no"
                                    alt=""
                                    className={cx('review-card__avatar')}
                                />
                                <div className={cx('review-card__info')}>
                                    <h4 className={cx('review-card__title')}>Jakir Hussen</h4>
                                    <p className={cx('review-card__desc')}>Great product, I love this Coffee Beans </p>
                                </div>
                            </div>
                            <div className={cx('review-card__rating')}>
                                <div className={cx('review-card__star-list')}>
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <StarIcon className={cx('review-card__star')} />
                                    <HalfStarIcon className={cx('review-card__star')} />
                                    <NoStarIcon className={cx('review-card__star')} />
                                </div>
                                <span className={cx('review-card__rating-title')}>(3.5) Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReview;
