import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/ThemeContext";

function ThemeButton() {
  const { theme, toggle } = useContext(UserContext);

  return (
    <div>
      <button className="rounded-full border shadow-xl" onClick={toggle}>
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
