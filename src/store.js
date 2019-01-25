import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';

import promise from 'redux-promise-middleware';
import rootReducer from 'reducers/RootReducer';
import thunk from 'redux-thunk';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger(); // eslint-disable-line no-unused-vars


const store = createStore(
  rootReducer,
  reduxDevTools(
    applyMiddleware(
      promise(),
      thunk
    )
  )
);

export default store;
