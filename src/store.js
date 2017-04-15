import _ from 'lodash';
import Debug from 'debug';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {logger} from './middleware';

const debug = Debug('Store');

export default (history, initialState) => {
  const reducer = combineReducers(_.merge({
    routing: routerReducer
  }, reducers));

  debug('INITIAL STATE: ', initialState);
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // routing
        thunk, // async function actions
        logger // outputs action data (DEBUG=DISPATCH)
      )
    )
  );

  return store;
};
