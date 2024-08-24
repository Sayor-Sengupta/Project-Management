import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";

function Sidebar() {
  const [open, setOpen] = useState(false);
 
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
     
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default Sidebar;
