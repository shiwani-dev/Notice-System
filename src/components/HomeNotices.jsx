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

  const filteredNotices = notices.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.notice.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-2bnbmxcjdhn ">
        
      <h1 className="text-xl font-bold mb-4">{t.notices}</h1>

      <input
        type="text"
        placeholder={t.searchNotices}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <div>
        {filteredNotices.map((n, index) => (
          <NoticeCard
            key={index}
            index={index}
            notice={n}
            showActions={false}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeNotices;