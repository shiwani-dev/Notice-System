import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login'
import React from "react";
import ThemeButton from "./Components/ThemeButton";
import UserContext


function App() {
  return (
    <div>
      <UserContext.Provider value={{theme,toggle}}>
      <Login/>
      <ThemeButton/>
      </UserContext.Provider>
    </div>
  );
}
export default App;