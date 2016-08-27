import Joi from 'joi';

export default {
  id: Joi.number().integer().positive(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().min(7).max(32),
  password: Joi.string().min(7).max(32)
};
