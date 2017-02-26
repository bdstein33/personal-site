global.chai = require('chai');

require('babel-core/register');
const db = require('../../../db');

db.sequelize.sync();

