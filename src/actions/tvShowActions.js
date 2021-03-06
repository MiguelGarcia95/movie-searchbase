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
    const results = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.GET_SHOW_CREDITS,
      payload: {
        currentShowCredits: results.data
      }
    })
  }
}

export const fetchShowReviews = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.GET_SHOW_REVIEWS,
      payload: {
        currentShowReviews: results.data.results
      }
    })
  }
}

export const fetchShowVideos = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.GET_SHOW_VIDEOS,
      payload: {
        currentShowVideos: results.data.results
      }
    })
  }
}

export const fetchSimilarShows = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.GET_SIMILAR_SHOWS,
      payload: {
        similarShows: results.data.results
      }
    })
  }
}