import * as actionTypes from '../actions/types';

const initialState = {
  upcomingMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
  popularMovies: [],
  movieGenres: [],
  currentMovie: null
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
    case actionTypes.GET_MOVIE:
      return {
        ...state,
        currentMovie: action.payload.currentMovie
      }
    case actionTypes.GET_MOVIE_CREDITS:
      return {
        ...state
      }
    case actionTypes.GET_MOVIE_REVIEWS:
      return {
        ...state
      }
    case actionTypes.GET_MOVIE_VIDEOS:
      return {
        ...state
      }
    case actionTypes.GET_SIMILAR_MOVIES:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default movieReducer;
