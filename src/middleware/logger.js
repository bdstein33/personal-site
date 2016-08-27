import Debug from 'debug';
const debug = Debug('DISPATCH');

export default store => next => action => {
  debug('Action', action);
  const result = next(action);
  debug('Next State', store.getState());
  return result;
};

