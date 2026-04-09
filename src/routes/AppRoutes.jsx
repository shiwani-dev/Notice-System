import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateNotices from "../components/CreateNotices";
import ManageNotices from "../components/ManageNotices";
import DashBoard from "../pages/DashBoard";

function AppRoutes() {
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
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
