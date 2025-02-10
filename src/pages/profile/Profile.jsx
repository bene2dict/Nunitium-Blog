import "./Profile.css";
import CupBannerImg from "../../assets/ArticleImage.png";
import Banner2 from "../../components/Banner2/Banner2";
import PostList from "../../components/PostList/PostList";
import AuthorImage from "../../assets/Profile-Picture.png"
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Profile = () => {

  const {currentUser} = useContext(AppContext);

  console.log(currentUser);
  return (
    <section className="profile-page-wrapper">
      <div className="about-the-author">
       <h2>About Author</h2>
                 <div className="authors-image-and-description">
                   <img src={AuthorImage} alt="" />
                   <div className="authors-description">
                     <h1>Author Black</h1>
                     <h3>@authurblack</h3>
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolore ipsum rem corrupti modi sequi omnis ipsa veniam consectetur? Debitis animi, eos voluptatum accusantium officiis eius esse. Accusantium, molestiae facilis.
                     </p>
                   </div>
                 </div>
      </div>

      <Banner2 image={CupBannerImg} />

      <div className="author-posts">
        <PostList />
      </div>
      
    </section>
  )
}

export default Profile