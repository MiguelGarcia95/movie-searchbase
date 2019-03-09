import * as actionTypes from '../actions/types';

const initialState = {
  token_id: null,
  session_id: null,
  account: null,
  redirectToLogin: false,
  redirectToAccount: false
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    case actionTypes.REDIRECT_TO_ACCOUNT:
      return {
        ...state,
        redirectToAccount: action.payload.redirect
      }
    case actionTypes.REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectToLogin: action.payload.redirect
      }
    case actionTypes.REDIRECT_RESET:
      return {
        ...state,
        redirectToLogin: action.payload.redirect,
        redirectToAccount: action.payload.redirect

      }
    case actionTypes.SET_ACCOUNT:
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
    case actionTypes.SET_TOKEN:
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