import classNames from 'classnames/bind';

import styles from './MenuColumn.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuColumn({ data }) {
  return (
    <div className={cx('menu-column')}>
      <div className={cx('menu-column__icon')}>
        <div className={cx('menu-column__icon-1')}>{data.icon1}</div>
        <div className={cx('menu-column__icon-2')}>{data.icon2}</div>
      </div>

      <div className={cx('menu-column__content')}>
        <h2 className={cx('menu-column__heading')}>{data.title}</h2>
        <ul className={cx('menu-column__list')}>
          {data.data &&
            data.data.map((list, index) => (
              <li key={index}>
                <Link className={cx('menu-column__link', `data-${index + 1}`)} to={''}>
                  {list.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuColumn;
