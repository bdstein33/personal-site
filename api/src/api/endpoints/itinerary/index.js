import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.get('/user', endpointLoader('itinerary/getUserItineraries'));

export default router;
