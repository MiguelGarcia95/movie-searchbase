import * as actionTypes from '../actions/types';

const initialState = {
  upcomingMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
  popularMovies: [],
  movieGenres: []
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
    case actionTypes.FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload.topRatedMovies
      }
    case actionTypes.FETCH_MOVIE_GENRES:
      return {
        ...state,
        movieGenres: action.payload.movieGenres
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