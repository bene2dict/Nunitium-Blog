import {  useState } from "react";
import {useNavigate} from "react-router-dom"
import ArticleForm from "../../components/articleForm/ArticleForm";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import "./CreateArticle.css";
import axiosInstance from "../../utils/axiosInstance";
import { stripHtml } from "../../utils/stripHtml";

const CreateArticle = () => {
  const [publicId, setPublicId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate()



  // Cloudinary configuration from env variables
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !description || !imageUrl || categories.length === 0) {
      alert("Please fill in all fields, select categories, and upload an image.");
      return;
    }

    const plainDescription = stripHtml(description);
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", plainDescription);
    formData.append("postImg", imageUrl);
    formData.append("publicId", publicId)
    
    // Append categories correctly
    categories.forEach((category) => {
      formData.append("categories", category);
    });
  
    try {
      const response = await axiosInstance.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Article created successfully:", response.data);
      alert("Article created successfully!");
      navigate("/")
    } catch (error) {
      console.error("Error creating article:", error.response?.data || error);
      alert(error.response?.data?.message || "Failed to create article.");
    }
  };


  return (
    <div className="create-article-container">
      <h3>Create Article</h3>
      <div className="article-container">
        <div className="img-container">
          <ImageUpload
            cloudName={cloudName}
            uploadPreset={uploadPreset}
            publicId={publicId}
            setPublicId={setPublicId}
            setImageUrl={setImageUrl}
          />
        </div>
        <div className="form-container">
          <ArticleForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            categories={categories}
            setCategories={setCategories}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;

