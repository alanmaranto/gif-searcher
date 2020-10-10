import React, { useState } from "react";
import AddCategory from "./AddCategory";
import data from "./categories";

const GifApp = (props) => {
  const [categories, setCategories] = useState(data);

  /*   const handleAdd = () => {
    setCategories([...categories, 'Rooney'])
    setCategories(cats => [...cats, categories] )
  } */

  return (
    <div>
      <h2>Gif</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifApp;
