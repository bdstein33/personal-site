import {
  idSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
} from '../../util';

export default (context, input) => {
  return isValid(input, idSchema)
    .then(() => {
      return DBQuery.getOne(
        context,
        'itinerary',
        {
          where: input
        }
      );
    });
};
