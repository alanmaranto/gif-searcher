import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { searchGifs } from "../api";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGigfs();
  }, [category]);

  const getGigfs = async () => {
    const data = await searchGifs(category);

    const gifs = data.data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });
    setGifs(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
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
