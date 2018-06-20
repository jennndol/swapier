import axios from 'axios';
import {
  setError,
  setLoading,
  setDetail
} from '../sync';

export const getPerson = (url, id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return axios.get(url + id)
      .then(payload => {
        dispatch(setLoading(false));
        dispatch(setDetail(payload.data));
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
