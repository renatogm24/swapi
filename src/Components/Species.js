import { useEffect } from "react";

const Species = ({ id, handleSearch, data }) => {
  useEffect(() => {
    handleSearch("species", id);
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
          <li>Name: {data.name}</li>
          <li>Average Height: {data.average_height}</li>
          <li>Language: {data.language}</li>
          <li>Average Lifespan: {data.average_lifespan}</li>
        </ul>
      )}
    </div>
  );
};

export default Species;
