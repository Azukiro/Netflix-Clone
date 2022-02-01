import './topbar.scss';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
function Topbar() {
    return <div className='topbar'>
        <div className="topbar_wrapper">
            <div className="topLeft">
                <span className="logo">
                    AzukiAdmin
                </span>
            </div>
            <div className="topRight">
                <div className="topbar_icon_container">
                    <NotificationsNoneIcon />
                    <span className="top_icon_bag">2</span>
                </div>
                <div className="topbar_icon_container">
                    <LanguageIcon />
                    <span className="top_icon_bag">2</span>
                </div>
                <div className="topbar_icon_container">
                    <SettingsIcon />
                </div>
                <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" className="top_avatar" />
            </div>
        </div>
    </div>;
}

export default Topbar;
