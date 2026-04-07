import React from "react";

function Sidebar() {
  return (
    <div className="border h-239 w-50 text-xl text-white p-2 inline-block bg-blue-500 rounded-sm">
      <ul>
        <li className="hover:bg-gray-200 hover:text-black rounded-xl p-1 m-2">
          Dashboard
        </li>
        <hr />
        <li className="hover:bg-gray-400 hover:text-black rounded-xl p-1 m-2">
          View Notices
        </li>
        <hr />
        <li className="hover:bg-gray-400 hover:text-black rounded-xl p-1 m-2">
          Manage notices
        </li>
        <hr />
        <li className="hover:bg-gray-400 hover:text-black rounded-xl p-1 m-2">
          Language
        </li>
        <hr />
        <li className="hover:bg-gray-400 hover:text-black rounded-xl p-1 m-2">
          Voice effect
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Sidebar;
