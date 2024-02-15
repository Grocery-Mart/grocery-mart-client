import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);

function CategoryItem({ data }) {
    return (
        <a href="#!">
            <article className={cx('cate-item')}>
                <img className={cx('cate-item__thumb')} src={data.thumb} alt="" />
                <div className={cx('cate-item__info')}>
                    <h3 className={cx('cate-item__title')}>{data.title}</h3>
                    <p className={cx('cate-item__desc')}>{data.description}</p>
                </div>
            </article>
        </a>
    );
}

export default CategoryItem;
