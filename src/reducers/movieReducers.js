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
        ...state,
        popularMovies: action.payload.popularMovies
      }
    case actionTypes.FETCH_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload.nowPlayingMovies
      }
    case actionTypes.FETCH_LATEST_MOVIES:
      return {
        ...state,
        latestsMovies: action.payload.latestsMovies
      }
    case actionTypes.FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload.upcomingMovies
      }
    default:
      return state;
  }
}

export default movieReducer;