import React from "react";
import NoticeCard from "../components/NoticeCard";
import { NoticeContext } from "../context/NoticeContext";

function ManageNotices() {
  const { notices, deleteNotice, editNotice } = React.useContext(NoticeContext);

  return (
    <div>
      <div className="bg-green-600 text-white w-full p-2 text-5xl text-center rounded-xl">
        Notices
      </div>
      {notices.map((notice, index) => (
        <NoticeCard
          key={index}
          index={index}
          notice={notice}
          deleteNotice={deleteNotice}
        />
      ))}
    </div>
  );
}

export default ManageNotices;
