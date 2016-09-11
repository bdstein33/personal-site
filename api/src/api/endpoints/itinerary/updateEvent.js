import {
  eventSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
} from '../../util';

export default (context, input) => {
  return isValid(input, eventSchema, ['id', 'itineraryId'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'itineraryEvent',
        {
          where: {
            id: input.id,
            itineraryId: input.itineraryId
          },
          error: 'DoesNotEixist',
          sequelizeObject: true
        }
      );
    })
    .then(event => {
      return event.update(input);
    });
};
