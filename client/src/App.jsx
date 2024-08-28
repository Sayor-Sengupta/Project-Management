import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Topbar from "./components/Topbar";
import TaskPage from "./pages/TaskPage";
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthStore } from "./zustand/useAuth";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { authUser } = useAuthStore();

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginForm />}
        />

        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />

        {authUser && (
          <Route element={<Topbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Project/:projectId" element={<TaskPage />} />
          </Route>
        )}

        {!authUser && <Route path="" element={<Navigate to="/login" />} />}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
