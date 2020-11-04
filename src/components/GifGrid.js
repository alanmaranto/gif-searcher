import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCharacters } from "../api";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGigfs();
  }, []);

  const getGigfs = async () => {
    const data = await getCharacters();

    const gifs = data.data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

GifGrid.propTypes = { category: PropTypes.string.isRequired };

export default GifGrid;
