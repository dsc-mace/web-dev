import styles from './Sidebar.module.scss'
import HomeIcon from '../../assets/icons/home.png'
import FileIcon from '../../assets/icons/file.png'
import TrolleyIcon from '../../assets/icons/trolley.png'
import SortIcon from '../../assets/icons/sort_asc.png'
import BriefcaseIcon from '../../assets/icons/briefcase.png'
import LogoImage from '../../assets/images/logo.png'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'

const Sidebar = ({ active }) => {
    const { expanded, setExpanded } = useContext(SidebarContext)

    const toggleSidebar = () => setExpanded((prev) => !prev)

    const navigate = useNavigate()

    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar__top}>
                {expanded && (
                    <img
                        className={styles.Sidebar__image}
                        src={LogoImage}
                        alt="logo"
                    />
                )}
                <button onClick={toggleSidebar}>
                    <svg
                        width={18}
                        height={12}
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.0960001 11.5207 0 11.2833 0 11C0 10.7167 0.0960001 10.4793 0.288 10.288C0.479333 10.096 0.716667 10 1 10H17C17.2833 10 17.5207 10.096 17.712 10.288C17.904 10.4793 18 10.7167 18 11C18 11.2833 17.904 11.5207 17.712 11.712C17.5207 11.904 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479333 6.904 0.288 6.712C0.0960001 6.52067 0 6.28333 0 6C0 5.71667 0.0960001 5.479 0.288 5.287C0.479333 5.09567 0.716667 5 1 5H17C17.2833 5 17.5207 5.09567 17.712 5.287C17.904 5.479 18 5.71667 18 6C18 6.28333 17.904 6.52067 17.712 6.712C17.5207 6.904 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
            <Icon
                expanded={expanded}
                active={active === 'dashboard'}
                image={HomeIcon}
                text="Dashboard"
                onClick={() => {
                    navigate('/organization/dashboard')
                }}
            />
            <Icon
                expanded={expanded}
                active={active === 'rfq'}
                image={FileIcon}
                text="RFQ"
                onClick={() => {
                    navigate('/organization/rfq')
                }}
            />
            <Icon
                expanded={expanded}
                active={active === 'orders'}
                image={TrolleyIcon}
                text="Purchase Orders"
                onClick={() => {
                    navigate('/organization/purchase_orders')
                }}
            />
            <Icon
                expanded={expanded}
                active={active === 'documents'}
                image={BriefcaseIcon}
                text="Documents"
                onClick={() => {
                    navigate('/organization/documents')
                }}
            />
            <Icon
                expanded={expanded}
                active={active === 'reports'}
                image={SortIcon}
                text="Reports"
                onClick={() => {
                    navigate('/organization/reports')
                }}
            />
        </div>
    )
}

export default Sidebar
