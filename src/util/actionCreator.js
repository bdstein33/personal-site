import request from './request';
import navigate from './navigate';

/**
 * Dispatches varous actions to help with lifecycle events and provides some additional functionality
 * @param  {String}    name              Primary action name
 * @param  {Object}    data              Data object to be used in actionFunc
 * @param  {Object}    options           Various options to provide additional functionality
 * @param  {Array}     options.success   Additional actions to be dispatched on success
 * @param  {Array}     options.error     Additional actions to be dispatched on error
 * @param  {Array}     options.navigate  Path to navigate to upon success
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
       } else {
         dispatch({type: `${name}`, data: result});
         if (options.success) {
           options.success.forEach(action => {
             dispatch({type: action, data: result});
           });
         }

         if (options.navigate) {
           navigate(options.navigate);
         }
       }
       return result;
     });
  };
};
