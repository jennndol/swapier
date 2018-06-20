import {
  combineReducers
} from 'redux';

import {
  GET_PEOPLE_ERROR,
  GET_PEOPLE_LOADING,
  GET_PEOPLE_RESULTS,
  GET_PEOPLE_COUNT,
  GET_PEOPLE_NEXT,
  GET_PEOPLE_PREVIOUS
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

export const results = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE_RESULTS:
      return action.payload.results;
    default:
      return state;
  }
};

export const count = (state = 0, action) => {
  switch (action.type) {
    case GET_PEOPLE_COUNT:
      return action.payload.count;
    default:
      return state;
  }
};

export const next = (state = null, action) => {
  switch (action.type) {
    case GET_PEOPLE_NEXT:
      return action.payload.next;
    default:
      return state;
  }
};

export const previous = (state = null, action) => {
  switch (action.type) {
    case GET_PEOPLE_PREVIOUS:
      return action.payload.previous;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  loading,
  results,
  next,
  previous,
  count
});
