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
      required:true
    },
    dueDate: {
      type: Date,
      required:true
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    completed:{
      type:Boolean,
      default:false
      
    },
    completedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
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
    tasks: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const messageSchema = new mongoose.Schema(
  {
    message:{
      type: String,
      required: true,
    },
    sender:{
        type:String,
        required:true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
      },
  },
  {timestamps:true}
);

const Task = mongoose.model("Task", TaskSchema);
const Project = mongoose.model("Project", ProjectSchema);
const Message = mongoose.model("Message",messageSchema)

export { Task, Project,Message };
