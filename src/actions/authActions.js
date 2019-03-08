import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const getToken = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${MOVIEDBAPI}`);
    dispatch({
      type: actionTypes.GET_TOKEN,
      payload: {
        token_id: response.data.request_token
      }
    })
  }
}

export const getSession = (token) => {
  return async (dispatch) => {
    axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${MOVIEDBAPI}`, {
       request_token: token
    }).then((response) => {
      localStorage.setItem('session_id', response.data.session_id);
      dispatch({
        type: actionTypes.GET_SESSION,
        payload: {
          session_id: response.data.session_id
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const setSession = session_id => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_SESSION,
      payload: {
        session_id: session_id
      }
    })
  }
}

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

export const logout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({
      type: actionTypes.LOGOUT,
      payload: {
        token_id: null,
        session_id: null,
        account: null
      }
    })
  }
}