import {
  combineReducers
} from 'redux';

import {
  GET_PEOPLE_ERROR,
  GET_PEOPLE_LOADING,
  GET_PEOPLE_SUCCESS
} from '../../actionTypes';

export const setError = (state = null, action) => {
  switch (action.type) {
    case GET_PEOPLE_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const setLoading = (state = false, action) => {
  switch (action.type) {
    case GET_PEOPLE_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const setPeople = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
