import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Fashion.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';
import ProductItem from '~/components/Product';
import { ArrowRightIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Fashion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arrangeTypes = ['Phổ biến', 'Mới nhất', 'Bán chạy'];
  const arrangePrices = ['Giá: Thấp đến Cao', 'Giá: Cao đến Thấp'];
  const DataProducts = [
    {
      image: images.product1,
      title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      brand: 'Lavazza',
      price: '$47.00',
      score: '4.3',
    },
    {
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '$53.00',
      score: '3.4',
    },
    {
      image: images.product3,
      title: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      brand: 'welikecoffee',
      price: '$99.99',
      score: '5.0',
    },
    {
      image: images.product4,
      title: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
      brand: 'Lavazza',
      price: '$38.65',
      score: '4.4',
    },
    {
      image: images.product3,
      title: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      brand: 'welikecoffee',
      price: '$99.99',
      score: '5.0',
    },
    {
      image: images.product1,
      title: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      brand: 'Lavazza',
      price: '$47.00',
      score: '4.3',
    },
    {
      image: images.product4,
      title: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
      brand: 'Lavazza',
      price: '$38.65',
      score: '4.4',
    },
    {
      image: images.product2,
      title: 'Lavazza Coffee Blends - Try the Italian Espresso',
      brand: 'Lavazza',
      price: '$53.00',
      score: '3.4',
    },
  ];
  const totalPages = 9;
  const [arrangeTypeCurrent, setArrangeTypeCurrent] = useState('');
  const [arrangePriceCurrent, setArrangePriceCurrent] = useState('Giá');
  const [isPriceOption, setIsPriceOption] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  const leftSide = currentPage - 2 > 0 ? currentPage - 2 : 1;
  const rightSide = currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;

  for (let i = 1; i <= totalPages; i++) {
    if (i === leftSide && i !== 1) {
      pages.push(
        <Button key="left-ellipsis" pageNumber>
          ...
        </Button>,
      );
    }
    if (i >= leftSide && i <= rightSide) {
      pages.push(
        <Button
          onClick={() => setCurrentPage(i)}
          key={i}
          className={cx(currentPage === i ? 'page-group__current' : '')}
          pageNumber
        >
          {i}
        </Button>,
      );
    }
    if (i === rightSide && i !== totalPages) {
      pages.push(
        <Button key="right-ellipsis" pageNumber>
          ...
        </Button>,
      );
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('arrange')}>
        <p className={cx('arrange__title')}>Hiển thị theo</p>
        <div className={cx('arrange__group')}>
          {arrangeTypes.map((arrangeType, index) => (
            <Button
              key={index}
              arrangeProduct
              onClick={() => setArrangeTypeCurrent(arrangeType)}
              className={cx(arrangeTypeCurrent === arrangeType ? 'arrange__group--btn-current' : '')}
            >
              {arrangeType}
            </Button>
          ))}
          <button className={cx('arrange__price')} onMouseOver={() => setIsPriceOption(true)}>
            <span
              className={cx(
                'arrange__price-value',
                arrangePriceCurrent !== 'Giá' ? 'arrange__price-value--current' : '',
              )}
            >
              {arrangePriceCurrent}
            </span>
            <ArrowRightIcon className={cx('arrange__price-icon')} />
            {isPriceOption && (
              <div className={cx('arrange__price-options')}>
                {arrangePrices.map((priceOption, index) => (
                  <a
                    href="#!"
                    onClick={() => {
                      setArrangePriceCurrent(priceOption);
                      setIsPriceOption(false);
                    }}
                    key={index}
                    className={cx('arrange__price-option')}
                  >
                    {priceOption}
                    {arrangePriceCurrent === priceOption && <span className={cx('arrange__price-mark')}></span>}
                  </a>
                ))}
              </div>
            )}
          </button>
        </div>
        <div className={cx('number-page')}>
          <div className={cx('number-page__group')}>
            <span className={cx('number-page__current')}>{currentPage}</span>/
            <span className={cx('number-page__next')}>{totalPages}</span>
          </div>
          <div className={cx('number-page__group')}>
            <button
              disabled={currentPage === 1}
              className={cx('number-page__back-btn')}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ArrowRightIcon className={cx('number-page__back-icon')} />
            </button>
            <button
              disabled={currentPage === totalPages}
              className={cx('number-page__next-btn')}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ArrowRightIcon className={cx('number-page__next-icon')} />
            </button>
          </div>
        </div>
      </div>

      <div className={cx('row row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4', 'product-list')}>
        {DataProducts &&
          DataProducts.map((data, index) => (
            <div className={cx('col')} key={index}>
              <ProductItem data={data} />
            </div>
          ))}
      </div>

      <div className={cx('page-group')}>
        <Button nextPage disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          <ArrowRightIcon className={cx('number-page__back-icon')} />
        </Button>
        {pages}
        <Button nextPage disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          <ArrowRightIcon className={cx('number-page__next-icon')} />
        </Button>
      </div>
    </div>
  );
}

export default Fashion;
