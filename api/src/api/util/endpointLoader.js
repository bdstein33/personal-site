import _ from 'lodash';
import db from '../../db';
import sanitizeInput from './sanitizeInput';
import Debug from 'debug';

const debug = Debug('Error');

/* Wraps input submitted to API into payload object and returns output from promisified controller function */
export default controllerName => {
  return (req, res) => {
    const context = {db, session: req.session},
      endpoint = require(`../endpoints/${controllerName}`),
      input = _.merge(
        {},
        req.query,
        req.params,
        req.body
      ),
      sanatizedInput = sanitizeInput(_.cloneDeep(input));

    return new Promise(resolve => {
      resolve(db.sequelize.transaction(transaction => {
        context.transaction = transaction;
        return endpoint.call(null, context, sanatizedInput);
      }));
    }).then(output => {
      req.session.save();
      res.json(output);
    }).catch(error => {
      debug(error);
      res.json({error: error.message});
    });
  };
};
