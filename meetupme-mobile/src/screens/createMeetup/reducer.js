import {
  CREATE_MEETUP,
  CREATE_MEETUP_ERROR,
  CREATE_MEETUP_SUCCESS,
} from './actions';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MEETUP:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_MEETUP_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_MEETUP_ERROR:
      return {
        error: {
          on: true,
          message: 'Error happen!',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
