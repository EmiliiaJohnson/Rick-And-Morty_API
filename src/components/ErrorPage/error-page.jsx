import React from "react";
import {
  ErrorTitle,
  ErrorMessage,
} from "../../assets/styled-components/styled";

const Error = () => {
  return (
    <div>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>
        There is no such character in the entire multiverse
      </ErrorMessage>
      <ErrorMessage>Try changing your search parameters</ErrorMessage>
    </div>
  );
};

export default Error;
