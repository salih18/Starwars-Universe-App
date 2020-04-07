import { combineReducers } from "redux";
import characters from "./characters";
import movies from "./movies";
import movie from "./movie";
import character from "./character";
import pagination from "./pagination";
import search from "./search";

export default combineReducers({
  characters,
  character,
  movies,
  movie,
  pagination,
  search,
});
