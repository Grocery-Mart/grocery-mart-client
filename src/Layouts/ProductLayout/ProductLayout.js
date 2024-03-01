import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import styles from './ProductLayout.module.scss';

import Header from '~/Layouts/components/Header';
import Footer from '~/Layouts/components/Footer';
import Sidebar from '~/Layouts/components/Sidebar';
import { ArrowRightIcon } from '~/components/Icons';
import SearchInput from '~/components/SearchInput';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
  const location = useLocation();
  let page = '';
  if (location.pathname === '/grocery') {
    page = 'Cửa hàng tạp hóa';
  }
  if (location.pathname === '/furniture') {
    page = 'Nhà & Nội thất';
  }
  if (location.pathname === '/fashion') {
    page = 'Thời trang';
  }

  let categories = ['Cà phê', 'Sản phẩm tươi sống', 'Sản phẩm đông lạnh', 'Đồ ăn nhẹ', 'Bánh mỳ', 'Đồ uống', 'Kẹo'];
  let productTypes = ['Cà phê rang xay', 'Cà phê hòa tan'];
  let trademarks = ['Lavazzza', 'Nescafe', 'Starbucks'];

  const data = {
    categories,
    productTypes,
    trademarks,
  };

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        {/* Search input */}
        <div className={cx('product-input')}>
          <SearchInput className={cx('prod-search')} />
        </div>
        {/* Breadcrumbs */}
        <div className={cx('product-container')}>
          <ul className={cx('breadcrumbs')}>
            <li>
              <Link to={routes.home} className={cx('breadcrumbs__link')}>
                Trang chủ
                <ArrowRightIcon />
              </Link>
            </li>
            <li>
              <a href="#!" className={cx('breadcrumbs__link')}>
                {page}
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('row')}>
          <div className={cx('col-12 col-xxl-2 col-xl-2 col-lg-3 col-md-12 col-sm-12 order-2 order-lg-1')}>
            <Sidebar data={data} />
          </div>
          <div className={cx('col-12 col-xxl-10 col-xl-10 col-lg-9 col-md-12 col-sm-12 order-md-1 order-1 order-lg-2')}>
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductLayout;
