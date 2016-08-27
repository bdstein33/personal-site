import _ from 'lodash';

/* Replaces all empty strings with null values */
export default function sanitizeInput(input) {
  for (const key in input) {
    if (input[key] === '') {
      input[key] = null;
    } else if (_.isPlainObject(input[key])) {
      input[key] = sanitizeInput(input[key]);
    }
  }

  return input;
}
