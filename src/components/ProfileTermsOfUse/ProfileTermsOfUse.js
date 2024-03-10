import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './ProfileTermsOfUse.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileTermsOfUse({ handleCancel }) {
  const { t } = useTranslation();

  return (
    <div className={cx('col-12')}>
      <h2 className={cx('profile__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        {t('profile.heading09')}
      </h2>

      <p className={cx('profile__desc')}>{t('profile.desc06')}</p>
      <p className={cx('profile__desc')}>{t('profile.desc07')}</p>
      <p className={cx('profile__desc')}>{t('profile.desc08')}</p>
    </div>
  );
}

export default ProfileTermsOfUse;
