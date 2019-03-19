import * as actionTypes from '../actions/types';

const initialState = {
  searchResults: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults
      }
    default:
      return state;
  }
}

export default searchReducer;