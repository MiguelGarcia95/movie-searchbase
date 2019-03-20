import * as actionTypes from './types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchSearchResults = (searchQuery, page) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${MOVIEDBAPI}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;
    const results = await axios.get(url);
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

export const fetchMoviesSearch = (searchQuery, page) => {
  return async (dispatch) => {

  }
}

export const fetchResultsSearch = (searchQuery, page) => {
  return async (dispatch) => {
    
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