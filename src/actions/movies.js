import axios from "axios";
import { FETCH_ALL_MOVIES} from "./types";
import { API_URL } from "../config";

// export const fetchAllMovies = (moviesUrl, movieTitle) => async (dispatch) => {
//   try {
   
//     const moviePromises = moviesUrl.map((movieUrl) => axios(movieUrl));
//     const response = await Promise.all(moviePromises);
//     const characterMovies = response.reduce((acc, val) => {
//       return [...acc, val.data];
//     }, []);
   
//     dispatch({
//       type: FETCH_ALL_MOVIES,
//       payload: characterMovies,
//     });
//     // const res = await axios.get(`${API_URL}/people/?page=1`);
//     // const data = res.data;

//     // const moviePromises = moviesArray.map(movieUrl => axios(movieUrl))
//     // const movieData = await Promise.all(moviePromises)
//     // const nextPage = res.data.next
//     // const totalPages = Math.ceil(res.data.count / 10);

//     // let promises = [];
//     // for (let index = 2; index <= totalPages; index++) {
//     //   promises.push(axios(`https://swapi.co/api/people?page=${index}`));
//     // }
//     // const promisesResponse = await Promise.all(promises);
//     // people = promisesResponse.reduce((acc, val) => {
//     //   return [...acc, ...val.data.results];
//     // }, people);
//   } catch (err) {
//     console.error(err);
//   }
// };

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
