import { useState } from "react";
import Profile from "../components/Profile"; 
import CreateNotices from "../components/CreateNotices";
import Language from "../components/Language"
import Filter from "../components/Filter"
import ManageNotices from "../components/ManageNotices";
import AboutUs from "../components/AboutUs";

function Dashboard() {
  const [active, setActive] = useState("Home");
  const role = localStorage.getItem("role");

  return (
    <div className="flex h-screen">
      
      <div className="w-48 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-6">Sidebar</h2>
        <ul className="space-y-2">
          {["Home", "Manage Notices", "Settings","About us"].map((item) => (
            <li
              key={item}
              className={`p-2 rounded cursor-pointer ${
                active === item ? "bg-gray-600" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    
      <div className="flex-1 p-6">
        {active === "Home" && <><Filter/> <Profile /> </>}
        {active === "Manage Notices" && <><CreateNotices/><ManageNotices/></>}
        {active === "Settings" && <Language/>}
        {active === "About us" && <AboutUs/>}
      </div>
    </div>
  );
}

export default Dashboard;
