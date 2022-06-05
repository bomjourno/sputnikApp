import { api } from '../../service/Api';
import {
  FETCH_FOLLOWERS,
  ON_REQUEST,
  ON_ERROR,
  FETCH_USER,
  FETCH_REPOS,
} from './types';

export function fetchFollowers() {
  return async dispatch => {
    dispatch({ type: ON_REQUEST });
    const response = await api.getFollowers();
    if (response.request.status === 200) {
      const json = await response.data;
      dispatch({ type: FETCH_FOLLOWERS, payload: json });
      return;
    }
    dispatch({ type: ON_ERROR, payload: response.error });
  };
}

export function fetchRepos() {
  return async dispatch => {
    dispatch({ type: ON_REQUEST });
    const response = await api.getRepos();
    console.log(response);
    if (response.request.status === 200) {
      const json = await response.data;
      dispatch({ type: FETCH_REPOS, payload: json });
      return;
    }
    dispatch({ type: ON_ERROR, payload: response.error });
  };
}

export function fetchProfile() {
  return async dispatch => {
    dispatch({ type: ON_REQUEST });
    const response = api.getUserData();
    if (response) {
      const json = await response.json();
      dispatch({ type: FETCH_USER, payload: json });
      return;
    }
    dispatch({ type: ON_ERROR, payload: response.error });
  };
}
