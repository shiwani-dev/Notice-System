import { useState } from "react";

function Profile() {
  const [editMode, setEditMode] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="p-6 border-b border-gray-700">
    
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => setEditMode(!editMode)}
      >
        <img
          src="src/assets/bunny.png" 
          alt="User Avatar"
          className="w-14 h-14 rounded-full border-2 border-gray-600"
        />
        <div>
          <h3 className="text-lg font-semibold">Shiwani</h3>
          <p className="text-sm text-gray-400">shiwanituladhar@example.com</p>
        </div>
      </div>

      
      {editMode && (
        <div className="mt-4 space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Change Password
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500">
            Edit Image
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
