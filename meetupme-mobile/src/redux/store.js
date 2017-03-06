import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

const middlewares = [
  promiseMiddleware()
];

if (__DEV__) { // eslint-disable-line
  const logger = require('redux-logger');

  middlewares.push(logger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares))
);
