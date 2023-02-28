import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "./OrganizationDashboardHome.module.scss"

const OrganizationDashboardHome = () => {
    return (
        <div className={styles.Dashboard}>
            <Header/>
            <Sidebar/>
        </div>
    )
}

export default OrganizationDashboardHome
