import { createPortal } from "react-dom";
import CreateNotices from "./CreateNotices";

function EditModal({ isOpen, notice, index, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-full h-fit relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold p-2 transition-colors"
        >
          &times;
        </button>
        <CreateNotices
          isEditing={true}
          notice={notice}
          index={index}
          onClose={onClose}
        />
      </div>
    </div>,
    document.body
  );
}

export default EditModal;
