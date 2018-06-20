import {
  GET_PEOPLE_ERROR,
  GET_PEOPLE_LOADING,
  GET_PEOPLE_SUCCESS
} from '../../../actionTypes';

export const setError = (payload) => {
  return {
    type: GET_PEOPLE_ERROR,
    payload
  };
};

export const setLoading = (payload) => {
  return {
    type: GET_PEOPLE_LOADING,
    payload
  };
};

export const setPeople = (payload) => {
  return {
    type: GET_PEOPLE_SUCCESS,
    payload
  };
};
