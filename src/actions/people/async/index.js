import axios from 'axios';
import {
  setError,
  setLoading,
  setPeople
} from '../sync';

export const getPeople = (token) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return axios.get('https://swapi.co/api/people')
      .then(payload => {
        dispatch(setLoading(false));
        dispatch(setPeople(payload.data.results));
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
