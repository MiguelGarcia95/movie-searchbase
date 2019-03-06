import * as actionTypes from '../actions/types';

const initialState = {
  token_id: null
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state
      }
    case actionTypes.GET_TOKEN:
      return {
        ...state,
        token_id: action.payload.token_id
      }
    default:
      return state;
  }
}

export default authReducers;