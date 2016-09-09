import _ from 'lodash';
import moment from 'moment';
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
      // itinerary.events = itinerary.attractions.map(attraction => {
      //   return {
      //     ...attraction.itineraryAttraction,
      //     attraction: {
      //       ..._.omit(attraction, [
      //         'createdAt',
      //         'updatedAt',
      //         'deletedAt',
      //         'itineraryAttraction'
      //       ])
      //     }
      //   };
      // });

      // Create schedule object with all days of itinerary
      itinerary.schedule = {};
      const endDate = moment(itinerary.endDate);
      let currentDate = moment(itinerary.startDate);

      while (!currentDate.isAfter(endDate)) {
        itinerary.schedule[currentDate.format('YYYY-MM-DD')] = [];
        currentDate = currentDate.add(1, 'days');
      }

      itinerary.attractions.forEach(attraction => {
        const event = {
          ...attraction.itineraryAttraction,
          attractionId: attraction.id,
          ..._.omit(attraction, [
            'id',
            'createdAt',
            'updatedAt',
            'deletedAt',
            'itineraryAttraction'
          ])
        };
        const eventStartDate = moment(event.startDate).format('YYYY-MM-DD');
        const eventEndDate = moment(event.endDate).format('YYYY-MM-DD');
        console.log(itinerary.schedule);
        console.log(eventStartDate);
        itinerary.schedule[eventStartDate].push(event);

        if (eventEndDate !== eventStartDate) {
          itinerary.schedule[eventEndDate].push(event);
        }
      });

      return _.omit(itinerary, 'attractions');
    });
};
