import { useState } from "react";
import Profile from "../components/Profile";
import CreateNotices from "../components/CreateNotices";
import Language from "../components/Language";
import Filter from "../components/Filter";
import ManageNotices from "./ManageNotices";
import AboutUs from "../components/AboutUs";

function Dashboard() {
  const [active, setActive] = useState("Home");
  const role = localStorage.getItem("role");

  const menuItems = ["Home", "Manage Notices", "Settings", "About us"];

  return (
    <div className="dark:bg-gray-700 flex h-screen bg-gray-100">
      <aside className="w-72 bg-gray-900 text-gray-100 flex flex-col">
        <Profile />

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                active === item ? "bg-gray-700 text-white" : "hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {active === "Home" && <Filter />}
        {active === "Manage Notices" && (
          <div className="space-y-6">
            {role === "admin" ? (
              <>
                <CreateNotices />
                <ManageNotices />
              </>
            ) : (
              <ManageNotices />
            )}
          </div>
        )}
        {active === "Settings" && <Language />}
        {active === "About us" && <AboutUs />}
      </main>
    </div>
  );
}

export default Dashboard;
