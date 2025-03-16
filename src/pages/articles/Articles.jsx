import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./Articles.css";
import ArticleCard from "../../components/articleCard/ArticleCard";
import { useLocation } from "react-router-dom";


const Articles = () => {

  const { blogs } = useContext(AppContext);
  const location = useLocation();

  const route = location.pathname.split("/")[1];

  console.log(route);


  if (!blogs) {
    return <div>Loading ...</div>
  }
  return (
    <div className="articles-wrapper">

     {blogs.map((blog) => (
        <ArticleCard key={blog._id} blog={blog} />
     )) }

      
    </div>
  )
}

export default Articles