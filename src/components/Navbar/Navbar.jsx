import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import AppContext from "../../context/AppContext";
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import Dropdown from "../Dropdown/Dropdown";
import MenuDropDown from "../MenuDropDown/MenuDropDown";


const Navbar = () => {
  const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });

  const {  currentUser } = useContext(AppContext);

  const location = useLocation();

  const route = location.pathname.split("/")[1];



  return (
    <div className="navbar">


      <div className="menu-wrapper">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        {bigScreen &&
          <ul className="menu">
            <>

              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/articles"><li>Articles</li></Link>

            </>
          </ul>}

        {
          tablet &&
          <>
            {
              currentUser ? (
                <div className="login-active">

                  <Dropdown />
                </div>
              ) : (
                <MenuDropDown />
              )
            }
          </>
        }
      </div>
      {bigScreen && <>
        <div className="search-login">

          {currentUser
            ?
            (
              <div className="login-active">
                {/* <Link to="/settings?notifications=notifications">
                  <span className="material-symbols-outlined">notifications</span>
                </Link> */}
                <Dropdown />
              </div>
            )
            :
            (
              <>

                <div className="search-wrapper">
                  <Link to="/search-page">
                    <span className="material-symbols-outlined">search</span>
                  </Link>
                </div>
                <Link to={`${route === 'login' ? '/register' : '/login'}`} className="login-button">
                  <button>{route === 'login' ? 'Register' : 'Login'}</button>
                </Link>
              </>
            )}
        </div>
      </>}
    </div>
  )
}

export default Navbar