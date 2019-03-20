import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import authReducers from './authReducers';
import tvShowReducers from './tvShowReducers';
import searchReducers from './searchReducers';
import settingsReducers from './settingsReducers';

const rootReducer = combineReducers({
  movies: movieReducers,
  shows:  tvShowReducers,
  auth: authReducers,
  results: searchReducers,
  settings: settingsReducers
});

export default rootReducer;