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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDBAPI}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;
    const results = await axios.get(url);
    dispatch({
      type: actionTypes.SEARCH_MOVIE_RESULTS,
      payload: {
        moviesSearchResults: results.data.results,
        moviesCurrentPage: results.data.page,
        moviesTotalPages: results.data.total_pages,
        moviesTotalResults: results.data.total_results
      }
    })
  }
}

export const fetchShowSearch = (searchQuery, page) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${MOVIEDBAPI}&language=en-US&query=${searchQuery}&page=${page}`;
    const results = await axios.get(url);
    dispatch({
      type: actionTypes.SEARCH_SHOW_RESULTS,
      payload: {
        showsSearchResults: results.data.results,
        showsCurrentPage: results.data.page,
        showsTotalPages: results.data.total_pages,
        showsTotalResults: results.data.total_results
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