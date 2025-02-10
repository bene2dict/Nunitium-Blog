// ArticleForm.jsx
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";

const ArticleForm = ({
  title,
  setTitle,
  description,
  setDescription,
  setCategories,
  handleSubmit,
}) => {

    const quillRef = useRef(null);

  // Handle checkbox changes for categories
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((category) => category !== value)
    );
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Nuntium is the best"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <ReactQuill ref={quillRef} theme="snow" value={description} onChange={setDescription} required />
      </div>
      <div className="categories">
        <label>Categories</label>
        <div className="category-checkboxes">
          <label>
            <input type="checkbox" value="Technology" onChange={handleCategoryChange} />
            Technology
          </label>
          <label>
            <input type="checkbox" value="Health" onChange={handleCategoryChange} />
            Health
          </label>
          <label>
            <input type="checkbox" value="Lifestyle" onChange={handleCategoryChange} />
            Lifestyle
          </label>
        </div>
      </div>
      <div className="create-button">
        <button type="submit">Create</button>
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // Validates as an array of strings
  setCategories: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ArticleForm;
