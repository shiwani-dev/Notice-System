import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const displayName = currentUser?.name?.trim() || "Guest User";
  const displayEmail = currentUser?.email || "No email";
  const displayRole = currentUser?.role || "user";
  const avatarText = useMemo(() => {
    const parts = displayName.split(" ").filter(Boolean);

    return parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "GU";
  }, [displayName]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="border-b border-gray-700 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div
        className="cursor-pointer rounded-2xl border border-gray-700 bg-white/5 p-4 transition hover:border-gray-500"
        onClick={() => setEditMode(!editMode)}
      >
        <div className="flex items-center space-x-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white shadow-lg">
            {avatarText}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-lg font-semibold text-white">
                {displayName}
              </h3>
              <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-xs font-medium uppercase tracking-wide text-emerald-200">
                {displayRole}
              </span>
            </div>
            <p className="truncate text-sm text-gray-300">{displayEmail}</p>
            <p className="mt-1 text-xs text-gray-400">Tap to view account actions</p>
          </div>
        </div>
      </div>

      {editMode && (
        <div className="mt-4 space-y-3 rounded-2xl border border-gray-700 bg-black/20 p-4">
          <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-gray-400">Current User</p>
              <p className="mt-1 font-medium text-white">{displayName}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-gray-400">Email</p>
              <p className="mt-1 break-all font-medium text-white">{displayEmail}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-gray-400">Role</p>
              <p className="mt-1 font-medium capitalize text-white">{displayRole}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full rounded-xl bg-red-600 py-2 text-white transition hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
