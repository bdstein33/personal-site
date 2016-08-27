import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.get('/', endpointLoader('iframe/request'));

export default router;
