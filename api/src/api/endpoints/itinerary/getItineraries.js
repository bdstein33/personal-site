import {
  idSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
} from '../../util';

export default (context, input) => {
  return isValid(input, {userId: idSchema.id})
    .then(() => {
      return DBQuery.getAll(
        context,
        'itinerary',
        {
          where: input
        }
      );
    });
};
