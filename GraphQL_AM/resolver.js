const User = require("./models/User.model");

const resolver = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
    getUserById: async (parent, args, context, info) => {
      return await User.findById(args.id);
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { name, email, age } = args.user;
      const user = new User({ name, email, age });
      await user.save();
      return user;
    },
    deleteUserById: async (parent, args, context, info) => {
      //   await User.findByIdAndDelete(args.id);
      //   return "User deleted successfully";
      const { id } = args.id;
      const result = await User.deleteOne(id);
      if (result.deletedCount > 0) {
        return "User deleted successfully";
      }
      return "User-id not found";
    },
    UpdateUserById: async (parent, args, context, info) => {
      const { id, user } = args;
      const result = await User.findByIdAndUpdate(id, user, { new: true });
      return result;
    },
  },
};
module.exports = resolver;
