import * as actionTypes from '../actions/types';

const initialState = {
  currentPerson: null
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return {
        ...state,
        currentPerson: action.payload.currentPerson
      }
    default:
      return state;
  }
}

export default peopleReducer;
