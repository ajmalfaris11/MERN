// Importing the express module to create an Express app
const express = require("express");

// Importing the connectDB function from the db configuration file
const connectDB = require('./config/db');

// Importing dotenv and configuring it to load environment variables from the .env file
require('dotenv').config();


// Calling the connectDB function to establish a connection to the MongoDB database
connectDB();


// Creating an instance of the Express app
const app = express();

// Starting the server on port 4000 and handling errors
app.listen(4000, err => {
    if (err) {
        // Logging any errors that occur while starting the server
        console.log(err)
    } else {
        console.log("sever starts on port 4000") // if server is start to run show this comment
    }
});
