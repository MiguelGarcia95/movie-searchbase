import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import authReducers from './authReducers';
import tvShowsReducers from './tvShowsReducers';

const rootReducer = combineReducers({
  movies: movieReducers,
  shows:  tvShowsReducers,
  auth: authReducers
});

export default rootReducer;