import React, { useContext } from "react";
import NoticeCard from "../components/NoticeCard";
import { NoticeContext } from "../context/NoticeContext";

function ManageNotices() {
  const { notices, deleteNotice } = useContext(NoticeContext);

  return (
    <div>
      <div className="bg-green-600 text-white w-full p-2 text-5xl text-center rounded-xl">
        Notices
      </div>

      <div className="mt-4 space-y-4">
        {notices.map((notice, index) => (
          <NoticeCard
            key={index}
            index={index}
            notice={notice}
            deleteNotice={deleteNotice}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
}

export default ManageNotices;