import { useState, useContext } from "react";
import Profile from "../components/Profile";
import CreateNotices from "./CreateNotices";
import ManageNotices from "./ManageNotices";
import AboutUs from "../components/AboutUs";
import HomeNotices from "../components/HomeNotices";
import Language from "../components/Language";
import { LanguageContext } from "../context/LanguageContext";
import { AuthContext } from "../context/AuthContext";
import { translations } from "../utils/translations";

function Dashboard() {
  const [active, setActive] = useState("home");

  const { language } = useContext(LanguageContext);
  const { currentUser } = useContext(AuthContext);

  const t = translations[language];
  const role = currentUser?.role || "user";
  const firstName = currentUser?.name?.split(" ").filter(Boolean)[0] || "User";

  const adminMenuItems = [
    { key: "home", label: t.home },
    { key: "create", label: t.createNotice },
    { key: "manage", label: t.manageNotices },
    { key: "settings", label: t.settings },
    { key: "about", label: t.aboutUs },
  ];

  const userMenuItems = [
    { key: "home", label: t.home },
    { key: "settings", label: t.settings },
    { key: "about", label: t.aboutUs },
  ];

  const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <div className="dark:bg-gray-700 flex h-screen bg-gray-100">
      <aside className="w-72 bg-gray-900 text-gray-100 flex flex-col">
        <Profile />

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                active === item.key
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Signed in as {role}
          </p>
          <h1 className="mt-2 text-3xl font-bold dark:text-green-400 text-green-600">
            Welcome back, {firstName}
          </h1>
          <p className="mt-2 text-gray-600">
            {currentUser?.email}
          </p>
        </div>

        {active === "home" && (
          <div className="space-y-6">
            <HomeNotices />
          </div>
        )}

        {role === "admin" && active === "create" && (
          <div className="space-y-6">
            <CreateNotices />
          </div>
        )}

        {role === "admin" && active === "manage" && (
          <div className="space-y-6">
            <ManageNotices />
          </div>
        )}

        {active === "settings" && <Language />}
        {active === "about" && <AboutUs />}
      </main>
    </div>
  );
}

export default Dashboard;
