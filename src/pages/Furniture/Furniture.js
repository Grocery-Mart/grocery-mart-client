import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Furniture.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';
import ProductItem from '~/components/Product';
import { ArrowRightIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Furniture() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arrangeTypes = [t('displayFilter.btn01'), t('displayFilter.btn02'), t('displayFilter.btn03')];
  const arrangePrices = [t('displayFilter.value01'), t('displayFilter.value02')];
  const DataProducts = [
    {
      image: images.product1,
      title: t('products.title1'),
      brand: 'Lavazza',
      price: 'đ55.000',
      score: '4.3',
    },
    {
      image: images.product2,
      title: t('products.title2'),
      brand: 'Lavazza',
      price: 'đ63.000',
      score: '3.4',
    },
    {
      image: images.product3,
      title: t('products.title3'),
      brand: 'welikecoffee',
      price: 'đ199.000',
      score: '5.0',
    },
    {
      image: images.product4,
      title: t('products.title4'),
      brand: 'Lavazza',
      price: 'đ49.000',
      score: '4.4',
    },
    {
      image: images.product3,
      title: t('products.title3'),
      brand: 'welikecoffee',
      price: 'đ199.000',
      score: '5.0',
    },
    {
      image: images.product1,
      title: t('products.title1'),
      brand: 'Lavazza',
      price: 'đ55.000',
      score: '4.3',
    },
    {
      image: images.product4,
      title: t('products.title4'),
      brand: 'Lavazza',
      price: 'đ49.000',
      score: '4.4',
    },
    {
      image: images.product2,
      title: t('products.title2'),
      brand: 'Lavazza',
      price: 'đ63.000',
      score: '3.4',
    },
  ];
  const totalPages = 9;
  const [arrangeTypeCurrent, setArrangeTypeCurrent] = useState('');
  const [arrangePriceCurrent, setArrangePriceCurrent] = useState(t('displayFilter.btn04'));
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
        <p className={cx('arrange__title')}>{t('displayFilter.heading')}</p>
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
                arrangePriceCurrent !== t('displayFilter.btn04') ? 'arrange__price-value--current' : '',
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

export default Furniture;
