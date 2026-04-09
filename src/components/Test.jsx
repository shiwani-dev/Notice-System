/*import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("Intro");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const tabs = [
    "Personal details",
    "Education",
    "Contact info",
    "Names",
    "Details about you",
  ];

  return (
    <div className="flex h-full">
  
      <aside className="w-56 bg-gray-900 text-gray-100 p-4 border-r border-gray-700">
        <h2 className="text-lg font-bold mb-4">About</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6">
        {activeTab === "Intro" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Bio</h3>
            <p className="text-gray-700">👋 🐞</p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold flex items-center">
                📌 Pinned details
              </h4>
              <p className="text-gray-600 mt-2">Pinned details go here...</p>
            </div>
          </div>
        )}

        {activeTab === "Personal details" && (
          <p className="text-gray-700">Add your personal details here.</p>
        )}
        
        {activeTab === "Education" && (
          <p className="text-gray-700">Education details section.</p>
        )}
        
        {activeTab === "Contact info" && (
          <p className="text-gray-700">Contact information section.</p>
        )}
        {activeTab === "Names" && (
          <p className="text-gray-700">Alternate names section.</p>
        )}
        {activeTab === "Details about you" && (
          <p className="text-gray-700">Extra details about you.</p>
        )}

        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}

export default Profile;
*/