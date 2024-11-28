// Importing the express module to create an Express app
const express = require("express");

// Creating an instance of the Express app
const app = express();

// Starting the server on port 4000 and handling errors
app.listen(4000, err => {
    if (err) {
        // Logging any errors that occur while starting the server
        console.log(err)
    }
});
