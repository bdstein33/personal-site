import axios from 'axios';

export default (endpoint, data = {}) => {
  const requestObj = {
    method: endpoint.method,
    url: endpoint.url.indexOf('http') !== -1
          ? endpoint.url
          : `${process.env.API_HOST}/api/${endpoint.url}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  console.log(requestObj);

  if (endpoint.headers) {
    requestObj.headers = endpoint.headers;
  }

  if (endpoint.method.toLowerCase() === 'get') {
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
