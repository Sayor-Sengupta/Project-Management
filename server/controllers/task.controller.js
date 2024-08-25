import { Message, Project, Task } from "../models/project.models.js";
import User from "../models/user.models.js";

export const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const newProject = new Project({
      name,
      createdBy: req.user.id,
    });
    console.log("current User", req.user);

    const savedProject = await newProject.save();
    console.log("Project : ", newProject);

    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const addMembers = async (req, res) => {
  try {
    const projectId = req.params.id;
    console.log("projId",projectId);
    const { userName } = req.body;

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const project = await Project.findByIdAndUpdate(
      projectId,
      { $addToSet: { members: user._id } },
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await User.findByIdAndUpdate(
      user._id,
      { $push: { groups: projectId } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: `User ${userName} added to the project`, project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteProject = async (req, res) => {};

export const assignTask = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    console.log("projId",projectId);
    const { title, importance, assignedTo, dueDate } = req.body;
    

    const project = await Project.findById(projectId);
    
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }


    const user = await User.findOne({ userName: assignedTo });  
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = new Task({
      title,
      importance,
      assignedTo: user._id, 
      dueDate,
    });

   
    const savedTask = await task.save();


    const projDetails = await Project.findByIdAndUpdate(
      projectId,
      { $push: { tasks: savedTask._id } },
      { new: true } 
    );

    res.status(201).json({ Task: savedTask, ProjectDetails: projDetails });

  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
};

const checkAssignedTask = async (req, res) => {};

export const sendMessages = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { message } = req.body;

    const newMessage = new Message({
      message,
      sender: req.user.id,
      project: projectId,
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const getMessages = async (req, res) => {
  {
    try {
      const { projectId } = req.params;

      const messages = await Message.find({ project: projectId })
        .populate("sender", "userName fullName")
        .sort({ createdAt: 1 });

      res.status(200).json(messages);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
