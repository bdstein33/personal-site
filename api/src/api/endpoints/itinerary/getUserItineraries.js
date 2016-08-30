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
      return DBQuery.getAll(
        context,
        'itinerary',
        {
          where: {creatorId: input.id}
        }
      );
    });
};
