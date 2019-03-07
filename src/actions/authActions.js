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

export const getSession = (url, token) => {
  return async (dispatch) => {
    // axios({
    //   method: 'post',
    //   url: url,
    //   headers: {'Access-Control-Allow-Origin': '*'},
    //   data: {
    //     request_token: token
    //   } 
    // }).then(function (response) {
    //   console.log(response);
    // })
    axios.post(url, {
        request_token: token
    }).then(function (response) {
      console.log(response);
    }).catch(err => {
      console.log(err)
    })
  }
}

export const login = () => {

}