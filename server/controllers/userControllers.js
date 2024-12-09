const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

//  User Sign-Up
const register = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    console.log(password);

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userAlreadyExist = await userModel.findOne({
      $or: [{ email }, { mobile }], // Check if either email or mobile exists
    });
    if (userAlreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return res.status(200).json({
      message: "User created successfully",
      savedUser,
    });
  } catch (error) {
    console.log("Register controller issue:", error.message);
    res
      .status(error.status || 500)
      .json({ err: error.message || "Internal Server Error" });
  }
};

//  User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Check git all the fields
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not exists" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ err: error.message || "Internal Server Error" });
  }
};

module.exports = { register, login };
