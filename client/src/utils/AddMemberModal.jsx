import React, { useState } from "react";
import { Button, ConfigProvider, Divider, Modal } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export const AddMemberModal = ({ open, setOpen , projectId, onSuccess }) => {
  const [member, setMember] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:3000/api/project/addMembers/${projectId}`,
      { userName: member },
      { withCredentials: true }
    );
    console.log("res", res);
    if (onSuccess) onSuccess();
    setOpen(false);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              /* here is your component tokens */
              contentBg: "#006A4E ",
            },
          },
        }}
      >
        <Modal
          //   title={<p >Loading Modal</p>}
          footer={null}
          open={open}
          onCancel={() => setOpen(false)}
          width={500}
          centered={true}
        >
          <h1 className="w-full text-center text-4xl mt-3 text-white">
            Add Member
          </h1>
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
            <button
              type="submit"
              className="btn btn-outline btn-accent w-44 mt-5"
            >
              Add
            </button>
          </form>
        </Modal>
      </ConfigProvider>
    </>
  );
};

<Modal></Modal>;
