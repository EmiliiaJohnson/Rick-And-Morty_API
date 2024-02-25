import React from "react";
import { Input, Label, Select } from "../../assets/styled-components/styled";

const Search = ({ setStatus, setSpecies, setGender, setType, setPage }) => {
  return (
    <>
      <Label>
        Status
        <Select
          onChange={(e) => {
            // setting page to first to prevent error if we're currently on a page where character we search for is not present
            setPage(1);
            setStatus(e.target.value);
          }}
        >
          <option value="">Any</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </Select>
      </Label>
      <Label>
        Species
        <Select
          onChange={(e) => {
            //same here and so forth
            setPage(1);
            setSpecies(e.target.value);
          }}
        >
          <option value="">Any</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="unknown">Unknown</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Animal">Animal</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Disease">Disease</option>
          <option value="Robot">Robot</option>
        </Select>
      </Label>
      <Label>
        Gender
        <Select
          onChange={(e) => {
            setPage(1);
            setGender(e.target.value);
          }}
        >
          <option value="">Any</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Label>
      {/* too many types to make a dropdown */}
      <Label>
        Type
        <Input
          onChange={(e) => {
            setPage(1);
            setType(e.target.value);
          }}
          placeholder="Parasite"
          type="text"
        />
      </Label>
    </>
  );
};

export default Search;
