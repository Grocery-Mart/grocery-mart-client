import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './AuthLayout.module.scss';
import AuthIntro from '~/Layouts/components/AuthIntro';

const cx = classNames.bind(styles);

function AuthLayout({ children }) {
  const authContent = useRef(null);

  const handleShowAuth = useCallback(() => {
    if (authContent.current && authContent.current.style) {
      authContent.current.style.translate = '0';
    }
  }, [authContent]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <div className={cx('loaded')}>
        <div className={cx('dot-windmill', { hidden: !isLoading })}></div>
      </div>
      <div className={cx('wrapper')}>
        {!isLoading && (
          <>
            <AuthIntro data={handleShowAuth} />
            <div ref={authContent} className={cx('content')}>
              {children}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AuthLayout;
