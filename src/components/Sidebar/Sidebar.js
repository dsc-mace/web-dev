import styles from './Sidebar.module.scss'
import HomeIcon from '../../assets/icons/home.png'
import FileIcon from '../../assets/icons/file.png'
import TrolleyIcon from '../../assets/icons/trolley.png'
import SortIcon from '../../assets/icons/sort_asc.png'
import BriefcaseIcon from '../../assets/icons/briefcase.png'
import Icon from './Icon'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <Icon image={HomeIcon} text="Dashboard"/>
            <Icon image={FileIcon} text="RFQ"/>
            <Icon image={TrolleyIcon} text="Purchase Orders"/>
            <Icon image={BriefcaseIcon} text="Documents"/>
            <Icon image={SortIcon} text="Reports"/>
        </div>
    )
}

export default Sidebar