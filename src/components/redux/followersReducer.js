import { FETCH_FOLLOWERS } from './types';

const initialState = {
  fetchedFollowers: [],
};

export const followersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS:
      return { ...state, fetchedFollowers: action.payload };

    default:
      return state;
  }
};
