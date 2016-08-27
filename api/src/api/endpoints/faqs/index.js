import express from 'express';
import endpointLoader from '../../util/endpointLoader';

const router = express.Router();
router.get('/user', endpointLoader('faqs/getUserFaqs'));

router.get('/', endpointLoader('faqs/getFaq'));
router.post('/', endpointLoader('faqs/createFaq'));
router.put('/', endpointLoader('faqs/updateFaq'));
router.delete('/', endpointLoader('faqs/deleteFaq'));

// router.update('/', endpointLoader('faq/updateFaq'));
// router.delete('/', endpointLoader('faqs/deleteFaq'));

router.post('/sections', endpointLoader('faqs/createFaqSection'));
router.put('/sections', endpointLoader('faqs/updateFaqSection'));
router.delete('/sections', endpointLoader('faqs/deleteFaqSection'));

router.post('/questions', endpointLoader('faqs/createFaqQuestion'));
router.put('/questions', endpointLoader('faqs/updateFaqQuestion'));
router.delete('/questions', endpointLoader('faqs/deleteFaqQuestion'));


// router.post('/section', endpointLoader('faq/createFaqSection'));
// router.update('/section', endpointLoader('faq/updateFaqSection'));
// router.delete('/section', endpointLoader('faq/deleteFaqSection'));

// router.post('/section/question', endpointLoader('faq/createFaqQuestion'));
// router.update('/section/question', endpointLoader('faq/updateFaqQuestion'));
// router.delete('/section/question', endpointLoader('faq/deleteFaqQuestion'));

export default router;
