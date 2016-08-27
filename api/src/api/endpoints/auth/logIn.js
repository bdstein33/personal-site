import _ from 'lodash';
import {
  userSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  PasswordEncryptor
} from '../../util';

export default (context, input) => {
  return isValid(input, userSchema, ['email', 'password'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'user',
        {
          where: {email: input.email},
          error: 'DoesNotExist'
        }
      );
    }).then(user => {
      return PasswordEncryptor.check(input.password, user.password)
        .then(result => {
          if (!result) {
            return Promise.reject(new Error('Invalid login credentials'));
          }

          user = _.omit(user, 'password');

          // Add user to session
          _.merge(context.session, {user});
          return user;
        });
    });
};
