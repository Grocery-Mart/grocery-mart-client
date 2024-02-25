import classNames from 'classnames/bind';

import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function Message({ success, error, children, className }) {
  const classes = cx('wrapper', {
    [className]: className,
    success,
    error,
  });
  return (
    <div className={classes} data-aos="zoom-in-left">
      <p>{children}</p>
    </div>
  );
}

export default Message;
