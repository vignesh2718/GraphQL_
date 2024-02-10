const Post = require("./models/Post.model");

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
    getPostById: async (parent, args, context, info) => {
      return await Post.findById(args.id);
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
    deletePostById: async (parent, args, context, info) => {
      const { id } = args.id;
      const result = await Post.deleteOne(id);
      if (result.deletedCount > 0) {
        return "Post deleted successfully";
      }
      return "Post not found";
    },
    UpdatePostById: async (parent, args, context, info) => {
      const { id, post } = args;
      const result = await Post.findByIdAndUpdate(id, post, { new: true });
      return result;
    },
  },
};

module.exports = resolvers;
