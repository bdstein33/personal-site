import bcrypt from 'bcrypt';
import promisify from 'es6-promisify';

/**
 * Returns hashed password
 * @return {Promise.<Object[], Object|Error>}
 */
export default {
  hash: password => {
    return promisify(bcrypt.genSalt)(10)
      .then(salt => {
        return promisify(bcrypt.hash)(password, salt)
          .then(hash => {
            return Promise.resolve(hash);
          });
      }).catch(error => {
        return Promise.reject(new Error(error));
      });
  },

  check: (password, hash) => {
    return promisify(bcrypt.compare)(password, hash)
      .then(result => {
        return Promise.resolve(result);
      }).catch(error => {
        return Promise.reject(new Error(error));
      });
  }
};
