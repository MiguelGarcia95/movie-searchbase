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

export const addToFavorites = (accountId, sessionId, mediaType, mediaId) => {
  return (dispatch) => {
    console.log(accountId)
    console.log(sessionId)
    console.log(mediaType)
    console.log(mediaId)
    console.log(action)
    let type = mediaType === 'movies' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${MOVIEDBAPI}&session_id=${sessionId}`;
    axios.post(url, {
      media_type: type,
      media_id: mediaId,
      favorite: true
    }).then(response => {
      dispatch({
        type: actionTypes.ADD_TO_FAVORITES,
        payload: {
          message: 'Was Added To Favorites!'
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
export const removeFromFavorites = (accountId, sessionId, mediaType, mediaId) => {
  return (dispatch) => {
    let type = mediaType === 'movies' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${MOVIEDBAPI}&session_id=${sessionId}`;
    axios.post(url, {
      media_type: type,
      media_id: mediaId,
      favorite: false
    }).then(response => {
      dispatch({
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload: {
          message: 'Was Removed From Favorites!'
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const addToWatchlist = (accountId, sessionId, mediaType, mediaId, action) => {
  return (dispatch) => {
    let type = mediaType === 'movies' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${MOVIEDBAPI}&session_id=${sessionId}`;
    axios.post(url, {
      media_type: type,
      media_id: mediaId,
      watchlist: action
    }).then(response => {
      dispatch({
        type: actionTypes.ADD_TO_WATCHLIST,
        payload: {
          message: 'Was Added To Watchlist!'
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const removeFromWatchlist = (accountId, sessionId, mediaType, mediaId, action) => {
  return (dispatch) => {
    let type = mediaType === 'movies' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${MOVIEDBAPI}&session_id=${sessionId}`;
    axios.post(url, {
      media_type: type,
      media_id: mediaId,
      watchlist: action
    }).then(response => {
      dispatch({
        type: actionTypes.REMOVE_FROM_WATCHLIST,
        payload: {
          message: 'Was Removed From Watchlist!'
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const deleteMessage = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_MESSAGE,
      payload: {
        message: null
      }
    })
  }
}
