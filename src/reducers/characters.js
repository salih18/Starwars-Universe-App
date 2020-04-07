import { FETCH_CHARACTERS } from "../actions/types";

const initialState = {
  characters: [],
  nextPage:null,
  loading: true,
  totalPages:null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CHARACTERS:

      return {
        movies: payload.movieData.sort((movA, movB) =>movA.episode_id - movB.episode_id),
        characters: payload.characters.results,
        nextPage: payload.next, 
        totalPages:payload.totalPages,
        loading: false,
      };
    default:
      return state;
  }
}

