import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const login = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${MOVIEDBAPI}`);
    const token_id = res.data.request_token;
  }
}