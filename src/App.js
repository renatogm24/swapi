import "./App.css";
import SearchBar from "./Components/SearchBar";
import { Router } from "@reach/router";
import Planets from "./Components/Planets";
import { useCallback, useState } from "react";
import axios from "axios";
import Spaceships from "./Components/Spaceships";
import Vehicles from "./Components/Vehicles";
import Films from "./Components/Films";
import Species from "./Components/Species";
import People from "./Components/People";

function App() {
  const [data, setData] = useState("");

  const handleSearch = useCallback((category, id) => {
    axios
      .get(`https://swapi.dev/api/${category}/${id}/`)
      .then((response) => {
        const { data: dataRes } = response;
        setData(dataRes);
      })
      .catch((err) => setData("Not found"));
  }, []);

  return (
    <div className="w-1/2 mx-auto my-5">
      <SearchBar />
      <Router>
        <People path="/:id" handleSearch={handleSearch} data={data} />
        <People path="/people/:id" handleSearch={handleSearch} data={data} />
        <Planets path="/planets/:id" handleSearch={handleSearch} data={data} />
        <Spaceships
          path="/spaceships/:id"
          handleSearch={handleSearch}
          data={data}
        />
        <Vehicles
          path="/vehicles/:id"
          handleSearch={handleSearch}
          data={data}
        />
        <Films path="/films/:id" handleSearch={handleSearch} data={data} />
        <Species path="/species/:id" handleSearch={handleSearch} data={data} />
      </Router>
    </div>
  );
}

export default App;
