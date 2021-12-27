const { gql } = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  
  type User {
    id: ID!
    createdAt: String!
    username: String!
    email: String!
    token: String!
  }

  input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register ( registerInput: RegisterInput): User!,
    login (username: String!, password: String!): User!
  }

  type Query {
    getPosts: [Post]
    getUsers: [User]
  }
`;
