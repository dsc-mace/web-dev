import styles from './Header.module.scss'
import LogoImage from '../../assets/images/logo.png'

const Header = ({title}) => {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__container}>
                <h1 className={styles.Header__title}>{title}</h1>
                {/* <img className={styles.Header__image} src={LogoImage} alt="logo"/> */}
            </div>
        </div>
    )
}

export default Header
