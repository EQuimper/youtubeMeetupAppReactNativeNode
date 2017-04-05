import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  HomeReducer,
  CreateMeetupReducer,
  UserReducer,
} from '../screens';
import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  createMeetup: CreateMeetupReducer,
  navigation,
  user: UserReducer,
  form,
});
