import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const result = signup(name, email, password);

    if (result.success) {
      navigate("/user-dashboard");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-gray-100 w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;