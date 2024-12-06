const userModel = require("../model/userModel");

const register = async(req, res) => {
    try {

        const { name, email, mobile, password } = req.body;


        if(!name || !email || !mobile || !password) {
            return res.status(400).json({error: "All fields are required"});
        } 

        const userAleardyExist = userModel.find({email});

        if(!userAleardyExist){
            const newUser = new userModel({
                name, email, mobile, password
            });
    
            const savedUser = await newUser.save();
    
            console.log(savedUser);
            
    
            res.status(200).json({
                message:"User created successfully", savedUser
            })
        } else {
            return res.status(400).json({
                message: "User already exist"
            });
        }
        
        
    } catch (error) {
        console.log("register contoller issue")
        res.status(error.status || 500).json({err:error.message || "Internal server Error"})
    }
}

module.exports = {register}