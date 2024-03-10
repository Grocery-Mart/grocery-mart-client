import { useState, useCallback, useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTranslation } from 'react-i18next';

import styles from './Filter.module.scss';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filter({ isFilter }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState(isFilter); // --open/close filter--
  const [value, setValue] = useState([10, 60]); // --price--
  const sizes = [t('filter.title03'), t('filter.title04'), t('filter.title05')]; // --size/weight start--
  const brands = ['Lavazza', 'Nescafe', 'Starbucks'];
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
  const [filterSize, setFilterSize] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const filterWeightRef = useRef(null);
  const filterUnitRef = useRef(null); // --size/weight end--

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleInputMiniumChange = (e) => {
    const minNumber = Number(e.target.value);
    if (minNumber <= 100) {
      setValue([minNumber, value[1]]);
    }
  };

  const handleInputMaximumChange = (e) => {
    const maxNumber = Number(e.target.value);
    if (maxNumber <= 100) {
      setValue([value[0], maxNumber]);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (filterWeightRef.current && !filterWeightRef.current.contains(event.target)) {
      setOpenWeight(false);
    }
    if (filterUnitRef.current && !filterUnitRef.current.contains(event.target)) {
      setOpenUnit(false);
    }
  }, []);

  if (filter) {
    return (
      <div
        className={cx('filter')}
        onClick={(e) => {
          handleClickOutside(e);
        }}
      >
        <ArrowUpIcon className={cx('filter__arrow')} />
        <h3 className={cx('filter__heading')}>{t('home.filter')}</h3>
        <form action="" className={cx('filter__form', 'form')}>
          <div className={cx('filter__row')}>
            <div className={cx('filter__col')}>
              <label className={cx('form__label')}>{t('filter.heading01')}</label>
              <div className={cx('filter__form-group')}>
                <Slider range defaultValue={[10, 60]} value={value} onChange={handleChange} min={0} max={100} />
              </div>
              <div className={cx('filter__form-group', 'filter__form-group--inline')}>
                <div>
                  <label className={cx('form__label', 'form__label--sm')}>{t('filter.title01')}</label>
                  <div className={cx('filter__form-text-input', 'filter__form-text-input--small')}>
                    <input
                      value={value[0]}
                      onChange={handleInputMiniumChange}
                      type="text"
                      name=""
                      id=""
                      className={cx('filter__form-input')}
                    />
                  </div>
                </div>
                <div>
                  <label className={cx('form__label', 'form__label--sm')}>{t('filter.title02')}</label>
                  <div className={cx('filter__form-text-input', 'filter__form-text-input--small')}>
                    <input
                      value={value[1]}
                      onChange={handleInputMaximumChange}
                      type="text"
                      name=""
                      id=""
                      className={cx('filter__form-input')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cx('filter__separate')}></div>

            <div className={cx('filter__col')}>
              <label className={cx('form__label')}>{t('filter.heading02')}</label>
              <div className={cx('filter__form-group')}>
                <div className={cx('form__select-wrap')}>
                  <div className={cx('form__select', 'form__select-weight')} onClick={() => setOpenWeight(!openWeight)}>
                    <span style={{ userSelect: 'none' }}>{filterWeight}</span>
                    <ArrowDownIcon className={cx('form__select-arrow', 'icon')} />
                    {openWeight && (
                      <div
                        ref={filterWeightRef}
                        className={cx('filter__weight')}
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
                            className={cx('filter__weight-item')}
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
                            className={cx('filter__weight-item')}
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
                            className={cx('filter__weight-item')}
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
                            className={cx('filter__weight-item')}
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
                            className={cx('filter__weight-item')}
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
                            className={cx('filter__weight-item')}
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
                        className={cx('filter__unit')}
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
                            className={cx('filter__unit-item')}
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
                            className={cx('filter__unit-item')}
                          >
                            Kilogram
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx('filter__form-group')}>
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

            <div className={cx('filter__separate')}></div>

            <div className={cx('filter__col')}>
              <label className={cx('form__label')}>{t('filter.heading03')}</label>
              <div className={cx('filter__form-group')}>
                <div className={cx('filter__form-text-input')}>
                  <input
                    type="text"
                    name=""
                    id=""
                    className={cx('filter__form-input')}
                    placeholder={t('filter.desc01')}
                  />
                  <SearchIcon className={cx('icon', 'filter__form-icon-search')} />
                </div>
              </div>
              <div className={cx('filter__form-group')}>
                <div className={cx('form__tags')}>
                  {brands.map((brand, index) => (
                    <Button
                      key={index}
                      filterTag
                      className={cx('form__tag', brand === filterBrand ? 'form__tag--current' : '')}
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterBrand(brand);
                      }}
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={cx('filter__actions')}>
            <Button
              text
              className={cx('filter__actions-cancel')}
              onClick={(e) => {
                e.preventDefault();
                setFilter(false);
              }}
            >
              {t('button.btn01')}
            </Button>
            <Button primary className={cx('filter__actions-result')} onClick={(e) => e.preventDefault()}>
              {t('button.btn02')}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
