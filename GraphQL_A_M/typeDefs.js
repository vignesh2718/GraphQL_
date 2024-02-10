const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String
  }

  type Query {
    getAllPosts: [Post]
    getPostById(id: ID!): Post
  }

  input PostInput {
    title: String!
    description: String
  }

  type Mutation {
    createPost(post: PostInput): Post
    deletePostById(id: ID): String
    UpdatePostById(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
