import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={cx('wrapper', { [className]: className })}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
