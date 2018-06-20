import {
  combineReducers
} from 'redux';

import {
  GET_PERSON_ERROR,
  GET_PERSON_LOADING,
  GET_PERSON_DETAIL
} from '../../actionTypes';

export const error = (state = null, action) => {
  switch (action.type) {
    case GET_PERSON_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case GET_PERSON_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const detail = (state = {}, action) => {
  switch (action.type) {
    case GET_PERSON_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  loading,
  detail
});
