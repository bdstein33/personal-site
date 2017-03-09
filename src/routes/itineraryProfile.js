import ItineraryProfile from '../components/pages/ItineraryProfile';
import {getItinerary} from '../actions/itinerary';

export default {
  path: '/itineraries/:id',
  component: ItineraryProfile,
  requireAuth: false,
  action: (store, nextState) => {
    return getItinerary({id: nextState.params.id})(store.dispatch);
  }
};
