import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card-container">
      <img src={url} alt={title} />
      <p>{title.toUpperCase()}</p>
    </div>
  );
};

export default GifGridItem;
