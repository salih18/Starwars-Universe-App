import axios from "axios";
import { SELECT_PAGE, SELECT_SEARCH_PAGE } from "./types";
import { API_URL } from "../config";

export const selectPage = (page) => async (dispatch) => {
  console.log({page})
  try {
    dispatch({
      type: SELECT_PAGE,
      payload: page,
    });
  } catch (err) {
    console.error(err);
  }
};

export const selectSearchPage = (searchPage) => async (dispatch) => {
  console.log({searchPage})
  try {
    dispatch({
      type: SELECT_SEARCH_PAGE,
      payload: searchPage,
    });
  } catch (err) {
    console.error(err);
  }
};
