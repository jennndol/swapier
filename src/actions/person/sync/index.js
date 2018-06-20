import {
  GET_PERSON_ERROR,
  GET_PERSON_LOADING,
  GET_PERSON_DETAIL
} from '../../../actionTypes';

export const setError = (payload) => {
  return {
    type: GET_PERSON_ERROR,
    payload
  };
};

export const setLoading = (payload) => {
  return {
    type: GET_PERSON_LOADING,
    payload
  };
};

export const setDetail = (payload) => {
  return {
    type: GET_PERSON_DETAIL,
    payload
  };
};
