import axios from "axios";
import React, { useState } from "react";
import { useAuthStore } from "../zustand/useAuth";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { authUser,setAuthUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/signup",
        { fullName, userName, password, confirmPassword },
        { withCredentials: true }
      );
      console.log(res.data);

      localStorage.setItem("authUser", JSON.stringify(res.data.createdUser));
      setAuthUser(res.data.createdUser);
    } catch (error) {
      if(error.response.status === 401){
        toast.error("Both the passwords do not match");

      console.log(error);
    }
    if(error.response.status === 400){
      toast.error("Username already exists");
    }
  };}

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-[420px] bg-teal-700 text-black rounded-lg p-8 backdrop-blur-3xl  "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center font-bold mb-6">Signup</h1>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="text"
            placeholder="Fullname"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="text"
            placeholder="Username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <button
          type="submit"
          className="w-full h-11 bg-white border-none outline-none rounded-full shadow-lg cursor-pointer text-black font-bold text-sm hover:bg-gray-200 transition duration-200"
        >
          Register
        </button>
        <div className="text-sm text-center mt-7 mb-3 pt-3">
          <p>
            Already have a account
            <Link
              to={"/login"}
              className="text-white font-semibold hover:underline ml-1"
            >
              login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
