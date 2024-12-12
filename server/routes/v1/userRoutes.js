const { register, login, userProfile } = require("../../controllers/userControllers");
const userAuth = require("../../middlewares/userAuth");

const userRoutes = require ("express").Router();

userRoutes.post("/signup", register); 
userRoutes.post("/login", login); 
userRoutes.get("/user-profile", userAuth, userProfile); 


module.exports = userRoutes