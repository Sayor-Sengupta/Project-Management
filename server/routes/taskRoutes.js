import { Router } from "express";
import {
  addMembers,
  assignTask,
  createProject,
  getAssignedTask,
  getLastSixTask,
  getMembers,
  getMessages,
  getProjectsName,
  sendMessages,
} from "../controllers/task.controller.js";
import loggedIn from "../middleware/loggedIn.middleware.js";

const router = Router();
router.post("/create", loggedIn, createProject);
router.post("/addMembers/:id", loggedIn, addMembers);
router.post("/chat/:projectId", loggedIn, sendMessages);
router.get("/chat/:projectId", loggedIn, getMessages);
router.post("/addTask/:projectId", loggedIn, assignTask);
router.get("/last-six-tasks", loggedIn, getLastSixTask);
router.get("/getProjectsName", loggedIn, getProjectsName);
router.get("/getMembers/:projectId", loggedIn, getMembers);
router.get("/getAssignedTask/:projectId", loggedIn, getAssignedTask);
export default router; 
