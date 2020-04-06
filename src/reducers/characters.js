import { FETCH_CHARACTERS } from "../actions/types";

const initialState = {
  characters: [],
  nextPage:null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CHARACTERS:

      return {
        characters: payload.results,
        nextPage: payload.next, 
        loading: false,
      };
    default:
      return state;
  }
}

