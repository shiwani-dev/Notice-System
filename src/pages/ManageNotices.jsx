import React, { useContext } from "react";
import NoticeCard from "../components/NoticeCard";
import { NoticeContext } from "../context/NoticeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";

function ManageNotices() {
  const { notices, deleteNotice } = useContext(NoticeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      <div className="bg-green-600 text-white w-full p-2 text-5xl text-center rounded-xl">
        {t.notices}
      </div>

      <div className="mt-4 space-y-4">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <NoticeCard
              key={index}
              index={index}
              notice={notice}
              deleteNotice={deleteNotice}
              showActions={true}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">{t.noNotices}</p>
        )}
      </div>
    </div>
  );
}

export default ManageNotices;