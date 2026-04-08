import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateNotices from "../components/CreateNotices";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-notice" element={<CreateNotices />} />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <h1 className="p-10 text-3xl font-bold">Admin Dashboard</h1>
          </ProtectedRoute>
        }
      />

      <Route
        path="/user-dashboard"
        element={
          <ProtectedRoute allowedRole="user">
            <h1 className="p-10 text-3xl font-bold">User Dashboard</h1>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;