import * as actionTypes from '../actions/types';

const initialState = {

};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default authReducers;