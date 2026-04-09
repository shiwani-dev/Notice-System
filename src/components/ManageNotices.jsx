import React from "react";

function ManageNotices() {
  return (
    <div className="dark:bg-gray-700 h-600 ">
      <table className="dark:bg-gray-300 p-4 rounded-2xl shadow-xl w-full">
        <tr>
          <th>Title</th>
          <th>Date of Post</th>
          <th>Notice</th>
        </tr>
        <tr>
          <td>mytitle</td>
          <td>notice</td>
          <td> 8th april</td>
          <td>
            <button className="m-2 p-2 w-30 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl">
              Edit
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ManageNotices;
