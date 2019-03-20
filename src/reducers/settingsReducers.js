import * as actionTypes from '../actions/types';

const initialState = {
  type: 'movies'
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TYPE:
      return {
        ...state,
        type: action.payload.type
      }
    default:
      return state;
  }
}

export default settingsReducer;