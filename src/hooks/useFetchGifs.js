import { useState, useEffect } from "react";
import { searchGifs } from "../api";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const getGifs = async () => {
      const data = await searchGifs(category);

      const gifs = data.data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images?.downsized_medium.url,
        };
      });
      console.log(gifs)
      setState({
        data: gifs,
        loading: false,
      });
    };
    getGifs();
  }, [category]);

  return state;
};
