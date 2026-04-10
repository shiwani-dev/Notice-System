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
      <h1 className="text-3xl font-bold mb-4">Notices</h1>

      <input
        type="text"
        placeholder="Search notices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded-lg"
      />

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