import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.delete('/', endpointLoader('session/deleteSession'));
router.get('/', endpointLoader('session/getSession'));

export default router;
