import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";

function Language() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { language, setLanguage } = React.useContext(LanguageContext);

  const t = translations[language];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const clearData = () => {
    localStorage.clear();
    alert("Local storage cleared!");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{t.settings}</h2>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">{t.theme}</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => handleThemeChange("light")}
            className={`px-4 py-2 rounded-lg transition ${
              theme === "light"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t.light}
          </button>

          <button
            onClick={() => handleThemeChange("dark")}
            className={`px-4 py-2 rounded-lg transition ${
              theme === "dark"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t.dark}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">{t.language}</h3>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="np">Nepali</option>
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{t.data}</h3>
        <button
          onClick={clearData}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
        >
          {t.clearStorage}
        </button>
      </div>
    </div>
  );
}

export default Language;