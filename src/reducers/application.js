const initialState = {
  user: {},
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.localStorage.userId = action.data.id;
      return Object.assign({}, state, {
        user: action.data,
        loggedIn: true
      });
    case 'SIGNUP':
      return Object.assign({}, state, {
        user: action.data,
        loggedIn: true
      });
    case 'SIGNUP__ERROR':
      delete window.localStorage.userId;
      return Object.assign({}, state, {
        user: {},
        loggedIn: false
      });
    case 'LOGOUT':
      delete window.localStorage.userId;
      return Object.assign({}, state, {
        user: {},
        loggedIn: false
      });
    default:
      return state;
  }
};
