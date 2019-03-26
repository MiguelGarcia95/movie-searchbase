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

export const fetchPeopleCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${MOVIEDBAPI}&language=en-US`);
    console.log(results.data);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_CREDITS,
      payload: {
        currentPersonCredits: []
      }
    })
  }
}

export const fetchPeopleMovieCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${MOVIEDBAPI}&language=en-US`);
    console.log(results.data);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_MOVIE_CREDITS,
      payload: {
        currentPersonMovieCredits: []
      }
    })
  }
}

export const fetchPeopleShowCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${MOVIEDBAPI}&language=en-US`);
    console.log(results.data);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_SHOW_CREDITS,
      payload: {
        currentPersonShowCredits: []
      }
    })
  }
}

export const fetchPeopleImages = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=${MOVIEDBAPI}`);
    console.log(results);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_IMAGES,
      payload: {
        currentPersonImages: []
      }
    })
  }
}

export const fetchPeopleTaggedImages = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    console.log(results);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_TAGGED_IMAGES,
      payload: {
        currentPersonImages: []
      }
    })
  }
}