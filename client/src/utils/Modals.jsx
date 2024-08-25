import React from "react";
import { Button, ConfigProvider, Divider, Modal } from "antd";
import { Link } from "react-router-dom";

export const Modals = ({ open, setOpen }) => {
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
          <div className="h-40 flex flex-col justify-center items-center hover:cursor-pointer gap-1 text-white ">
            <h1 className="text-3xl p-2  ">Your Projects</h1>

            <Link to="/Project/sayor">
              <h1 className="text-xl hover:text-gray-500">Project1</h1>
            </Link>
            <h1 className="text-xl hover:text-gray-500">Project2</h1>
            <h1 className="text-xl hover:text-gray-500">Project3</h1>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};


<Modal>
</Modal>
  