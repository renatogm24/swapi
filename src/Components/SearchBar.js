import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { navigate } from "@reach/router";

const SearchBar = () => {
  const [inputs, setInputs] = useState({ category: "", id: "" });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e, inputs) => {
    e.preventDefault();
    navigate(`/${inputs.category}/${inputs.id}`);
  };

  return (
    <form className="flex gap-3" onSubmit={(e) => handleSubmit(e, inputs)}>
      <FormControl className="w-1/2">
        <InputLabel id="demo-simple-select-label">Search for...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputs.category}
          label="Search for..."
          onChange={handleChange}
          name={"category"}
        >
          <MenuItem value={"people"}>People</MenuItem>
          <MenuItem value={"planets"}>Planets</MenuItem>
          <MenuItem value={"spaceships"}>Spaceships</MenuItem>
          <MenuItem value={"vehicles"}>Vehicles</MenuItem>
          <MenuItem value={"films"}>Films</MenuItem>
          <MenuItem value={"species"}>Species</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="id"
        variant="outlined"
        name="id"
        value={inputs.id}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
