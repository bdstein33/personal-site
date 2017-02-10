require('localenv');

const path = require('path');

require('babel-register')({
  only: [
    __dirname,
    path.resolve(__dirname, './db'),
    path.resolve(__dirname, './api')
  ]
});

require('babel-polyfill');

const Debug = require('debug');
Debug.enable(process.env.DEBUG);

const db = require('./db');
db.sequelize.sync().then(() => {
  require('./server');
});
