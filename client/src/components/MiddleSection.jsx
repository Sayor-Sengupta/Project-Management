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
import { GrProjects } from "react-icons/gr"

const MiddleSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const { authUser } = useAuthStore();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/project/last-six-tasks",
        { withCredentials: true }
      );
      console.log("res:", res.data.tasks);
      setTasks(res.data.tasks);
    };
    fetchData();
  }, []);

  const showLoading = () => {
    setModalVisible(true);
  };
  const showLoading1 = () => {
    setModalVisible1(true);
  };

  return (
    <div className="px-10 py-8 min-h-screen  text-gray-800">

      <div className="ml-10 mb-4">
        <h1 className="text-4xl font-semibold text-white">Spaces</h1>
      </div>

     
      <div className="flex flex-row gap-6  mb-10">
        <Card
          text="Created Projects"
          icon={<UserGroupIcon className="h-10 text-gray-600" />}
          onClick={showLoading1}
        />
        <Card
          text="Joined Projects"
          icon={<GrProjects className="h-10 text-gray-600" />}
          onClick={showLoading}
          
        />
      </div>

      <div className="ml-10 mb-7">
        <h1 className="text-4xl font-semibold text-gray-100">Recent</h1>
      </div>
      <div className="flex flex-wrap gap-6 overflow-hidden rounded-3xl mt-5 p-6 justify-center shadow-2xl shadow-gray-950">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskCard
              Task={task.title}
              dueDate={extractDateFromCreatedAt(task.dueDate)}
              key={index}
            />
          ))
        ) : (
          <h1 className="text-center text-2xl text-gray-500 mt-10 mb-10  w-full">
            All task Completed
          </h1>
        )}
      </div>

   
      <Modals open={modalVisible} setOpen={setModalVisible} />
      <ProjectCreatedModal open={modalVisible1} setOpen={setModalVisible1} />
    </div>
  );
};

export default MiddleSection;
