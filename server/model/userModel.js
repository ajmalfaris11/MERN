// Importing mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for the user model
const userSchema = new mongoose.Schema({
  // Defining the 'name' field with a max length of 15 characters and making it required
  name: {
    type: String,
    required: true,
    maxLength: 15,
  },
  // Defining the 'email' field, which must be unique, required, and within a length range
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  // Defining the 'password' field, which is required and should have a minimum length of 6
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  // Defining the 'mobile' field, which is required and must be unique
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  // Defining the 'profilePic' field with a default placeholder image if no profile picture is provided
  profilePic: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/039/845/042/non_2x/male-default-avatar-profile-gray-picture-grey-photo-placeholder-gray-profile-anonymous-face-picture-illustration-isolated-on-white-background-free-vector.jpg",
  },
}, { timestamps: true }); // Adding timestamps to the schema to track when documents are created/updated

// Exporting the user model based on the schema
module.exports = new mongoose.model("users", userSchema);
