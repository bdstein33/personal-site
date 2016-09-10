/* Wraps input submitted to API into payload object and returns output from promisified controller function */
import _ from 'lodash';
import plain from './plain';

function objectToString(obj) {
  const output = [];

  for (const key in obj) {
    output.push(`${key} ${obj[key]}`);
  }

  return output.join(' and ');
}

function formatModelName(model) {
  return model.charAt(0).toUpperCase() + model.split(/(?=[A-Z])/).join(' ').slice(1).toLowerCase();
}

export default {
  /**
   * Returns formatted results from sequelize query
   * @param  {Context} context
   * @param  {String} model
   * @param  {Object} options (scope, where, limit, etc.)
   * @return {Promise.<Object[]>}
   */
  getOne: (context, model, options) => {
    const queryOptions = _.defaults(options, {
      transaction: context.transaction,
      sequelizeObject: false,
      error: null,
      scope: null
    });

    return new Promise(resolve => {
      if (options.scope) {
        resolve(context.db[model].scope(queryOptions.scope).findOne(_.omit(queryOptions, 'scope', 'sequelizeObject', 'error')));
      } else {
        resolve(context.db[model].findOne(_.omit(queryOptions, 'scope', 'sequelizeObject', 'error')));
      }
    }).then(result => {
      return new Promise((resolve, reject) => {
        if (!result && queryOptions.error === 'DoesNotExist') {
          reject(new Error(`${formatModelName(model)} with ${objectToString(queryOptions.where)} does not exist`));
        } else if (result && queryOptions.error === 'AlreadyExists') {
          reject(new Error(`${formatModelName(model)} with ${objectToString(queryOptions.where)} already exists`));
        } else if (result && !queryOptions.sequelizeObject) {
          resolve(plain(result));
        } else {
          resolve(result || null);
        }
      });
    });
  },

  /**
   * Returns formatted results from sequelize query
   * @param  {Context} context
   * @param  {String} model
   * @param  {Object} options (scope, where, limit, etc.)
   * @return {Promise.<Array[]>}
   */
  getAll: (context, model, options) => {
    const queryOptions = _.defaults(options, {
      transaction: context.transaction,
      sequelizeObject: false,
      error: null,
      scope: null
    });

    return new Promise(resolve => {
      if (options.scope) {
        resolve(context.db[model].scope(queryOptions.scope).findAll(_.omit(queryOptions, 'scope', 'sequelizeObject')));
      } else {
        resolve(context.db[model].findAll(_.omit(queryOptions, 'scope', 'sequelizeObject', 'error')));
      }
    }).then(result => {
      return new Promise(resolve => {
        if (!queryOptions.sequelizeObject) {
          result = result.map(object => {
            return plain(object, queryOptions.obfuscate);
          });
        }
        resolve(result);
      });
    });
  }
};
