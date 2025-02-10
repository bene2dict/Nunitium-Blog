import "./Article.css"
import BackButton from "../../assets/Back-Button.png"
import NextButton from "../../assets/Next-Button.png"
import AuthorImage from "../../assets/Profile-Picture.png"
// import { useMediaQuery } from "react-responsive";
import {useLocation, useNavigate} from "react-router-dom"
import { useContext, useMemo } from "react";
import AppContext from "../../context/AppContext"
import moment from "moment";




const Article = () => {
  // const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  // const bigScreen = useMediaQuery({ query: '(min-width: 1225px)' });

  const {blogs} = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];
  console.log(id);

  
  const blog = useMemo(() => blogs.find((blog) => blog._id === id), [blogs, id]);

  if (!blog) {
    return <div>Article not found</div>;
  }

  const {title, description, postImg, author_Id, createdAt, categories} = blog;


   // Find the index of the current blog in the blogs array
   const currentIndex = blogs.findIndex((b) => b._id === id);

   console.log(currentIndex)

   // Handlers for navigation buttons
   const handlePrevClick = () => {
     if (currentIndex > 0) {
       const prevBlog = blogs[currentIndex - 1];
       navigate(`/articles/${prevBlog._id}`);
     }
   };

 
   const handleNextClick = () => {
     if (currentIndex < blogs.length - 1) {
       const nextBlog = blogs[currentIndex + 1];
       navigate(`/articles/${nextBlog._id}`);
     }
   };

  return (
    

    <section className="article-page-wrapper">
    {blog && <>
    
      <div className="banner-image" style={{
        backgroundImage: `url(${postImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
      }}></div>

      <div className="article-desc">
        <h1>{title}</h1>
        <div className="author-tag-wrapper">
          <div className="author-date">
            <p>{author_Id?.name}</p>
            <span>&middot;</span>
            <p>
              {moment(createdAt).format("MMMM Do YYY")}
              <span>(10mins read)</span>
            </p>
          </div>
          <div className="tags">
            {categories?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="desc">
          <p>
           {description}
          </p>
        </div>

        <div className="about-the-author">
          <h2>About Author</h2>
          <div className="authors-image-and-description">
            <img src={AuthorImage} alt="" />
            <div className="authors-description">
              <h1>{author_Id.name}</h1>
              <h3>@{author_Id.username}</h3>
              <p>
                {author_Id.description}
              </p>
            </div>
          </div>

        </div>


      </div>

    </>}

   {/* Posts Navigator */}
   <div className="posts-navigator">
        <div
          className="previous-post"
          onClick={handlePrevClick}
          style={{
            cursor: currentIndex > 0 ? "pointer" : "not-allowed",
          }}
        >
          <img src={BackButton} alt="previous button" />
          <div className="previous-post-title">
            <p>Go back:</p>
              <p>
                {currentIndex > 0
                  ? blogs[currentIndex - 1].title.slice(0, 30) + "..." 
                  : "No previous post"}
              </p>
          </div>
        </div>
        <div
          className="next-post"
          onClick={handleNextClick}
          style={{
            cursor: currentIndex < blogs.length - 1 ? "pointer" : "not-allowed",
          }}
        >
          <div className="next-post-title">
            <p>Next up:</p>
              <p>
                {currentIndex < blogs.length - 1
                  ? blogs[currentIndex + 1].title.slice(0, 30) + "..."
                  : "No next post"}
              </p>
          </div>
          <img src={NextButton} alt="next button" />
        </div>
      </div>
    </section>
  )
}

export default Article