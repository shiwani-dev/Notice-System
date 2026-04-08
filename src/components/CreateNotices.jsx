import React from "react";
import { NoticeContext } from "../context/NoticeContext";

function CreateNotices() {
  const { addNotice } =  React.useContext(NoticeContext);
  const [formData, setFormData] = React.useState({
    title: "", 
    notice: ""
  });

  const handleChange=(e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNotice(formData.title, formData.notice);
  }

  return (
    <div className="flex m-30">
      <img className="w-80 h-80" src="src/assets/bunny.png" alt="bunny" />
      <div className="flex justify-center">
        <form
          className="w-200 shadow-2xl h-fit p-4 rounded-xl"
          onSubmit={onSubmit}
        >
          <label htmlFor="title">Title:</label>
          <br />
          <input
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
            className="border rounded-sm shadow-sm p-2 w-full outline-hidden"
            rows={6}
            placeholder="write a notice..."
            name="notice"
            value={formData.notice}
            onChange={handleChange}
          />

          <button
            className="p-2 w-20 bg-emerald-500 hover:shadow-xl rounded-xl hover:bg-emerald-400 text-white"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNotices;
