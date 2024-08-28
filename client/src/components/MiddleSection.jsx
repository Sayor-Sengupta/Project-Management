import React, { useEffect, useState } from "react";
import Card from "../utils/card";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { AiOutlineThunderbolt } from "react-icons/ai";
import TaskCard from "../utils/TaskCard";
import { Modals } from "../utils/Modals.jsx";
import { useAuthStore } from "../zustand/useAuth.js";
import axios from "axios";
import { extractDateFromCreatedAt } from "../utils/extractTime";
import { ProjectCreatedModal } from "../utils/ProjectCreatedModal.jsx";

const MiddleSection = ()=>{
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const { authUser } = useAuthStore();
  const [tasks, setTasks] = useState([]);

  
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/api/project/last-six-tasks', { withCredentials: true });
      console.log("res:", res.data.tasks);
      setTasks(res.data.tasks);
    };  
    fetchData();
  }, []);
  console.log("tasks", tasks);


  



  

  const showLoading = () => {
    setModalVisible(true);
  };
  const showLoading1 = () => {
    setModalVisible1(true);
  };

  return (
    <>
      <div className="px-10 pt-10 h-screen ">
        <div className="ml-10">
          <h1 className="text-2xl">Spaces</h1>
        </div>

        <div className="flex flex-row">
          <Card text="Your Projects" icon={<UserGroupIcon className="h-10 text-green-500" />} onClick={showLoading1} />
          <Card
            text="Projects"
            icon={<AiOutlineThunderbolt className="size-10 text-green-600 " />}
            onClick={showLoading}
          />
          {/* <Card text="" icon={<UserGroupIcon className="h-10 " />} onClick={showLoading} /> */}
        </div>
        <div className="ml-10">
          <h1 className="text-2xl">Recent</h1>
        </div>
        <div className="flex flex-row flex-wrap overflow-hidden ">
          {/* <TaskCard Task="Complete the frontend" />
          <TaskCard Task="Complete the backend" />
          <TaskCard Task="Deploy the app" />
          <TaskCard Task="DO Testing" /> */}

          { tasks.length > 0 ?             tasks.map((task, index) => (
              <TaskCard Task={task.title} dueDate={extractDateFromCreatedAt(task.dueDate)} key={index} />
            )):<h1 className="text-center text-2xl">No tasks found</h1>
          }
          
        </div>

        <Modals open={modalVisible} setOpen={setModalVisible} />
        <ProjectCreatedModal open={modalVisible1} setOpen={setModalVisible1} />
      </div>
    </>
  );
};

export default MiddleSection; 
