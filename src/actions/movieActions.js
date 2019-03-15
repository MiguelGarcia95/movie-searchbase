import * as actionTypes from '../actions/types';
import axios from 'axios';
import {MOVIEDBAPI} from '../api_keys';

export const fetchNowPlayingMovies = () => {
  return async (dispatch) => {
    
    const results = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIEDBAPI}&language=en-US&page=1`)
    console.log(results);
  }
}
