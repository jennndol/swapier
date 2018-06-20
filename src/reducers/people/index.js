import {
  combineReducers
} from 'redux';

import {
  GET_PEOPLE_ERROR,
  GET_PEOPLE_LOADING,
  GET_PEOPLE_SUCCESS
} from '../../actionTypes';

export const error = (state = null, action) => {
  switch (action.type) {
    case GET_PEOPLE_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case GET_PEOPLE_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const people = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  loading,
  people
});
