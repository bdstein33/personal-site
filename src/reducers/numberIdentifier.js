const initialState = {
  predictions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_NUMBER_IMAGE':
      return Object.assign({}, state, {
        prediction: action.data.prediction
      });
    default:
      return state;
  }
};
