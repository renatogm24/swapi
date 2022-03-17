import axios from "axios";
import { useEffect, useState } from "react";

const People = ({ id, handleSearch, data }) => {
  const [world, setworld] = useState("");

  useEffect(() => {
    handleSearch("people", id);
    axios.get(`https://swapi.dev/api/planets/${id}/`).then((response) => {
      const { data: dataRes } = response;
      setworld(dataRes.name);
    });
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
          <li>Height: {data.height}</li>
          <li>Mass: {data.mass}</li>
          <li>Homeworld: {world}</li>
        </ul>
      )}
    </div>
  );
};

export default People;
