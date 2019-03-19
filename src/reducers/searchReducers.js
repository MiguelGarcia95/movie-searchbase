import * as actionTypes from '../actions/types';

const initialState = {
  searchResults: [],
  currentPage: null,
  totalPages: null,
  totalResults: null
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults
      }
    default:
      return state;
  }
}

export default searchReducer;