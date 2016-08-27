import {actionCreator} from '../util';

export default {
  getUser: (data) => {
    return actionCreator('SIGNUP', data, {
      request: {
        url: 'user',
        method: 'get'
      }
    });
  }
};
