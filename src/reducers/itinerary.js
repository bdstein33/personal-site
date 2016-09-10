import _ from 'lodash';
import moment from 'moment';
const initialState = {
  itineraries: [],
  itineraryProfile: {}
};

function createItinerarySchedule(itinerary) {
  const schedule = {};
  const endDate = moment(itinerary.endDate);
  let currentDate = moment(itinerary.startDate);

  while (!currentDate.isAfter(endDate)) {
    schedule[currentDate.format('YYYY-MM-DD')] = [];
    currentDate = currentDate.add(1, 'days');
  }

  itinerary.events.forEach(event => {
    const eventStartDate = moment(event.startDate).format('YYYY-MM-DD');
    const eventEndDate = moment(event.endDate).format('YYYY-MM-DD');
    schedule[eventStartDate].push(event);

    if (eventEndDate !== eventStartDate) {
      schedule[eventEndDate].push(event);
    }
  });

  return schedule;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITINERARIES':
      return Object.assign({}, state, {
        itineraries: action.data
      });
    case 'GET_ITINERARY': {
      const itinerary = action.data;
      itinerary.schedule = createItinerarySchedule(itinerary);

      return Object.assign({}, state, {
        itineraryProfile: itinerary
      });
    }
    case 'UPDATE_ITINERARY_EVENT_DATE': {
      // const test = _.findIndex(itinerary.attractions, attraction => attraction.id === 1);
      // itinerary.attractions[test].name = 'Hello';
      // console.log('PPP', itinerary);
      return state;
    }
    default:
      return state;
  }
};
