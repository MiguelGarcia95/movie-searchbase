import * as actionTypes from './types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

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