import React, { useState } from "react";
import { Button, ConfigProvider, Divider, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export const CreateProjectModals = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3000/api/project/create",
        { name },
        { withCredentials: true }
      );
      console.log(res.data.name);
      setOpen(false);
      const projectId = res.data._id;
      navigate(`/project/${projectId}`);
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      }
      if(error.response.status === 403){
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
           
              contentBg: "teal",
            },
          },
        }}
      >
        <Modal
          //   title={<p >Loading Modal</p>}
          title={
            <p
              className=" text-center text-2xl text-white"
              style={{ backgroundColor: "teal" }}
            >
             Create Projects
            </p>
          }
          footer={null}
          open={open}
          onCancel={() => setOpen(false)}
          width={500}
          centered={true}
        >
          
          <form
            className="flex flex-col gap-2 justify-center items-center placeholder-opacity-100 opacity-50 text-white placeholder-white m-10"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Project Name"
              className="input w-full max-w-xs  "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <button
              type="submit"
              className="btn btn-outline btn-accent w-44 mt-5"
            >
              Create
            </button>
          </form>
        </Modal>
      </ConfigProvider>
    </>
  );
};
