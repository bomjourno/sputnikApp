import { FETCH_REPOS } from './types';

const initialState = {
  repos: [],
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return { ...state, repos: action.payload };

    default:
      return state;
  }
};
