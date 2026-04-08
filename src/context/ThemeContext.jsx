import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark"){
      document.body.setAttribute("data-theme", "dark");
    }
    else if(newTheme === "light"){
      document.body.removeAttribute("data-theme");
    }
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
