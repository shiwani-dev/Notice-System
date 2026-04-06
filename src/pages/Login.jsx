import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    const result = login(email, password);

    if (result.success) {
      setMessage("Login successful");

      if (result.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-xl shadow-2xl p-10 rounded-2xl w-full max-w-md bg-white">
        <form onSubmit={handleSubmit}>
          <legend className="text-4xl mb-6 text-center">
            <b>Login</b>
          </legend>

          {message && (
            <p className="text-sm text-center mb-4 text-red-500">{message}</p>
          )}

          <label>Email:</label>
          <br />
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="eg: yourname@gmail.com"
          />
          <br />

          <label>Password:</label>
          <br />
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <br />

          <div className="flex justify-center">
            <button
              className="p-4 w-30 bg-emerald-500 rounded-xl hover:shadow-2xl hover:bg-emerald-400 text-white"
              type="submit"
            >
              Login
            </button>
          </div>

         <p className="text-sm text-center mt-4">
          Haven&apos;t signed up yet?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Login;