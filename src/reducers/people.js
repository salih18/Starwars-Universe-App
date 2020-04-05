import { FETCH_PEOPLE_SUCCESS } from "../actions/types";

const initialState = {
  characters: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PEOPLE_SUCCESS:

      return {
        characters: payload,
        loading: false,
      };
    default:
      return state;
  }
}

