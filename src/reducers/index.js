import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  movies: movieReducers,
  auth: authReducers
});

export default rootReducer;