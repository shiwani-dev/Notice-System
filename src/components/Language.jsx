import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import { useAuth } from "../hooks/useAuth";

function Language() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { language, setLanguage } = React.useContext(LanguageContext);
  const { logout } = useAuth();

  const t = translations[language];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const clearData = () => {
    localStorage.removeItem("notices");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    logout();
    alert("Session and notices cleared. Saved users are kept.");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-gray-50 p-8 text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-8 text-3xl font-bold">{t.settings}</h2>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">{t.theme}</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleThemeChange("light")}
            className={`rounded-xl px-5 py-2.5 font-medium transition ${
              theme === "light"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {t.light}
          </button>

          <button
            onClick={() => handleThemeChange("dark")}
            className={`rounded-xl px-5 py-2.5 font-medium transition ${
              theme === "dark"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {t.dark}
          </button>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-2 text-xl font-semibold">{t.language}</h3>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Choose the language you want to use in the dashboard.
        </p>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-900"
        >
          <option value="en">English</option>
          <option value="np">Nepali</option>
        </select>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">{t.data}</h3>
        <button
          onClick={clearData}
          className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-500"
        >
          {t.clearStorage}
        </button>
      </div>
    </div>
  );
}

export default Language;
