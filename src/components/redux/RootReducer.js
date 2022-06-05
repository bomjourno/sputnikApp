import { combineReducers } from 'redux';
import { followersReducer } from './followersReducer';
import { profileReducer } from './profileReducer';
import { uiReducer } from './uiReducer';

export const RootReducer = combineReducers({
  followers: followersReducer,
  loading: uiReducer,
  profile: profileReducer,
});
