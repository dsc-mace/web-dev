import styles from './Sidebar.module.scss'
import HomeIcon from '../../assets/icons/home.png'
import FileIcon from '../../assets/icons/file.png'
import TrolleyIcon from '../../assets/icons/trolley.png'
import SortIcon from '../../assets/icons/sort_asc.png'
import BriefcaseIcon from '../../assets/icons/briefcase.png'
import LogoImage from '../../assets/images/logo.png'
import Icon from './Icon'
import { useState } from 'react'

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true)

    const toggleSidebar = () => setExpanded(prev => !prev)

    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar__top}>
                {expanded && 
                    <img className={styles.Sidebar__image} src={LogoImage} alt="logo"/>
                }
                <button onClick={toggleSidebar}>=</button>
            </div>
            <Icon expanded={expanded} image={HomeIcon} text="Dashboard"/>
            <Icon expanded={expanded} image={FileIcon} text="RFQ"/>
            <Icon expanded={expanded} image={TrolleyIcon} text="Purchase Orders"/>
            <Icon expanded={expanded} image={BriefcaseIcon} text="Documents"/>
            <Icon expanded={expanded} image={SortIcon} text="Reports"/>
        </div>
    )
}

export default Sidebar