import axios from "axios";
import React, { useEffect, useState } from "react";
import { extractDateFromCreatedAt } from "../utils/extractTime";
export function CompletedTable({ projectId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/project/getCompletedTasks/${projectId}`,
          { withCredentials: true }
        );
        setTasks(res.data.completedTasks);

      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
      
    };
    fetchTasks();
  },[]);

  return (
    <div className="overflow-x-auto">
      <table className="table  ">
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>CompletedBy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                
                <th> overviw</th>
                <th>2022-10-10</th>
                <th>Sayor1</th>
                <th></th>
            </tr> */}
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{extractDateFromCreatedAt(task.dueDate)}</td>
              <td>{task.completedBy.userName}</td>
              {/* <td>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setCompleteTask(task._id)}
                >
                  Mark as Completed
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
