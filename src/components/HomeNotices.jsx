import { useContext, useState } from "react";
import NoticeCard from "./NoticeCard";
import { NoticeContext } from "../context/NoticeContext";

function HomeNotices() {
  const { notices } = useContext(NoticeContext);
  const [search, setSearch] = useState("");

  const filteredNotices = notices.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.notice.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-5xl dark:text-emerald-600 h-15 text-white bg-green-600 text-center dark:bg-gray-200 p-2 rounded-xl">
        Notices
      </h1>

      <div className="dark:bg-gray-200 bg-gray-50 shadow-xl w-fit p-2 m-6 rounded-xl flex justify-self-center">
        <input
          type="text"
          placeholder="Search notices..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-green-600 p-2 w-100 outline-hidden"
        />
      </div>

      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice, index) => (
            <NoticeCard
              key={index}
              index={index}
              notice={notice}
              showActions={false}
            />
          ))
        ) : (
          <p className="text-gray-500">No notices found</p>
        )}
      </div>
    </div>
  );
}

export default HomeNotices;