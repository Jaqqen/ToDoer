import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleWare';
import reducer from 'reducers/mainReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);
