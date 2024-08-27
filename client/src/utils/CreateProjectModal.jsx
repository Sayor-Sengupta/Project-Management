import React, { useState } from "react";
import { Button, ConfigProvider, Divider, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateProjectModals = ({ open, setOpen }) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const handleSubmit =async (e)=>{

        e.preventDefault()
        const res = await axios.post("http://localhost:3000/api/project/create",{name},{withCredentials:true})
        console.log(res.data.name)
        setOpen(false)
        const projectId = res.data._id
        navigate(`/project/${projectId}`)
        
    }
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
            Create Your Project{" "}
          </h1>
          <form className="flex flex-col gap-2 justify-center items-center placeholder-opacity-100 opacity-50 text-white placeholder-white m-10" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Project Name"
              className="input w-full max-w-xs  "
              value={name}  onChange={(e)=>setName(e.target.value)}
              
            />
           
              {" "}
              <button type="submit" className="btn btn-outline btn-accent w-44 mt-5">
                Create
              </button>
        
          </form>
        </Modal>
      </ConfigProvider>
    </>
  );
};
