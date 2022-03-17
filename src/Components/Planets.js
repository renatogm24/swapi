import { useEffect } from "react";

const Planets = ({ id, handleSearch, data }) => {
  useEffect(() => {
    handleSearch("planets", id);
  }, [id, handleSearch]);

  return (
    <div className="my-5 border-1 border-black rounded-lg w-full">
      {data === "Not found" && (
        <p className="text-red-500 font-bold">Not found</p>
      )}
      {data && (
        <ul>
          <li>Name: {data.name}</li>
          <li>Climate: {data.climate}</li>
          <li>Diameter: {data.dimater}</li>
          <li>Gravity: {data.gravity}</li>
        </ul>
      )}
    </div>
  );
};

export default Planets;
