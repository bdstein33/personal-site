import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.get('/', endpointLoader('user/get'));

export default router;
