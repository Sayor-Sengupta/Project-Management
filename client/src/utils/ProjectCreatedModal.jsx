import React, { useEffect, useState } from "react";
import { ConfigProvider, Modal } from "antd";
import axios from "axios";
import {Link} from "react-router-dom";

export const ProjectCreatedModal = ({ open, setOpen ,  }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/project/getCreatedProjects", { withCredentials: true });
        setProjects(res.data.projects);
        console.log("res.data.projects",res.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    getProjects();
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#006A4E",
          },
        },
      }}
    >
      <Modal
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        width={500}
        centered={true}
      >
        <div className="h-40 flex flex-col justify-center items-center hover:cursor-pointer gap-1 text-white">
          <h1 className="text-3xl p-2">Your Projects</h1>
            {

                projects.map((project) =>                
                    <h1 key={project._id} className="text-xl hover:text-gray-500">
                        <Link to={`/Project/${project._id}`}> {project.name}</Link>
                    </h1>
                )
            }
        </div>
      </Modal>
    </ConfigProvider>
  );
};
