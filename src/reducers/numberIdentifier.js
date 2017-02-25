const initialState = {
  predictions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_NUMBER_IMAGE':
      console.log(state);

      return Object.assign({}, state, {
        predictions: [action.data.prediction, ...state.predictions]
      });
    default:
      return state;
  }
};
