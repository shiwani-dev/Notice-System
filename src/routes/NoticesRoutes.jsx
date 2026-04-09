import { Navigate, Route, Routes } from "react-router-dom";
import CreateNotices from "../components/CreateNotices";
import ManageNotices from "../pages/ManageNotices";

function NoticesRoutes() {
  return (
    <Routes>
      <Route path="/create-notice" element={<CreateNotices />} />
      <Route path="/manage-notice" element={<ManageNotices />} />
    </Routes>
  );
}
export default NoticesRoutes;
