import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const getAccount = session_id => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/account?api_key=${MOVIEDBAPI}&session_id=${session_id}`);
    localStorage.setItem('account', JSON.stringify(response.data));
    dispatch({
      type: actionTypes.GET_ACCOUNT,
      payload: {
        account: response.data
      }
    })
  }
}

export const setAccount = account => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_ACCOUNT,
      payload: {
        account: account
      }
    })
  }
}

export const getFavoriteShows = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.GET_FAVORITE_SHOWS,
      payload: {
        favoriteShows: response.data.results,
        favoriteShowsPage: response.data.page,
        favoriteShowsTotalPages: response.data.total_pages,
        favoriteShowsTotalResults: response.data.total_results
      }
    })
  }
}

export const getFavoriteMovies = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.GET_FAVORITE_MOVIES,
      payload: {
        favoriteMovies: response.data.results,
        favoriteMoviesPage: response.data.page,
        favoriteMoviesTotalPages: response.data.total_pages,
        favoriteMoviesTotalResults: response.data.total_results
      }
    })
  }
}

export const getShowWatchlist = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.GET_SHOW_WATCHLIST,
      payload: {
        showWatchlist: response.data.results,
        showWatchlistPage: response.data.page,
        showWatchlistTotalPages: response.data.total_pages,
        showWatchlistTotalResults: response.data.total_results
      }
    })
  }
}

export const getMovieWatchlist = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.GET_MOVIE_WATCHLIST,
      payload: {
        movieWatchlist: response.data.results,
        movieWatchlistPage: response.data.page,
        movieWatchlistTotalPages: response.data.total_pages,
        movieWatchlistTotalResults: response.data.total_results
      }
    })
  }
}

export const addToFavorites = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch({
      type: actionTypes.ADD_TO_FAVORITES
    })
  }
}

export const addToWatchlist = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch({
      type: actionTypes.ADD_TO_WATCHLIST
    })
  }
}

// export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
// export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';