import { combineReducers } from 'redux';
import characters from './characters'
import movies from './movies'
import character from './character'

export default combineReducers({
 characters, 
 character,
 movies
});
