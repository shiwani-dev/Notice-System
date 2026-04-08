import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  const { theme, toggle } = React.useContext(ThemeContext);

  return (
      <div className="fixed top-4 right-4 z-50">
        <button className="rounded-full border shadow-xl bg-white" onClick={toggle}>
          {theme === "light" ? (
            <img
              className="rounded-full w-fit h-fit p-2"
              src="src/assets/icons8-sun-50.png"
              alt="sun"
            />
          ) : (
            <img
              className="rounded-full w-fit h-fit p-2"
              src="src/assets/icons8-moon-and-stars-50.png"
              alt="Moon"
            />
          )}
        </button>
      </div>
  );
}

export default ThemeButton;
