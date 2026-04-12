import { useContext, useState } from "react";
import NoticeCard from "./NoticeCard";
import { NoticeContext } from "../context/NoticeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";

function HomeNotices() {
  const { notices } = useContext(NoticeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();

  const filteredNotices = notices.filter((notice) => {
    const title = notice?.title?.toLowerCase?.() ?? "";
    const content = notice?.notice?.toLowerCase?.() ?? "";

    return (
      normalizedSearch === "" ||
      title.includes(normalizedSearch) ||
      content.includes(normalizedSearch)
    );
  });

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <div className="mb-5">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-300 text-center">
          {t.notices}
        </h1>
      </div>

      <input
        type="text"
        placeholder="Search notices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-emerald-400 dark:focus:ring-emerald-900"
      />

      <div className="space-y-4">
        {filteredNotices.map((n, index) => (
          <NoticeCard
            key={index}
            index={index}
            notice={n}
            showActions={false}
          />
        ))}

        {filteredNotices.length === 0 && (
          <p className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400">
            {t.noNotices}
          </p>
        )}
      </div>
    </div>
  );
}

export default HomeNotices;
