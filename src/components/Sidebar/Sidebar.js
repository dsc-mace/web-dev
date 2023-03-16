import styles from './Sidebar.module.scss'
import HomeIcon from '../../assets/icons/home.png'
import FileIcon from '../../assets/icons/file.png'
import TrolleyIcon from '../../assets/icons/trolley.png'
import SortIcon from '../../assets/icons/sort_asc.png'
import BriefcaseIcon from '../../assets/icons/briefcase.png'
import LogoImage from '../../assets/images/logo.png'
import Icon from './Icon'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({active}) => {
    const [expanded, setExpanded] = useState(true)

    const toggleSidebar = () => setExpanded(prev => !prev)

    const navigate = useNavigate()

    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar__top}>
                {expanded && 
                    <img className={styles.Sidebar__image} src={LogoImage} alt="logo"/>
                }
                <button onClick={toggleSidebar}>=</button>
            </div>
            <Icon expanded={expanded} active={active === "dashboard"} image={HomeIcon} text="Dashboard" onClick={() => {navigate("/organization/dashboard")}}/>
            <Icon expanded={expanded} active={active === "rfq"} image={FileIcon} text="RFQ" onClick={() => {navigate("/organization/rfq")}}/>
            <Icon expanded={expanded} active={active === "orders"} image={TrolleyIcon} text="Purchase Orders" onClick={() => {navigate("/organization/purchase_orders")}}/>
            <Icon expanded={expanded} active={active === "documents"} image={BriefcaseIcon} text="Documents" onClick={() => {navigate("/organization/documents")}}/>
            <Icon expanded={expanded} active={active === "reports"} image={SortIcon} text="Reports" onClick={() => {navigate("/organization/reports")}}/>
        </div>
    )
}

export default Sidebar