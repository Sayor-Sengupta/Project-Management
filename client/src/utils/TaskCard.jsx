import React from "react";
import { Checkbox, Col, Row } from "antd";

const TaskCard = ({ Task }) => {
  return (
    <div className="min-h-24 min-w-72 m-10 bg-white shadow-sm shadow-purple-200 flex flex-col justify-center items-center rounded-md ">
      <p className="text-black underline underline-offset-4">{Task}</p>

      <h1 className="text-black text-sm">Due:12/2/69</h1>

      <div c>
        {" "}
        <Checkbox.Group
          style={{
            width: "100%",
            
          }}
        >
          <Row >
            <Col span={8}>
              <Checkbox value="Completed">Completed</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default TaskCard;
