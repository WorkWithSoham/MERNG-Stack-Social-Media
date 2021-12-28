const { AuthenticationError, UserInputError } = require("apollo-server");
const Post = require("../../models/Post");
const checkAuth = require("../../utils/check.auth");

module.exports = {
  Mutation: {
    async createComment(_, { postId, body }, context) {
      const user = checkAuth(context);

      if (body.trim() === "") {
        throw new UserInputError("Comment cannot be empty", {
          errors: {
            body: "Comment must not be empty",
          },
        });
      }
      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username: user.username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError('Post does not exist.')
    },
    async deleteComment(_, { postId, commentId }, context) {
      const user = checkAuth(context);
      const post = await Post.findById(postId);

      if (post){
          const commentIdx = post.comments.findIndex(c => c.id === commentId);

          if (post.comments[commentIdx].username === user.username) {
              post.comments.splice(commentIdx, 1)
              await post.save();
              return post;
          } else {
              throw new AuthenticationError('Action not allowed')
          }
      } else {
          throw new UserInputError('Post does not exist.')
      }

    },
  },
};
