import {actionCreator} from '../util';

export default {
  submitNumberImage: data => {
    return actionCreator('SUBMIT_NUMBER_IMAGE', data, {
      request: {
        url: `${process.env.PYTHON_API_HOST}/num_identifier`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
  }
};
