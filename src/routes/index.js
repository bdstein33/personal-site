import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {filter} from 'lodash';

import App from '../components/App';
import Index from '../components/pages/Index';

import userActions from '../actions/user';

// Routes
import reference from './reference';
import test from './test';

const routes = {
  reference,
  test
};

export default (store) => {
  function requireAuth(nextState, replaceState, callback) {
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
      <Route onEnter={requireAuth}>
        {
          filter(routes, (route, data) => data.requireAuth)
            .map(routeConfig =>
              <Route
                {...routeConfig}
                key={`route-${routeConfig.path}`}
              />
            )
        }
      </Route>
      {
        filter(routes, (route, data) => !data.requireAuth)
          .map(routeConfig =>
            <Route
              {...routeConfig}
              key={`route-${routeConfig.path}`}
            />
          )
      }
    </Route>
  );
};
