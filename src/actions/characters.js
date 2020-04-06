import axios from "axios";
import { FETCH_CHARACTERS } from "./types";
import { API_URL } from "../config";


export const fetchCharacters = () => async (dispatch) => {
  try {
    // if(sessionStorage.peopleState) {
    //   console.log('session payload', JSON.parse(sessionStorage.peopleState))
    //  return dispatch({
    //     type: FETCH_PEOPLE_SUCCESS,
    //     payload: JSON.parse(sessionStorage.peopleState),
    //   });
    // }
    const res = await axios.get(`${API_URL}/people/?page=1`);
    // const films = res.data.results.map(result => result.films).flat(2)
    // const uniqueFilms = Array.from(new Set(films))
    //dispatch(fetchMovies(uniqueFilms))

    // const moviePromises = moviesArray.map(movieUrl => axios(movieUrl))
    // const movieData = await Promise.all(moviePromises)
    // const nextPage = res.data.next
    // const totalPages = Math.ceil(res.data.count / 10);

    // let promises = [];
    // for (let index = 2; index <= totalPages; index++) {
    //   promises.push(axios(`https://swapi.co/api/people?page=${index}`));
    // }
    // const promisesResponse = await Promise.all(promises);
    // people = promisesResponse.reduce((acc, val) => {
    //   return [...acc, ...val.data.results];
    // }, people);

    dispatch({
      type: FETCH_CHARACTERS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
