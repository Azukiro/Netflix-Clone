import './sidebar.scss';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
function Sidebar() {
    return <div className='sidebar'>
        <div className="sidebar_wrapper">
            <div className="sidebar_menu">
                <h3 className="sidebar_title">
                    Dashboard
                </h3>
                <ul className='sidebar_list'>
                    <li className='sidebar_list_item active'>
                        <LineStyleIcon className='sidebar_icon' />
                        Home
                    </li>
                    <li className='sidebar_list_item'>
                        <TimelineIcon className='sidebar_icon' />
                        Analytics
                    </li>
                    <li className='sidebar_list_item'>
                        <TrendingUpIcon className='sidebar_icon' />
                        Sels
                    </li>
                </ul>

            </div>
            <div className="sidebar_menu">
                <h3 className="sidebar_title">
                    Quick Menu
                </h3>
                <ul className='sidebar_list'>
                    <li className='sidebar_list_item active'>
                        <LineStyleIcon className='sidebar_icon' />
                        Home
                    </li>
                    <li className='sidebar_list_item'>
                        <TimelineIcon className='sidebar_icon' />
                        Analytics
                    </li>
                    <li className='sidebar_list_item'>
                        <TrendingUpIcon className='sidebar_icon' />
                        Sels
                    </li>
                </ul>

            </div>
            <div className="sidebar_menu">
                <h3 className="sidebar_title">
                    Notifications
                </h3>
                <ul className='sidebar_list'>
                    <li className='sidebar_list_item active'>
                        <LineStyleIcon className='sidebar_icon' />
                        Home
                    </li>
                    <li className='sidebar_list_item'>
                        <TimelineIcon className='sidebar_icon' />
                        Analytics
                    </li>
                    <li className='sidebar_list_item'>
                        <TrendingUpIcon className='sidebar_icon' />
                        Sels
                    </li>
                </ul>

            </div>
            <div className="sidebar_menu">
                <h3 className="sidebar_title">
                    Staff
                </h3>
                <ul className='sidebar_list'>
                    <li className='sidebar_list_item active'>
                        <LineStyleIcon className='sidebar_icon' />
                        Home
                    </li>
                    <li className='sidebar_list_item'>
                        <TimelineIcon className='sidebar_icon' />
                        Analytics
                    </li>
                    <li className='sidebar_list_item'>
                        <TrendingUpIcon className='sidebar_icon' />
                        Sels
                    </li>
                </ul>

            </div>
        </div>
    </div>;
}

export default Sidebar;
