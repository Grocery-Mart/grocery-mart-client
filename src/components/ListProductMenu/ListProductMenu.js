import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './ListProductMenu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuColumn from '~/components/ListProductMenu/MenuColumn';
import { DataDepartments, DataGrocery, DataBeauty } from '~/components/ListProductMenu/Data';

const cx = classNames.bind(styles);

function ListProductMenu({ children, className, offset, departments, grocery, beauty }) {
    const renderList = () => {
        if (departments) {
            return DataDepartments.map((data, index) => <MenuColumn data={data} key={index} />);
        }
        if (grocery) {
            return DataGrocery.map((data, index) => <MenuColumn data={data} key={index} />);
        }
        if (beauty) {
            return DataBeauty.map((data, index) => <MenuColumn data={data} key={index} />);
        }
    };

    return (
        <Tippy
            offset={offset}
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('dropdown', { [className]: className })}>{renderList()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default ListProductMenu;
