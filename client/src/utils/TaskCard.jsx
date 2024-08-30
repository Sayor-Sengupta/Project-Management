import React from "react";

const TaskCard = ({ Task , dueDate }) => {
  return (
    <div className="min-h-24 min-w-72 m-10 bg-teal-200 shadow-sm shadow-purple-200 flex flex-col justify-center items-center rounded-2xl ">
      <p className="text-blackx"> Task : {Task}</p>

      <h1 className="text-black text-sm">Due :{dueDate}</h1>
      

     
    </div>
  );
};

export default TaskCard;
