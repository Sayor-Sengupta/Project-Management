import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { CiMenuBurger } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { Modals } from "../utils/Modals";
import { CreateProjectModals } from "../utils/CreateProjectModal";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [modalVisible, setModalVisible] = React.useState(false);

  const showLoading = () => {
    setModalVisible(true);
    // setTimeout(() => {
    //   setModalVisible(false);
    // }, 2000);
  };

  // const showDrawer = () => {
  //   setOpen(true);

  // };
  // const onClose = () => {
  //   setOpen(false);
  // };





  return (
    <>

      <div className="w-full h-14 px-5 bg-green-800 flex flex-row justify-between">
        <div className=" flex flex-row gap-5 px-5 py-3">
          <CiMenuBurger className="h-8 w-8 hover:bg-green-700 hover:rounded-full cursor-pointer p-1 text-white" />
          <Link to='/'><FaHome className="h-8 w-8 p-1  hover:bg-green-700 hover:rounded-full text-white" /></Link>
        </div>

        <div className="mt-3 font-bold text-xl text-white">Meoww</div>

        <div className="flex flex-row gap-4">
          {/* <label
            className="input input-bordered h-10 flex items-center gap-2 mt-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-white bg-transparent
"
          >
            <input type="text" className="grow placeholder-white" placeholder="Search"  />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 text-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label> */}
          <CiCirclePlus className="h-10 w-10  hover:bg-green-700 hover:rounded-full cursor-pointer my-2 text-white" onClick={showLoading} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 mt-2  hover:bg-green-700 hover:rounded-full text-white"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* <Drawer
      title="Basic Drawer"
      placement={placement}
      closable={true}
      onClose={onClose}
      open={open}
      key={placement}
      width= '200 '
      className="text-blue-800 "

    >
      
    </Drawer> */}
    <CreateProjectModals open={modalVisible} setOpen={setModalVisible} />

    <Outlet/>

    </>
  );
};

export default Topbar;
