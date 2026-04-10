import { useState } from "react";
import EditModal from "./EditPortal";

function NoticeCard({ notice, index, deleteNotice, showActions = false }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="dark:bg-gray-200 m-4 p-6 w-full rounded-xl bg-gray-50 shadow-sm hover:scale-[1.02] transition">
      <h2 className="text-2xl font-bold">{notice.title}</h2>
      <p className="mt-2 text-lg">{notice.notice}</p>

      {showActions && (
        <>
          <button
            onClick={handleEdit}
            className="mt-4 p-2 w-20 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl"
          >
            Edit
          </button>

          <button
            onClick={() => deleteNotice(index)}
            className="ml-4 p-2 w-20 rounded-xl bg-red-600 hover:bg-red-400 text-white text-xl shadow-sm hover:shadow-xl"
          >
            Delete
          </button>

          <EditModal
            isOpen={isEditModalOpen}
            notice={notice}
            index={index}
            onClose={handleCloseModal}
          />
        </>
      )}
    </div>
  );
}

export default NoticeCard;