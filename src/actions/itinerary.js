import {actionCreator} from '../util';

export default {
  getItineraries: data => {
    return actionCreator('GET_ITINERARIES', data, {
      request: {
        url: 'itinerary',
        method: 'get'
      }
    });
  },
  getItinerary: data => {
    return actionCreator('GET_ITINERARY', data, {
      request: {
        url: `itinerary/${data.id}`,
        method: 'get'
      }
    });
  },
  createItinerary: data => {
    return actionCreator('CREATE_ITINERARY', data, {
      request: {
        url: 'itinerary',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR'],
      navigate: '/itineraries/:id'
    });
  },
  updateEventDate: (id, minutes) => {
    return dispatch => {
      dispatch({type: 'UPDATE_ITINERARY_EVENT_DATE', id, minutes});
    };
  },
};
