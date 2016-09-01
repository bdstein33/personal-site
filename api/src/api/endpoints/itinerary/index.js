import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.post('/', endpointLoader('itinerary/createItinerary'));
router.get('/', endpointLoader('itinerary/getItineraries'));
router.get('/:id', endpointLoader('itinerary/getItinerary'));

export default router;
