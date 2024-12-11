// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Function to generate a JWT token
// Accepts user object and role as parameters
const generateToken = (user, role) => {
    try {
        // Generate a JWT token with user ID and role
        const token = jwt.sign(
            { id: user._id, role: role }, // Payload data
            process.env.JWT_SECRET          // Secret key from environment variables
        );
        
        // Return the generated token
        return token;

    } catch (error) {
        // Handle any errors that occur during token generation
        res.status(500).json({ err: error.message || "Internal Server Error" });
    }
}

// Export the token generation function for external use
module.exports = generateToken;
