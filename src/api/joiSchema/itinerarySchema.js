import Joi from 'joi';

export default {
  id: Joi.number().integer().positive(),
  userId: Joi.number().integer().positive(),
  name: Joi.string().max(255),
  status: Joi.string().max(255),
  startDate: Joi.string().max(255),
  endDate: Joi.string().max(255),
  note: Joi.string()
};
