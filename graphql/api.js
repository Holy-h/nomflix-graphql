import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "48c2886b75bef7e07433761a45a6b490",
    language: "en-US",
  },
});

export const getMovie = async (id) => {
  const {
    data: movie
  } = await api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos",
    },
  })
  console.log(movie);
  return movie;
}