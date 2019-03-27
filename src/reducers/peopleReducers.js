import * as actionTypes from '../actions/types';

const initialState = {
  currentPerson: null,
  currentPersonMovieCredits: null,
  currentPersonShowCredits: null,
  currentPersonCredits: null,
  currentPersonImages: [],
  currentPersonTaggedImages: []
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return {
        ...state,
        currentPerson: action.payload.currentPerson
      }
    case actionTypes.FETCH_PEOPLE_MOVIE_CREDITS:
      return {
        ...state,
        currentPersonMovieCredits: action.payload.currentPersonMovieCredits
      }
    case actionTypes.FETCH_PEOPLE_SHOW_CREDITS:
      return {
        ...state,
        currentPersonShowCredits: action.payload.currentPersonShowCredits
      }
    // case actionTypes.FETCH_PEOPLE_CREDITS:
    //   return {
    //     ...state,
    //     currentPersonCredits: action.payload.currentPersonCredits
    //   }
    case actionTypes.FETCH_PEOPLE_IMAGES:
      return {
        ...state,
        currentPersonImages: action.payload.currentPersonImages
      }
    case actionTypes.FETCH_PEOPLE_TAGGED_IMAGES:
      return {
        ...state,
        currentPersonTaggedImages: action.payload.currentPersonTaggedImages
      }
    default:
      return state;
  }
}

export default peopleReducer;

