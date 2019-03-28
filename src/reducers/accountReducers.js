import * as actionTypes from '../actions/types';

const initialState = {
  account: null,
  favoriteShows: [],
  favoriteMovies: [],
  showWatchlist: [],
  movieWatchlist: []
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
    case actionTypes.GET_FAVORITE_SHOWS:
      return {
        ...state,
        favoriteShows: action.payload.favoriteShows
      }
    case actionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload.favoriteMovies
      }
    case actionTypes.GET_SHOW_WATCHLIST:
      return {
        ...state,
        showWatchlist: action.payload.showWatchlist
      }
    case actionTypes.GET_MOVIE_WATCHLIST:
      return {
        ...state,
        movieWatchlist: action.payload.movieWatchlist
      }
    default:
      return state;
  }
}

export default accountReducers;