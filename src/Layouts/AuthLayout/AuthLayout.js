import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';
import AuthIntro from '~/Layouts/components/AuthIntro';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function AuthLayout({ children }) {
    const authContent = useRef();

    return (
        <div className={cx('wrapper')}>
            <AuthIntro data={authContent}/>
            <div ref={authContent} className={cx('content')}>{children}</div>
        </div>
    );
}

export default AuthLayout;
