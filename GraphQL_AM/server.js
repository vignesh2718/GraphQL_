const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolver");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.use((req, res) => {
    res.send("Welcome to the Apollo Server");
  });
  await mongoose.connect("mongodb://localhost:27017/user_db ", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
  app.listen(8080, () => console.log("Server is running on port 8080"));
}

startServer();
