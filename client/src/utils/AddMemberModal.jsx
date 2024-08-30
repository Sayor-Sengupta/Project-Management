import React, { useState } from "react";
import { Button, ConfigProvider, Divider, Modal } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const AddMemberModal = ({ open, setOpen, projectId, onSuccess }) => {
  const [member, setMember] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/api/project/addMembers/${projectId}`,
        { userName: member },
        { withCredentials: true }
      );
      console.log("res", res);
      if (onSuccess) onSuccess();
      setOpen(false);
    } catch (error) {
      if (error.response.status === 400) {
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
              /* here is your component tokens */
              contentBg: "teal",
            },
          },
        }}
      >
        <Modal
          // title={<p >Loading Modal</p>}
          footer={null}
          title={
            <p
              className=" text-center text-2xl text-white"
              style={{ backgroundColor: "teal" }}
            >
              Add Member
            </p>
          }
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
              placeholder="Enter Username"
              className="input w-full max-w-xs  "
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />{" "}
            <button className="p-[3px] relative mt-4 w-48" type="submit">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Add
              </div>
            </button>
          </form>
        </Modal>
      </ConfigProvider>
    </>
  );
};
