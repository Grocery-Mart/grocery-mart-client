import classNames from 'classnames/bind';

import styles from './ProductLayout.module.scss';

import Header from '~/Layouts/components/Header';
import Footer from '~/Layouts/components/Footer';
import Sidebar from '~/Layouts/components/Sidebar';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar></Sidebar>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductLayout;
