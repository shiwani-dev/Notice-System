import { useContext, useState, useEffect } from "react";
import { NoticeContext } from "../context/NoticeContext";

function CreateNotices({
  isEditing,
  notice,
  index,
  onClose,
}) {
 

  const { addNotice, editNotice } = useContext(NoticeContext);
  const [formData, setFormData] = useState({
    title: "",
    notice: "",
  });

  useEffect(() => {
    console.log("isEditing:", isEditing);
    console.log("notice:", notice);
    if (isEditing && notice) {
      console.log("Setting form data...");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        title: notice.title,
        notice: notice.notice,
      });
    }
  }, [isEditing, notice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      
      editNotice(index, formData.title, formData.notice);
      onClose(); 
    } else {
      
      addNotice(formData.title, formData.notice);
      setFormData({ title: "", notice: "" });
    }
  };

  return (
    <div className={isEditing ? "" : "flex dark:bg-gray-700"}>
      {!isEditing && (
        <img className="w-80 h-80" src="src/assets/bunny.png" alt="bunny" />
      )}
      <div className="flex justify-center">
        <form
          className="w-200 shadow-2xl h-fit p-4 rounded-xl dark:bg-gray-200"
          onSubmit={handleSubmit}
        >
          <p className="text-4xl flex m-5">
            {isEditing ? "Edit Notice" : "Create a Notice"}
          </p>
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
          <label htmlFor="notices">Notice:</label>
          <br />
          <textarea
            id="notices"
            className="border rounded-sm shadow-sm p-2 w-full outline-hidden"
            rows={6}
            placeholder="write a notice..."
            name="notice"
            value={formData.notice}
            onChange={handleChange}
          />

          <button type="submit">{isEditing ? "Save" : "Post"}</button>

          {isEditing ? (
            <button
              className="p-2 w-20 ml-4 bg-gray-500 hover:shadow-xl rounded-xl hover:bg-gray-400 text-white"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          ): ""}
        </form>
      </div>
    </div>
  );
}

export default CreateNotices;
