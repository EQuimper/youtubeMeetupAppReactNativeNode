import { combineReducers } from 'redux';

import {
  HomeReducer
} from '../screens';

export default combineReducers({
  home: HomeReducer
});
