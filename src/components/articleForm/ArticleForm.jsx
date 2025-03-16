import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CATEGORIES = ["Technology", "Health", "Lifestyle"]; // Define available categories

const ArticleForm = ({
  title,
  setTitle,
  description,
  setDescription,
  categories,
  setCategories,
  handleSubmit,
  handleUpdate
}) => {
  const quillRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState(categories || []);

  const location = useLocation();

  const isCreatePage = location.pathname.split("/").length === 2;

  console.log(isCreatePage);

  // Sync initial categories from props
  useEffect(() => {
    setSelectedCategories(categories);
  }, [categories]);

  // Handle checkbox changes for categories
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      e.target.checked
        ? [...prev, value] // Add category if checked
        : prev.filter((category) => category !== value) // Remove category if unchecked
    );
  };

  // Update categories in the parent state when selectedCategories changes
  useEffect(() => {
    setCategories(selectedCategories);
  }, [selectedCategories, setCategories]);

  return (
    <form onSubmit={isCreatePage ? handleSubmit : handleUpdate}>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={description}
          onChange={setDescription}
          required
        />
      </div>
      <div className="categories">
        <label>Categories</label>
        <div className="category-checkboxes">
          {CATEGORIES.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div className="submit-button">
        <button type="submit">{isCreatePage ? "Submit" : "Update"}</button>
      </div>
    </form>
  );
};

// Prop types validation
ArticleForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCategories: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ArticleForm;
