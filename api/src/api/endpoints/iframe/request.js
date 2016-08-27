import {
  isValid,
} from '../../util';
import {
  urlSchema
} from '../../joiSchema';
import request from 'request';

export default (context, input) => {
  return isValid(input, urlSchema, ['url'])
    .then(() => {
      return new Promise((resolve, reject) => {
        request(input.url, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            resolve(body);
          }

          reject(new Error('Invalid url'));
        });
      });
    });
};
