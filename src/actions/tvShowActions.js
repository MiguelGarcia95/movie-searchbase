import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchOnTheAirShows = () => {
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

export const fetchOnTheAirTodayShows = () => {
  return async (dispatch) => {
    const results = await axios.get(` https://api.themoviedb.org/3/tv/airing_today?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_ON_THE_AIR_TODAY_SHOWS,
      payload: {
        onTheAirTodayShows: results.data.results
      }
    })
  }
}

export const fetchShowGenres = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_SHOW_GENRES,
      payload: {
        showGenres: results.data.genres
      }
    })
  }
}

export const fetchShow = id => {
  return async (dispatch) => {
    const result = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.GET_SHOW,
      payload: {
        currentShow: result.data
      }
    })
  }
}

export const fetchShowCredits = id => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_SHOW_CREDITS
    })
  }
}

export const fetchShowReviews = id => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_SHOW_REVIEWS
    })
  }
}

export const fetchShowVideos = id => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_SHOW_VIDEOS
    })
  }
}

export const fetchSimilarShows = id => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_SIMILAR_SHOWS
    })
  }
}