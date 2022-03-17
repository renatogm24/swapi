import { useEffect } from "react";

const Films = ({ id, handleSearch, data }) => {
  useEffect(() => {
    handleSearch("films", id);
  }, [id, handleSearch]);

  return (
    <div className="my-5 border-1 border-black rounded-lg w-full">
      {data === "Not found" && (
        <p className="text-red-500 font-bold">Not found</p>
      )}
      {data && (
        <ul>
          <li>Title: {data.title}</li>
          <li>Episode#: {data.episode_id}</li>
          <li>Director: {data.director}</li>
          <li>Release Date: {data.release_date}</li>
        </ul>
      )}
    </div>
  );
};

export default Films;
