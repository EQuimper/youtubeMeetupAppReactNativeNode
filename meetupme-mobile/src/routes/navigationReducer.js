import { router } from './AppNavigator';

export default function navigationReducer(state, action) {
  const newState = router.getStateForAction(action, state);
  return newState || state;
}
