import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // description: {
    //   type: String,
    // },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tasks: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender:{
        type:String,
        required:true
    }
  },
  {}
);

const Task = mongoose.model("Task", TaskSchema);
const Project = mongoose.model("Project", ProjectSchema);
const Message = mongoose.model("Message",messageSchema)

export { Task, Project,Message };
