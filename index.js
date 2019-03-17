import dotenv from "dotenv";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema
});

server.start(({ port: PORT }) => {
  console.log(`GraphQL server running on http://localhost:${PORT}`);
});
