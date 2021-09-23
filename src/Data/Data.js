import axios from "axios";
export const Data = async (path = "animal") => {
  const url = `https://api.chucknorris.io/jokes/random?category=${path}`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
