import {
  FETCH_FOLLOWERS,
  FETCH_FOLLOWERS_ON_ERROR,
  FETCH_FOLLOWERS_ON_REQUEST,
} from './types';

const initialState = {
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS_ON_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOLLOWERS:
    case FETCH_FOLLOWERS_ON_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
