require('localenv');

require('babel-register')({
  only: [__dirname]
});

require('babel-polyfill');

const Debug = require('debug');
Debug.enable(process.env.DEBUG);

require('./server');
