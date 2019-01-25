import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'config/config';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from 'pages/App';
import history from 'config/history';
import Login from 'pages/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/application" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
