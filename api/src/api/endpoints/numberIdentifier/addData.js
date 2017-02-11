import Joi from 'joi';
import {
  isValid,
} from '../../util';

export default async (context, input) => {
  await isValid(input, {
    image: Joi.string().required(),
    value: Joi.number().min(0).max(9)
  });

  return context.db.numberTrainingData.create({
    image: input.image,
    value: input.value
  }, {transaction: context.transaction});
};
