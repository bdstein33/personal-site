import _ from 'lodash';
/**
 * Converts Sequelize object into simple object with dataValues
 * @param  {Sequelize Object} sequelizeObject
 * @return {Object} object
 */
export default (sequelizeObject) => {
  return _.omit(sequelizeObject.get({plain: true}), 'created_at', 'updated_at', 'deleted_at');
};

