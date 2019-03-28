import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const getAccount = session_id => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/account?api_key=${MOVIEDBAPI}&session_id=${session_id}`);
    localStorage.setItem('account', JSON.stringify(response.data));
    dispatch({
      type: actionTypes.GET_ACCOUNT,
      payload: {
        account: response.data
      }
    })
  }
}

export const setAccount = account => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_ACCOUNT,
      payload: {
        account: account
      }
    })
  }
}
