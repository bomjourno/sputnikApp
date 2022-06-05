import { combineReducers } from 'redux';
import { followersReducer } from './followersReducer';
import { profileReducer } from './profileReducer';
import { reposReducer } from './reposReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  followers: followersReducer,
  loading: uiReducer,
  profile: profileReducer,
  repos: reposReducer,
});
