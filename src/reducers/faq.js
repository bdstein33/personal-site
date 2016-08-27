const initialState = {
  userFaqs: [],
  faq: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_FAQS':
      return Object.assign({}, state, {
        userFaqs: action.data
      });
    case 'GET_FAQ':
      return Object.assign({}, state, {
        faq: action.data
      });
    default:
      return state;
  }
};
