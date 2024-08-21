import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import generateTokenCookie from "../utils/genTokenCookie.js";

const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ userName });

    if (user) return res.status(400).json({ error: "UserName already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
    });

    console.log(newUser);

    await newUser.save();

    generateTokenCookie(newUser._id, res);

    const createdUser = await User.findById(newUser._id).select("-password");
    console.log(createdUser);

    return res.status(200).json({
      createdUser,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("Error in signup:", error.message);
    return res.status(500).json({ error: "Error in signup" });
  }
};

const login = async (req,res) => {
  
    try {

        const {userName,password} = req.body
        const user = await User.findOne({userName})

        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(404).json({
                error:"invalid username or password"
            })
        }

        generateTokenCookie(user._id,res)

        const loggedInUser = await User.findById(user._id).select("-password")

        return res.status(200).json({
            loggedInUser,messages:"loggedInSuccess"
        })   
    } catch (error) {
        console.log("error in login",error.message);
        return res.status(500).json({message:"error -login "})
    }


};

const logout =  (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({messages:"Logged out"})
    } catch (error) {
        console.log("error in login",error.message);
        return res.status(500).json({error:"internal server error"})
    }

}



export { signup, login ,logout};
