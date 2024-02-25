import styled from "styled-components";

//all styled components

export const Header = styled.header`
  background-color: #121212;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Get-schwifty", Arial, Helvetica, sans-serif;
  font-size: 3em;
  letter-spacing: 0.4rem;
  margin: 10px;
  text-align: center;
  color: #4deeea;
  animation: light 3s infinite alternate;
  @keyframes light {
    0%,
    18%,
    25%,
    57%,
    100% {
      text-shadow: 0 0 1px #000, 0 0 1px #000, 0 0 1px #000,
        -1px -1px 2px #74ee15, -1px 1px 2px #74ee15, 1px 1px 2px #74ee15,
        1px -1px 1px #74ee15, 1px 1px 10px #74ee15;
    }
    20%,
    30%,
    53% {
      text-shadow: 0 0 1px #000, 0 0 1px #000, 0 0 1px #000,
        -1px -1px 4px #74ee15, -1px 1px 4px #74ee15, 1px 1px 4px #74ee15,
        1px -1px 3px #74ee15, 1px 1px 20px #74ee15;
    }
  }
  @media (max-width: 477px) {
    font-size: 2em;
  }
`;

export const Credits = styled.p`
  font-size: 1.5em;
  text-align: center;
  a {
    color: #4deeea;
    text-decoration: none;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333333;
  min-height: calc(100vh - 177px);
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  margin: 20px;
  padding: 10px 20px;
  border-radius: 16px;
  background-color: #ffe700;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 383px) {
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
  @media (max-width: 515px) {
    width: 40%;
  }
  @media (max-width: 383px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 20rem;
  margin: 10px 0;
  background-color: #74ee15;
  height: 2.5rem;
  padding: 10px;
  border: 1px solid #333333;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: -2px 3px 0px 0px rgba(0, 0, 0, 1);
  }
  &::placeholder {
    color: #9c9c9c;
  }
  @media (max-width: 855px) {
    width: 7rem;
  }
  @media (max-width: 515px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 7rem;
  background-color: #74ee15;
  margin: 10px 0;
  height: 2.5rem;
  border: 1px solid #333333;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: -2px 3px 0px 0px rgba(0, 0, 0, 1);
  }
  @media (max-width: 515px) {
    width: 100%;
  }
`;

export const ButtonReset = styled.button`
  position: absolute;
  right: 50px;
  background-color: #74ee15;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  border: 1px solid #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.6s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 383px) {
    right: 30px;
  }
`;

export const ButtonResetImg = styled.img`
  height: 1.7rem;
  transition: all 0.6s ease;
  &:hover {
    transform: rotate(-360deg);
  }
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 0;
`;

export const StyledCharacterCard = styled.div`
  width: 250px;
  //change background color and box-shadow depending on the character status
  background-color: #ffe700;
  margin: 15px;
  padding-bottom: 15px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: #4deeea 0 0 10px 2px;
  &:hover {
    background-color: ${(props) =>
      props.status === "Alive"
        ? "#74ee15"
        : props.status === "Dead"
        ? "#ff0000"
        : "#ffe700"};
    transform: scale(1.03);
    box-shadow: ${(props) =>
        props.status === "Alive"
          ? "#74ee15"
          : props.status === "Dead"
          ? "#ff0000"
          : "#ffe700"}
      0 0 20px 7px;
    img {
      filter: ${(props) =>
        props.status === "Dead" ? "grayscale(100%)" : "grayscale(0%)"};
      transform: scale(0.9);
      border-radius: 16px;
      border: 1px solid #333333;
    }
  }
  @media (max-width: 600px) {
    width: 130px;
  }
  @media (max-width: 519px) {
    width: 160px;
  }
  @media (max-width: 419px) {
    width: 90%;
  }
`;

export const CharacterName = styled.p`
  font-size: 18px;
  font-family: "Dosis-Bold", Arial, Helvetica, sans-serif;
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #333333;
  border-radius: 16px 16px 0 0;
  transition: all 0.4s ease;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsLeft = styled.div`
  @media (max-width: 351px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ButtonsRight = styled.div`
  @media (max-width: 351px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background-color: #ffe700;
  margin: 15px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    border-radius: 16px;
    box-shadow: #ffe7007a 0px 0px 10px 1px;
    transform: scale(1.1);
    box-shadow: -2px 3px 0px 0px rgba(0, 0, 0, 1);
  }
  &:active {
    transform: scale(1);
    box-shadow: none;
  }
  &:disabled {
    background-color: #848484;
    cursor: auto;
    &:hover {
      border-radius: 50%;
      box-shadow: none;
      transform: scale(1);
    }
  }
`;

export const ButtonArrow = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #060016db;
`;

export const Popup = styled.div`
  display: flex;
  padding: 20px;
  position: absolute;
  left: 30%;
  right: 30%;
  top: 30%;
  text-align: center;
  margin: auto;
  border-radius: 16px;
  background-color: #ffe700;
  color: #000;
  font-size: 18px;
  animation: pulse 2s ease infinite;
  @keyframes pulse {
    0% {
      box-shadow: ${(props) =>
          props.status === "Alive"
            ? "#74ee15"
            : props.status === "Dead"
            ? "#ff0000"
            : "#ffe700"}
        0 0 20px 1px;
    }
    70% {
      box-shadow: ${(props) =>
          props.status === "Alive"
            ? "#74ee15"
            : props.status === "Dead"
            ? "#ff0000"
            : "#ffe700"}
        0 0 20px 3px;
    }
    100% {
      box-shadow: ${(props) =>
          props.status === "Alive"
            ? "#74ee15"
            : props.status === "Dead"
            ? "#ff0000"
            : "#ffe700"}
        0 0 20px 1px;
    }
  }
  @media (max-width: 1100px) {
    left: 20%;
    right: 20%;
    top: 20%;
  }
  @media (max-width: 790px) {
    left: 10%;
    right: 10%;
    top: 10%;
  }
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const PopupImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 580px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const PopupInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  margin-left: 30px;
  span {
    font-family: "Dosis-Bold", Arial, Helvetica, sans-serif;
  }
`;

export const PopupImage = styled.img`
  width: 10rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 16px;
  margin: 10px;
  box-shadow: #00000059 0px 5px 15px;
`;

export const PopupButton = styled.button`
  background-color: transparent;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonClose = styled.img`
  height: 2.5rem;
`;

export const ErrorTitle = styled.h2`
  font-family: "Get-schwifty", Arial, Helvetica, sans-serif;
  font-size: 13em;
  color: #ffe700;
  letter-spacing: 0.5rem;
  margin: 40px;
  text-shadow: 2px -1px 0 #f000ff, -2px 1px 0 #4deeea;
  animation: glitch 1s infinite alternate;
  @keyframes glitch {
    0%,
    18%,
    25%,
    57%,
    100% {
      text-shadow: -2px 2px 1px #4deeea, 2px -2px 1px #f000ff;
      text-decoration: overline;
      text-decoration-thickness: 1px;
      text-decoration-style: dashed;
    }
    9%,
    23%,
    44%,
    67%,
    83% {
      text-decoration: line-through;
      text-decoration-thickness: 1px;
      text-decoration-style: dashed;
    }

    20%,
    30%,
    53% {
      text-shadow: -3px -1px 1px #f000ff, 3px 1px 1px #4deeea;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-decoration-style: dashed;
    }
  }
  @media (max-width: 600px) {
    font-size: 8em;
  }
  @media (max-width: 450px) {
    font-size: 5em;
    margin: 40px 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: #4deeea;
  font-size: 30px;
`;

export const StyledLoader = styled.div`
  margin: auto;
  font-size: 4rem;
  color: #0000;
  background: linear-gradient(90deg, #ffe700 calc(50% + 0.5ch), #74ee15 0)
    right/calc(200% + 1ch) 100%;
  background-clip: text;
  animation: loading 3s ease infinite;
  &:before {
    content: "Loading...";
  }
  @keyframes loading {
    0% {
      background-position: right;
    }
    50% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;
