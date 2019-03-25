import * as actionTypes from './types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchPeople = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_PEOPLE,
      payload: {
        currentPerson: results.data
      }
    })
  }
}