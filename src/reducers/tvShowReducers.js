import * as actionTypes from '../actions/types';

const initialState = {
  topRatedShows: [],
  onTheAirShows: [],
  onTheAirTodayShows: [],
  popularShows: [],
  showGenres: []
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: action.payload.popularShows
      }
    case actionTypes.FETCH_ON_THE_AIR_SHOWS:
      return {
        ...state,
        onTheAirShows: action.payload.onTheAirShows
      }
    case actionTypes.FETCH_ON_THE_AIR_TODAY_SHOWS:
      return {
        ...state,
        onTheAirTodayShows: action.payload.onTheAirTodayShows
      }
    case actionTypes.FETCH_MOVIE_GENRES:
      return {
        ...state,
        showGenres: action.payload.showGenres
      }
    case actionTypes.FETCH_TOP_RATED_SHOWS:
      return {
        ...state,
        topRatedShows: action.payload.topRatedShows
      }
    default:
      return state;
  }
}

export default tvShowsReducer;