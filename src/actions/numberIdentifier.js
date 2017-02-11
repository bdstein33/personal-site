import {actionCreator} from '../util';

export default {
  submitNumberImage: data => {
    return actionCreator('SUBMIT_NUMBER_IMAGE', data, {
      request: {
        url: 'http://localhost:5000/api/num_identifier',
        method: 'post'
      }
    });
  }
};
