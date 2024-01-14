import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Filter.module.scss';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filter({ isFilter }) {
    const [filter, setFilter] = useState(isFilter);

    if (filter) {
        return (
            <div className={cx('filter')}>
                <ArrowUpIcon className={cx('filter__arrow')} />
                <h3 className={cx('filter__heading')}>Filter</h3>
                <form action="" className={cx('filter__form')}>
                    <div className={cx('filter__row')}>
                        <div className={cx('filter__col')}>
                            <label className={cx('filter__form-label')}>Price</label>
                            <div className={cx('filter__form-group')}>
                                <div
                                    className={cx('filter__form-slider')}
                                    style={{ '--min-value': '10%', '--max-value': '60%' }}
                                ></div>
                            </div>
                            <div className={cx('filter__form-group', 'filter__form-group--inline')}>
                                <div>
                                    <label className={cx('filter__form-label', 'filter__form-label--sm')}>Minium</label>
                                    <div className={cx('filter__form-text-input', 'filter__form-text-input--small')}>
                                        <input type="text" name="" id="" className={cx('filter__form-input')} />
                                    </div>
                                </div>
                                <div>
                                    <label className={cx('filter__form-label', 'filter__form-label--sm')}>
                                        Maximum
                                    </label>
                                    <div className={cx('filter__form-text-input', 'filter__form-text-input--small')}>
                                        <input type="text" name="" id="" className={cx('filter__form-input')} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('filter__separate')}></div>

                        <div className={cx('filter__col')}>
                            <label className={cx('filter__form-label')}>Size/Weight</label>
                            <div className={cx('filter__form-group')}>
                                <div className={cx('filter__form-select-wrap')}>
                                    <div className={cx('filter__form-select', 'filter__form-select-weight')}>
                                        <span>500g</span>
                                        <ArrowDownIcon className={cx('filter__form-select-arrow', 'icon')} />
                                    </div>
                                    <div className={cx('filter__form-select')}>
                                        <span>Gram</span>
                                        <ArrowDownIcon className={cx('filter__form-select-arrow', 'icon')} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('filter__form-group')}>
                                <div className={cx('filter__form-tags')}>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Small
                                    </Button>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Medium
                                    </Button>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Large
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={cx('filter__separate')}></div>

                        <div className={cx('filter__col')}>
                            <label className={cx('filter__form-label')}>Brand</label>
                            <div className={cx('filter__form-group')}>
                                <div className={cx('filter__form-text-input')}>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className={cx('filter__form-input')}
                                        placeholder="Search brand name"
                                    />
                                    <SearchIcon className={cx('icon', 'filter__form-icon-search')} />
                                </div>
                            </div>
                            <div className={cx('filter__form-group')}>
                                <div className={cx('filter__form-tags')}>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Lavazza
                                    </Button>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Nescafe
                                    </Button>
                                    <Button
                                        filterTag
                                        className={cx('filter__form-tag')}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Starbucks
                                    </Button>
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
                            Cancel
                        </Button>
                        <Button primary className={cx('filter__actions-result')} onClick={(e) => e.preventDefault()}>
                            Show Result
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Filter;
