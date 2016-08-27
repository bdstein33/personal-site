import Joi from 'joi';

export default {
  id: Joi.number().integer().positive().required()
};
