import Joi from 'joi';
import faqSectionSchema from './faqSectionSchema';

export default {
  id: Joi.number().integer().positive(),
  userId: Joi.number().integer().positive(),
  name: Joi.string(),
  sections: Joi.array().items(faqSectionSchema)
};
