import {
  idSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
} from '../../util';

export default (context, input) => {

      return DBQuery.getAll(
        context,
        'itinerary'
      );
};
