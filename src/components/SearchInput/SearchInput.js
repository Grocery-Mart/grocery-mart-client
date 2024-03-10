import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchInput.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import SearchProduct from '~/components/SearchProduct';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchInput({ className, dataAos }) {
  const { t } = useTranslation();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      try {
        const searchResult = await searchServices.search(debounced, 'less');
        setSearchResult(searchResult);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleClickResult = () => {
    setShowResult(false);
    setSearchValue('');
  };

  return (
    <Tippy
      interactive
      visible={searchResult.length > 0 && showResult}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>{t('searchInput.title')}</h4>
            {searchResult.map((product) => (
              <SearchProduct key={product.id} data={product} onClick={handleClickResult} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('wrapper', { [className]: className })} data-aos={dataAos} data-aos-duration="1000">
        <input
          ref={inputRef}
          value={searchValue}
          onFocus={() => setShowResult(true)}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder={t('searchInput.placeholder')}
          spellCheck={false}
          className={cx('search-input')}
        />
        {!!searchValue && !loading && (
          <button onClick={handleClear} className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
        <button className={cx('search-btn')}>{<SearchIcon className={cx('search-icon')} />}</button>
      </div>
    </Tippy>
  );
}

export default SearchInput;
