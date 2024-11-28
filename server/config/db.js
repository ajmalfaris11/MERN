// Importing mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Attempting to connect to MongoDB using a connection string (replace with your own)
        await mongoose.connect("mongodb+srv://ajmalfaris-mern:OYEXIodpRwfCBQaG@cluster0.gedfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        // If successful, log a success message
        console.log("DB connected successfully");
    } catch (err) {
        // If an error occurs, log the error message
        console.log(error);
    }
};
