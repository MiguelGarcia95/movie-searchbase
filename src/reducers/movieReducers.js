import * as actionTypes from '../actions/types';

const initialState = {

};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default movieReducer;