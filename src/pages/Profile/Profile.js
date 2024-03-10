import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Profile.module.scss';
import {
  AddressIcon,
  BankCartIcon,
  EmailIcon,
  GiftIconSM,
  HeartIcon,
  HelpIcon,
  PasswordIcon,
  PhoneIcon,
  PlusIcon,
  ReoderIcon,
  TermIcon,
  UserIcon,
  VisaBankCartIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import ProfileAddNewCard from '~/components/ProfileAddNewCard';
import ProfilePersonalInfo from '~/components/ProfilePersonalInfo';
import ProfileAddress from '~/components/ProfileAddress';
import ProfileChangePassword from '~/components/ProfileChangePassword';
import ProfileTermsOfUse from '~/components/ProfileTermsOfUse';
import ProfileFavoriteItem from '~/components/ProfileFavoriteItem';

const cx = classNames.bind(styles);

function Profile() {
  const { t } = useTranslation();
  const [type, setType] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const handleCancel = () => {
    setType('overview');
  };

  return (
    <div className={cx('profile')}>
      <div className={cx('container')}>
        <div className={cx('profile-container')}>
          <div className={cx('row')}>
            <div
              className={cx(
                'col-12 col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-12',
                type !== 'overview' ? 'd-lg-block d-none' : '',
              )}
            >
              <aside className={cx('profile__sidebar')}>
                <div className={cx('profile-user')}>
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocKout4GdFj2Og7kPjTlXuWYLNqrX44E_9qeibwNPrLJIb4=s360-c-no"
                    alt=""
                    className={cx('profile-user__avatar')}
                  />
                  <h1 className={cx('profile-user__name')}>Như Công</h1>
                  <p className={cx('profile-user__desc')}>{t('profile.title01')} 13/02/2024</p>
                </div>

                <div className={cx('profile-menu')}>
                  <h3 className={cx('profile-menu__title')}>{t('profile.heading01')}</h3>
                  <ul className={cx('profile-menu__list')}>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')} onClick={() => setType('personalInfo')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <UserIcon className={cx('icon')} />
                        </span>
                        {t('profile.title02')}
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')} onClick={() => setType('address')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <AddressIcon className={cx('icon')} />
                        </span>
                        {t('profile.title03')}
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')} onClick={() => setType('changePassword')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <PasswordIcon className={cx('icon')} />
                        </span>
                        {t('profile.title04')}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={cx('profile-menu')}>
                  <h3 className={cx('profile-menu__title')}>{t('profile.heading02')}</h3>
                  <ul className={cx('profile-menu__list')}>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <ReoderIcon className={cx('icon')} />
                        </span>
                        {t('profile.title05')}
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <HeartIcon className={cx('icon')} />
                        </span>
                        {t('profile.title06')}
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <GiftIconSM className={cx('icon')} />
                        </span>
                        {t('profile.title07')}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={cx('profile-menu')}>
                  <h3 className={cx('profile-menu__title')}>{t('profile.heading03')}</h3>
                  <ul className={cx('profile-menu__list')}>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <HelpIcon className={cx('icon')} />
                        </span>
                        {t('profile.title08')}
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={cx('profile-menu__link')} onClick={() => setType('terms-of-use')}>
                        <span className={cx('profile-menu__icon-wrap')}>
                          <TermIcon className={cx('icon')} />
                        </span>
                        {t('profile.title09')}
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div
              className={cx(
                'col-12 col-xxl-9 col-xl-9 col-lg-8 col-sm-12',
                type !== 'overview' ? 'col-md-12' : 'col-md-7',
              )}
            >
              {type === 'overview' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <div className={cx('col-12')}>
                      <h2 className={cx('profile-info__heading')}>{t('profile.heading04')}</h2>
                      <p className={cx('profile-info__desc')}>{t('paymentMethod.heading')}</p>

                      <div className={cx('row gy-4 row-cols-1 row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2')}>
                        <div className={cx('col')}>
                          <article className={cx('payment-card')} style={{ '--payment-card-bg': '#1e2e69' }}>
                            <img src={images.BankCart} alt="" className={cx('payment-card__img')} />
                            <div className={cx('payment-card__top')}>
                              <BankCartIcon />
                              <span className={cx('payment-card__type')}>Techcombank</span>
                            </div>
                            <div className={cx('payment-card__number')}>0982155291</div>
                            <div className={cx('payment-card__bottom')}>
                              <div>
                                <p className={cx('payment-card__label')}>{t('profile.desc01')}</p>
                                <p className={cx('payment-card__value')}>Nhu Cong</p>
                              </div>
                              <div className={cx('payment-card__expired')}>
                                <p className={cx('payment-card__label')}>{t('profile.desc02')}</p>
                                <p className={cx('payment-card__value')}>11/2025</p>
                              </div>
                              <div className={cx('payment-card__circle')}>
                                <img src={images.CircleBank} alt="" />
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className={cx('col')}>
                          <article className={cx('payment-card')} style={{ '--payment-card-bg': '#354151' }}>
                            <img src={images.VisaBankCard} alt="" className={cx('payment-card__img')} />
                            <div className={cx('payment-card__top')}>
                              <VisaBankCartIcon />
                              <span className={cx('payment-card__type')}>Techcombank</span>
                            </div>
                            <div className={cx('payment-card__number')}>0982155291</div>
                            <div className={cx('payment-card__bottom')}>
                              <div>
                                <p className={cx('payment-card__label')}>{t('profile.desc01')}</p>
                                <p className={cx('payment-card__value')}>Nhu Cong</p>
                              </div>
                              <div className={cx('payment-card__expired')}>
                                <p className={cx('payment-card__label')}>{t('profile.desc02')}</p>
                                <p className={cx('payment-card__value')}>11/2025</p>
                              </div>
                              <div className={cx('payment-card__circle')}>
                                <img src={images.CircleBank} alt="" />
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className={cx('col')}>
                          <a href="#!" className={cx('new-card')} onClick={() => setType('addNewCard')}>
                            <PlusIcon className={cx('icon')} />
                            <p className={cx('new-card__text')}>{t('profile.title10')}</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={cx('col-12')}>
                      <h2 className={cx('profile-info__heading')}>{t('profile.heading05')}</h2>
                      <p className={cx('profile-info__desc')}>{t('profile.desc03')}</p>

                      <div
                        className={cx(
                          'row gy-4 row-cols-1 row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1',
                        )}
                      >
                        <div className={cx('col')}>
                          <article className={cx('account-info')}>
                            <div className={cx('account-info__icon')}>
                              <EmailIcon className={'icon'} />
                            </div>
                            <div>
                              <h3 className={cx('account-info__title')}>{t('footer.t4-item01')}</h3>
                              <p className={cx('account-info__desc')}>yeusangtao96@gmail.com</p>
                            </div>
                          </article>
                        </div>
                        <div className={cx('col')}>
                          <article className={cx('account-info')}>
                            <div className={cx('account-info__icon')}>
                              <PhoneIcon className={'icon'} />
                            </div>
                            <div>
                              <h3 className={cx('account-info__title')}>{t('profile.title11')}</h3>
                              <p className={cx('account-info__desc')}>+84 982155291</p>
                            </div>
                          </article>
                        </div>
                        <div className={cx('col')}>
                          <article className={cx('account-info')}>
                            <div className={cx('account-info__icon')}>
                              <AddressIcon className={'icon'} />
                            </div>
                            <div>
                              <h3 className={cx('account-info__title')}>{t('footer.t4-item03')}</h3>
                              <p className={cx('account-info__desc')}>Hạ Mỗ, Đan Phượng, Hà Nội</p>
                            </div>
                          </article>
                        </div>
                        <div className={cx('col')}>
                          <article className={cx('account-info')}>
                            <div className={cx('account-info__icon')}>
                              <PasswordIcon className={'icon'} />
                            </div>
                            <div>
                              <h3 className={cx('account-info__title')}>{t('profile.title12')}</h3>
                              <p className={cx('account-info__desc')}>**********</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>

                    <div className={cx('col-12')}>
                      <h2 className={cx('profile-info__heading')}>{t('profile.heading06')}</h2>
                      <p className={cx('profile-info__desc')}>2 {t('paymentMethod.desc01')}</p>
                      <ProfileFavoriteItem />
                      <div className={cx('separate')} style={{ '--margin': '20px' }}></div>
                      <ProfileFavoriteItem />
                    </div>
                  </div>
                </div>
              )}
              {type === 'addNewCard' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <ProfileAddNewCard handleCancel={handleCancel} />
                  </div>
                </div>
              )}
              {type === 'personalInfo' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <ProfilePersonalInfo handleCancel={handleCancel} />
                  </div>
                </div>
              )}
              {type === 'address' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <ProfileAddress handleCancel={handleCancel} />
                  </div>
                </div>
              )}
              {type === 'changePassword' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <ProfileChangePassword handleCancel={handleCancel} />
                  </div>
                </div>
              )}
              {type === 'terms-of-use' && (
                <div className={cx('profile-info')}>
                  <div className={cx('row gy-5')}>
                    <ProfileTermsOfUse handleCancel={handleCancel} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
