const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { default: axios } = require("axios");
const application = express();
// ID , STRING ,INT, FLOAT , BOOLEAN, LIST []
let message = "I Gotch You";
const schema = buildSchema(`
    type User{
        id:ID!
        name:String!
        email:String!
    },
type Query {
    text: String!
  welcomeMessage(name: String): String!
  name: String!
    getUser: User!
     getAllUsers:[User]
     message:String
    
  }
  input UserInput{
    id:ID!
    name:String!
    email:String!
  }

  type Mutation{
    setMessage(newMessage:String):String
    addUser(user:UserInput):User
  }
`);

const root = {
  text: () => "Hello world!",
  welcomeMessage: (args) => {
    return `Welcome ${args.name} to the GraphQL API `;
  },
  name: () => {
    return "My name is Guhan";
  },
  getUser: () => {
    return {
      id: "1",
      name: "Guhan",
      email: "guhan@gmail.com",
    };
  },
  getAllUsers: async () =>
    (await axios.get("https://jsonplaceholder.typicode.com/users")).data,

  setMessage: ({ newMessage }) => {
    message = newMessage;
    return message;
  },
  message: () => message,
  addUser: (args) => {
    return args.user;
  },
};

application.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

application.listen(4000, () =>
  console.log("Running a GraphQL API server at localhost:4000/graphql")
);
