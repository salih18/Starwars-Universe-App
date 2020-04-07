import { FETCH_MOVIE } from "./types";
import store from "./../store";

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const sessionedMovie = JSON.parse(sessionStorage.getItem(id));

    if (sessionedMovie) {
      return dispatch({
        type: FETCH_MOVIE,
        payload: sessionedMovie,
      });
    }
    const state = store.getState();
    const movies = state.characters.movies;
    const movie = movies.find((movie) => movie.episode_id === Number(id));
    dispatch({
      type: FETCH_MOVIE,
      payload: movie || sessionedMovie,
    });
  } catch (err) {
    console.error(err);
  }
};
