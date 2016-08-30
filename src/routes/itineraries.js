import Itineraries from '../components/pages/Itineraries';
import {getUserItineraries} from '../actions/itinerary';

export default {
  path: '/itineraries',
  component: Itineraries,
  requireAuth: true,
  action: (store, payload) => {
    return getUserItineraries(payload)(store.dispatch);
  }
};
