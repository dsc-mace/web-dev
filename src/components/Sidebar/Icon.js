import styles from './Icon.module.scss'

const Icon = ({ image, text, expanded, active, onClick }) => {
    return (
        <button
            className={`${styles.Icon} ${expanded && styles.Icon__expanded} ${
                active && styles.Icon__active
            }`}
            onClick={onClick}
        >
            <img src={image} className={styles.Icon__image} />
            <p className={styles.Icon__text}>{text}</p>
        </button>
    )
}

export default Icon
