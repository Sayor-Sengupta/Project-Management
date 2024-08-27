import jwt from "jsonwebtoken";

import User from "../models/user.models.js";
const loggedIn = async (req, res, next) => {
    try {
      const token = req.cookies.jwt;
      // console.log('Token:', token); 
      if (!token) {
        return res.status(401).json({ error: "Unauthorized - no token" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log('Decoded Token:', decoded); 
  
      if (!decoded) {
        return res.status(401).json({ error: "Unauthorized - invalid token" });
      }
      
      const user = await User.findById(decoded.userId).select("-password");
      // console.log('User:', user); 
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.log("Error in protectRoute middleware:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
export default loggedIn