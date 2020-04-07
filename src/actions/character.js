import axios from "axios";
import { SELECT_CHARACTER } from "./types";
import { FETCH_CHARACTER_PROFILE } from "./types";
import { FETCH_CHARACTER_MOVIES } from "./types";
import { API_URL } from "../config";

export const selectCharacter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECT_CHARACTER,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchCharacterProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/people/${id}`);

    dispatch({
      type: FETCH_CHARACTER_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchCharacterMovies = (moviesUrls) => async (dispatch) => {
  try {
    const promises = moviesUrls.map((url) =>
      axios.get(url).then((res) => res.data)
    );
    const movies = await Promise.all(promises);

    dispatch({
      type: FETCH_CHARACTER_MOVIES,
      payload: movies,
    });
  } catch (err) {
    console.error(err);
  }
};
