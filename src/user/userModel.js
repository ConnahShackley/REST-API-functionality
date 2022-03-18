const mongoose = require("mongoose");

// // CREATING USER DETAILS \\
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// // Creates a model using a schema which can effect/manipulate the database
const User = mongoose.model("User", userSchema);

module.exports = User;