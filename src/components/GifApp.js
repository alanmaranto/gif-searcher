import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState([]);

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
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifApp;
