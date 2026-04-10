import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [language, setLanguage] = React.useState(localStorage.getItem("language") || "en");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); 
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  const clearData = () => {
    localStorage.clear();
    alert("Local storage cleared!");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Settings</h2>

      {/* Theme */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Theme</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => handleThemeChange("light")}
            className={`px-4 py-2 rounded-lg transition ${
              theme === "light" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className={`px-4 py-2 rounded-lg transition ${
              theme === "dark" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Language</h3>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="np">Nepali</option>
        </select>
      </div>

      {/* Data */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Data</h3>
        <button
          onClick={clearData}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
        >
          Clear Local Storage
        </button>
      </div>
    </div>
  );
}

export default Settings;
