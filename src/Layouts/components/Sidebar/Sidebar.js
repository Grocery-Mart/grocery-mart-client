import { useState } from 'react';
import classNames from 'classnames/bind';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './Sidebar.module.scss';
import { ArrowRightIcon, FilterIcon, MenuIcon, NoStarIcon, StarIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar({ data }) {
  const categories = data.categories;
  const productTypes = data.productTypes;
  const trademarks = data.trademarks;
  const stars = [5, 4, 3, 2, 1];
  
  const [currentCategory, setCurrentCategory] = useState(data.categories[0]);
  const [filterPrice, setFilterPrice] = useState({ min: '', max: '' });
  const [currentStar, setCurrentStar] = useState();

  const [isExpandedCategory, setIsExpandedCategory] = useState(false);
  const [isExpandedProductType, setIsExpandedProductType] = useState(false);
  const [isExpandedTrademark, setIsExpandedTrademark] = useState(false);
  const [isExpandedStar, setIsExpandedStar] = useState(false);

  const handleCheckNumber = (e) => {
    let regex = /^[0-9]*$/;
    if (regex.test(e.target.value)) return true;
    return false;
  };

  return (
    <div className={cx('sidebar')}>
      <h1 className={cx('sidebar__heading')}>
        <MenuIcon className={cx('sidebar__menu-icon', 'icon')} />
        Tất cả danh mục
      </h1>
      <div className={cx('separate')} style={{ '--margin': '20px', '--height': '0.5px', '--bg': '#d2d2d6' }}></div>

      <TransitionGroup component="ul" className={cx('sidebar__list')}>
        {categories.map((category, index) => {
          if (!isExpandedCategory && index >= 4) return null;
          return (
            <CSSTransition key={index} timeout={500} classNames="item">
              <li
                className={cx('sidebar__item', currentCategory === category ? 'sidebar__item--current' : '')}
                onClick={() => setCurrentCategory(category)}
              >
                <ArrowRightIcon className={cx('sidebar__item-icon')} />
                {category}
              </li>
            </CSSTransition>
          );
        })}

        {!isExpandedCategory && categories.length > 4 && (
          <CSSTransition key="more" timeout={0} classNames="item">
            <li className={cx('sidebar__item')} onClick={() => setIsExpandedCategory(true)}>
              Thêm
              <ArrowRightIcon className={cx('sidebar__item-more', 'icon')} />
            </li>
          </CSSTransition>
        )}
      </TransitionGroup>

      <div className={cx('sidebar__filter')}>
        <h2 className={cx('sidebar__heading')}>
          <FilterIcon className={cx('sidebar__filter-icon', 'icon')} />
          Bộ lọc tìm kiếm
        </h2>
        <div className={cx('sidebar__filter-group')}>
          <h3 className={cx('sidebar__filter-title')}>Theo Loại Sản Phẩm</h3>

          <TransitionGroup component="div">
            {productTypes.map((productType, index) => {
              if (!isExpandedProductType && index >= 4) return null;
              return (
                <CSSTransition key={index} timeout={500} classNames="item">
                  <div className={cx('sidebar__checkbox')}>
                    <label className={cx('sidebar__checkbox-label')}>
                      <input id="" name="" type="checkbox" className={cx('sidebar__checkbox-input')} />
                      <span className={cx('sidebar__checkbox-desc')}>{productType}</span>
                    </label>
                  </div>
                </CSSTransition>
              );
            })}

            {!isExpandedProductType && productTypes.length > 4 && (
              <CSSTransition timeout={0} classNames="item">
                <div
                  className={cx('sidebar__item', 'sidebar__filter-more')}
                  onClick={() => setIsExpandedProductType(true)}
                >
                  Thêm
                  <ArrowRightIcon className={cx('sidebar__item-more', 'icon')} />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className={cx('sidebar__filter-group')}>
          <h3 className={cx('sidebar__filter-title')}>Thương Hiệu</h3>

          <TransitionGroup component="div">
            {trademarks.map((trademark, index) => {
              if (!isExpandedTrademark && index > 4) return null;
              return (
                <CSSTransition key={index} timeout={500} classNames="item">
                  <div className={cx('sidebar__checkbox')}>
                    <label className={cx('sidebar__checkbox-label')}>
                      <input id="" name="" type="checkbox" className={cx('sidebar__checkbox-input')} />
                      <span className={cx('sidebar__checkbox-desc')}>{trademark}</span>
                    </label>
                  </div>
                </CSSTransition>
              );
            })}

            {!isExpandedTrademark && trademarks.length > 4 && (
              <CSSTransition timeout={0} classNames="item">
                <div
                  className={cx('sidebar__item', 'sidebar__filter-more')}
                  onClick={() => setIsExpandedTrademark(true)}
                >
                  Thêm
                  <ArrowRightIcon className={cx('sidebar__item-more', 'icon')} />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className={cx('sidebar__filter-group')}>
          <h3 className={cx('sidebar__filter-title')}>Khoảng Giá</h3>

          <div className={cx('sidebar__price')}>
            <input
              onChange={(e) => {
                if (handleCheckNumber(e)) {
                  setFilterPrice({ ...filterPrice, min: e.target.value });
                }
              }}
              value={filterPrice.min}
              type="text"
              id=""
              name=""
              className={cx('sidebar__price-input')}
              placeholder="đ Từ"
            />
            <div className={cx('sidebar__price-separate')}></div>
            <input
              onChange={(e) => {
                if (handleCheckNumber(e)) {
                  setFilterPrice({ ...filterPrice, max: e.target.value });
                }
              }}
              value={filterPrice.max}
              type="text"
              id=""
              name=""
              className={cx('sidebar__price-input')}
              placeholder="đ Đến"
            />
          </div>

          <Button sidebarFilter primary>
            Áp Dụng
          </Button>
        </div>

        <div className={cx('sidebar__filter-group')}>
          <h3 className={cx('sidebar__filter-title')}>Kích Thước/Trọng Lượng</h3>

          <div className={cx('sidebar__checkbox')}>
            <label className={cx('sidebar__checkbox-label')}>
              <input id="" name="" type="checkbox" className={cx('sidebar__checkbox-input')} />
              <span className={cx('sidebar__checkbox-desc')}>Nhỏ (100g, 200g, 500g)</span>
            </label>
          </div>
          <div className={cx('sidebar__checkbox')}>
            <label className={cx('sidebar__checkbox-label')}>
              <input id="sidebar__checkbox-input" name="" type="checkbox" className={cx('sidebar__checkbox-input')} />
              <span className={cx('sidebar__checkbox-desc')}>Vừa (1kg, 2kg)</span>
            </label>
          </div>
          <div className={cx('sidebar__checkbox')}>
            <label className={cx('sidebar__checkbox-label')}>
              <input id="sidebar__checkbox-input" name="" type="checkbox" className={cx('sidebar__checkbox-input')} />
              <span className={cx('sidebar__checkbox-desc')}>To (5kg)</span>
            </label>
          </div>
        </div>

        <div className={cx('sidebar__filter-group')}>
          <h3 className={cx('sidebar__filter-title')}>Đánh Giá</h3>

          <TransitionGroup component="ul" className={cx('sidebar__evaluates')}>
            {stars.map((star, index) => {
              if (!isExpandedStar && index >= 4) return null;
              return (
                <CSSTransition key={index} timeout={500} classNames="item">
                  <li
                    onClick={() => setCurrentStar(star)}
                    key={`sidebar__evaluates-item-${index}`}
                    className={cx(
                      'sidebar__evaluates-item',
                      star === currentStar ? 'sidebar__evaluates-item--current' : '',
                    )}
                  >
                    {Array(star)
                      .fill()
                      .map((_, i) => (
                        <StarIcon key={`star-icon-${i}`} className={cx('sidebar__evaluates-star')} />
                      ))}
                    {Array(5 - star)
                      .fill()
                      .map((_, i) => (
                        <NoStarIcon key={`no-star-icon-${i}`} className={cx('sidebar__evaluates-star')} />
                      ))}
                    {star < 5 && 'trở lên'}
                  </li>
                </CSSTransition>
              );
            })}

            {!isExpandedStar && stars.length > 4 && (
              <CSSTransition timeout={0} classNames="item">
                <div className={cx('sidebar__item', 'sidebar__filter-more')} onClick={() => setIsExpandedStar(true)}>
                  Thêm
                  <ArrowRightIcon className={cx('sidebar__item-more', 'icon')} />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className={cx('sidebar__delete-btn')}>
          <Button
            sidebarFilter
            primary
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Xóa Tất Cả
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
