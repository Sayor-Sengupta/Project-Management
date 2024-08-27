import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Topbar from "./components/Topbar";
import Card from "./utils/card";
import MiddleSection from "./components/MiddleSection";
import Sidebar from "./utils/Sidebar";
import TaskPage from "./pages/TaskPage";
import Chat from "./components/Chat";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import { useAuthStore } from "./zustand/useAuth";

function App() {
  const {authUser} = useAuthStore()
  return (
    <>
        <Routes>

          <Route  element={<Topbar/>}>
            <Route path="/" element={authUser?<HomePage/>:  <Navigate to="/login"/>}/>
            <Route path="/login" element={authUser?<Navigate to="/"/>:<LoginForm/>}/>
            <Route path="/Project/:projectId" element={<TaskPage/>}/>

          </Route>
        </Routes>



      
      
    
    </>
  );
}

export default App;
