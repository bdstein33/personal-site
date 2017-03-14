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
      itinerary.events = itineraryEvents
      return itinerary;
    });
};
