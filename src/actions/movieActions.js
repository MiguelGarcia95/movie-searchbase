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

export const fetchTopRatedMovies = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_TOP_RATED_MOVIES,
      payload: {
        topRatedMovies: results.data.results
      }
    })
  }
}

export const fetchMovieGenres = () => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_MOVIE_GENRES,
      payload: {
        movieGenres: results.data.genres
      }
    })
  }
}

export const fetchMovie = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.GET_MOVIE,
      payload: {
        currentMovie: results.data
      }
    })
  }
}

export const fetchMovieCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MOVIEDBAPI}`);
    dispatch({
      type: actionTypes.GET_MOVIE_CREDITS,
      payload: {
        currentMoviesCredits: results.data
      }
    })
  }
}

export const fetchMovieReviews = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.GET_MOVIE_REVIEWS,
      payload: {
        currentMoviesReviews: results.data.results
      }
    })
  }
}

export const fetchMovieVideos = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.GET_MOVIE_VIDEOS,
      payload: {
        currentMoviesVideos: results.data.results
      }
    })
  }
}

export const fetchSimilarMovies = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.GET_SIMILAR_MOVIES,
      payload: {
        similarMovies: results.data.results
      }
    })
  }
}