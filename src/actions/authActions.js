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

// export const getSession = (url, token) => {
  export const getSession = (token) => {
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
    axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${MOVIEDBAPI}`, {
        request_token: token
    }).then(function (response) {
      console.log(response);
    }).catch(err => {
      console.log(err)
    })
  }
}
// 'Content-Type': 'application/json'

// const saveSession = payload => ({
//   type: GET_SESSION,
//   payload
// });

// const getSession = (url, token) => {
//   return dispatch => {
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({ request_token: token }),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(data => dispatch(saveSession(data)))
//     .catch(error => console.log(error))
//   };
// };

export const login = () => {

}