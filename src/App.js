import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import store from "./store/store";
import Search from "./components/Filters/search";
import Filter from "./components/Filters/filters";
import CharacterCard from "./components/CharacterCard/character-card";
import CharacterPopup from "./components/CharacterPopup/character-popup";
import Error from "./components/ErrorPage/error-page";
import Loader from "./components/Loader/loader";
import {
  Header,
  Title,
  Credits,
  ButtonReset,
  ButtonResetImg,
  Main,
  Form,
  CharacterWrapper,
  ButtonWrapper,
  ButtonsLeft,
  ButtonsRight,
  Button,
  ButtonArrow,
} from "./assets/styled-components/styled";
import first from "./assets/images/first.svg";
import prev from "./assets/images/prev.svg";
import next from "./assets/images/next.svg";
import last from "./assets/images/last.svg";
import reset from "./assets/images/reset.svg";

const App = observer(() => {
  //handling pagination
  const [page, setPage] = useState(1);
  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage(page - 1);
  const handleFirst = () => setPage(1);
  const handleLast = () => setPage(store.pagesCount);

  //handling filtration
  let [name, setName] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");
  let [type, setType] = useState("");
  const resetfilters = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setGender("");
    setType("");
  };

  useEffect(() => {
    store.getCharactersList(page, name, status, gender, species, type);
  }, [page, name, status, gender, species, type]);

  return (
    <div className="App">
      <Header>
        <Title>Rick and Morty</Title>
      </Header>
      <Main>
        <Form>
          <Search setName={setName} setPage={setPage} />
          <Filter
            setPage={setPage}
            status={status}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            setType={setType}
          />
          <ButtonReset onClick={resetfilters}>
            <ButtonResetImg src={reset} alt="close window"></ButtonResetImg>
          </ButtonReset>
        </Form>

        {store.isLoading ? (
          <Loader />
        ) : (
          <>
            {store.isError ? (
              <Error />
            ) : (
              <CharacterWrapper>
                {store.charactersList.map((character) => (
                  <div key={character.id}>
                    <CharacterCard
                      onClick={() => store.getSingleCharacter(character.id)}
                      img={character.image}
                      name={character.name}
                      status={character.status}
                      gender={character.gender}
                    />
                  </div>
                ))}

                {store.isPopupOpen && (
                  <CharacterPopup
                    status={store.character.status}
                    onClick={() => store.setPopupOpen(false)}
                    img={store.character.image}
                    name={store.character.name}
                    gender={store.character.gender}
                    species={store.character.species}
                    type={store.character.type}
                    origin={store.character.origin.name}
                    location={store.character.location.name}
                  ></CharacterPopup>
                )}
              </CharacterWrapper>
            )}
            <ButtonWrapper>
              <ButtonsLeft>
                <Button disabled={page === 1} onClick={handleFirst}>
                  <ButtonArrow
                    src={first}
                    alt="to the first page"
                  ></ButtonArrow>
                </Button>
                <Button disabled={page === 1} onClick={handlePrev}>
                  <ButtonArrow src={prev} alt="to the first page"></ButtonArrow>
                </Button>
              </ButtonsLeft>
              <ButtonsRight>
                <Button
                  disabled={page === store.pagesCount || store.isError}
                  onClick={handleNext}
                >
                  <ButtonArrow src={next} alt="to the first page"></ButtonArrow>
                </Button>
                <Button
                  disabled={page === store.pagesCount || store.isError}
                  onClick={handleLast}
                >
                  <ButtonArrow src={last} alt="to the first page"></ButtonArrow>
                </Button>
              </ButtonsRight>
            </ButtonWrapper>
          </>
        )}
      </Main>
      <Header as="footer">
        <Credits>
          <a href="https://github.com/EmiliiaJohnson" target="blank">
            By Emiliia
          </a>
        </Credits>
      </Header>
    </div>
  );
});

export default App;
