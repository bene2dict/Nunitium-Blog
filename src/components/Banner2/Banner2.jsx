import { useContext, useState, useEffect } from "react";
import "./Banner2.css";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import moment from "moment";

const Banner2 = () => {
    const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const { blogs } = useContext(AppContext);

  // Filter blogs with editorsPick set to true
  const editorPickedBlogs = blogs.filter((blog) => blog.editorsPick);


  // Function to cycle through blogs
  useEffect(() => {
    if (editorPickedBlogs.length > 0) {
      const interval = setInterval(() => {
        setCurrentBlogIndex((prevIndex) =>
          (prevIndex + 1) % editorPickedBlogs.length
        );
      }, 10000); // Change blog every 5 seconds

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }
  }, [editorPickedBlogs.length]);

  // Get the current blog to display
  const blog = editorPickedBlogs[currentBlogIndex];

  return (
    <>
      {blog && (
        <Link
          to={"/articles/" + blog._id}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <section
            className="banner-wrapper"
            style={{
              position: "relative",
              backgroundImage: `url(${blog.postImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "70vh",
              margin: "3rem auto",
            }}
          >
            <div className="banner-two-desc">
              <h3>Interior</h3>
              <h1>{blog.title}</h1>
              <div className="name-date">
                <p>{blog.author_Id.name}</p>
                <p>
                  {moment(blog.createdAt).format("MMMM Do, YYYY")}
                  <span>(10mins read)</span>
                </p>
              </div>
              <p>
                {blog.description.length > 300
                  ? blog.description.slice(0, 300) + "..."
                  : blog.description}
              </p>
            </div>
          </section>
        </Link>
      )}
    </>
  );
};

export default Banner2;