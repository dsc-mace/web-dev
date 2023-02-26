import Header from '../../components/Header/Header'
import styles from './Verification.module.scss'
import EmailImage from '../../assets/images/email.png'

const Verification = () => {
    return (
        <div className={styles.Verification}>
            <Header/>
            <div className={styles.Verification__container}>
                <div className={styles.Verification__content}>
                    <h1 className={styles.Verification__title}>Welcome On board, Roshan</h1>
                    <p className={styles.Verification__text}>We are really excited to have you as our partner</p>
                    <p className={styles.Verification__text}>Please verify the confirmation mail sent to you on your registered mail address</p>
                    <button className={styles.Verification__button}>Resend</button>
                </div>
                <div className={styles.Verification__imageContainer}>
                    <img className={styles.Verification__image} src={EmailImage}/>
                </div>
            </div>
        </div>
    )
}

export default Verification