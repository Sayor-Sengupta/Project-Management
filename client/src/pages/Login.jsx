import React, { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useAuthStore } from "../zustand/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { authUser, setAuthUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request with:", { userName, password });
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          userName,
          password,
        },
        { withCredentials: true }
      );

      console.log("Response data:", res.data.loggedInUser);
      localStorage.setItem("authUser", JSON.stringify(res.data.loggedInUser));
      if (res.status === 200) {
        toast.success("Logged in successfully");
        setAuthUser(res.data.loggedInUser);
      }
    } catch (error) {

      if(error.response.status === 401){
        toast.error("Invalid username or password");
      }
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-[420px] bg-white/30 text-black rounded-lg p-8 backdrop-blur-3xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center font-bold mb-6">Login</h1>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <div className="relative w-full h-12 bg-gray-200 my-7 rounded-lg">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-[84%] h-full bg-transparent border-none outline-none border-2 border-white/20 rounded-full text-sm text-black p-5 pr-14 placeholder-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm" />
        </div>
        <button
          type="submit"
          className="w-full h-11 bg-white border-none outline-none rounded-full shadow-lg cursor-pointer text-black font-bold text-sm hover:bg-gray-200 transition duration-200"
        >
          Login
        </button>
        <div className="text-sm text-center mt-7 mb-3 pt-3">
          <p>
            Don't have an account?
            <Link
              to={"/signup"}
              className="text-white font-semibold hover:underline ml-1"
            >
             signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
