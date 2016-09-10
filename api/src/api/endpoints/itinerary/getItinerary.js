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
      return DBQuery.getOne(
        context,
        'itinerary',
        {
          where: input,
          include: [{
            model: context.db.attraction
          }]
        }
      );
    })
    .then(itinerary => {
      itinerary.events = itinerary.attractions.map(attraction => {
        return {
          ...attraction.itineraryEvent,
          attractionId: attraction.id,
          ..._.omit(attraction, [
            'id',
            'createdAt',
            'updatedAt',
            'deletedAt',
            'itineraryEvent'
          ])
        };
      });

      return _.omit(itinerary, 'attractions');
    });
};
