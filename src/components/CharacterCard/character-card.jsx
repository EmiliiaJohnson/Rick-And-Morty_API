import React from "react";
import {
  StyledCharacterCard,
  CharacterImage,
  CharacterName,
} from "../../assets/styled-components/styled";

const CharacterCard = (props) => {
  return (
    <StyledCharacterCard onClick={props.onClick} status={props.status}>
      <CharacterImage src={props.img} alt="character" />
      <CharacterName>{props.name}</CharacterName>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
