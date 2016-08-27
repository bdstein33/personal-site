import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Index from './components/pages/Index';
import Test from './components/pages/Test';
import Reference from './components/pages/Reference';

import userActions from './actions/user';

export default (store) => {
  function requireLogin(nextState, replaceState, callback) {
    function checkAuth() {
      // If user does not exist in store, return to index page
      if (!store.getState().application.user.id) {
        replaceState(null, '/');
      }
      return callback();
    }
    return checkAuth();
  }

  function getUserData(nextState, replaceState, callback) {
    if (store.getState().application.user.id) {
      return userActions.getUser({id: store.getState().application.user.id})(store.dispatch)
        .then(() => {
          callback();
        });
    }
    callback();
  }

  return (
    <Route path='/' component={App} onEnter={getUserData}>
      <IndexRoute component={Index}/>
      <Route onEnter={requireLogin}>
        <Route path='/test' component={Test}/>
        <Route path='/reference' component={Reference}/>
      </Route>
      <Route path='/test' component={Test}/>
      <Route path='/reference' component={Reference}/>
    </Route>
  );
};
