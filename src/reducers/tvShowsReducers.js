import * as actionTypes from '../actions/types';

const initialState = {
  upcomingTvShows: [],
  latestsTvShows: [],
  nowPlayingTvShows: [],
  popularTvShows: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_SHOWS:
      return {
        ...state,
        popularTvShows: action.payload.popularTvShows
      }
    case actionTypes.FETCH_NOW_PLAYING_SHOWS:
      return {
        ...state,
        nowPlayingTvShows: action.payload.nowPlayingTvShows
      }
    case actionTypes.FETCH_LATEST_SHOWS:
      return {
        ...state,
        latestsTvShows: action.payload.latestsTvShows
      }
    case actionTypes.FETCH_UPCOMING_SHOWS:
      return {
        ...state,
        upcomingTvShows: action.payload.upcomingTvShows
      }
    default:
      return state;
  }
}

export default movieReducer;