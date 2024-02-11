<!-- npm install express apollo-server-express graphql mongoose

npm install graphql@^15.3.0

npm nodemon -->


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
Sure, here's how you can include the example queries and mutations in the README.md file:

---

## GraphQL Queries and Mutations

Here are some example GraphQL queries and mutations that you can execute using this server:

### 1. Query: Get All Posts

Retrieves all posts from the database.

```graphql
query {
  getAllPosts {
    id
    title
    description  
  }
}
```

### 2. Query: Get Post By ID

Retrieves a specific post from the database by its ID.

```graphql
query {
  getPostById(id: "65c79acd3a8b362fdce8257e") {
    title
    description
  }
}
```

### 3. Mutation: Create Post

Creates a new post in the database.

```graphql
mutation {
  createPost(post: {
    title: "This is a new post"
    description: "Description of the new post"
  }) {
    id 
    title
  }
}
```

### 4. Mutation: Delete Post By ID

Deletes a post from the database by its ID.

```graphql
mutation {
  deletePostById(id: "65c7929a76c759c3ca6de0bf")
}
```

### 5. Mutation: Update Post By ID

Updates a post in the database by its ID.

```graphql
mutation {
  UpdatePostById(id: "65c79bb43a8b362fdce82583", post: {
    title: "Updated post title"
    description: "Updated description of the post"
  }) {
    id
    title
    description
  }
}
```
--- 