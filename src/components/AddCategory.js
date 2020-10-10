import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories, categories }) => {
  const [category, setCategory] = useState("");

  const handleInputCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length > 2) {
      setCategories([...categories, category.trimStart().trimEnd()]);
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={category} onChange={handleInputCategory} />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default AddCategory;
