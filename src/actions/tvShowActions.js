import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchNowPlayingShows = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_ON_THE_AIR_SHOWS,
      payload: {
        onTheAirShows: results.data.results
      }
    })
  }
}

export const fetchPopularShows = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_POPULAR_SHOWS,
      payload: {
        popularShows: results.data.results
      }
    })
  }
}

export const fetchTopRatedShows = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_TOP_RATED_SHOWS,
      payload: {
        topRatedShows: results.data.results
      }
    })
  }
}
