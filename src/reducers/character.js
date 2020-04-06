import {
  SELECT_CHARACTER,
  FETCH_CHARACTER_PROFILE,
  FETCH_CHARACTER_MOVIES,
} from "../actions/types";

const initialState = {
  id: null,
  profile: {},
  movies: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CHARACTER:
      return {
        ...state,
        id: payload,
      };
    case FETCH_CHARACTER_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case FETCH_CHARACTER_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
}
