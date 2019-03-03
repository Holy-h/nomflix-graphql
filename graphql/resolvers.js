import { getMovie } from "./api";


const resolvers = {
  Query: {
    getmovie: async (_, {id}) => getMovie(id),
  }
}

export default resolvers;