import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './actions';

const initialState = {
  isLogged: false,
  isLoading: false,
  token: null,
  info: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        token: action.token,
        info: action.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
