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
    dispatch({
      type: actionTypes.FETCH_PEOPLE_CREDITS,
      payload: {
        currentPersonCredits: results.data
      }
    })
  }
}

export const fetchPeopleMovieCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_MOVIE_CREDITS,
      payload: {
        currentPersonMovieCredits: results.data
      }
    })
  }
}

export const fetchPeopleShowCredits = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${MOVIEDBAPI}&language=en-US`);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_SHOW_CREDITS,
      payload: {
        currentPersonShowCredits: results.data
      }
    })
  }
}

export const fetchPeopleImages = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=${MOVIEDBAPI}`);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_IMAGES,
      payload: {
        currentPersonImages: results.data.profiles
      }
    })
  }
}

export const fetchPeopleTaggedImages = id => {
  return async (dispatch) => {
    const results = await axios.get(`https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${MOVIEDBAPI}&language=en-US&page=1`);
    dispatch({
      type: actionTypes.FETCH_PEOPLE_TAGGED_IMAGES,
      payload: {
        currentPersonTaggedImages: results.data.results
      }
    })
  }
}