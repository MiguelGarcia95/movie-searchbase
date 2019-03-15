import * as actionTypes from '../actions/types';

const initialState = {
  topRatedShows: [],
  latestsTvShows: [],
  onTheAirShows: [],
  popularTvShows: []
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_SHOWS:
      return {
        ...state,
        popularTvShows: action.payload.popularTvShows
      }
    case actionTypes.FETCH_ON_THE_AIR_SHOWS:
      return {
        ...state,
        onTheAirShows: action.payload.onTheAirShows
      }
    case actionTypes.FETCH_LATEST_SHOWS:
      return {
        ...state,
        latestsTvShows: action.payload.latestsTvShows
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