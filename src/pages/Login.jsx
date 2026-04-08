import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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
    <div className="themed-bg min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
        <form onSubmit={handleSubmit}>
          <legend className="text-4xl font-bold text-center mb-6">Login</legend>

          {message && (
            <p className="text-sm text-center mb-4 text-red-500">{message}</p>
          )}

          <label className="block mb-2 font-medium">Email</label>
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="eg: yourname@gmail.com"
          />

          <label className="block mb-2 font-medium">Password</label>
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <div className="flex justify-center">
            <button
              className="px-6 py-3 bg-emerald-500 rounded-xl hover:bg-emerald-400 text-white"
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