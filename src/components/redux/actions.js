import api from '../../utils/Api';
import {
  FETCH_FOLLOWERS,
  FETCH_FOLLOWERS_ON_REQUEST,
  FETCH_FOLLOWERS_ON_ERROR,
  FETCH_USER,
} from './types';

export function fetchFollowers() {
  return async dispatch => {
    dispatch({ type: FETCH_FOLLOWERS_ON_REQUEST });
    const response = await api.getFollowers();
    if (response.request.status === 200) {
      const json = await response.data;
      dispatch({ type: FETCH_FOLLOWERS, payload: json });
      return;
    }
    dispatch({ type: FETCH_FOLLOWERS_ON_ERROR, payload: response.error });
  };
}

export function fetchProfile() {
  return async dispatch => {
    dispatch({ type: FETCH_USER });
    const response = api.getUserData();
    if (response) {
      const json = await response.json();
      dispatch({ type: FETCH_USER, payload: json });
      return;
    }
    // dispatch({ type: FETCH_FOLLOWERS_ON_ERROR, payload: response.error });
  };
}
