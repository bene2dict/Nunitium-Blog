import "./Settings.css";
import NunitiumWhiteLogo from "../../assets/dashboard/WhiteLogo.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import ImageUpload from "../../components/imageUpload/ImageUpload";


const Settings = () => {
  // const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });






  return (
    <section className="dashboard-container">
      <div className="dashboard-nav">
        <Link to="/">
          <div className="logo">
            <img src={NunitiumWhiteLogo} alt="logo" />
          </div>
        </Link>

        <div className="dashboard-menu">
          <ul>
            {bigScreen ? <div>
              <span className="material-symbols-outlined">person</span>
              <span>Account settings</span>
            </div> :
              <div>
                <span className="material-symbols-outlined">person</span>
              </div>
            }
          </ul>
        </div>


      </div>


      <div className="dashboard-main-board">
        <div className="nav-main">
          <span></span>
          <span>
            <Dropdown />
          </span>

        </div>

        <div className="dashboard-title">
          <h2>Settings</h2>
        </div>

        <div className="setting-selected">
          <AccountSettings />
        </div>

      </div>
    </section>
  )
}

export default Settings