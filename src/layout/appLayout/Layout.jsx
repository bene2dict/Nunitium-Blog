import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Layout.css"

const Layout = () => {
  const location = useLocation();

  const dashboardPath = location.pathname.split("/")[1];


  return (
    <div className="layout">
      {dashboardPath === 'dashboard' ||  dashboardPath === "settings" ? "" : <div className="navbar">
        <Navbar />
      </div>
      }
      <div className="content">
        <Outlet />
      </div>

    </div>
  )
}


export default Layout

