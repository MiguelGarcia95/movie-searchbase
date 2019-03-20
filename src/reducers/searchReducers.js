import * as actionTypes from '../actions/types';

const initialState = {
  moviesSearchResults: [],
  moviesCurrentPage: null,
  moviesTotalPages: null,
  moviesTotalResults: null,
  
  showsSearchResults: [],
  showsCurrentPage: null,
  showsTotalPages: null,
  showsTotalResults: null,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE_RESULTS:
      return {
        ...state,
        moviesSearchResults: action.payload.moviesSearchResults,
        moviesCurrentPage: action.payload.moviesCurrentPage,
        moviesTotalPages: action.payload.moviesTotalPages,
        moviesTotalResults: action.payload.moviesTotalResults
      }
    case actionTypes.SEARCH_SHOW_RESULTS:
      return {
        ...state,
        showsSearchResults: action.payload.showsSearchResults,
        showsCurrentPage: action.payload.showsCurrentPage,
        showsTotalPages: action.payload.showsTotalPages,
        showsTotalResults: action.payload.showsTotalResults
      }
    default:
      return state;
  }
}

export default searchReducer;