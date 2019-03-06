import {combineReducers} from 'redux';
import movieReducers from './movieReducers';

const rootReducer = combineReducers({
  movies: movieReducers
});

export default rootReducer;