import * as actionTypes from '../actions/types';
import {removeItemFromList} from '../utils/functions';

const initialState = {
  account: null,
  message: null,
  favoriteShows: [],
  favoriteShowsTotalResults: null,
  favoriteMovies: [],
  favoriteMoviesTotalResults: null,
  showWatchlist: [],
  showWatchlistTotalResults: null,
  movieWatchlist: [],
  movieWatchlistTotalResults: null
};

const accountReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    case actionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        message: action.payload.message
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      if (action.payload.type === 'movies') {
        let movies = removeItemFromList(state.favoriteMovies, action.payload.removedId);
        return {
          ...state,
          message: action.payload.message,
          favoriteMovies: movies,
          favoriteMoviesTotalResults: --state.favoriteMoviesTotalResults
        }
      } else {
        let movies = removeItemFromList(state.favoriteShows, action.payload.removedId);
        return {
          ...state,
          message: action.payload.message,
          favoriteShows: movies,
          favoriteShowsTotalResults: --state.favoriteShowsTotalResults 
        }
      }
    case actionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        message: action.payload.message
      }
    case actionTypes.REMOVE_FROM_WATCHLIST:
      if (action.payload.type === 'movies') {
        let movies = removeItemFromList(state.movieWatchlist, action.payload.removedId);
        return {
          ...state,
          message: action.payload.message,
          movieWatchlist: movies,
          movieWatchlistTotalResults: --state.movieWatchlistTotalResults
        }
      } else {
        let movies = removeItemFromList(state.showWatchlist, action.payload.removedId);
        return {
          ...state,
          message: action.payload.message,
          showWatchlist: movies,
        showWatchlistTotalResults: --state.showWatchlistTotalResults
        }
      }
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        message: action.payload.message
      }
    case actionTypes.GET_FAVORITE_SHOWS:
      return {
        ...state,
        favoriteShows: action.payload.favoriteShows,
        favoriteShowsTotalResults: action.payload.favoriteShowsTotalResults
      }
    case actionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload.favoriteMovies,
        favoriteMoviesTotalResults: action.payload.favoriteMoviesTotalResults
      }
    case actionTypes.GET_SHOW_WATCHLIST:
      return {
        ...state,
        showWatchlist: action.payload.showWatchlist,
        showWatchlistTotalResults: action.payload.showWatchlistTotalResults
      }
    case actionTypes.GET_MOVIE_WATCHLIST:
      return {
        ...state,
        movieWatchlist: action.payload.movieWatchlist,
        movieWatchlistTotalResults: action.payload.movieWatchlistTotalResults
      }
    default:
      return state;
  }
}

export default accountReducers;
