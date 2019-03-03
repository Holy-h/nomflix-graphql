import {
  getDetail,
  getVideos,
  getUpcomig,
  getNowplaying,
  getPopular,
  getToprated } from "./api";


const resolvers = {
  Query: {
    getmoviedetail: (_, {id}) => getDetail(id),
    getmovievideos: (_, {id}) => getVideos(id),
    getmovienowplaying: getNowplaying,
    getmoviepopular: getPopular,
    getmovietoprated: getToprated,
    getmovieupcoming: getUpcomig
  }
}

export default resolvers;