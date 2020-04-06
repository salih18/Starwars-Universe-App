import { FETCH_CHARACTER_MOVIES } from "../actions/types";

const initialState = {
  films: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case FETCH_MOVIES_SUCCESS:
    //   return {
    //     films: payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
