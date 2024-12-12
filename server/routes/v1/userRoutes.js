const { register, login, userProfile, userLogout } = require("../../controllers/userControllers");
const userAuth = require("../../middlewares/userAuth");

const userRoutes = require ("express").Router();

userRoutes.post("/signup", register); 
userRoutes.post("/login", login); 
userRoutes.get("/user-profile", userAuth, userProfile); 
userRoutes.get("/logout", userAuth, userLogout); 


module.exports = userRoutes