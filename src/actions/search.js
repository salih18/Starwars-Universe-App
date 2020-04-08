import { SET_SEARCH_TERM, SET_SEARCH_STATUS } from "./types";

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

export const setSearchStatus = (bool) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_STATUS,
      payload: bool,
    });
  } catch (err) {
    console.error(err);
  }
};
