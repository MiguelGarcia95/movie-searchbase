import * as actionTypes from './types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchSearchResults = (searchQuery, page) => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=${MOVIEDBAPI}&query=${searchQuery}&page=${page}`);
    dispatch({
      type: actionTypes.FETCH_SEARCH_RESULTS,
      payload: {
        searchResults: results.data.results,
        currentPage: results.data.page,
        totalPages: results.data.total_pages,
        totalResults: results.data.total_results
      }
    })
  }
}

export const resetResults = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RESET_RESULTS,
      payload: {
        searchResults: [],
        currentPage: null,
        totalPages: null,
        totalResults: null
      }
    })
  }
}