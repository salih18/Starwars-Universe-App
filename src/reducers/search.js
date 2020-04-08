import { SET_SEARCH_TERM, SET_SEARCH_STATUS } from "../actions/types";

const initialState = {
  searchTerm: "",
  isSearchActive: false,
  // loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };
    case SET_SEARCH_STATUS:
      return {
        ...state,
        isSearchActive: payload,
      };
    default:
      return state;
  }
}
