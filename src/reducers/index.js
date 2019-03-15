import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import authReducers from './authReducers';
import tvShowReducers from './tvShowReducers';

const rootReducer = combineReducers({
  movies: movieReducers,
  shows:  tvShowReducers,
  auth: authReducers
});

export default rootReducer;