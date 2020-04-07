import axios from "axios";
import { FETCH_CHARACTERS } from "./types";
import { API_URL } from "../config";
import { setSearchTerm } from "./search";

export const fetchCharacters = (page, searchPage, searchTerm) => async (dispatch) => {
  let res = {};

  try {
    if (searchTerm) {
      res = await axios.get(
        `${API_URL}/people/?search=${searchTerm}&page=${searchPage}`
      );
    } else {
      res = await axios.get(`${API_URL}/people/?page=${page}`);
    }

    const films = res.data.results.map((result) => result.films).flat(2);
    const uniqueFilms = Array.from(new Set(films));
    const moviePromises = uniqueFilms.map((url) =>
      axios.get(url).then((res) => res.data)
    );
    const movieData = await Promise.all(moviePromises);

    const totalPages = Math.ceil(res.data.count / 10);

    dispatch({
      type: FETCH_CHARACTERS,
      payload: { characters: res.data, movieData, totalPages },
    });
  } catch (err) {
    console.error(err);
  }
};
