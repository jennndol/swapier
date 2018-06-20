import axios from 'axios';
import {
  setError,
  setLoading,
  setResults,
  setCount,
  setNext,
  setPrevious
} from '../sync';

export const getPeople = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return axios.get(url)
      .then(payload => {
        dispatch(setLoading(false));
        dispatch(setResults(payload.data));
        dispatch(setCount(payload.data));
        dispatch(setNext(payload.data));
        dispatch(setPrevious(payload.data));
        dispatch(setError(null));
      })
      .catch(err => {
        if (err.response) {
          dispatch(setError(err.response.data.message))
          dispatch(setLoading(false));
        } else {
          dispatch(setError(err.message));
          dispatch(setLoading(false));
        }
      });
  }
}
