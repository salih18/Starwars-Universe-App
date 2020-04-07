import { SET_SEARCH_TERM } from "../actions/types";

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
        isSearchActive: Boolean(payload),
      };
    default:
      return state;
  }
}
