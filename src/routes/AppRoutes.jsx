import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
<<<<<<< HEAD
import DashBoard from "../pages/DashBoard";
=======
import CreateNotices from "../components/CreateNotices";
>>>>>>> 9246152b4600aa52a3059a5bd99a914d8f1068c7

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
      <Route path="/dashboard" element={<DashBoard/>}/>
=======
      <Route path="/create-notice" element={<CreateNotices />} />
>>>>>>> 9246152b4600aa52a3059a5bd99a914d8f1068c7

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