import {actionCreator, navigate} from '../util';

export default {
  signUp: (data) => {
    return actionCreator('SIGNUP', data, {
      request: {
        url: 'auth',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR'],
      navigate: '/'
    });
  },

  logIn: (data) => {
    return actionCreator('LOGIN', data, {
      request: {
        url: 'auth',
        method: 'get'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR'],
      navigate: '/'
    });
  },

  logOut: () => {
    return dispatch => {
      dispatch({type: 'LOGOUT'});
      navigate('/');
    };
  }
};
