import { useEffect, useState, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Home.module.scss';
import images from '~/assets/images';
import CategoryItem from '~/components/CategoryItem';
import Button from '~/components/Button';
import { FilterIcon } from '~/components/Icons';
import Product from '~/components/Product';
import Filter from '~/components/Filter';

const cx = classNames.bind(styles);

function Home() {
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

    const DataBrowseCategories = [
        {
            thumb: images.cate1,
            title: '$24 - $150',
            description: 'New sumatra mandeling coffe blend',
        },
        {
            thumb: images.cate2,
            title: '$37 - $160',
            description: 'Espresso arabica and robusta beans',
        },
        {
            thumb: images.cate3,
            title: '$32 - $160',
            description: 'Lavazza top class whole bean coffee blend',
        },
    ];

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

    const [filter, setFilter] = useState(false);

    const filterRef = useRef(null);

    const handleOpenFilter = useCallback(() => {
        setFilter((prevFilter) => !prevFilter);
    },[]);

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
                                        <img
                                            src={images.slideShow1}
                                            alt="slideshow1"
                                            className={cx('slideshow__img')}
                                        />
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
                                        <img
                                            src={images.slideShow1}
                                            alt="slideshow1"
                                            className={cx('slideshow__img')}
                                        />
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
                {/* Browse Categories */}
                <section className={cx('home__container')}>
                    <h2 className={cx('home__heading')}>Browse Categories</h2>

                    <div className={cx('row row-cols-1 row-cols-sm-1 row-cols-md-3', { home__cate: 'home__cate' })}>
                        {DataBrowseCategories &&
                            DataBrowseCategories.map((data, index) => (
                                <div className={cx('col')} key={index}>
                                    <CategoryItem data={data} />
                                </div>
                            ))}
                    </div>
                </section>
                {/* Total LavAzza 1320 */}
                <section className={cx('home__container')}>
                    <div className={cx('home__row')}>
                        <h2 className={cx('home__heading')}>Total LavAzza 1320</h2>
                        <div className={cx('filter-wrap')} ref={filterRef}>
                            <Button filter rightIcon={<FilterIcon className={cx('icon')} />} onClick={handleOpenFilter}>
                                Filter
                            </Button>
                            {filter && (
                                <div className={cx('filter-form')} data-aos="zoom-in-left" data-aos-duration="200">
                                    <Filter isFilter={filter}/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={cx(
                            'row row-cols-1 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-5',
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

export default Home;
