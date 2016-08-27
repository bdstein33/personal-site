import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Index from './components/pages/Index';
import Faq from './components/pages/Faq';
import Faqs from './components/pages/Faqs';
import Test from './components/pages/Test';
import Reference from './components/pages/Reference';

import faqActions from './actions/faq';
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


  function getFaqs(nextState, replaceState, callback) {
    return faqActions.getUserFaqs({id: store.getState().application.user.id})(store.dispatch)
      .then(() => {
        if (callback) {
          callback();
        }
      });
  }

  function getFaq(nextState, replaceState, callback) {
    return faqActions.getFaq({id: nextState.params.id, userId: store.getState().application.user.id})(store.dispatch)
      .then(() => {
        if (callback) {
          callback();
        }
      });
  }

  return (
    <Route path='/' component={App} onEnter={getUserData}>
      <IndexRoute component={Index}/>
      <Route onEnter={requireLogin}>
        <Route path='/faqs' component={Faqs} onEnter={getFaqs} />
        <Route path='/faqs/:id' component={Faq} onEnter={getFaq} />
      </Route>
      <Route path='/test' component={Test}/>
      <Route path='/reference' component={Reference}/>
    </Route>
  );
};
