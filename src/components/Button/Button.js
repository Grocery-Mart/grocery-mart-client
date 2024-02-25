import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      primary = false,
      text = false,
      filter = false,
      filterTag = false,
      heart = false,
      auth = false,
      addToCart = false,
      addToHeartCart = false,
      disabled = false,
      none = false,
      productDetail = false,
      checkoutCartItemCtrl = false,
      continueCheckout = false,
      favoriteCheckout = false,
      checkoutAll = false,
      dialog = false,
      addAddress = false,
      edit = false,
      backProfile = false,
      deleteBtn = false,
      children,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps
    },
    ref,
  ) => {
    let Comp = 'button';

    const props = {
      onClick,
      ...passProps,
    };

    // Remove event listener when btn is clicked
    if (disabled) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
          delete props[key];
        }
      });
    }

    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = 'a';
    }

    const classes = cx('wrapper', {
      [className]: className,
      primary,
      text,
      filter,
      filterTag,
      heart,
      auth,
      addToCart,
      addToHeartCart,
      disabled,
      none,
      productDetail,
      checkoutCartItemCtrl,
      continueCheckout,
      favoriteCheckout,
      checkoutAll,
      dialog,
      addAddress,
      edit,
      backProfile,
      deleteBtn,
    });

    return (
      <Comp ref={ref} className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
    );
  },
);

export default Button;
