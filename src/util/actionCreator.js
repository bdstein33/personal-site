import request from './request';
import navigate from './navigate';

/**
 * Dispatches varous actions to help with lifecycle events and provides some additional functionality
 * @param  {String}     name                  Primary action name
 * @param  {Object}     data                  Data object to be used in actionFunc
 * @param  {Object}     options               Various options to provide additional functionality
 * @param  {String}     options.url           API URL (internal)
 * @param  {String}     options.success       Additional actions to be dispatched on success
 * @param  {String}     options.error         Additional actions to be dispatched on error
 * @param  {String}     options.navigate      Path to navigate to upon success
 * @return {Promise.<result{}>}
 */
export default (name, data, options = {}) => {
  return dispatch => {
    dispatch({type: `${name}__START`});
    return request.call(this, options.request, data)
      .then(result => {
        if (result.error) {
          dispatch({type: `${name}__ERROR`, error: result.error});
          if (options.error) {
            options.error.forEach(action => {
              dispatch({type: action, data: result});
            });
          }

          return Promise.reject(result);
        }

        dispatch({type: `${name}`, data: result});
        if (options.success) {
          options.success.forEach(action => {
            dispatch({type: action, data: result});
          });
        }

        if (options.navigate) {
          // Replace variables beginning with a : with the value return in result
          const navigatePath = options.navigate.split('/').map(text => {
            return text[0] === ':' ? result[text.slice(1)] : text;
          }).join('/');

          navigate(navigatePath);
        }

        return result;
      });
  };
};
