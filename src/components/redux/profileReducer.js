import { FETCH_USER } from './types';

const initialState = {
  profile: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};
