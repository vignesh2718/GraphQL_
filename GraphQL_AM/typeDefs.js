const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
  }
  input UserInput {
    name: String
    email: String!
    age: Int
  }
  type Mutation {
    createUser(user: UserInput): User
    deleteUserById(id: ID): String
    UpdateUserById(id: ID, user: UserInput): User
  }
`;

module.exports = typeDefs;
