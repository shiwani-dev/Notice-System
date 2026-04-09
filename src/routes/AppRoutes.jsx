import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateNotices from "../components/CreateNotices";
import ManageNotices from "../components/ManageNotices";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-notice" element={<CreateNotices />} />
      <Route path="/manage-notice" element={<ManageNotices />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <h1 className="p-10 text-3xl font-bold">Admin Dashboard</h1>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AuthRoutes;