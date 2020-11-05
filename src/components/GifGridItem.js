import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card-container animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title.toUpperCase()}</p>
    </div>
  );
};

export default GifGridItem;
