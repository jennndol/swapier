import {
  GET_PEOPLE_ERROR,
  GET_PEOPLE_LOADING,
  GET_PEOPLE_RESULTS,
  GET_PEOPLE_COUNT,
  GET_PEOPLE_NEXT,
  GET_PEOPLE_PREVIOUS
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

export const setResults = (payload) => {
  return {
    type: GET_PEOPLE_RESULTS,
    payload
  };
};

export const setCount = (payload) => {
  return {
    type: GET_PEOPLE_COUNT,
    payload
  };
};

export const setNext = (payload) => {
  return {
    type: GET_PEOPLE_NEXT,
    payload
  };
};

export const setPrevious = (payload) => {
  return {
    type: GET_PEOPLE_PREVIOUS,
    payload
  };
};