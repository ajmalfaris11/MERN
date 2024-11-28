const mongoose = require ("mongoose");

// Define the schema for the Mentor model
const mentorSchema = new mongoose.Schema(
    {
        // The mentor's name - required field
        name: {
            type: String,
            required: true,
        },
        
        // The mentor's email - required and unique for each mentor
        email: {
            type: String,
            required: true,
            unique: true,
        },
        
        // Role of the user, can either be "mentor" or "admin", defaults to "mentor"
        role: {
            type: String,
            enum: ["mentor", "admin"],
            default: 'mentor'
        },
        
        // The mentor's password - required with a minimum length of 8 characters
        password: {
            type: String,
            required: true,
            minLength: 8,
        },
        
        // Profile picture URL - defaults to a generic avatar image if not provided
        profilePic: {
            type: String,
            default: "https://static.vecteezy.com/system/resources/previews/012/210/707/non_2x/worker-employee-businessman-avatar-profile-icon-vector.jpg",
        },
        
        // Mentor's qualifications (optional field)
        qualification: {
            type: String
        },
        
        // Array of course IDs that the mentor is associated with (reference to Course model)
        courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
    },
    { timestamps: true }  // Automatically adds createdAt and updatedAt fields
);

// Create and export the Mentor model
export const Mentor = mongoose.model("Mentor", mentorSchema);
