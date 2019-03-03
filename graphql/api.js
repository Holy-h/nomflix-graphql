import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "48c2886b75bef7e07433761a45a6b490",
    language: "en-US",
  },
});

export const getDetail = async (id) => {
  const {
    data: movie
  } = await api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos",
    },
  })
  return movie;
}

export const getVideos = async (id) => {
  const {
    data: videos
  } = await api.get(`movie/${id}/videos`);
  return videos;
}

export const getNowplaying = async () => {
  const {
    data: {results : movies}
  } = await api.get(`movie/now_playing`);
  return movies;
}

export const getPopular = async () => {
  const {
    data: {results : movies}
  } = await api.get(`movie/popular`);
  return movies;
}

export const getToprated = async () => {
  const {
    data: {results : movies}
  } = await api.get(`movie/top_rated`);
  return movies;
}

export const getUpcomig = async () => {
  const {
    data: {results : movies}
  } = await api.get(`movie/upcoming`);
  return movies;
}
