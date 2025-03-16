import "./Dashboard.css";
import NunitiumWhiteLogo from "../../assets/dashboard/WhiteLogo.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


const Dashboard = () => {
  const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });

  return (
    <section className="dashboard-container">
     {bigScreen && <div className="dashboard-nav">
        <Link to="/">
          <div className="logo">
            <img src={NunitiumWhiteLogo} alt="logo" />
          </div>
        </Link>

        <div className="dashboard-menu">
          <ul>
            <Link to="/dashboard">
              <span className="material-symbols-outlined">grid_view</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/profile">
              <span className="material-symbols-outlined">
                person
              </span>
              <span>Profile</span>
            </Link>
            <Link to="/create-article">
              <span className="material-symbols-outlined">
                edit
              </span>
              <span>Write a Post</span>
            </Link>
            <Link to="/articles">
              <span className="material-symbols-outlined">
                import_contacts
              </span>
              <span>All Posts</span>
            </Link>
            <Link to="/settings">
              <span className="material-symbols-outlined">
                settings
              </span>
              <span>Settings</span>
            </Link>
          </ul>
        </div>
      </div>}


      {tablet &&  
      <div className="dashboard-nav">
        <Link to="/">
          <div className="logo">
            <img src={NunitiumWhiteLogo} alt="logo" />
          </div>
        </Link>

      
      <div className="dashboard-menu">
          <ul>
            <Link to="/dashboard">
              <span className="material-symbols-outlined">grid_view</span>
            </Link>
            <Link to="/profile">
              <span className="material-symbols-outlined">
                person
              </span>
            </Link>
            <Link to="/create-article">
              <span className="material-symbols-outlined">
                edit
              </span>
            </Link>
            <Link to="/articles">
              <span className="material-symbols-outlined">
                import_contacts
              </span>
            </Link>
            <Link to="/settings">
              <span className="material-symbols-outlined">
                settings
              </span>
            </Link>
          </ul>
        </div>
      </div> 
      }
      
      <div className="dashboard-main-board">

        <div className="nav-main-row">
        <span> </span>
          {/* <Link to="/search-page">
            <span className="material-symbols-outlined">search</span>
          </Link>

          <Link to="/settings?notifications=notifications">
            <span className="material-symbols-outlined">notifications</span>
          </Link> */}
          <div>
            <Dropdown />
          </div>
          
        </div>



        <div className="article-analytics">

          <div className="total-articles">
            <p>Total Posts</p>
            <div className="posts-number">
              <span className="material-symbols-outlined">edit</span>
              <p className="number">241</p>
            </div>
            <p>This month</p>
          </div>

          <div className="total-views">
            <p>Total Views</p>
            <div className="posts-number">
              <span className="material-symbols-outlined">visibility</span>
              <p className="number">130K</p>
            </div>
            <p>This month</p>
          </div>

          <div className="article-detail">
            <p>Most Viewed Article</p>
            <p>The Most Awesome Article Man Has Ever Written</p>
            <p>This month</p>
          </div>
        </div>

        <div className="total-views-chart">
          <h1>Total Views</h1>
        </div>
      </div>
    </section>
  )
}

export default Dashboard