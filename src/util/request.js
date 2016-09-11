import axios from 'axios';

export default (endpoint, data = {}) => {
  const requestObj = {
    method: endpoint.method,
    url: `http://127.0.0.1:8000/api/${endpoint.url}`
  };

  if (endpoint.method === 'get') {
    requestObj.params = data;
  } else {
    requestObj.data = data;
  }

  return axios(requestObj)
    .then(result => {
      return result.data;
    })
    .catch(e => {
      console.log('REQUEST ERROR', e);
      return {};
    });
};
