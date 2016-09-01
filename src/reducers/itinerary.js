const initialState = {
  itineraries: [],
  itineraryProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITINERARIES':
      return Object.assign({}, state, {
        itineraries: action.data
      });
    case 'GET_ITINERARY':
      return Object.assign({}, state, {
        itineraryProfile: action.data
      });
    default:
      return state;
  }
};
