import React from "react";
import { Input, Label } from "../../assets/styled-components/styled";

const Search = ({ setName, setPage }) => {
  return (
    <Label>
      Name
      <Input
        onChange={(e) => {
          // setting page to first to prevent error if we're currently on a page where character we search for is not present
          setPage(1);
          setName(e.target.value);
        }}
        placeholder="Rick"
        type="text"
      />
    </Label>
  );
};

export default Search;
