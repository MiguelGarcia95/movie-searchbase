import * as actionTypes from '../actions/types';

const initialState = {
  token_id: null,
  session_id: null,
  account: null
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        token_id: action.payload.token_id,
        account: action.payload.account,
        session_id: action.payload.session_id
      }
    case actionTypes.GET_TOKEN:
      return {
        ...state,
        token_id: action.payload.token_id
      }
    case actionTypes.GET_SESSION:
      return {
        ...state,
        session_id: action.payload.session_id
      }
    case actionTypes.SET_SESSION:
      return {
        ...state,
        session_id: action.payload.session_id
      }
    default:
      return state;
  }
}

export default authReducers;