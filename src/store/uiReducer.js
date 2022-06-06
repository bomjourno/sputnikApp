import { FETCH_USER, ON_ERROR, ON_REQUEST } from './types';

const initialState = {
  loading: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_REQUEST:
      return { ...state, loading: false };
    case FETCH_USER:
    case ON_ERROR:
      return { ...state, loading: true };
    default:
      return state;
  }
};
