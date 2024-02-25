import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SearchInput.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import SearchProduct from '~/components/SearchProduct';

const cx = classNames.bind(styles);

function SearchInput({ className, dataAos }) {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });

  return (
    <Tippy
      interactive
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Products</h4>
            <SearchProduct />
            <SearchProduct />
            <SearchProduct />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('wrapper', { [className]: className })} data-aos={dataAos} data-aos-duration="1000">
        <input type="text" placeholder="Search ..." className={cx('search-input')} />
        <button className={cx('search-btn')}>{<SearchIcon className={cx('icon')} />}</button>
      </div>
    </Tippy>
  );
}

export default SearchInput;
