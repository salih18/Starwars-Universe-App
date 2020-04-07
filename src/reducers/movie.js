import { FETCH_MOVIE } from "../actions/types";

const initialState = {
  films: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIE:
      return {
        selected: payload,
        loading: false,
      };
    default:
      return state;
  }
}
