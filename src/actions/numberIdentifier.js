import {actionCreator} from '../util';

export default {
  submitNumberImage: data => {
    return actionCreator('SUBMIT_NUMBER_IMAGE', data, {
      request: {
        url: 'http://localhost:5000/num_identifier',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
  }
};
