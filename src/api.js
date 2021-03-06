const api = "https://api.giphy.com/v1/gifs/";

export const searchGifs = async (category) => {
  try {
    const response = await fetch(
      `${api}search?q=${encodeURI(category)}&limit=10&api_key=${process.env.REACT_APP_GIPHY_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
