import axios from "axios";
import { FETCH_PEOPLE_SUCCESS } from "./types";
import { API_URL } from "../config";

export const fetchPeople = () => async (dispatch) => {
  try {
    if(sessionStorage.peopleState) {
      console.log('session payload', JSON.parse(sessionStorage.peopleState))
     return dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        payload: JSON.parse(sessionStorage.peopleState),
      });
    }
    const res = await axios.get(`${API_URL}/people/?page=1`);
    let people = res.data.results;
    const totalPages = Math.ceil(res.data.count / 10);

    let promises = [];
    for (let index = 2; index <= totalPages; index++) {
      promises.push(axios(`https://swapi.co/api/people?page=${index}`));
    }
    const promisesResponse = await Promise.all(promises);
    people = promisesResponse.reduce((acc, val) => {
      return [...acc, ...val.data.results];
    }, people);
    console.log('api payload', people)
    dispatch({
      type: FETCH_PEOPLE_SUCCESS,
      payload: people,
    });
  } catch (err) {
    console.error(err);
  }
};
