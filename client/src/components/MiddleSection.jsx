import React from "react";
import Card from "../utils/card";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { AiOutlineThunderbolt } from "react-icons/ai";
import TaskCard from "../utils/TaskCard";
import { Modals } from "../utils/Modals.jsx";

const MiddleSection = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const showLoading = () => {
    setModalVisible(true);
    // setTimeout(() => {
    //   setModalVisible(false);
    // }, 2000);
  };

  return (
    <>
      <div className="px-10 pt-10  ">
        <div className="ml-10">
          <h1 className="text-2xl">Spaces</h1>
        </div>

        <div className="flex flex-row">
          <Card text="Your Projects" icon={<UserGroupIcon className="h-10 text-green-500" />} onClick={showLoading} />
          <Card
            text="Projects"
            icon={<AiOutlineThunderbolt className="size-10 text-green-600 " />}
            onClick={showLoading}
          />
          {/* <Card text="" icon={<UserGroupIcon className="h-10 " />} onClick={showLoading} /> */}
        </div>
        <div className="ml-10">
          <h1 className="text-2xl">Recent</h1>
        </div>
        <div className="flex flex-row flex-wrap overflow-hidden ">
          <TaskCard Task="Complete the frontend" />
          <TaskCard Task="Complete the backend" />
          <TaskCard Task="Deploy the app" />
          <TaskCard Task="DO Testing" />
        </div>

        <Modals open={modalVisible} setOpen={setModalVisible} />
      </div>
    </>
  );
};

export default MiddleSection;
