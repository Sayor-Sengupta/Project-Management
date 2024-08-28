import React, { useEffect, useState } from "react";
import Table from "../utils/Table";
import Chat from "./Chat";
import { AddMemberModal } from "../utils/addMemberModal";
import { AddTaskModal } from "../utils/AssignTaskModals";
import axios from "axios";
import { useAuthStore } from "../zustand/useAuth";
import { CompletedTable } from "../utils/CompletedTable";

const Members = ({ projectId }) => {
  const [members, setMembers] = useState([]);
  const [creator, setCreator] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const { authUser } = useAuthStore();

  const fetchMembers = async () => {
    if (!projectId || typeof projectId !== "string") {
      console.error("Invalid project ID");
      return;
    }
    try {
      const res = await axios.get(
        `http://localhost:3000/api/project/getMembers/${projectId}`,
        { withCredentials: true }
      );

      setMembers(res.data.members);
      console.log("members", res.data.members);
      setCreator(res.data.creator);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [projectId]);

  const handleModalSuccess = () => {
    fetchMembers();
  };

  const showLoading = () => {
    setModalVisible(true);
  };
  const showLoading1 = () => {
    setModalVisible1(true);
  };

  return (
    <>
      <div className="flex flex-row gap-12 justify-between  ">
        <div className="flex flex-col gap-2 items-center">
          <div className="h-12 w-64 bg-green-800 border flex justify-center items-center rounded-lg">
            <h1>Members</h1>
          </div>

          {members.map((member, index) => (
            <div
              className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md "
              key={index}
            >
              <h1>{member.userName}</h1>
            </div>
          ))}
          <div>
            {authUser._id === creator ? (
              <div className="">
                <div className="h-12 w-64 bg-green-800 border rounded-lg mt-10 mb-5 flex items-center justify-center">
                  <h1>Creator Options</h1>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h1
                    className="bg-gray-500 p-2 w-44 rounded-lg text-center hover:bg-gray-600 border"
                    onClick={showLoading1}
                  >
                    Assign Task to Others
                  </h1>
                  {/* <h1 className="bg-gray-500 p-2 w-44 rounded-lg text-center hover:bg-gray-600 border">
                    Delete Group
                  </h1> */}
                  <h1
                    className="bg-gray-500 p-2 w-44 rounded-lg text-center hover:bg-gray-600 border"
                    onClick={showLoading}
                  >
                    Add Members
                  </h1>
                </div>
                <AddMemberModal
                  open={modalVisible}
                  setOpen={setModalVisible}
                  projectId={projectId}
                  onSuccess={handleModalSuccess} // Pass the callback
                />
              </div>
            ) : null}
            <AddMemberModal
              open={modalVisible}
              setOpen={setModalVisible}
              projectId={projectId}
              onSuccess={handleModalSuccess} // Pass the callback
            />
          </div>
          <AddTaskModal
            open={modalVisible1}
            setOpen={setModalVisible1}
            projectId={projectId}
          />
        </div>

        <Chat projectId={projectId} />

        {authUser._id === creator? (
          <div className="min-w-96 max-w-72">
            <div className="border px-2 py-2 text-center bg-green-800 rounded-lg">
              <h1>Completed Tasks</h1>
            </div>{" "}
            <CompletedTable projectId={projectId} />
          </div>
        ) : null}

        {authUser._id !== creator ? (
          <div>
            <div className="border px-2 py-2 text-center min-w-72 bg-green-800 rounded-lg ">
              <h1>My tasks</h1>
            </div>

            <Table projectId={projectId} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Members;
