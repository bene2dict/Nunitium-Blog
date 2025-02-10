import "./Banner.css"
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import moment from "moment";



const Banner = () => {
    const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

    const { blogs } = useContext(AppContext);
  
    // Filter blogs with editorsPick set to true
    const featuredPostBlogs = blogs.filter((blog) => blog.featuredPost);
  
  
    // Function to cycle through blogs
    useEffect(() => {
      if (featuredPostBlogs.length > 0) {
        const interval = setInterval(() => {
          setCurrentBlogIndex((prevIndex) =>
            (prevIndex + 1) % featuredPostBlogs.length
          );
        }, 15000); // Change blog every 5 seconds
  
        // Clear interval on component unmount
        return () => clearInterval(interval);
      }
    }, [featuredPostBlogs.length]);
  
    // Get the current blog to display
    const blog = featuredPostBlogs[currentBlogIndex];
    const tablet = useMediaQuery({ query: '(max-width: 1224px)' })
    
    return (
        <section>
           {blog ? <Link to={"/articles/" + blog._id}>
                <div className="banner-wrapper" style={{
                    backgroundImage: `url(${blog.postImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '95%',
                    height: '60vh',
                    padding: tablet ? '0 .5rem' : '0 2rem',
                    margin: '0 auto',
                }}>
                    <div className="banner-desc">
                        <h3>Featured Article</h3>
                        <h1>{blog.title}</h1>
                        <div className="name-date">
                            <p>{blog.author_Id?.name}</p>
                            <p>
                                {moment(blog.createdAt).format('MMMM Do, YYYY')}
                                <span>(10mins read)</span>
                            </p>
                        </div>
                        <p>
                            {blog.description.length > 300 ? blog.description.slice(0, 300) + "..." : blog.description }
                        </p>
                    </div>
                </div>
            </Link> : ""}

        </section>
    )
}

export default Banner