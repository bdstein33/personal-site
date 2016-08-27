import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import promisify from 'es6-promisify';
import _ from 'lodash';
import Debug from 'debug';

const debug = Debug('Models');

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
  }
);

const db = {};

const importModel = (fileName) => {
  try {
    const model = sequelize.import(path.join(__dirname, 'models', fileName));
    db[model.name] = model;
  } catch (error) {
    debug(error);
  }
};

const associateModel = (model, modelName) => {
  if ('associate' in db[modelName]) {
    return db[modelName].associate(db);
  }
};

const combineModels = promisify(fs.readdir);

debug('Begin importing');

combineModels(path.join(__dirname, 'models'))
  .then(files => {
    _.forEach(files, importModel);
    _.forEach(db, associateModel);
    return db;
  });

db.sequelize = sequelize;
export default db;
