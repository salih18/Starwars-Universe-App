import axios from "axios";
import { SET_SEARCH_TERM } from "./types";
import { API_URL } from "../config";

export const setSearchTerm = (term) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: term,
    });
  } catch (err) {
    console.error(err);
  }
};
