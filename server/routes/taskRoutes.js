import { Router } from "express";
import { addMembers, assignTask, createProject, getMessages, sendMessages } from "../controllers/task.controller.js";
import loggedIn from "../middleware/loggedIn.middleware.js";

const router = Router()
router.post('/create',loggedIn,createProject)
router.post('/tasks/:id',loggedIn,addMembers)
router.post('/chat/:projectId',loggedIn,sendMessages)
router.get('/chat/:projectId',loggedIn,getMessages)
router.post('/addTask/:projectId',loggedIn,assignTask)

export default router 