/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const createToken = () => `token-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      try {
        return JSON.parse(savedUsers);
      } catch {
        localStorage.removeItem("users");
      }
    }

    return [
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
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("role", currentUser.role);
    } else {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("role");
    }
  }, [currentUser]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const signup = (name, email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedName = name.trim();

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === normalizedEmail
    );

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      id: Date.now(),
      name: normalizedName,
      email: normalizedEmail,
      password,
      role: "user",
      profileImage: "",
      theme: "light",
      language: "en",
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    setToken(createToken());

    return { success: true, message: "Signup successful", user: newUser };
  };

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();

    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === normalizedEmail &&
        user.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid email or password" };
    }

    setCurrentUser(foundUser);
    setToken(createToken());

    return { success: true, message: "Login successful", user: foundUser };
  };

  const logout = () => {
    setCurrentUser(null);
    setToken("");
  };

  const isAuthenticated = !!currentUser && !!token;

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        token,
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
