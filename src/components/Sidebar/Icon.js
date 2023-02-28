import styles from './Sidebar.module.scss'

const Icon = ({image, text}) => {
    return (
        <div className={styles.Icon}>
            <img src={image} className={styles.Icon__image}/>
            <p className={styles.Icon__text}>Home</p>
        </div>
    )
}

export default Icon