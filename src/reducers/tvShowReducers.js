import * as actionTypes from '../actions/types';

const initialState = {
  topRatedShows: [],
  onTheAirShows: [],
  onTheAirTodayShows: [],
  popularShows: [],
  showGenres: [],
  currentShow: null,
  currentShowVideos: null,
  currentShowCredits: null,
  currentShowReviews: null,
  similarShows: null
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
        ...state,
        currentShowCredits: null
      }
    case actionTypes.GET_SHOW_REVIEWS:
      return {
        ...state,
        currentShowReviews: null
      }
    case actionTypes.GET_SHOW_VIDEOS:
      return {
        ...state,
        currentShowVideos: null
      }
    case actionTypes.GET_SIMILAR_SHOWS:
      return {
        ...state,
        similarShows: null
      }
    default:
      return state;
  }
}

export default tvShowsReducer;