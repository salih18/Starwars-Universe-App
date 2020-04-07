import { SELECT_PAGE, SELECT_SEARCH_PAGE } from "../actions/types";

const initialState = {
  aPage: 1,
  aSearchPage: 1,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_PAGE:
      return {
        ...state,
        aPage: payload,
        aSearchPage: 1,
      };
    case SELECT_SEARCH_PAGE:
      return {
        ...state,
        aSearchPage: payload,
      };
    default:
      return state;
  }
}
