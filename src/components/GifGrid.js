import React from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      {loading && <span className="animate__animated animate_flash">"Loading..."</span>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem title={gif.title} key={gif.id} url={gif.url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = { category: PropTypes.string.isRequired };

export default GifGrid;
