import React, { useEffect, useState } from "react";
import { ConfigProvider, Modal } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

export const AddTaskModal = ({ open, setOpen, projectId }) => {
  const [title, setTitle] = useState("");
  const [importance, setImportance] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3000/api/project/addTask/${projectId}`,
        { title, importance, dueDate, assignedTo },
        { withCredentials: true }
      );

      setOpen(false);
      console.log("res", res);
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("user not found");
        setOpen(false);
      }
    }
  };

  return (
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
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        width={500}
        centered={true}
        title={
          <p
            className=" text-center text-2xl text-white"
            style={{ backgroundColor: "teal" }}
          >
            Add Tasks
          </p>
        }
      >
        <form
          className="flex flex-col gap-2 justify-center items-center placeholder-opacity-100 opacity-50 text-white placeholder-white m-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Title"
            className="input w-full max-w-xs  "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <input
            type="text"
            placeholder="Importance"
            className="input w-full max-w-xs  "
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          />{" "}
          <input
            type="date"
            data-date=""
            data-date-format=" MMMM DD YYYY"
            placeholder="Due Date"
            className="input w-full max-w-xs  "
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />{" "}
          <input
            type="Assigned To : "
            placeholder="Enter Username"
            className="input w-full max-w-xs  "
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />{" "}
          <button
            type="submit"
            className="btn btn-outline btn-accent w-44 mt-5"
          >
            Add
          </button>
        </form>
      </Modal>
    </ConfigProvider>
  );
};
