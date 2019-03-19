import * as actionTypes from './types';

export const fetchSearchResults = (searchQuery, page) => {
  return (dispatch) => {
    console.log()
    
    dispatch({
      type: actionTypes.FETCH_SEARCH_RESULTS,
      payload: {
        searchResults: []
      }
    })
  }
}