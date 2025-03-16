import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import ArticleForm from "../../components/articleForm/ArticleForm";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import "./EditArticle.css";
import axiosInstance from "../../utils/axiosInstance";
import { stripHtml } from "../../utils/stripHtml";
import AppContext from "../../context/AppContext";

const EditArticle = ({ article }) => {
    const [publicId, setPublicId] = useState("");
    const [title, setTitle] = useState(article?.title || "");
    const [description, setDescription] = useState(article?.description || "");
    const [categories, setCategories] = useState(article?.categories || []);
    const [imageUrl, setImageUrl] = useState(article?.postImg || "");

    const { handleEditArticle } = useContext(AppContext);

    // Cloudinary configuration from env variables
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    // Update local state when props change
    useEffect(() => {
        if (article) {
            setTitle(article.title);
            setDescription(article.description);
            setCategories(article.categories);
            setImageUrl(article.postImg);
            setPublicId(article.publicId)
        }
    }, [article]);

    console.log(article)


    // Update article function
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!title || !description || !imageUrl || categories.length === 0) {
            alert("Please fill in all fields, select categories, and upload an image.");
            return;
        }

        const plainDescription = stripHtml(description);

        const formData = {
            title,
            description: plainDescription,
            postImg: imageUrl,
            publicId,
            categories,
        };

        try {
            const response = await axiosInstance.put(`/blogs/${article._id}`, formData);

            console.log("Article updated successfully:", response.data);
            alert("Article updated successfully!");

            if (response.data) {
                handleEditArticle(false);
            }

        } catch (error) {
            console.error("Error updating article:", error.response?.data || error);
            alert(error.response?.data?.message || "Failed to update article.");
        }
    };

    if (!article) {
        return <div>Loading...</div>
    }


    return (
        <div className="edit-article-container">
            <span className="material-symbols-outlined close" onClick={() => handleEditArticle(false)}>close</span>
            <h3>Edit Article</h3>
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
                        handleUpdate={handleUpdate}
                    />
                </div>
            </div>
        </div>
    );
};

// ✅ **Props Validation**
EditArticle.propTypes = {
    article: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        postImg: PropTypes.string.isRequired,
        publicId: PropTypes.string.isRequired,
    }).isRequired,
};

export default EditArticle;
