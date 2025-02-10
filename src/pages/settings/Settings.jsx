import "./Settings.css";
import NunitiumWhiteLogo from "../../assets/dashboard/WhiteLogo.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import Notifications from "../../components/Notifications/Notifications"; // Example for notifications component
import PasswordSecurity from "../../components/PasswordAndSecurity/PasswordAndSecurity";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


const Settings = () => {
  const [setting, setSetting] = useState('account-settings')
  const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const notifications = params.get("notifications");

    if (notifications === "notifications") {
      setSetting("notifications");
    }
  }, [location.search]);

  const handleSetting = (option) => {
    console.log(option);

    setSetting(option);
  }
  return (
    <section className="dashboard-container">
      <div className="dashboard-nav">
        <Link to="/">
          <div className="logo">
            <img src={NunitiumWhiteLogo} alt="logo" />
          </div>
        </Link>

        {bigScreen && <div className="dashboard-menu">
          <ul>
            <div onClick={() => handleSetting('account-settings')}>
              <span className="material-symbols-outlined">person</span>
              <span>Account settings</span>
            </div>
            <div onClick={() => handleSetting('notifications')}>
              <span className="material-symbols-outlined">
                notifications
              </span>
              <span>Notifications</span>
            </div>
            <div onClick={() => handleSetting('password-security')}>
              <span className="material-symbols-outlined">
                password
              </span>
              <span>Password and security</span>
            </div>
          </ul>
        </div>}

        {tablet && <div className="dashboard-menu">
          <ul>
            <div onClick={() => handleSetting('account-settings')}>
              <span className="material-symbols-outlined">person</span>
            </div>
            <div onClick={() => handleSetting('notifications')}>
              <span className="material-symbols-outlined">
                notifications
              </span>
            </div>
            <div onClick={() => handleSetting('password-security')}>
              <span className="material-symbols-outlined">
                password
              </span>
            </div>
          </ul>
        </div>}
      </div>


      <div className="dashboard-main-board">
        <div className="nav-main">
          <span></span>
          {/* {bigScreen && 
        <>

        <Link to="/search-page">
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to="/settings?notifications=notifications">
            <span className="material-symbols-outlined">notifications</span>
          </Link>
        </> } */}
          <Dropdown />
        </div>

        <div className="dashboard-title">
          <h2>Settings</h2>
        </div>

        <div className="setting-selected">
          {setting === 'account-settings' && <AccountSettings />}
          {setting === 'notifications' && <Notifications />}
          {setting === 'password-security' && <PasswordSecurity />}
        </div>

      </div>
    </section>
  )
}

export default Settings