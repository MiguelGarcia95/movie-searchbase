import * as actionTypes from '../actions/types';

const initialState = {
  account: null
};

const accountReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    case actionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account
      }
    default:
      return state;
  }
}

export default accountReducers;