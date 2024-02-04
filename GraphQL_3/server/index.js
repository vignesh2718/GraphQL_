const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type albums{
            id:ID!
            title:String!
            userId:ID!
        }
        type posts{
            id:ID!
            title:String!
            body: String!
            user: albums
        }
        type Query{
            getAlbums:[albums]
            getAllPost:[posts]
            getThings(id:ID!):posts
        }
    `,
    resolvers: {
      posts: {
        user: async (post) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/posts/${post.userId}`
            )
          ).data,
      },
      Query: {
        getAlbums: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/albums")).data,

        getAllPost: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/posts")).data,

        getThings: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`))
            .data,
      },
    },
  });

  //   app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));
  app.listen(4000, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}
startServer();
