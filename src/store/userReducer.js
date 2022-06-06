import { FETCH_USER } from './types';

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
