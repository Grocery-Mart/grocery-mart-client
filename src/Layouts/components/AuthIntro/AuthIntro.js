import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './AuthIntro.module.scss';
import images from '~/assets/images';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

function AuthIntro({ data, isIntro }) {
  const { t } = useTranslation();

  return (
    <div className={cx('intro', { isIntro: isIntro })}>
      <Logo className={cx('intro__logo')} original />
      <div className={cx('dot-pulse')}></div>
      <img className={cx('intro__img')} src={images.authIntro} alt="" />
      <p className={cx('intro__text')}>{t('authIntro.desc')}</p>
      <button className={cx('intro__next')} onClick={data}>
        <img src={images.authIntroArrow} alt="" />
      </button>
    </div>
  );
}

export default AuthIntro;
