import React from "react";
import close from "../../assets/images/close.svg";
import {
  PopupWrapper,
  Popup,
  PopupImageWrapper,
  PopupImage,
  PopupInfo,
  CharacterName,
  PopupButton,
  ButtonClose,
} from "../../assets/styled-components/styled";

const CharacterPopup = (props) => {
  return (
    <PopupWrapper>
      <Popup status={props.status}>
        <PopupImageWrapper>
          <PopupImage src={props.img} alt="character" />
          <CharacterName>{props.name}</CharacterName>
        </PopupImageWrapper>
        <PopupInfo>
          <p>
            <span>Gender: </span> {props.gender}
          </p>
          <p>
            <span>Species: </span> {props.species}
          </p>
          {/* show the type of character if they have one */}
          {props.type !== "" && (
            <p>
              <span>Type: </span>
              {props.type}
            </p>
          )}
          <p>
            <span>Origin: </span> {props.origin}
          </p>
          <p>
            <span>Location: </span> {props.location}
          </p>
          <p>
            <span>Status: </span> {props.status}
          </p>
          <PopupButton onClick={props.onClick}>
            <ButtonClose src={close} alt="close window"></ButtonClose>
          </PopupButton>
        </PopupInfo>
      </Popup>
    </PopupWrapper>
  );
};

export default CharacterPopup;
