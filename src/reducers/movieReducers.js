import * as actionTypes from '../actions/types';

const initialState = {
  upcomingMovies: [],
  latestsMovies: [],
  nowPlayingMovies: [],
  popularMovies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state
      }
    case actionTypes.FETCH_NOW_PLAYING_MOVIES:
      return {
        ...state
      }
    case actionTypes.FETCH_LATEST_MOVIES:
      return {
        ...state
      }
    case actionTypes.FETCH_UPCOMING_MOVIES:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default movieReducer;