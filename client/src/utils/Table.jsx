import React from "react";

function Table() {
  return (
    <div class="overflow-x-auto">
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
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">complete the Frontend</div>
                
                </div>
              </div>
            </td>
            <td>
              12.2.24
              <br />
             
            </td>
            <td>Max</td>
          </tr>

          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Complete backend</div>
                </div>
              </div>
            </td>
            <td>
              13.6.2069
              <br />
            </td>
            <td>low</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
