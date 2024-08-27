import axios from "axios";
import React, { useEffect, useState } from "react";
import {extractDateFromCreatedAt} from "../utils/extractTime"
function Table({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const handleChange = async (e) => {
      console.log("projectId", projectId);
      const res = await axios.get(
        `http://localhost:3000/api/project/getAssignedTask/${projectId}`,{withCredentials: true}
      );
      setTasks(res.data.tasks);
      console.log("res", res);
      // console.log(extractDateFromCreatedAt(tasks[0].dueDate));
     
    };
    handleChange()
  }, []);
        // console.log(extractDateFromCreatedAt(tasks[0].dueDate));


  return (
    <div className="overflow-x-auto">
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Importance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        

          {tasks.map((task, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{task.title}</div>
                  </div>
                </div>
              </td>
              <td>
                {extractDateFromCreatedAt(task.dueDate)}
                <br />
              </td>
              <td>{task.importance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
