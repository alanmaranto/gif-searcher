import React, { useState } from "react";
import PropTypes from "prop-types";
import data from "./categories";

const GifApp = (props) => {
  const [ categories, setCategories] = useState(data)

  const handleAdd = () => {
    setCategories([...categories, 'Rooney'])
  }
  return (
    <div>
      <h2>Gif</h2>
      <hr />

      <button onClick={handleAdd}>Add</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

GifApp.propTypes = {};

export default GifApp;
