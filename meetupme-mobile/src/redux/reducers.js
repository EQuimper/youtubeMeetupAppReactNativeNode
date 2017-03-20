import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  CreateMeetupReducer
} from '../screens';

export default combineReducers({
  home: HomeReducer,
  createMeetup: CreateMeetupReducer,
  form
});
