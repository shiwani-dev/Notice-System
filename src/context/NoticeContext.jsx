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
        date: Date.now()
      };

        const updated = [...notices, newNotice];
        setNotices(updated);
        localStorage.setItem("notices", JSON.stringify(updated));
  };
  
  return(<NoticeContext.Provider value={{notices, addNotice}}>
    {children}
  </NoticeContext.Provider>)
}
