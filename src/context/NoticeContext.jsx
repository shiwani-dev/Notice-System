import { createContext, useState } from "react";

export const NoticeContext = createContext();

export function NoticeProvider({ children }) {
  const [notices, setNotices] = useState(
    JSON.parse(localStorage.getItem("notices")) || [],
  );

  const addNotice = (title, notice) => {
    const newNotice = {
      title,
      notice,
      date: Date.now(),
    };

    const updated = [...notices, newNotice];
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
  };

 const editNotice = (index, updatedTitle, updatedNotice) => {
  const updated = notices.map((notice, i) =>
    i === index ? { ...notice, title: updatedTitle, notice: updatedNotice } : notice,
  );
  setNotices(updated);
  localStorage.setItem("notices", JSON.stringify(updated));
};

  const deleteNotice = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
  };

  return (
    <NoticeContext.Provider
      value={{ notices, addNotice, deleteNotice, editNotice }}
    >
      {children}
    </NoticeContext.Provider>
  );
}
