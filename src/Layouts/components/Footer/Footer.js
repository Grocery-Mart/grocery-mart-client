import { useState, useMemo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

import styles from './Footer.module.scss';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function Footer() {
  const { t } = useTranslation();
  const [emailValue, setEmailValue] = useState('');
  const emailRegex = useMemo(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let templateParams = {
        to_email: emailValue,
        to_name: emailValue,
        from_name: 'Grocery Mart',
      };

      if (!emailValue) {
        toast.error(`${t('error.err01')}...`);
      } else if (!emailRegex.test(emailValue)) {
        toast.warning(`${t('error.err07')}...`);
      } else {
        emailjs.send('service_ktsoe2p', 'template_a00tqk6', templateParams, 'VIHnG1cdkLYt318N7').then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success(`${t('success.success01')}...`);
            setEmailValue('');
          },
          (err) => {
            console.log('FAILED...', err);
            toast.error(`${t('error.err08')}...`);
          },
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [emailValue, emailRegex],
  );

  return (
    <footer className={cx('footer')}>
      <div className={cx('container gx-5')}>
        <div className={cx('footer__inner')}>
          <div className={cx('footer__row')}>
            <div className={cx('footer__col')}>
              <Logo />

              <p className={cx('footer__desc')}>{t('footer.desc01')}</p>

              <p className={cx('footer__help-text')}>{t('footer.desc02')}</p>
              <form action="" className={cx('footer__form')}>
                <input
                  value={emailValue}
                  onChange={(e) => {
                    setEmailValue(e.target.value);
                  }}
                  className={cx('footer__input')}
                  placeholder={t('footer.btn01')}
                />
                <Button
                  onClick={(e) => handleSubmit(e)}
                  primary
                  className={cx('footer__form-btn')}
                  rightIcon={<SendIcon />}
                >
                  {t('footer.btn02')}
                </Button>
                <ToastContainer />
              </form>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.title01')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <Link to={routes.home} className={cx('footer__link')}>
                    {t('header.na01')}
                  </Link>
                </li>
                <li className={cx('footer__item')}>
                  <Link to={routes.grocery} className={cx('footer__link')}>
                    {t('header.na02')}
                  </Link>
                </li>
                <li className={cx('footer__item')}>
                  <Link to={routes.furniture} className={cx('footer__link')}>
                    {t('header.na03')}
                  </Link>
                </li>
                <li className={cx('footer__item')}>
                  <Link to={routes.fashion} className={cx('footer__link')}>
                    {t('header.na04')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.title02')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.t2-item01')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.t2-item02')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.title03')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.t3-item01')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.t3-item02')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.t3-item03')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.title04')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.t4-item01')}</p>
                  <a href="mailto:yeusangtao96@gmail.com" className={cx('footer__link')}>
                    yeusangtao96@gmail.com
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.t4-item02')}</p>
                  <a href="tel:+84982155291" className={cx('footer__link')}>
                    +84 921 55 291
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.t4-item03')}</p>
                  <p className={cx('footer__text')}>{t('footer.desc03')}</p>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.t4-item04')}</p>
                  <p className={cx('footer__text')}>{t('footer.desc04')}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={cx('footer__bottom')}>
            <p className={cx('footer__copyright')}>{t('footer.desc05')}</p>

            <div className={cx('footer__socials')}>
              <a
                href="https://www.facebook.com/Nhu.Cong1123"
                rel="noreferrer"
                target="_blank"
                className={cx('footer__social-link', 'footer__social-link--facebook')}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/cong_71017"
                rel="noreferrer"
                target="_blank"
                className={cx('footer__social-link', 'footer__social-link--instagram')}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyen-nhu-cong-936997294"
                rel="noreferrer"
                target="_blank"
                className={cx('footer__social-link', 'footer__social-link--linkedin')}
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
