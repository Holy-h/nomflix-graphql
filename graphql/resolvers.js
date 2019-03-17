import {
  getTvDetail,
  getTVVideos,
  getTVOnTheAir,
  getTVAiringToday,
  getTVPopualr,
  getTVToprated,
  getNowplayingMovie,
  getPopularMovie,
  getMovieDetail,
  getMovieVideos,
  getTopratedMovie,
  getUpcomigMovie
} from "../api";

const resolvers = {
  Query: {
    movie_detail: (_, { id }) => getMovieDetail(id),
    movie_videos: (_, { id }) => getMovieVideos(id),
    movie_nowplaying: getNowplayingMovie,
    movie_popular: getPopularMovie,
    movie_toprated: getTopratedMovie,
    movie_upcoming: getUpcomigMovie,
    tv_detail: (_, { id }) => getTvDetail(id),
    tv_videos: (_, { id }) => getTVVideos(id),
    tv_airingtoday: getTVAiringToday,
    tv_ontheair: getTVOnTheAir,
    tv_popular: getTVPopualr,
    tv_toprated: getTVToprated
  }
};

export default resolvers;
