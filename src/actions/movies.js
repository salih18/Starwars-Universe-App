import axios from "axios";
import { FETCH_ALL_MOVIES } from "./types";

export const fetchCharacterMovies = (moviesUrls) => async (dispatch) => {
  try {
    const promises = moviesUrls.map((url) =>
      axios.get(url).then((res) => res.data)
    );
    const movies = await Promise.all(promises);

    dispatch({
      type: FETCH_ALL_MOVIES,
      payload: movies,
    });
  } catch (err) {
    console.error(err);
  }
};
