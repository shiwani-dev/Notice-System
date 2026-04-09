import { useState } from "react";
import EditModal from "./EditPortal";

function NoticeCard({ notice, index, deleteNotice }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="dark:bg-gray-200 m-10 p-10 w-max-full h-fit rounded-xl bg-gray-50 shadow-sm hover:-translate-y hover:scale-102">
      <span>{notice.title}</span>
      <br />
      <span>{notice.notice}</span>
      <br />
      <button
        onClick={handleEdit}
        className="mt-4 p-2 w-20 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl"
      >
        Edit
      </button>
      <button
        onClick={() => deleteNotice(index)}
        className="ml-4 p-2 w-20 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white text-xl shadow-sm hover:shadow-xl"
      >
        Delete
      </button>
      <EditModal
        isOpen={isEditModalOpen}
        notice={notice}
        index={index}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default NoticeCard;
