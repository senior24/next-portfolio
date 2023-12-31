import Link from 'next/link';
import Logo from '../../Logo/Logo';
import SocialList from './SocialList';
import { useMediaQuery } from '../../../hooks';
import styles from '../../../styles/footer.module.scss';

const Footer = () => {
    const isMobile725 = useMediaQuery(725);


    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <span className={styles.footer__border} />
                <div className={styles.footer__inner}>
                    <div className={styles.footer__left}>
                        <Logo/>
                        <p style={{marginTop: '10px'}} className={styles.footer__copyright}>© 2020-2023 <br />«Виталий»</p>
                    </div>
                    <div className={styles.footer__right}>
                        <div className={styles.footer__right__bottom}>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__list__item}>
                                    <Link href="/cookie-policy" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                            Политика использования файлов cookie
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/privacy-policy" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                            Политика конфиденциальности
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-policy" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                            Политика обработки персональных данных
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-of-clients" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                            Согласие на обработку персональных данных клиентов - физических лиц
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
