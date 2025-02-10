import './PostList.css';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostList = () => {
    const { blogs } = useContext(AppContext);

    const featuredArticles = blogs.filter(blog => blog.featuredPost);

    console.log(featuredArticles);

    return (
        <aside className="post-list-container">

            <div className="title-wrapper">
                <h1 style={{ fontSize: "1.5em" }}>Featured Articles</h1>
                <hr className="title-underline" />
            </div>

            {featuredArticles && featuredArticles.map(blog => (
                    <Link to={"/articles/" + blog._id} key={blog._id} style={{ color: "inherit", textDecoration: "none" }}>
                <div className="post-container" >

                        <div className="post-image">
                            <img src={blog.postImg} alt="nature thumbnail" />
                        </div>
                        <div className="post-description">
                            <h3>Featured Article</h3>
                            <h1>{blog.title}</h1>
                            <div className="name-date">
                                <p>{blog.author_Id.name}</p>
                                <p>
                                    {moment(blog.createdAt).format('MMMM Do, YYYY')}
                                    <span>(10mins read)</span>
                                </p>
                            </div>
                            <p>
                                {blog.description.length > 300 ? blog.description.slice(0, 300) + "..." : blogs.description}
                            </p>
                        </div>
                </div>
                    </Link>
            ))}

        </aside>
    )
}

export default PostList