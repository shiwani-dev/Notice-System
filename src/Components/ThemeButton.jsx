import React from 'react'

function ThemeButton() {
    const createContext = useState();
  return (
    <div>
      <button
        className="rounded-full border shadow-xl"
        onClick={() => useContext(toggle)}
      >
        <img
          className="rounded-full w-fit h-fit p-2"
          src="src/assets/icons8-sun-50.png"
          alt="sun"
        />
      </button>
    </div>
  );
}

export default ThemeButton