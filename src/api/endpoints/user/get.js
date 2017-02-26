import _ from 'lodash';
import {
  userSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid
} from '../../util';

export default (context, input) => {
  return isValid(input, userSchema, ['id'], ['password'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'user',
        {
          where: input,
          error: 'DoesNotExist'
        }
      );
    }).then(user => {
      return _.omit(user, 'password');
    });
};
