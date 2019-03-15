import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchNowPlayingMovies = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIEDBAPI}&language=en-US&page=1`)
    dispatch({
      type: actionTypes.FETCH_NOW_PLAYING_MOVIES,
      payload: {
        nowPlayingMovies: results.data.results
      }
    })
  }
}

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_POPULAR_MOVIES,
      payload: {
        popularMovies: results.data.results
      }
    })
  }
}

export const fetchUpcomingMovies = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_UPCOMING_MOVIES,
      payload: {
        upcomingMovies: results.data.results
      }
    })
  }
}

export const fetchLatestMovies = () => {
  return async (dispatch) => {
    const results = await axios.get(` https://api.themoviedb.org/3/movie/latest?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_LATEST_MOVIES,
      payload: {
        latestMovies: results.data.results
      }
    })
  }
}