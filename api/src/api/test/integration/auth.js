import {expect} from 'chai';
import {db} from '../../../db';
import _ from 'lodash';
// import cit from '../util/cit';
import randomString from '../../util/randomString';

import logIn from '../../endpoints/auth/logIn';
import signUp from '../../endpoints/auth/signUp';

describe ('Auth', () => {
  let testUser;

  beforeEach(() => {
    testUser = {
      firstName: randomString(8),
      lastName: randomString(10),
      email: `${randomString(8)}@gmail.com`,
      password: randomString(10)

    }
  })


  describe('signUp', () => {
    it('should reject unknown field', () => {
      console.log(db);
      return db.sequelize.transaction(transaction => {
        const context = {transaction};
        return signUp(context, _.merge(testUser, {badField: 'bad'}))
          .catch(err => {
            console.log(err);
            return 'HELLO'
          })
      })
 
    });

    // cit('should require required field', () => {
    //   expect(true).to.equal(true);
    // });

    // cit('should create and return user', () => {
    //   expect(true).to.equal(true);
    // });
  });
});

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       [1,2,3].indexOf(5).should.equal(-1);
//       [1,2,3].indexOf(0).should.equal(-1);
//     });
//   });
// });