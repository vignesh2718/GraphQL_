npm install express apollo-server-express graphql mongoose

npm install graphql@^15.3.0

npm nodemon

Below is a README file explaining the purpose and usage of each file in layman's terms, along with the dependencies required for your project:

---

# Project Overview

This project is a simple GraphQL server built with Node.js and Apollo Server. It allows you to manage posts, including creating, reading, updating, and deleting posts.

## Files

### 1. Server.js

This file sets up the Express server and integrates Apollo Server for handling GraphQL requests. It also connects to MongoDB using Mongoose. The server listens on port 8080.

### 2. Resolver.js

Resolver.js contains the resolver functions for handling GraphQL queries and mutations. It interacts with the database (MongoDB) to perform CRUD operations on posts.

### 3. Post.model.js

Post.model.js defines the Mongoose schema for the Post model, which represents the structure of posts stored in the MongoDB database.

### 4. typeDefs.js

typeDefs.js contains the GraphQL schema definitions, including the Post type and various queries and mutations for managing posts.


## Dependencies

To run this project, you need to install the following dependencies using npm:

- express: Fast, unopinionated, minimalist web framework for Node.js
- apollo-server-express: Integration of Apollo Server with Express
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment

Install these dependencies by running the following command in your terminal:

```
npm install express apollo-server-express mongoose
```
