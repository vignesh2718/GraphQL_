const { mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
