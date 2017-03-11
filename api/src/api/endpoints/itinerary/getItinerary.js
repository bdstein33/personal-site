import _ from 'lodash';
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
      return Promise.all([
        DBQuery.getOne(
          context,
          'itinerary',
          {
            where: input
          }
        ),
        DBQuery.getAll(
          context,
          'itineraryEvent',
          {
            where: {
              itineraryId: input.id
            }
          }
        )
      ]);
    })
    .then(([itinerary, itineraryEvents]) => {
      itinerary.events = itineraryEvents.map(event => {
        return {
          ..._.omit(event.attraction, [
            'id',
            'createdAt',
            'updatedAt',
            'deletedAt'
          ])
        };
      });

      return _.omit(itinerary, 'attractions');
    });
};
