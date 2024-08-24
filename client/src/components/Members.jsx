import React from "react";
import Table from "../utils/Table";
import Chat from "./Chat";

const Members = () => {
  return (
    <>
      <div className="flex flex-row gap-12 justify-between ">
        <div className="flex flex-col gap-2 items-center ">
          <div className="h-12 w-64 bg-green-800 border flex justify-center items-center rounded-lg">
            <h1 className="">Members</h1>
          </div>
          <div className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md">
            <h1>Sayor</h1>
          </div>
          <div className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md">
            <h1>Puskar</h1>
          </div>
          <div className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md">
            <h1>Khalid</h1>
          </div>
          <div className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md">
            <h1>Dipanjan</h1>
          </div>
          <div className="h-12 w-48 bg-cyan-800 flex justify-center items-center rounded-md">
            <h1>Tapamita</h1>
          </div>

          <div>
            {" "}
            <div className="h-12 w-64 bg-green-800 border rounded-lg mt-10 mb-5 flex items-center justify-center">
              <h1>Creator Options </h1>
            </div>
            <div className=" flex flex-col items-center gap-4 ">
              <h1 className="bg-gray-500 p-2 w-44 rounded-lg text-center hover:bg-gray-600 border">Assign Task to Others</h1>
              <h1 className="bg-gray-500 p-2 w-44 rounded-lg text-center hover:bg-gray-600 border">Delete Group</h1>
            </div>
          </div>
        </div>

        <Chat />

        <div>
          <div className="border px-2 py-2 text-center min-w-72 bg-green-800 rounded-lg">
            <h1 className=" ">My tasks</h1>
          </div>

          <Table />
        </div>
      </div>
    </>
  );
};

export default Members;
