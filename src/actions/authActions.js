import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const getToken = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${MOVIEDBAPI}`);
    dispatch({
      type: actionTypes.GET_TOKEN,
      payload: {
        token_id: res.data.request_token
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
        type: actionTypes.SET_SESSION,
        payload: {
          session_id: response.data.session_id
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const setSession = () => {

}

export const login = () => {

}