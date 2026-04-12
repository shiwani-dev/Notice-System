/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const NoticeContext = createContext();

export function NoticeProvider({ children }) {
  const [notices, setNotices] = useState(() => {
    const savedNotices = localStorage.getItem("notices");

    if (savedNotices) {
      try {
        return JSON.parse(savedNotices);
      } catch {
        localStorage.removeItem("notices");
      }
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  const addNotice = (title, notice) => {
    const newNotice = {
      title,
      notice,
      date: Date.now(),
    };

    const updated = [...notices, newNotice];
    setNotices(updated);
  };

 const editNotice = (index, updatedTitle, updatedNotice) => {
  const updated = notices.map((notice, i) =>
    i === index ? { ...notice, title: updatedTitle, notice: updatedNotice } : notice,
  );
  setNotices(updated);
};

  const deleteNotice = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
  };

  return (
    <NoticeContext.Provider
      value={{ notices, addNotice, deleteNotice, editNotice }}
    >
      {children}
    </NoticeContext.Provider>
  );
}
