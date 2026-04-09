import { useState } from "react";
import Profile from "../components/Profile"; 

function Dashboard() {
  const [active, setActive] = useState("Home");
  const role = localStorage.getItem("role");

  return (
    <div className="flex h-screen">
      
      <div className="w-48 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-6">Sidebar</h2>
        <ul className="space-y-2">
          {["Home", "Dashboard", "Settings", "Dash"].map((item) => (
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
        {active === "Home" && <h1 className="text-xl font-bold">Welcome Home</h1>}
        {active === "Dashboard" && <h1 className="text-xl font-bold">Dashboard Content</h1>}
        {active === "Settings" && <h1 className="text-xl font-bold">Settings Page</h1>}
        {active === "Dash" && <Profile />}
      </div>
    </div>
  );
}

export default Dashboard;
