import { useEffect } from "react";

const Spaceships = ({ id, handleSearch, data }) => {
  useEffect(() => {
    handleSearch("starships", id);
  }, [id, handleSearch]);

  return (
    <div className="my-5 border-1 border-black rounded-lg w-full">
      {data === "Not found" && (
        <p className="text-red-500 font-bold">Not found</p>
      )}
      {data && (
        <ul>
          <li>Name: {data.name}</li>
          <li>Model: {data.model}</li>
          <li>Manufacterer: {data.manufacterer}</li>
          <li>Length: {data.length}</li>
        </ul>
      )}
    </div>
  );
};

export default Spaceships;