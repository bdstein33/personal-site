import {actionCreator} from '../util';

export default {
  getUserItineraries: (data) => {
    return actionCreator('GET_ITINERARIES', data, {
      request: {
        url: 'itinerary/user',
        method: 'get'
      }
    });
  }
};
