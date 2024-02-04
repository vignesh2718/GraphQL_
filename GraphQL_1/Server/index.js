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
            type User{
                id:ID!
                name:String!
                username:String!
                email:String!
                phone:String!
                website:String!
            }
            type Todo{
                id:ID!
                title:String!
                completed:Boolean!
                user:User
            }
            type Query{
                gettodos:[Todo]
                getAllUsers:[User]
            }
            `,
    resolvers: {
      Todo: {
        user: async (todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        gettodos: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

        getAllUsers: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  // server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}
startServer();
