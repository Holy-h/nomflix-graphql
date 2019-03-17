import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "48c2886b75bef7e07433761a45a6b490",
    language: "en-US"
  }
});

export const getMovieDetail = async id => {
  const { data } = await api.get(`movie/${id}`);
  return data;
};

export const getMovieVideos = async id => {
  const {
    data: { results }
  } = await api.get(`movie/${id}/videos`);
  return results;
};

export const getNowplayingMovie = async () => {
  const {
    data: { results }
  } = await api.get(`movie/now_playing`);
  return results;
};

export const getPopularMovie = async () => {
  const {
    data: { results }
  } = await api.get(`movie/popular`);
  return results;
};

export const getTopratedMovie = async () => {
  const {
    data: { results }
  } = await api.get(`movie/top_rated`);
  return results;
};

export const getUpcomigMovie = async () => {
  const {
    data: { results }
  } = await api.get(`movie/upcoming`);
  return results;
};

export const getTvDetail = async id => {
  const { data } = await api.get(`tv/${id}`);
  return data;
};

export const getTVVideos = async id => {
  const {
    data: { results }
  } = await api.get(`tv/${id}/videos`);
  return results;
};

export const getTVAiringToday = async () => {
  const {
    data: { results }
  } = await api.get(`tv/airing_today`);
  return results;
};

export const getTVOnTheAir = async () => {
  const {
    data: { results }
  } = await api.get(`tv/on_the_air`);
  return results;
};

export const getTVPopualr = async () => {
  const {
    data: { results }
  } = await api.get(`tv/popular`);
  return results;
};

export const getTVToprated = async () => {
  const {
    data: { results }
  } = await api.get(`tv/top_rated`);
  return results;
};
