import React from "react";
import Tasks from "../components/Tasks";
import Members from "../components/Members";
import { useParams } from "react-router-dom";

const TaskPage = () => {
  const {projectId} = useParams();
  console.log("projectId = ", projectId);

  return (
    <>
      <div className="mx-10 my-10 max-h-screen ">
        <Members  projectId={projectId}/>
      </div>
    </>
  );
};

export default TaskPage;
