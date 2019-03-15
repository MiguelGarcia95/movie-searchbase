import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import authReducers from './authReducers';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  movies: movieReducers,
  shows:  tvShowsReducer,
  auth: authReducers
});

export default rootReducer;