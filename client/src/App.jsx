import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Topbar from "./components/Topbar";
import Card from "./utils/card";
import MiddleSection from "./components/MiddleSection";
import Sidebar from "./utils/Sidebar";
import TaskPage from "./pages/TaskPage";
import Chat from "./components/Chat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>

          <Route  element={<Topbar/>}>
            <Route path="/" element={<MiddleSection/>}/>
            <Route path="/Project/:name" element={<TaskPage/>}/>

          </Route>
        </Routes>



      
      
    
    </>
  );
}

export default App;
