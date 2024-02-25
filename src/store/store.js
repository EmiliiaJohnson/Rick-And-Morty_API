import axios from "axios";

const API = "https://rickandmortyapi.com/api/character";
const { makeAutoObservable } = require("mobx");
class Store {
  constructor() {
    makeAutoObservable(this);
  }

  isError = false;
  setError = (boolean) => {
    this.isError = boolean;
  };
  isLoading = false;
  setLoading = (boolean) => {
    this.isLoading = boolean;
  };
  charactersList = [];
  setCharacterList = (list) => {
    this.charactersList = list;
  };
  character = [];
  setCharacter = (character) => {
    this.character = character;
  };
  isPopupOpen = false;
  setPopupOpen = (boolean) => {
    this.isPopupOpen = boolean;
  };
  pagesCount = 1;
  setPagesCount = (pages) => {
    this.pagesCount = pages;
  };

  //getting all characters, filters included
  getCharactersList = (page, name, status, gender, species, type) => {
    this.setLoading(true);
    axios
      .get(
        `${API}/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}&type=${type}`
      )
      .then((response) => {
        this.setCharacterList(response.data.results);
        this.setPagesCount(response.data.info.pages);
        this.setError(false);
        this.setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        this.setError(true);
        this.setLoading(false);
      });
  };

  //getting one character by ID for popup window
  getSingleCharacter = (id) => {
    axios
      .get(`${API}/${id}`)
      .then((response) => {
        this.setCharacter(response.data);
        this.setPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

let store = new Store();
export default store;
