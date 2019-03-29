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
    console.log(response.data.results);
    console.log(response.data.page);
    console.log(response.data.total_pages);
    console.log(response.data.total_resulst);
    dispatch({
      type: actionTypes.GET_FAVORITE_SHOWS,
      payload: {
        favoriteShows: []
      }
    })
  }
}

export const getFavoriteMovies = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    console.log(response.data.results);
    console.log(response.data.page);
    console.log(response.data.total_pages);
    console.log(response.data.total_resulst);
    dispatch({
      type: actionTypes.GET_FAVORITE_MOVIES,
      payload: {
        favoriteMovies: []
      }
    })
  }
}

export const getShowWatchlist = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    console.log(response.data.results);
    console.log(response.data.page);
    console.log(response.data.total_pages);
    console.log(response.data.total_resulst);
    dispatch({
      type: actionTypes.GET_SHOW_WATCHLIST,
      payload: {
        showWatchlist: []
      }
    })
  }
}

export const getMovieWatchlist = (accountId, sessionId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${MOVIEDBAPI}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
    const response = await axios.get(url);
    console.log(response.data.results);
    console.log(response.data.page);
    console.log(response.data.total_pages);
    console.log(response.data.total_resulst);
    dispatch({
      type: actionTypes.GET_MOVIE_WATCHLIST,
      payload: {
        movieWatchlist: []
      }
    })
  }
}