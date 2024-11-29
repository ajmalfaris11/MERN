// Importing mongoose for creating and managing MongoDB schemas
const mongoose = require("mongoose");

// Defining a schema for the Course collection
const courseSchema = new mongoose.Schema(
  {
    // Title of the course, must be unique and have specific length constraints
    title: {
      type: String,
      required: true, // Title is mandatory
      minLength: 3,   // Minimum length of 3 characters
      maxLength: 30,  // Maximum length of 30 characters
      unique: true,   // Ensures the title is unique in the collection
    },
    // Description of the course with length constraints
    description: {
      type: String,
      required: true, // Description is mandatory
      minLength: 20,  // Minimum length of 20 characters
      maxLength: 300, // Maximum length of 300 characters
    },
    // Price of the course, must be a number and is mandatory
    price: {
      type: Number,
      required: true, // Price is mandatory
    },
    // Duration of the course, must be a string and is mandatory
    duration: {
      type: String,
      required: true, // Duration is mandatory
    },
    // Image URL for the course with a default placeholder value
    image: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLGtEd0MJro4X9wDmT2vrvLT-HjKkyyWVmg&s", // Default image URL
    },
    // Reference to the mentor of the course using an ObjectId from the Mentor collection
    mentor: { 
      type: mongoose.Types.ObjectId, 
      ref: "Mentor" // Refers to the Mentor collection
    },
  },
  { 
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
  }
);

// Exporting the Course model for use in other parts of the application
module.exports = new mongoose.model("courses", courseSchema);
