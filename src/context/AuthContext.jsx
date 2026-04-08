/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: 1,
            name: "Admin",
            email: "admin@gmail.com",
            password: "admin123",
            role: "admin",
            profileImage: "",
            theme: "light",
            language: "en",
          },
        ];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    return savedCurrentUser ? JSON.parse(savedCurrentUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const signup = (name, email, password) => {
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user",
      profileImage: "",
      theme: "light",
      language: "en",
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);

    return { success: true, message: "Signup successful", user: newUser };
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid email or password" };
    }

    setCurrentUser(foundUser);

    return { success: true, message: "Login successful", user: foundUser };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const isAuthenticated = !!currentUser;

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        isAuthenticated,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
