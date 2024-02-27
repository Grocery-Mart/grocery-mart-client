import { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  BagIcon,
  CartIcon,
  DocumentIcon,
  StarIcon,
  HeartIcon,
  HeartIconLike,
} from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import SearchInput from '~/components/SearchInput';
import ProductReview from '~/components/ProductReview';
import ProductSimilar from '~/components/ProductSimilar';
import ProductDescription from '~/components/ProductDescription';

const cx = classNames.bind(styles);

function ProductDetail() {
  const [like, setLike] = useState(false);

  const tabs = ['Mô tả', 'Đánh giá', 'Tương tự'];
  // const [props, setProps] = useState([]);
  const [type, setType] = useState('Mô tả');
  const [filterUnit, setFilterUnit] = useState('Gram');
  const [filterWeight, setFilterWeight] = useState(() => {
    if (filterUnit === 'Gram') {
      return '100g';
    } else {
      return '1kg';
    }
  });
  const [openWeight, setOpenWeight] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);
  const filterWeightRef = useRef(null);
  const filterUnitRef = useRef(null);
  const sizes = ['Small', 'Medium', 'Large'];
  const [filterSize, setFilterSize] = useState('');

  const handleLikeBtn = (e) => {
    e.preventDefault();
    setLike(!like);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (filterWeightRef.current && !filterWeightRef.current.contains(event.target)) {
      setOpenWeight(false);
    }
    if (filterUnitRef.current && !filterUnitRef.current.contains(event.target)) {
      setOpenUnit(false);
    }
  }, []);
  const handleClickOutsideFilter = (e) => {
    handleClickOutside(e);
    e.stopPropagation();
  };

  return (
    <div
      className={cx('wrapper')}
      onClick={(e) => {
        handleClickOutsideFilter(e);
      }}
    >
      <div className={cx('container')}>
        {/* Search input */}
        <div className={cx('product-input')}>
          <SearchInput className={cx('prod-search')} />
        </div>

        {/* Breadcrumbs */}
        <div className={cx('product-container')}>
          <ul className={cx('breadcrumbs')}>
            <li>
              <a href="#!" className={cx('breadcrumbs__link')}>
                Cửa hàng tạp hóa
                <ArrowRightIcon />
              </a>
            </li>
            <li>
              <a href="#!" className={cx('breadcrumbs__link')}>
                Cà phê
                <ArrowRightIcon />
              </a>
            </li>
            <li>
              <a href="#!" className={cx('breadcrumbs__link')}>
                Cà phê xay
                <ArrowRightIcon />
              </a>
            </li>
            <li>
              <a href="#!" className={cx('breadcrumbs__link', 'breadcrumbs__link--current')}>
                LavAzza
              </a>
            </li>
          </ul>
        </div>

        {/* Product info */}
        <div className={cx('product-container')}>
          <div className={cx('container')}>
            <div className={cx('row')}>
              <div className={cx('col-12 col-xxl-5 col-xl-5 col-lg-6 col-md-12')}>
                <div className={cx('prod-preview')}>
                  <div className={cx('prod-preview__list')}>
                    <div className={cx('prod-preview__item')}>
                      <img src={images.product2} alt="" className={cx('prod-preview__img')} />
                    </div>
                  </div>
                  <div className={cx('prod-preview__thumbs')}>
                    <img
                      src={images.product2}
                      alt=""
                      className={cx('prod-preview__thumb-img', 'prod-preview__thumb-img--active')}
                    />
                    <img src={images.product1} alt="" className={cx('prod-preview__thumb-img')} />
                    <img src={images.product3} alt="" className={cx('prod-preview__thumb-img')} />
                    <img src={images.product4} alt="" className={cx('prod-preview__thumb-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('col-12 col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12')}>
                <form action="" className={cx('form')}>
                  <section className={cx('prod-info')}>
                    <h1 className={cx('prod-info__heading')}>Coffee Beans - Espresso Arabica and Robusta Beans</h1>
                    <div className={cx('row')}>
                      <div className={cx('col-12 col-xxl-5 col-xl-6 col-lg-12 col-md-12')}>
                        <div className={cx('prod-prop')}>
                          <StarIcon className={cx('prod-prop__icon')} />
                          <h4 className={cx('prod-prop__title')}>(3.5) 1100 reviews</h4>
                        </div>
                        <div className={cx('prod-filter')}>
                          <label className={cx('form__label')}>Size/Weight</label>
                          <div className={cx('prod-filter__form-group')}>
                            <div className={cx('form__select-wrap')}>
                              <div
                                className={cx('form__select', 'form__select-weight')}
                                onClick={() => setOpenWeight(!openWeight)}
                              >
                                <span style={{ userSelect: 'none' }}>{filterWeight}</span>
                                <ArrowDownIcon className={cx('form__select-arrow', 'icon')} />
                                {openWeight && (
                                  <div
                                    ref={filterWeightRef}
                                    className={cx('prod-filter__weight')}
                                    data-aos="flip-down"
                                    data-aos-duration="200"
                                  >
                                    {filterWeight !== '100g' && filterUnit === 'Gram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('100g');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        100g
                                      </span>
                                    )}
                                    {filterWeight !== '200g' && filterUnit === 'Gram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('200g');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        200g
                                      </span>
                                    )}
                                    {filterWeight !== '500g' && filterUnit === 'Gram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('500g');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        500g
                                      </span>
                                    )}
                                    {filterWeight !== '1kg' && filterUnit === 'Kilogram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('1kg');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        1kg
                                      </span>
                                    )}
                                    {filterWeight !== '2kg' && filterUnit === 'Kilogram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('2kg');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        2kg
                                      </span>
                                    )}
                                    {filterWeight !== '5kg' && filterUnit === 'Kilogram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterWeight('5kg');
                                          setOpenWeight(!openWeight);
                                        }}
                                        className={cx('prod-filter__weight-item')}
                                      >
                                        5kg
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                              <div className={cx('form__select')} onClick={() => setOpenUnit(!openUnit)}>
                                <span style={{ userSelect: 'none' }}>{filterUnit}</span>
                                <ArrowDownIcon className={cx('form__select-arrow', 'icon')} />
                                {openUnit && (
                                  <div
                                    ref={filterUnitRef}
                                    className={cx('prod-filter__unit')}
                                    data-aos="flip-down"
                                    data-aos-duration="200"
                                  >
                                    {filterUnit !== 'Gram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterUnit('Gram');
                                          setFilterWeight('100g');
                                          setOpenUnit(!openUnit);
                                        }}
                                        className={cx('prod-filter__unit-item')}
                                      >
                                        Gram
                                      </span>
                                    )}
                                    {filterUnit !== 'Kilogram' && (
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setFilterUnit('Kilogram');
                                          setFilterWeight('1kg');
                                          setOpenUnit(!openUnit);
                                        }}
                                        className={cx('prod-filter__unit-item')}
                                      >
                                        Kilogram
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className={cx('prod-filter__form-group')}>
                            <div className={cx('form__tags')}>
                              {sizes.map((size, index) => (
                                <Button
                                  key={index}
                                  filterTag
                                  className={cx('form__tag', size === filterSize ? 'form__tag--current' : '')}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setFilterSize(size);
                                  }}
                                >
                                  {size}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx('col-12 col-xxl-7 col-xl-6 col-lg-12 col-md-12 col-sm-12')}>
                        <div className={cx('prod-props')}>
                          <div className={cx('prod-prop')}>
                            <DocumentIcon className={cx('prod-prop__icon', 'icon')} />
                            <h4 className={cx('prod-prop__title')}>Compare</h4>
                          </div>
                          <div className={cx('prod-prop')}>
                            <CartIcon className={cx('icon')} />
                            <div>
                              <h4 className={cx('prod-prop__title')}>Delivery</h4>
                              <p className={cx('prod-prop__desc')}>From $6 for 1-3 days</p>
                            </div>
                          </div>
                          <div className={cx('prod-prop')}>
                            <BagIcon className={cx('icon')} />
                            <div>
                              <h4 className={cx('prod-prop__title')}>Pickup</h4>
                              <p className={cx('prod-prop__desc')}>Out of 2 store, today</p>
                            </div>
                          </div>
                          <div className={cx('prod-info__card')}>
                            <div className={cx('prod-info__row')}>
                              <span className={cx('prod-info__price')}>$500.00</span>
                              <span className={cx('prod-info__tax')}>10%</span>
                            </div>
                            <div className={cx('prod-info__row')}>
                              <p className={cx('prod-info__total-price')}>$540.00</p>
                            </div>
                            <div className={cx('prod-info__row', 'prod-info__row--btn')}>
                              <Button primary addToCart>
                                Add to card
                              </Button>
                              <Button className={cx('btn--no-margin')} addToHeartCart onClick={handleLikeBtn}>
                                {like ? (
                                  <HeartIconLike className={cx('icon-like')} />
                                ) : (
                                  <HeartIcon className={cx('icon')} />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Product content */}
        <div className={cx('product-container', 'product-container--content')}>
          <div className={cx('prod-tab')}>
            <ul className={cx('prod-tab__list')}>
              {tabs.map((tab, index) => (
                <li
                  onClick={() => setType(tab)}
                  key={index}
                  className={cx('prod-tab__item', type === tab ? 'prod-tab__item--current' : '')}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <div className={cx('prod-tab__contents')}>
              <div className={cx('prod-tab__content', type === 'Mô tả' ? 'prod-tab__content--current' : '')}>
                <ProductDescription />
              </div>

              <div className={cx('prod-tab__content', type === 'Đánh giá' ? 'prod-tab__content--current' : '')}>
                <ProductReview />
              </div>

              <div className={cx('prod-tab__content', type === 'Tương tự' ? 'prod-tab__content--current' : '')}>
                <ProductSimilar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;