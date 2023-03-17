import Card from '../../components/Card/Card'
import OrganizationLayout from '../../components/OrganizationLayout/OrganizationLayout'
import styles from "./OrganizationDashboardRFQ.module.scss"

const OrganizationDashboardRFQ = () => {
    return <OrganizationLayout active="rfq" title="RFQ">
        <div className={styles.Rfq__container}>
            <div className={styles.Cards}>
                <Card className={styles.Cards__card}>
                    alkfjdlkj
                </Card>
                <Card className={styles.Cards__card}>
                    alkfjdlkj
                </Card>
                <Card className={styles.Cards__card}>
                    alkfjdlkj
                </Card>
                <Card className={`${styles.Cards__card} ${styles.Cards__createNewCard}`}>
                    alkfjdlkj
                </Card>
            </div>
        </div>
    </OrganizationLayout>
}

export default OrganizationDashboardRFQ
