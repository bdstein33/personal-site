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
      console.log(context.db.attraction);
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
    });
};
