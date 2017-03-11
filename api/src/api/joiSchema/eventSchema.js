import Joi from 'joi';

export default {
  id: Joi.number().integer().positive(),
  itineraryId: Joi.number().integer().positive(),
  startDate: Joi.date(),
  endDate: Joi.date(),
  status: Joi.number().integer().positive()
};
