import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import getRoutes from './routes';

const initialState = {};

initialState.application = {
  user: {id: localStorage.userId},
  loggedIn: !!localStorage.userId
};

const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
