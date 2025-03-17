import "./Article.css"
import BackButton from "../../assets/Back-Button.png"
import NextButton from "../../assets/Next-Button.png"
import AuthorImage from "../../assets/Profile-Picture.png"
import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext"
import moment from "moment";
import EditArticle from "../editArticle/EditArticle";
import axiosInstance from "../../utils/axiosInstance";
import DOMPurify from "dompurify";




const Article = () => {
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(false);

  // const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { blogs, currentUser, editArticle, handleEditArticle } = useContext(AppContext);
  const navigate = useNavigate();

  const { id } = useParams();


 


  const fetchArticle = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/blogs/${id}`, {
        skipAuth: true
      });
      setArticle(response.data);
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);
  
  useEffect(() => {
    fetchArticle()
  }, [id, fetchArticle])
  
  console.log(article);

  // Find the index of the current blog in the blogs array
  const currentIndex = blogs.findIndex((b) => b._id === id);

  const isBlogAuthor = currentUser?.id && article?.author_Id?._id && currentUser.id === article.author_Id._id;

console.log(isBlogAuthor)

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



  console.log("article", article)


  if (loading || !article || Object.keys(article).length === 0) {
    return <div>Loading...</div>;
  }

  return (

    <>
      {!editArticle ? (<section className="article-page-wrapper">
        {article && <>

          <div className="banner-image" style={{
            position: "relative",
            backgroundImage: `url(${article?.postImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
          }}>
            {isBlogAuthor && <div style={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}>
              <span className="material-symbols-outlined edit-button" onClick={handleEditArticle}>Edit</span>
              <span className="material-symbols-outlined delete-button">Delete</span>
            </div>}
          </div>

          <div className="article-desc">
            <h1>{article?.title}</h1>
            <div className="author-tag-wrapper">
              <div className="author-date">
                <p>{article?.author_Id?.name}</p>
                <span>&middot;</span>
                <p>
                  {moment(article?.createdAt).format("MMMM Do YYYY")}
                  <span>(10mins read)</span>
                </p>
              </div>
              <div className="tags">
                {article?.categories?.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="desc">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article?.description) }} />
            </div>

            <div className="about-the-author">
              <h2>About Author</h2>
              <div className="authors-image-and-description">
                <img src={AuthorImage} alt="" />
                <div className="authors-description">
                  <h1>{article?.author_Id.name}</h1>
                  <h3>@{article?.author_Id.username}</h3>
                  <p>
                    {article?.author_Id.description}
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
              <p>Go back</p>
              {bigScreen && <p>
                {currentIndex > 0
                  ? blogs[currentIndex - 1].title.slice(0, 30) + "..."
                  : " No previous post"}
              </p>}
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
              <p>Next up</p>
              {bigScreen && <p>
                {currentIndex < blogs.length - 1
                  ? blogs[currentIndex + 1].title.slice(0, 30) + "..."
                  : "No next post"}
              </p>}
            </div>
            <img src={NextButton} alt="next button" />
          </div>
        </div>
      </section>) :
        (<EditArticle
          article={article}
          setArticle={setArticle}
        />)
        }
    </>

  )
}

export default Article