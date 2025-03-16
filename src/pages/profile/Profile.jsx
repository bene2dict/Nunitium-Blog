import "./Profile.css";
import Banner from "../../components/Banner/Banner";
import AuthorImage from "../../assets/Profile-Picture.png"
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import Articles from "../articles/Articles";

const Profile = () => {

  const {currentUser} = useContext(AppContext);

  console.log(currentUser);
  

  if(!currentUser) {
    return <div>Loading...</div>
  }

  return (
    <section className="profile-page-wrapper">
      <div className="about-the-author">
       <h2>About Author</h2>
                 <div className="authors-image-and-description">
                   <img src={currentUser.user_img === "" ? AuthorImage : currentUser.user_img} alt="user profile picture" />
                   <div className="authors-description">
                     <h1>{currentUser.name}</h1>
                     <h3>@{currentUser.username}</h3>
                     <p>
                       {currentUser.description}
                     </p>
                   </div>
                 </div>
      </div>

      <Banner />

        <Articles />
      
    </section>
  )
}

export default Profile