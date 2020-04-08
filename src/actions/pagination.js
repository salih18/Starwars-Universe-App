import { SELECT_PAGE, SELECT_SEARCH_PAGE } from "./types";

export const selectPage = (page) => async (dispatch) => {
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
  try {
    dispatch({
      type: SELECT_SEARCH_PAGE,
      payload: searchPage,
    });
  } catch (err) {
    console.error(err);
  }
};
