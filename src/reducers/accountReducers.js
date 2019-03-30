import * as actionTypes from '../actions/types';

const initialState = {
  account: null,
  message: null,
  favoriteShows: [],
  favoriteShowsPage: null,
  favoriteShowsTotalPages: null,
  favoriteShowsTotalResults: null,
  favoriteMovies: [],
  favoriteMoviesPage: null,
  favoriteMoviesTotalPages: null,
  favoriteMoviesTotalResults: null,
  showWatchlist: [],
  showWatchlistPage: null,
  showWatchlistTotalPages: null,
  showWatchlistTotalResults: null,
  movieWatchlist: [],
  movieWatchlistPage: null,
  movieWatchlistTotalPages: null,
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
    case actionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        message: action.payload.message
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
        favoriteShowsPage: action.payload.favoriteShowsPage,
        favoriteShowsTotalPages: action.payload.favoriteShowsTotalPages,
        favoriteShowsTotalResults: action.payload.favoriteShowsTotalResults
      }
    case actionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload.favoriteMovies,
        favoriteMoviesPage: action.payload.favoriteMoviesPage,
        favoriteMoviesTotalPages: action.payload.favoriteMoviesTotalPages,
        favoriteMoviesTotalResults: action.payload.favoriteMoviesTotalResults
      }
    case actionTypes.GET_SHOW_WATCHLIST:
      return {
        ...state,
        showWatchlist: action.payload.showWatchlist,
        showWatchlistPage: action.payload.showWatchlistPage,
        showWatchlistTotalPages: action.payload.showWatchlistTotalPages,
        showWatchlistTotalResults: action.payload.showWatchlistTotalResults
      }
    case actionTypes.GET_MOVIE_WATCHLIST:
      return {
        ...state,
        movieWatchlist: action.payload.movieWatchlist,
        movieWatchlistPage: action.payload.movieWatchlistPage,
        movieWatchlistTotalPages: action.payload.movieWatchlistTotalPages,
        movieWatchlistTotalResults: action.payload.movieWatchlistTotalResults
      }
    default:
      return state;
  }
}

export default accountReducers;