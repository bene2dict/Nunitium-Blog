import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './ArticleCard.css';
import moment from 'moment';




const ArticleCard = ({ blog }) => {
  return (
    <Link to={"/articles/" + blog._id} className="article-container" key={blog._id}>

        <div className="article-wrapper" style={{
          backgroundImage: `url(${blog.postImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "40vh"

        }}>
          <div className="article-container-desc">
            <h1>{blog.title.length > 50 ? blog.title.slice(0, 50) + "..." : blog.title}</h1>
            <div className="publisher-detail">
              <span className="publisher-name">
                {blog.author_Id.name}
              </span>

              <span className="date-published">
                {moment(blog.createdAt).format("MMMM Do YYYY")}
              </span>
            </div>
          </div>
        </div>
      </Link>
  )
}


ArticleCard.propTypes = {
    blog: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      postImg: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author_Id: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

export default ArticleCard