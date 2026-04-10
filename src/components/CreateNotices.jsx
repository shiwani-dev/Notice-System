import React from "react";
import { NoticeContext } from "../context/NoticeContext";

function CreateNotices({ isEditing, notice, index, onClose }) {
  const { addNotice, editNotice } = React.useContext(NoticeContext);
  const [formData, setFormData] = React.useState({
    title: "",
    notice: "",
  });

  React.useEffect(() => {
    if (isEditing && notice) {
      setFormData({
        title: notice.title || "",
        notice: notice.notice || "",
      });
    }
  }, [isEditing, notice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.notice.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    if (isEditing) {
      editNotice(index, formData.title, formData.notice);
      if (onClose) onClose();
    } else {
      addNotice(formData.title, formData.notice);
    }

    setFormData({
      title: "",
      notice: "",
    });
  };

  return (
    <div className="dark:bg-gray-700 w-cover">
      <div className="flex">
        <img className="w-80 h-80" src="src/assets/bunny.png" alt="bunny" />
        <div className="flex justify-center">
          <form
            className="w-200 shadow-2xl h-fit p-4 rounded-xl dark:bg-white"
            onSubmit={onSubmit}
          >
            <label htmlFor="title">Title:</label>
            <br />
            <input
            id="title"
              name="title"
              className="border rounded-sm shadow-sm p-2 outline-hidden w-full"
              type="text"
              placeholder="write title.."
              value={formData.title}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="notice">Notice:</label>
            <br />
            <textarea
            id="notice"
              className="border rounded-sm shadow-sm p-2 w-full outline-hidden"
              rows={6}
              placeholder="write a notice..."
              name="notice"
              value={formData.notice}
              onChange={handleChange}
            />

            <button
              className="p-2 w-fit bg-emerald-500 hover:shadow-xl rounded-xl hover:bg-emerald-400 text-white"
              type="submit"
            >
              {isEditing ? "Update Notice" : "Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNotices;
