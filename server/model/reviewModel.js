// Importing mongoose for schema creation and database interaction
const mongoose = require("mongoose");

// Defining a schema for the Review collection
const reviewSchema = new mongoose.Schema({
    // User ID linking the review to a specific user
    userId: {
        type: mongoose.Schema.Types.ObjectId, // ObjectId to reference the user
        ref: "User", // Refers to the User collection
        required: true, // User ID is mandatory
    },
    // Course ID linking the review to a specific course
    courseId: {
        type: mongoose.Schema.Types.ObjectId, // ObjectId to reference the course
        ref: "Course", // Refers to the Course collection
        required: true, // Course ID is mandatory
    },
    // Rating given by the user for the course
    rating: {
        type: Number,
        required: true, // Rating is mandatory
        min: 1, // Minimum rating is 1
        max: 5, // Maximum rating is 5
    },
    // Optional comment provided by the user about the course
    comment: {
        type: String,
        trim: true, // Trims whitespace from the comment
        maxlength: 500, // Maximum length of 500 characters
    },
    // Date when the review was created, defaults to the current date
    createdAt: {
        type: Date,
        default: Date.now, // Default value is the current date
    },
});

// Exporting the Review model for use in other parts of the application
module.exports = new mongoose.model("reviews", reviewSchema);
