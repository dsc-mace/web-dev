import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import styles from "./OrganizationLayout.module.scss"

const OrganizationLayout = ({children}) => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Layout__container}>
                <Sidebar/>
                <div className={styles.Layout__contentContainer}>
                    <Header/>
                    <div className={styles.Layout__content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationLayout
