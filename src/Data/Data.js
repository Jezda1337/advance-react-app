import axios from "axios";
export const Data = async (category) => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
