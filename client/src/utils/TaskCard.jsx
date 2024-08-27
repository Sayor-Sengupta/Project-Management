import React from "react";
import { Checkbox, Col, Row } from "antd";

const TaskCard = ({ Task , dueDate }) => {
  return (
    <div className="min-h-24 min-w-72 m-10 bg-white shadow-sm shadow-purple-200 flex flex-col justify-center items-center rounded-md ">
      <p className="text-black underline underline-offset-4">{Task}</p>

      <h1 className="text-black text-sm">{dueDate}</h1>

     
    </div>
  );
};

export default TaskCard;
