import * as actionTypes from '../actions/types';

const initialState = {
  topRatedShows: [],
  onTheAirShows: [],
  onTheAirTodayShows: [],
  popularShows: [],
  showGenres: [],
  currentShow: null
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
    case actionTypes.FETCH_SHOW_GENRES:
      return {
        ...state,
        showGenres: action.payload.showGenres
      }
    case actionTypes.FETCH_TOP_RATED_SHOWS:
      return {
        ...state,
        topRatedShows: action.payload.topRatedShows
      }
    case actionTypes.GET_SHOW:
      return {
        ...state,
        currentShow: action.payload.currentShow
      }
    case actionTypes.GET_SHOW_CREDITS:
      return {
        ...state
      }
    case actionTypes.GET_SHOW_REVIEWS:
      return {
        ...state
      }
    case actionTypes.GET_SHOW_VIDEOS:
      return {
        ...state
      }
    case actionTypes.GET_SIMILAR_SHOWS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default tvShowsReducer;