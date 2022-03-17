import { useEffect } from "react";

const Films = ({ id, handleSearch, data }) => {
  useEffect(() => {
    handleSearch("films", id);
  }, [id, handleSearch]);

  return (
    <div className="my-5 border-1 border-black rounded-lg w-full">
      {data === "Not found" && (
        <p className="text-red-500 font-bold">
          These aren't the Droids you're looking for...
          <img
            src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg"
            alt="Obi Wan"
          />
        </p>
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
