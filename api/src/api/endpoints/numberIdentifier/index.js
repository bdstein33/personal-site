import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();

router.post('/', endpointLoader('numberIdentifier/addData'));


export default router;
