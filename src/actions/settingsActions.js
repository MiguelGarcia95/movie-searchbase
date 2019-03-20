import * as actionTypes from './types';

export const setType = type => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_TYPE,
      payload: {
        type: type
      }
    })
  }
}