import _ from 'lodash';
// import moment from 'moment';
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
            },
            include: [{
              model: context.db.attraction
            }]
          }
        )
      ]);
    })
    .then(([itinerary, itineraryEvents]) => {
      itinerary.events = itineraryEvents.map(event => {
        return {
          ..._.omit(event, ['attraction']),
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
