import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import SocialList from "./SocialList";
import styles from '../../styles/contact.module.scss';
import ContactForm from "./ContactForm";
import { useMediaQuery } from "../../hooks";

const Contact = () => {
    const isMobile485 = useMediaQuery(485);

    return (
        <section className={styles.contact} id='contact'>
            <div className="container">
                <MainTitle text='напишите мне' />
            </div>
            <div className="sub-container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>

                        {!isMobile485 && <>
                            <h3 className={styles.contact__title}>
                                <span className={styles.contact__title__text}>Связаться</span>
                                <span className={styles.contact__title__arrow}><ArrowSvg /></span>
                                <span className={styles.contact__title__border} />
                            </h3>
                            <SocialList />
                        </>}
                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
