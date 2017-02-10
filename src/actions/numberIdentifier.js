import {actionCreator} from '../util';

export default {
  submitNumberImage: data => {
    return actionCreator('SUBMIT_NUMBER_IMAGE', data, {
      request: {
        url: 'num_identifier',
        method: 'post'
      }
    });
  }
};
