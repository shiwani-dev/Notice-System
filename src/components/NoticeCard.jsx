import { useState, useContext } from "react";
import EditModal from "./EditPortal";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";

function NoticeCard({ notice, index, deleteNotice, showActions = false }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="dark:bg-gray-200 m-10 p-10 w-full h-fit rounded-xl bg-gray-50 shadow-sm">
      <span>{notice.title}</span>
      <br />
      <span>{notice.notice}</span>
      <br />

      {showActions && (
        <>
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="mt-4 p-2 w-20 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl"
          >
            {t.edit}
          </button>

          <button
            onClick={() => deleteNotice(index)}
            className="ml-4 p-2 w-20 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl"
          >
            {t.delete}
          </button>

          <EditModal
            isOpen={isEditModalOpen}
            notice={notice}
            index={index}
            onClose={() => setIsEditModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default NoticeCard;