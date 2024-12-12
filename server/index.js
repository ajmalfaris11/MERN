// Importing the express module to create an Express app
const express = require("express");

// Importing the connectDB function from the db configuration file
const connectDB = require("./config/db");
const apiRoutes = require("./routes");

// Importing the cookie-parser to access the cookies
const cookieParser = require('cookie-parser')

// Importing dotenv and configuring it to load environment variables from the .env file
require("dotenv").config();

// Calling the connectDB function to establish a connection to the MongoDB database
connectDB();

// Creating an instance of the Express app
const app = express();
// Importing dotenv to load environment variables from the .env file
require("dotenv").config();

// Getting the PORT value from the environment variables
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoutes);

// Starting the server on the specified port and handling errors
app.listen(port, (err) => {
  if (err) {
    // Logging any errors that occur while starting the server
    console.log(err);
  } else {
    // Logging a success message with the port number if the server starts successfully
    console.log(`Server starts on port ${port}`);
  }
});
