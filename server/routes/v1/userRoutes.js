const { register } = require("../../controllers/userControllers");

const userRoutes = require ("express").Router();

userRoutes.post("/signup", register); 


module.exports = userRoutes