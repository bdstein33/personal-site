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
          ...attraction.itineraryAttraction,
          attraction: {
            ..._.omit(attraction, [
              'createdAt',
              'updatedAt',
              'deletedAt',
              'itineraryAttraction'
            ])
          }
        };
      });

      return _.omit(itinerary, 'attractions');
    });
};
