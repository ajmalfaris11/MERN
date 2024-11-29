// Importing mongoose for schema creation and database interaction
const mongoose = require("mongoose");

// Defining a schema for the Cart collection
const cartSchema = new Schema(
    {
        // User ID linking the cart to a specific user
        userId: {
            type: Schema.Types.ObjectId, // ObjectId to reference the user
            ref: "users", // Refers to the Users collection
            required: true, // User ID is mandatory
        },
        
        // Array of courses added to the cart
        courses: [
            {
                // Course ID linking each item to a specific course
                courseId: {
                    type: Schema.Types.ObjectId, // ObjectId to reference the course
                    ref: "courses", // Refers to the Courses collection
                    required: true, // Course ID is mandatory
                },
                // Price of the individual course
                price: {
                    type: Number,
                    required: true, // Price is mandatory
                },
            },
        ],
        
        // Total price of all the courses in the cart
        totalPrice: {
            type: Number,
            required: true, // Total price is mandatory
            default: 0, // Default value is 0
        },
    },
    { 
        timestamps: true // Automatically adds createdAt and updatedAt timestamps
    }
);

// Exporting the Cart model for use in other parts of the application
module.exports = new mongoose.model("carts", cartSchema);
