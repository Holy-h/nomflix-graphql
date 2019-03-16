import {
  getDetail,
  getVideos,
  getUpcomig,
  getNowplaying,
  getPopular,
  getToprated,
  getTvDetail,
  getTVVideos,
  getTVOnTheAir,
  getTVAiringToday,
  getTVPopualr,
  getTVToprated
} from "../api";

const resolvers = {
  Query: {
    movie_detail: (_, { id }) => getDetail(id),
    movie_videos: (_, { id }) => getVideos(id),
    movie_nowplaying: getNowplaying,
    movie_popular: getPopular,
    movie_toprated: getToprated,
    movie_upcoming: getUpcomig,
    tv_detail: (_, { id }) => getTvDetail(id),
    tv_videos: (_, { id }) => getTVVideos(id),
    tv_airingtoday: getTVAiringToday,
    tv_ontheair: getTVOnTheAir,
    tv_popular: getTVPopualr,
    tv_toprated: getTVToprated
  }
};

export default resolvers;
