import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    text = false,
    filter = false,
    filterTag = false,
    heart = false,
    auth = false,
    disabled = false,
    none = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
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
        disabled,
        none,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon &&<span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon &&<span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
