import Itineraries from '../components/pages/Itineraries';
import {getItineraries} from '../actions/itinerary';

export default {
  path: '/itineraries',
  component: Itineraries,
  requireAuth: true,
  action: store => {
    return getItineraries({userId: store.getState().application.user.id})(store.dispatch);
  }
};
