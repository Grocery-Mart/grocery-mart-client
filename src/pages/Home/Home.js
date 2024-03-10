import { useEffect, useState, useRef, useCallback, memo } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import images from '~/assets/images';
import CategoryItem from '~/components/CategoryItem';
import Button from '~/components/Button';
import { FilterIcon } from '~/components/Icons';
import Product from '~/components/Product';
import Filter from '~/components/Filter';

const cx = classNames.bind(styles);

function Home() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
  };

  const DataNewProducts = [
    {
      thumb: images.cate1,
      title: 'đ50.000 - đ150.000',
      description: t('new-product.desc1'),
    },
    {
      thumb: images.cate2,
      title: 'đ45.000 - đ150.000',
      description: t('new-product.desc2'),
    },
    {
      thumb: images.cate3,
      title: 'đ50.000 - đ120.000',
      description: t('new-product.desc3'),
    },
  ];

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

  const [filter, setFilter] = useState(false);

  const filterRef = useRef(null);

  const handleOpenFilter = useCallback(() => {
    setFilter((prevFilter) => !prevFilter);
  }, []);

  const handleClickOutsideFilter = useCallback((event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setFilter(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideFilter);

    return () => {
      document.removeEventListener('click', handleClickOutsideFilter);
    };
  }, [handleClickOutsideFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cx('home')}>
      <div className={cx('container')}>
        {/* Slide show */}
        <div className={cx('home__container')}>
          <div className={cx('slideshow')}>
            <Slider {...settings}>
              <div className={cx('slideshow__item')}>
                <a href="#!">
                  <picture>
                    <source media="(max-width: 767.98px)" srcSet={images.slideShow1Md} />
                    <img src={images.slideShow1} alt="slideshow1" className={cx('slideshow__img')} />
                  </picture>
                </a>
              </div>
              <div className={cx('slideshow__item')}>
                <a href="#!">
                  <img src={images.slideShow2} alt="slideshow2" className={cx('slideshow__img')} />
                </a>
              </div>
              <div className={cx('slideshow__item')}>
                <a href="#!">
                  <img src={images.slideShow3} alt="slideshow3" className={cx('slideshow__img')} />
                </a>
              </div>
              <div className={cx('slideshow__item')}>
                <a href="#!">
                  <picture>
                    <source media="(max-width: 767.98px)" srcSet={images.slideShow1Md} />
                    <img src={images.slideShow1} alt="slideshow1" className={cx('slideshow__img')} />
                  </picture>
                </a>
              </div>
              <div className={cx('slideshow__item')}>
                <a href="#!">
                  <img src={images.slideShow3} alt="slideshow3" className={cx('slideshow__img')} />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        {/* New Products */}
        <section className={cx('home__container')}>
          <h2 className={cx('home__heading')}>{t('home.heading01')}</h2>

          <div className={cx('row row-cols-1 row-cols-sm-1 row-cols-md-3', { home__cate: 'home__cate' })}>
            {DataNewProducts &&
              DataNewProducts.map((data, index) => (
                <div className={cx('col')} key={index}>
                  <CategoryItem data={data} />
                </div>
              ))}
          </div>
        </section>
        {/* Most Favorites */}
        <section className={cx('home__container')}>
          <div className={cx('home__row')}>
            <h2 className={cx('home__heading')}>{t('home.heading02')}</h2>
            <div className={cx('filter-wrap')} ref={filterRef}>
              <Button filter rightIcon={<FilterIcon className={cx('icon')} />} onClick={handleOpenFilter}>
                {t('home.filter')}
              </Button>
              {filter && (
                <div className={cx('filter-form')} data-aos="zoom-in-left" data-aos-duration="200">
                  <Filter isFilter={filter} />
                </div>
              )}
            </div>
          </div>
          <div
            className={cx(
              'row row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-5',
              'home__products',
            )}
          >
            {DataProducts &&
              DataProducts.map((data, index) => (
                <div className={cx('col')} key={index}>
                  <Product data={data} />
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(Home);
