import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";

function ThemeButton() {
  const { theme, toggle } = React.useContext(ThemeContext);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button className="rounded-full border shadow-xl" onClick={toggle}>
        {theme === "light" ? (
          <CgSun className="size-16 bg-radial from-yellow-50 to-yellow-400 rounded-full p-2" />
        ) : (
          <BsFillMoonStarsFill className="size-16 bg-radial from-pink-50 to-red-400 rounded-full p-2" />
        )}
      </button>
    </div>
  );
}

export default ThemeButton;
