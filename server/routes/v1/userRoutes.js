const userRoutes = require ("express").Router();

userRoutes.get("/profile", (req, res) => {
    res.json("working")
});


module.exports = userRoutes