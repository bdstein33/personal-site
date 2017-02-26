import _ from 'lodash';
import {
  itinerarySchema
} from '../../joiSchema';
import {
  isValid,
  plain
} from '../../util';

export default (context, input) => {
  return isValid(
    input,
    itinerarySchema,
    ['name', 'userId', 'startDate', 'endDate'],
    ['id']
  )
    .then(() => {
      return context.db.itinerary.create(_.omit(input, ['note']));
    })
    .then(createdItinerary => {
      return plain(createdItinerary);
    });
};
