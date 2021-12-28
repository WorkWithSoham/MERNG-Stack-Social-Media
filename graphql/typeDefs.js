const { gql } = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
    comments: [Comment]!
    likes: [Like]!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    token: String!
  }

  type Comment {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(commentId: ID!, postId: ID!): Post!
    likePost(postId: ID!): Post!
  }
 
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
`;
