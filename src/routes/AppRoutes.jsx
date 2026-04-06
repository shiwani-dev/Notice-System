import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/admin-dashboard"
        element={<h1 className="p-10 text-3xl font-bold">Admin Dashboard</h1>}
      />
      <Route
        path="/user-dashboard"
        element={<h1 className="p-10 text-3xl font-bold">User Dashboard</h1>}
      />
    </Routes>
  );
}

export default AppRoutes;