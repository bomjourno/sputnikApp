import { combineReducers } from 'redux';
import { followersReducer } from './followersReducer';
import { userReducer } from './userReducer';
import { reposReducer } from './reposReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  followers: followersReducer,
  loading: uiReducer,
  user: userReducer,
  repos: reposReducer,
});
