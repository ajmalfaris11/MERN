// Importing mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    // Attempting to connect to MongoDB using a connection string from the environment variable
    await mongoose.connect(process.env.MONGO_URL);

    // If successful, log a success message
    console.log("DB connected successfully");
  } catch (err) {
    // If an error occurs, log the error message
    console.log(error);
  }
};

module.exports = connectDB; // export the connectDB async function to import on index.js file
