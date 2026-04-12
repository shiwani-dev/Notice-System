import { useContext, useState } from "react";
import { NoticeContext } from "../context/NoticeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import bunny from "../assets/bunny.png";

function CreateNotices() {
  const { addNotice } = useContext(NoticeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [formData, setFormData] = useState({
    title: "",
    notice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNotice(formData.title, formData.notice);
    setFormData({ title: "", notice: "" });
  };

  return (
    <div className="flex dark:bg-gray-700 h-150 p-20">
      <img className="w-80 h-80" src={bunny} alt="bunny" />

      <div className="flex justify-center">
        <form
          className="w-500px shadow-2xl h-fit p-4 rounded-xl dark:bg-gray-200"
          onSubmit={handleSubmit}
        >
          <p className="text-4xl flex m-5">{t.createNotice}</p>

          <label htmlFor="title">{t.title}</label>
          <br />
          <input
            id="title"
            name="title"
            className="border rounded-sm shadow-sm p-2 outline-none w-full"
            type="text"
            placeholder={t.writeTitle}
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="notices">{t.notice}</label>
          <br />
          <textarea
            id="notices"
            className="border rounded-sm shadow-sm p-2 w-full outline-none"
            rows={6}
            placeholder={t.writeNotice}
            name="notice"
            value={formData.notice}
            onChange={handleChange}
          />

          <button type="submit" className="mt-4 p-2 w-15 rounded-xl bg-emerald-600 hover:bg-emerald-400 text-white  shadow-sm hover:shadow-xl">{t.post}</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNotices;