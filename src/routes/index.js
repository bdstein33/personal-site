import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {filter} from 'lodash';

import App from '../components/App';
import Index from '../components/pages/Index';

import userActions from '../actions/user';

// Routes
import attractions from './attractions';
import clients from './clients';
import itineraries from './itineraries';
import itineraryProfile from './itineraryProfile';
import reference from './reference';
import test from './test';

const routes = {
  attractions,
  clients,
  itineraries,
  itineraryProfile,
  reference,
  test
};

export default store => {
  function requireAuth(nextState, replace, callback) {
    function checkAuth() {
      // If user does not exist in store, return to index page
      if (!store.getState().application.user.id) {
        replace('/');
      }
      callback();
    }
    return checkAuth();
  }

  function getUserData(nextState, replace, callback) {
    if (store.getState().application.user.id) {
      return userActions.getUser({id: store.getState().application.user.id})(store.dispatch)
        .then(() => {
          callback();
        })
        // If user doesn't exist, log out and redirect to home page
        .catch(() => {
          replace('/');
        });
    }
    callback();
  }

  return (
    <Route path='/' component={App} onEnter={getUserData}>
      <IndexRoute component={Index}/>
      <Route onEnter={requireAuth}>
      {
        filter(routes, data => data.requireAuth)
          .map(routeConfig =>
            <Route
              {...routeConfig}
              key={`route-${routeConfig.path}`}
              onEnter={(nextState, replace, callback) => {
                if (routeConfig.action) {
                  return routeConfig.action(store, nextState)
                    .then(() => {
                      callback();
                    });
                }
                callback();
              }}
            />
          )
      }
      </Route>
      {
        filter(routes, data => !data.requireAuth)
          .map(routeConfig =>
            <Route
              {...routeConfig}
              key={`route-${routeConfig.path}`}
              // onEnter={() => routeConfig.onEnter(store)}
            />
          )
      }
    </Route>
  );
};
